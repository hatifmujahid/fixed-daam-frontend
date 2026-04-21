import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "";

export const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
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

    // Skip retry logic for the refresh endpoint itself to avoid infinite loops
    const isRefreshCall = original?.url?.includes("/auth/refresh-tokens");
    const isLogoutCall = original?.url?.includes("/auth/logout");

    if (error.response?.status === 401 && !original._retry && !isRefreshCall && !isLogoutCall) {
      if (isRefreshing) {
        // Queue this request until the refresh completes
        return new Promise((resolve, reject) => {
          waitQueue.push({ resolve, reject });
        })
          .then(() => api(original))
          .catch((err) => Promise.reject(err));
      }

      original._retry = true;
      isRefreshing = true;

      try {
        await api.post("/v1/auth/refresh-tokens");
        flushQueue(null);
        return api(original); // retry original request — browser now has new accessToken cookie
      } catch (refreshError) {
        flushQueue(refreshError);
        // Refresh failed — session is truly expired; logout without making another API call
        const { useAuthStore } = await import("@/stores/authStore");
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
