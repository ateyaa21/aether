export default function NoiseOverlay() {
    return (
      <div
        className="pointer-events-none fixed inset-0 z-[999] opacity-[0.015]"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />
    );
  }