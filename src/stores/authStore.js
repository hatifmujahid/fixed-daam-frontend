import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  login: (userData, token) => {
    const user = {
      ...userData,
      storeName: userData.storeName ?? (userData.role === "merchant" ? "My Store" : undefined),
    };
    set({ user, token, isAuthenticated: true });
  },
  logout: () =>
    set({ user: null, token: null, isAuthenticated: false }),
  setStoreName: (storeName) =>
    set((state) => ({
      user: state.user ? { ...state.user, storeName } : null,
    })),
}));
