import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";

/**
 * Wraps routes that require authentication. Redirects to /auth if not logged in.
 */
export function ProtectedRoute({ children }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
}
