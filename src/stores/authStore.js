import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import Cookies from "js-cookie";

const COOKIE_NAME = "fixeddaam-session";
const COOKIE_OPTIONS = {
  expires: 7,
  sameSite: "Strict",
  secure: window.location.protocol === "https:",
};

const cookieStorage = createJSONStorage(() => ({
  getItem: (name) => Cookies.get(name) ?? null,
  setItem: (name, value) => Cookies.set(name, value, COOKIE_OPTIONS),
  removeItem: (name) => Cookies.remove(name),
}));

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      accessToken: null, // in-memory only — not persisted, restored via silent refresh on reload

      login: (userData, accessToken) => {
        const user = {
          ...userData,
          storeName:
            userData.storeName ??
            (userData.role === "merchant" ? (userData.name ?? "My Store") : undefined),
        };
        set({ user, isAuthenticated: true, accessToken: accessToken ?? null });
      },

      logout: async () => {
        const base = import.meta.env.VITE_API_BASE_URL || "";
        fetch(`${base}/v1/auth/logout`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }).catch(() => {});
        Object.keys(Cookies.get()).forEach((name) => Cookies.remove(name));
        set({ user: null, isAuthenticated: false, accessToken: null });
      },

      setAccessToken: (token) => set({ accessToken: token }),

      setStoreName: (storeName) =>
        set((state) => ({
          user: state.user ? { ...state.user, storeName } : null,
        })),

      updateUser: (userData) =>
        set((state) => {
          if (!state.user) return {};
          const merged = { ...state.user, ...userData };
          if (state.user.role === "merchant" && userData.name) {
            merged.storeName = userData.name;
          }
          return { user: merged };
        }),
    }),
    {
      name: COOKIE_NAME,
      storage: cookieStorage,
      // Only persist session identity — accessToken is in-memory and restored on reload via /auth/refresh-tokens
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    }
  )
);
