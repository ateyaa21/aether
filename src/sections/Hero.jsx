import {
    motion,
    useMotionValue,
    useSpring,
  } from "framer-motion";
  
  export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
  
    const smoothX = useSpring(mouseX, {
      stiffness: 120,
      damping: 20,
    });
  
    const smoothY = useSpring(mouseY, {
      stiffness: 120,
      damping: 20,
    });
  
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
  
      const x = (e.clientX / innerWidth - 0.5) * 40;
      const y = (e.clientY / innerHeight - 0.5) * 40;
  
      mouseX.set(x);
      mouseY.set(y);
    };
  
    return (
      <section
        onMouseMove={handleMouseMove}
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32"
      >
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
          }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
        </motion.div>
  
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-white/[0.04] blur-[120px]" />
  
          <div className="absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-[140px]" />
        </div>
  
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:120px_120px]" />
        </div>
  
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto max-w-6xl text-center"
        >
          <p className="section-label mb-6">
            Aether — Frontend Expertise
          </p>
  
          <h1 className="mx-auto max-w-5xl text-4xl font-semibold leading-[0.92] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7.5rem]">
            Building systems
            <br />
            instead of pages.
          </h1>
  
          <p className="section-description mx-auto mt-8 max-w-xl text-sm leading-relaxed sm:text-base md:max-w-2xl md:text-lg">
            Frontend expertise is not about knowing more tools.
            It’s about building scalable, maintainable and deeply
            thought-out systems.
          </p>
  
          <div className="mt-10 flex items-center justify-center gap-3 sm:mt-12">
            <div className="h-2 w-2 rounded-full bg-white/40" />
            <div className="h-px w-16 bg-white/10 sm:w-20" />
            <div className="h-2 w-2 rounded-full bg-white" />
            <div className="h-px w-16 bg-white/10 sm:w-20" />
            <div className="h-2 w-2 rounded-full bg-white/40" />
          </div>
        </motion.div>
      </section>
    );
  }