import { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AmbientBackground from "./components/AmbientBackground";

import Hero from "./sections/Hero";
import Foundations from "./sections/Foundations";
import ReactArchitecture from "./sections/ReactArchitecture";
import Architecture from "./sections/Architecture";
import Debugging from "./sections/Debugging";
import ProductThinking from "./sections/ProductThinking";
import SystemDesign from "./sections/SystemDesign";
import Communication from "./sections/Communication";
import Experience from "./sections/Experience";
import Philosophy from "./sections/Philosophy";
import FinalState from "./sections/FinalState";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#050505]">
      <AmbientBackground />

      <Navbar />

      <Hero />
      <Foundations />
      <ReactArchitecture />
      <Architecture />
      <Debugging />
      <ProductThinking />
      <SystemDesign />
      <Communication />
      <Experience />
      <Philosophy />
      <FinalState />
      <Footer />
    </main>
  );
}