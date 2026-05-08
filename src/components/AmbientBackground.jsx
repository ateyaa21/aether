import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Desktop blobs */}
      <div className="hidden md:block">
        <motion.div
          animate={{
            x: [0, 260, -180, 0],
            y: [0, -180, 140, 0],
            scale: [1, 1.3, 0.92, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-20%] top-[-20%] h-[900px] w-[900px] rounded-full bg-cyan-400/20 blur-[160px]"
        />

        <motion.div
          animate={{
            x: [0, -260, 180, 0],
            y: [0, 220, -160, 0],
            scale: [1, 0.82, 1.18, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-20%] top-[0%] h-[1000px] w-[1000px] rounded-full bg-blue-500/20 blur-[180px]"
        />

        <motion.div
          animate={{
            x: [0, 180, -120, 0],
            y: [0, -200, 120, 0],
            scale: [1, 1.2, 0.95, 1],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-30%] left-[5%] h-[800px] w-[800px] rounded-full bg-sky-300/15 blur-[160px]"
        />
      </div>

      {/* Mobile lightweight background */}
      <div className="md:hidden">
        <div className="absolute left-[-20%] top-[-10%] h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[80px]" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[90px]" />
      </div>

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#050505_90%)]" />
    </div>
  );
}