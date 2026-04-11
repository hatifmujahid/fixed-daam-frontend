import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center transition opacity-90 hover:opacity-100"
            aria-label="FixedDaam home"
          >
            <Logo variant="compact" />
          </Link>
          <nav className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm font-medium text-slate-600" aria-label="Footer">
            <a
              href="/#how-it-works"
              className="hover:text-slate-900 transition-colors min-h-[44px] sm:min-h-0 flex items-center"
            >
              How it works
            </a>
            <a
              href="/#for-merchants"
              className="hover:text-slate-900 transition-colors min-h-[44px] sm:min-h-0 flex items-center"
            >
              For merchants
            </a>
            <Link
              to="/auth"
              className="hover:text-slate-900 transition-colors min-h-[44px] sm:min-h-0 flex items-center"
            >
              Sign in
            </Link>
            <Link
              to="/terms"
              className="hover:text-slate-900 transition-colors min-h-[44px] sm:min-h-0 flex items-center"
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              className="hover:text-slate-900 transition-colors min-h-[44px] sm:min-h-0 flex items-center"
            >
              Privacy
            </Link>
          </nav>
        </div>
        <p className="mt-8 text-center sm:text-left text-sm text-slate-500">
          Pay now, buy later. Hedge against growing prices.
        </p>
      </div>
    </footer>
  );
}
