import { motion } from "framer-motion";

export default function FinalState() {
  return (
    <section className="relative overflow-hidden px-6 py-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_65%)]" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        <p className="section-label mb-8">
          Final State
        </p>

        <h2 className="display-title">
          The goal was never
          <br />
          to learn React.
        </h2>

        <p className="section-description mx-auto mt-10 max-w-3xl">
          The real objective is to develop the ability to think,
          architect, debug and build systems with clarity —
          regardless of frameworks, trends or tools.
        </p>

        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-2 w-2 rounded-full bg-white/40" />
          <div className="h-px w-24 bg-white/10" />
          <div className="h-2 w-2 rounded-full bg-white" />
          <div className="h-px w-24 bg-white/10" />
          <div className="h-2 w-2 rounded-full bg-white/40" />
        </div>
      </motion.div>
    </section>
  );
}