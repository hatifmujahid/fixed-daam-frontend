import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { trimFormData } from "@/lib/formUtils";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { loginSchema, signUpSchema } from "../schemas/authSchemas";
import { useAuthStore } from "@/stores/authStore";

const GOOGLE_ICON = (
  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const MICROSOFT_ICON = (
  <svg className="h-5 w-5" viewBox="0 0 23 23" aria-hidden>
    <path fill="#f35325" d="M1 1h10v10H1z" />
    <path fill="#81bc06" d="M12 1h10v10H12z" />
    <path fill="#05a6f0" d="M1 12h10v10H1z" />
    <path fill="#ffba08" d="M12 12h10v10H12z" />
  </svg>
);

export function AuthForm({ authType = "buyer" }) {
  const navigate = useNavigate();
  const location = useLocation();
  const login = useAuthStore((s) => s.login);
  const isMerchant = authType === "merchant";
  const from = location.state?.from?.pathname;

  const [isSignUp, setIsSignUp] = useState(false);
  const schema = isSignUp ? signUpSchema : loginSchema;
  const form = useForm({
    defaultValues: isSignUp
      ? { email: "", password: "", confirmPassword: "" }
      : { email: "", password: "" },
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    const cleaned = trimFormData(data);
    if (isSignUp) {
      delete cleaned.confirmPassword;
    }
    const role = isMerchant ? "merchant" : "buyer";
    login(
      { email: cleaned.email, role },
      "demo-token-" + Date.now()
    );
    let target = from && from !== "/auth" ? from : "/dashboard";
    if (role === "buyer" && target.startsWith("/dashboard/inventory")) target = "/dashboard";
    navigate(target, { replace: true });
  };

  const googleUrl = import.meta.env.VITE_AUTH_GOOGLE_URL || "";
  const microsoftUrl = import.meta.env.VITE_AUTH_MICROSOFT_URL || "";

  const handleSso = (url, provider) => {
    if (url) {
      const params = new URLSearchParams({ type: authType });
      window.location.href = `${url}?${params.toString()}`;
    } else {
      toast.info(`${provider} SSO will be available once configured.`);
    }
  };

  return (
    <>
      {/* SSO */}
      <div className="space-y-3">
        {googleUrl ? (
          <a
            href={`${googleUrl}?type=${authType}`}
            className="flex w-full min-h-[48px] items-center justify-center gap-3 rounded-xl border-2 border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors touch-manipulation"
          >
            {GOOGLE_ICON}
            Continue with Google
          </a>
        ) : (
          <button
            type="button"
            onClick={() => handleSso(googleUrl, "Google")}
            className="flex w-full min-h-[48px] items-center justify-center gap-3 rounded-xl border-2 border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors touch-manipulation"
          >
            {GOOGLE_ICON}
            Continue with Google
          </button>
        )}
        {microsoftUrl ? (
          <a
            href={`${microsoftUrl}?type=${authType}`}
            className="flex w-full min-h-[48px] items-center justify-center gap-3 rounded-xl border-2 border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors touch-manipulation"
          >
            {MICROSOFT_ICON}
            Continue with Microsoft
          </a>
        ) : (
          <button
            type="button"
            onClick={() => handleSso(microsoftUrl, "Microsoft")}
            className="flex w-full min-h-[48px] items-center justify-center gap-3 rounded-xl border-2 border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors touch-manipulation"
          >
            {MICROSOFT_ICON}
            Continue with Microsoft
          </button>
        )}
      </div>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-200" />
        </div>
        <div className="relative flex justify-center text-xs font-medium">
          <span className="bg-white px-2 text-slate-500">or continue with email</span>
        </div>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          label="Email"
          required
          error={form.formState.errors.email?.message}
          id="email"
        >
          <Input
            type="email"
            placeholder="you@example.com"
            {...form.register("email")}
          />
        </FormField>
        <FormField
          label="Password"
          required
          error={form.formState.errors.password?.message}
          id="password"
        >
          <Input
            type="password"
            placeholder="••••••••"
            {...form.register("password")}
          />
        </FormField>
        {isSignUp && (
          <FormField
            label="Confirm password"
            required
            error={form.formState.errors.confirmPassword?.message}
            id="confirmPassword"
          >
            <Input
              type="password"
              placeholder="••••••••"
              {...form.register("confirmPassword")}
            />
          </FormField>
        )}
        <button
          type="submit"
          className="w-full min-h-[48px] inline-flex items-center justify-center rounded-xl bg-primary px-4 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-orange-600 transition-colors disabled:opacity-50 touch-manipulation"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting
            ? "Please wait…"
            : isSignUp
              ? "Create account"
              : "Sign in"}
        </button>
        <p className="text-center text-sm text-slate-500">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsSignUp(false)}
                className="text-primary font-medium hover:underline"
              >
                Sign in
              </button>
            </>
          ) : (
            <>
              No account?{" "}
              <button
                type="button"
                onClick={() => setIsSignUp(true)}
                className="text-primary font-medium hover:underline"
              >
                Create account
              </button>
            </>
          )}
        </p>
      </form>
    </>
  );
}
