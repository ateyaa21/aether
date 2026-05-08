import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />

      <motion.div
        animate={{
          x: [0, 260, -180, 0],
          y: [0, -180, 140, 0],
          scale: [1, 1.3, 0.92, 1],
          rotate: [0, 8, -6, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-20%] top-[-20%] h-[1100px] w-[1100px] rounded-full bg-cyan-400/25 blur-[160px]"
      />

      <motion.div
        animate={{
          x: [0, -260, 180, 0],
          y: [0, 220, -160, 0],
          scale: [1, 0.82, 1.18, 1],
          rotate: [0, -10, 6, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-20%] top-[0%] h-[1200px] w-[1200px] rounded-full bg-blue-500/25 blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, 180, -120, 0],
          y: [0, -200, 120, 0],
          scale: [1, 1.2, 0.95, 1],
          rotate: [0, 6, -4, 0],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-30%] left-[5%] h-[950px] w-[950px] rounded-full bg-sky-300/20 blur-[160px]"
      />

      <motion.div
        animate={{
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_65%)]"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#050505_90%)]" />
    </div>
  );
}