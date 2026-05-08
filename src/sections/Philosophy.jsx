import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden px-6 py-56">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto max-w-6xl text-center"
      >
        <p className="section-label mb-8">
          Final Philosophy
        </p>

        <h2 className="display-title">
          Frontend expertise
          <br />
          is built through
          <br />
          systems, iteration
          <br />
          and years of problem solving.
        </h2>

        <p className="section-description mx-auto mt-12 max-w-3xl">
          Beyond frameworks and trends, great frontend engineering comes from
          understanding systems deeply, refining architecture over time and
          continuously improving through real-world experience.
        </p>

        <div className="mt-20 flex items-center justify-center gap-4">
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