import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { APP_NAME } from "../constants";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(234,88,12,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <motion.div
          className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl sm:rounded-3xl bg-primary px-6 py-12 text-center sm:px-12 sm:py-16 shadow-2xl shadow-primary/20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/30" />
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Lock in today&apos;s price
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-xl mx-auto leading-relaxed">
            Join {APP_NAME} and stop worrying about inflation. Pay now, collect when you&apos;re ready.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <Link to="/auth" className="flex">
              <motion.span
                className="inline-flex min-h-[48px] sm:min-h-[52px] w-full sm:w-auto items-center justify-center rounded-2xl bg-white px-6 sm:px-8 text-sm sm:text-base font-semibold text-primary shadow-lg hover:bg-slate-100 transition-colors touch-manipulation"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Get started
              </motion.span>
            </Link>
            <a href="#how-it-works" className="flex">
              <motion.span
                className="inline-flex min-h-[48px] sm:min-h-[52px] w-full sm:w-auto items-center justify-center rounded-2xl border-2 border-white/80 px-6 sm:px-8 text-sm sm:text-base font-medium text-white hover:bg-white/10 transition-colors touch-manipulation"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn more
              </motion.span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
