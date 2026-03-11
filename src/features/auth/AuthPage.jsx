import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { AuthForm } from "./components/AuthForm";
import { cn } from "@/lib/cn";

const AUTH_TYPE_BUYER = "buyer";
const AUTH_TYPE_MERCHANT = "merchant";

export function AuthPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const paramType = searchParams.get("type");
  const initialType =
    paramType === AUTH_TYPE_MERCHANT ? AUTH_TYPE_MERCHANT : AUTH_TYPE_BUYER;
  const [authType, setAuthType] = useState(initialType);

  const isBuyer = authType === AUTH_TYPE_BUYER;

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-12 bg-slate-50 [padding-left:max(1rem,env(safe-area-inset-left))] [padding-right:max(1rem,env(safe-area-inset-right))] [padding-bottom:max(3rem,env(safe-area-inset-bottom))]">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
        <h1 className="text-xl font-bold text-slate-900">
          {isBuyer ? "Buyer" : "Merchant"} account
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          {isBuyer
            ? "Sign in or create an account to lock in prices and get your QR codes."
            : "Sign in or create an account to add inventory and manage orders."}
        </p>
        <div className="mt-6 flex rounded-lg border border-slate-200 bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setAuthType(AUTH_TYPE_BUYER)}
            className={cn(
              "flex-1 rounded-md py-2.5 text-sm font-medium transition min-h-[44px]",
              isBuyer
                ? "bg-white text-slate-900 shadow"
                : "text-slate-600 hover:text-slate-900"
            )}
          >
            Buyer
          </button>
          <button
            type="button"
            onClick={() => setAuthType(AUTH_TYPE_MERCHANT)}
            className={cn(
              "flex-1 rounded-md py-2.5 text-sm font-medium transition min-h-[44px]",
              !isBuyer
                ? "bg-white text-slate-900 shadow"
                : "text-slate-600 hover:text-slate-900"
            )}
          >
            Merchant
          </button>
        </div>
        <div className="mt-6" key={authType}>
          <AuthForm authType={authType} />
        </div>
      </div>
      <button
        type="button"
        onClick={() => navigate("/")}
        className="mt-6 min-h-[44px] inline-flex items-center rounded-lg px-3 text-sm text-slate-600 hover:bg-slate-200 hover:text-slate-900 touch-manipulation"
      >
        ← Back to home
      </button>
    </div>
  );
}
