import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, QrCode, PackageCheck } from "lucide-react";
import { APP_NAME, TAGLINE } from "../constants";
import { HeroVisual } from "./HeroVisual";

const valueProps = [
  { icon: Lock, label: "Lock today's price" },
  { icon: QrCode, label: "Get your QR code" },
  { icon: PackageCheck, label: "Collect when ready" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[95vh] overflow-hidden bg-white flex flex-col justify-start pt-0">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_-20%,rgba(234,88,12,0.14),transparent_55%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-primary/[0.07] blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-6 pb-12 sm:px-6 sm:pt-8 sm:pb-16 lg:px-8 lg:pt-12 lg:pb-24">
        <div className="flex flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
          {/* Left: Copy */}
          <div className="flex-1 text-center lg:text-left max-w-xl lg:max-w-none order-2 lg:order-1 w-full">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-3 sm:mb-5"
            >
              Pay now · Buy later
            </motion.p>
            <motion.h1
              className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl lg:leading-[1.08]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
            >
              Stop paying{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-primary via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  tomorrow&apos;s prices
                </span>
                <motion.span
                  className="absolute bottom-1 left-0 right-0 h-3 bg-primary/20 -z-0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  style={{ originX: 0 }}
                />
              </span>{" "}
              today.
            </motion.h1>
            <motion.p
              className="mt-4 sm:mt-6 text-base text-slate-600 sm:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              {TAGLINE} Pay once at today’s rate, get a QR code, pick up your items whenever you’re ready.
            </motion.p>

            {/* Value props */}
            <motion.ul
              className="mt-5 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-x-5 sm:gap-x-8 gap-y-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {valueProps.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-slate-600 min-h-[44px] sm:min-h-0">
                  <span className="flex h-9 w-9 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" strokeWidth={2} aria-hidden />
                  </span>
                  <span className="text-sm font-medium sm:text-base">{label}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 lg:justify-start w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
            >
              <Link to="/auth" className="w-full sm:w-auto flex">
                <motion.span
                  className="inline-flex min-h-[48px] sm:min-h-[52px] items-center justify-center rounded-2xl bg-primary px-6 sm:px-8 text-sm sm:text-base font-semibold text-white shadow-xl shadow-primary/25 hover:shadow-primary/35 hover:bg-orange-600 transition-all w-full sm:w-auto touch-manipulation"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get started with {APP_NAME}
                </motion.span>
              </Link>
              <a href="#how-it-works" className="w-full sm:w-auto flex">
                <motion.span
                  className="inline-flex min-h-[48px] sm:min-h-[52px] items-center justify-center rounded-2xl border-2 border-slate-200 bg-white px-6 sm:px-8 text-sm sm:text-base font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors w-full sm:w-auto touch-manipulation"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  See how it works
                </motion.span>
              </a>
            </motion.div>
            <motion.p
              className="mt-4 sm:mt-5 text-xs sm:text-sm text-slate-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              No hidden fees · Your price is locked
            </motion.p>
          </div>

          {/* Right: Visual */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end w-full max-w-[280px] sm:max-w-sm lg:max-w-lg mx-auto order-1 lg:order-2"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
