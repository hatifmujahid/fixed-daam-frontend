import { Outlet, useLocation } from "react-router-dom";
import { LandingNav } from "@/features/home/components/LandingNav";
import { DashboardNav } from "@/features/dashboard/components/DashboardNav";
import { useAuthStore } from "@/stores/authStore";

export function Layout() {
  const location = useLocation();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {isDashboard && isAuthenticated ? (
        <DashboardNav />
      ) : !isDashboard ? (
        <LandingNav />
      ) : null}
      <main className="[padding-bottom:env(safe-area-inset-bottom)]">
        <Outlet />
      </main>
    </div>
  );
}
