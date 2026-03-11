import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

/**
 * Hero visual: shopping cart card.
 */
export function HeroVisual() {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Outer glow */}
      <motion.div
        className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/15 to-orange-500/10 blur-2xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Card container */}
      <div className="relative">
        <motion.div
          className="relative z-10 overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-gradient-to-b from-slate-50 to-white p-6 sm:p-10 lg:p-12 shadow-2xl shadow-slate-200/50"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary via-orange-500 to-primary" />
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-xl sm:rounded-2xl bg-white/80 p-5 sm:p-8 ring-1 ring-slate-200/80">
              <ShoppingCart
                className="h-24 w-24 sm:h-36 sm:w-36 lg:h-44 lg:w-44 text-slate-500"
                strokeWidth={1.25}
                aria-hidden
              />
            </div>
            <p className="mt-3 sm:mt-5 text-xs sm:text-sm font-semibold text-slate-600">Your cart, your price</p>
            <p className="mt-0.5 text-[10px] sm:text-xs text-slate-500">Locked until you collect</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
