import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-6 py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.06),transparent_60%)]" />

        <div className="absolute bottom-[-120px] left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 text-center md:flex-row md:text-left"
      >
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-white">
            Aether
          </h3>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-500">
            A frontend exploration focused on systems,
            architecture and modern engineering thinking.
          </p>
        </div>

        <div className="flex items-center gap-8 text-sm text-zinc-500">
          <span className="transition hover:text-white">
            React
          </span>

          <span className="transition hover:text-white">
            Framer Motion
          </span>

          <span className="transition hover:text-white">
            Tailwind
          </span>
        </div>
      </motion.div>
    </footer>
  );
}