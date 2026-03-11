import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MERCHANT_STEPS } from "../constants";

export function ForMerchantsSection() {
  return (
    <section id="for-merchants" className="scroll-mt-20 relative overflow-hidden bg-white">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <motion.p
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            For businesses
          </motion.p>
          <motion.h2
            className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            For merchants
          </motion.h2>
          <motion.p
            className="mt-3 text-base text-slate-600 sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Add inventory, set your price, and let customers lock in today&apos;s rate.
          </motion.p>
        </div>
        <div className="space-y-4 sm:space-y-5">
          {MERCHANT_STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              className="group flex gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-slate-50/70 p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-slate-200 transition-all"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 * i }}
            >
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-primary text-sm sm:text-base font-semibold text-white shadow-lg shadow-primary/25">
                {i + 1}
              </span>
              <div className="min-w-0">
                <h3 className="font-semibold text-slate-900 text-base sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-10 sm:mt-12 flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link to="/auth" className="inline-block">
            <motion.span
              className="inline-flex min-h-[48px] sm:min-h-[52px] items-center justify-center rounded-2xl bg-primary px-6 sm:px-8 text-sm sm:text-base font-semibold text-white shadow-xl shadow-primary/25 hover:shadow-primary/35 hover:bg-orange-600 transition-all touch-manipulation"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign up as merchant
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
