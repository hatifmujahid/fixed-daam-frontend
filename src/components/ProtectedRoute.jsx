import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";
import { api } from "@/lib/api";

export function ProtectedRoute({ children }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const accessToken = useAuthStore((s) => s.accessToken);
  const setAccessToken = useAuthStore((s) => s.setAccessToken);
  const logout = useAuthStore((s) => s.logout);

  const [hydrated, setHydrated] = useState(() => useAuthStore.persist.hasHydrated());
  const [refreshing, setRefreshing] = useState(false);
  const [refreshDone, setRefreshDone] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (hydrated) return;
    const unsub = useAuthStore.persist.onFinishHydration(() => setHydrated(true));
    if (useAuthStore.persist.hasHydrated()) setHydrated(true);
    return unsub;
  }, [hydrated]);

  // After hydration: if we have a session but no in-memory token (page refresh),
  // try to silently get a new access token using the HttpOnly refresh token cookie.
  useEffect(() => {
    if (!hydrated || refreshDone) return;
    if (isAuthenticated && !accessToken) {
      setRefreshing(true);
      api
        .post("/v1/auth/refresh-tokens")
        .then((res) => setAccessToken(res.data.accessToken))
        .catch(() => logout())
        .finally(() => {
          setRefreshing(false);
          setRefreshDone(true);
        });
    } else {
      setRefreshDone(true);
    }
  }, [hydrated, refreshDone, isAuthenticated, accessToken, setAccessToken, logout]);

  if (!hydrated || refreshing) return null;

  if (!isAuthenticated) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
}
