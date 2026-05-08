import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        group relative overflow-hidden rounded-3xl
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl

        transition-all duration-500

        hover:border-white/20
        hover:bg-white/[0.05]

        ${className}
      `}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-3xl" />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}