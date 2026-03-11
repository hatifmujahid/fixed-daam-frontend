import { motion } from "framer-motion";
import { Lock, QrCode, PackageCheck } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "../constants";

const iconMap = {
  lock: Lock,
  qr: QrCode,
  retrieve: PackageCheck,
};

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-20 relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(234,88,12,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <motion.p
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Simple steps
          </motion.p>
          <motion.h2
            className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            How it works
          </motion.h2>
          <motion.p
            className="mt-3 text-base text-slate-600 sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Pay now, collect later. Three clear steps.
          </motion.p>
        </div>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {HOW_IT_WORKS_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon] ?? Lock;
            return (
              <motion.article
                key={step.title}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-lg shadow-slate-200/40 transition-shadow hover:shadow-xl hover:shadow-slate-200/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.08 * i }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary/80 via-orange-500/80 to-primary/80" />
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="mt-5 sm:mt-6 font-semibold text-slate-900 text-lg sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
