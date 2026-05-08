export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />

      <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="absolute right-[-10%] top-[20%] h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="absolute bottom-[-20%] left-[10%] h-[450px] w-[450px] rounded-full bg-sky-300/10 blur-[120px]" />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#050505_90%)]" />
    </div>
  );
}