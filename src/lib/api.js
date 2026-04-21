import axios from "axios";
import { useAuthStore } from "@/stores/authStore";

const baseURL = import.meta.env.VITE_API_BASE_URL || "";

export const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// Attach access token as Authorization header on every request
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

let isRefreshing = false;
let waitQueue = [];

const flushQueue = (error) => {
  waitQueue.forEach((cb) => (error ? cb.reject(error) : cb.resolve()));
  waitQueue = [];
};

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;
    const isRefreshCall = original?.url?.includes("/auth/refresh-tokens");
    const isLogoutCall = original?.url?.includes("/auth/logout");

    if (error.response?.status === 401 && !original._retry && !isRefreshCall && !isLogoutCall) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          waitQueue.push({ resolve, reject });
        })
          .then(() => api(original))
          .catch((err) => Promise.reject(err));
      }

      original._retry = true;
      isRefreshing = true;

      try {
        const refreshRes = await api.post("/v1/auth/refresh-tokens");
        useAuthStore.getState().setAccessToken(refreshRes.data.accessToken);
        flushQueue(null);
        return api(original);
      } catch (refreshError) {
        flushQueue(refreshError);
        useAuthStore.getState().logout();
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
