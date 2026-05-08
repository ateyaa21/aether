import {
    motion,
    AnimatePresence,
  } from "framer-motion";
  
  import { useEffect, useState } from "react";
  
  const links = [
    { name: "Foundations", id: "foundations" },
    { name: "React", id: "react" },
    { name: "Architecture", id: "architecture" },
    { name: "Debugging", id: "debugging" },
    { name: "Systems", id: "systems" },
  ];
  
  export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [active, setActive] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
  
    useEffect(() => {
      let lastScroll = 0;
  
      const handleScroll = () => {
        const currentScroll = window.scrollY;
  
        setScrolled(currentScroll > 20);
  
        if (currentScroll > lastScroll && currentScroll > 120) {
          setHidden(true);
        } else {
          setHidden(false);
        }
  
        lastScroll = currentScroll;
  
        links.forEach((link) => {
          const section = document.getElementById(link.id);
  
          if (!section) return;
  
          const rect = section.getBoundingClientRect();
  
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActive(link.id);
          }
        });
  
        const totalHeight =
          document.body.scrollHeight - window.innerHeight;
  
        const progress =
          (window.scrollY / totalHeight) * 100;
  
        setScrollProgress(progress);
      };
  
      handleScroll();
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <motion.header
        animate={{
          y: hidden ? -120 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="fixed left-1/2 top-6 z-50 w-[95%] max-w-6xl -translate-x-1/2"
      >
        <div
          className={`
            flex items-center justify-between
            rounded-full border
            px-6 py-4
            backdrop-blur-xl
            transition-all duration-500
  
            ${
              scrolled
                ? "border-white/10 bg-black/70 shadow-2xl"
                : "border-white/5 bg-white/[0.03]"
            }
          `}
        >
          <h1 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
            Aether
          </h1>
  
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  document
                    .getElementById(link.id)
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className={`
                  relative text-sm transition
  
                  ${
                    active === link.id
                      ? "text-white"
                      : "text-zinc-500 hover:text-white"
                  }
                `}
              >
                <motion.span
                  whileHover={{
                    y: -1,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="block"
                >
                  {link.name}
                </motion.span>
  
                <span
                  className={`
                    absolute -bottom-2 left-0 h-px bg-white transition-all duration-300
  
                    ${
                      active === link.id
                        ? "w-full"
                        : "w-0"
                    }
                  `}
                />
              </button>
            ))}
          </nav>
  
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full border border-white/10 bg-white px-5 py-2 text-sm font-medium text-black transition hover:scale-[1.03] md:hidden"
          >
            Menu
          </button>
  
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            className="hidden rounded-full border border-white/10 bg-white px-5 py-2 text-sm font-medium text-black md:block"
          >
            Explore
          </motion.button>
        </div>
  
        <div className="mt-3 h-px w-full overflow-hidden rounded-full bg-white/5">
          <motion.div
            animate={{
              width: `${scrollProgress}%`,
            }}
            transition={{
              duration: 0.2,
            }}
            className="h-full bg-white/30"
          />
        </div>
  
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 top-[110%] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/90 p-6 backdrop-blur-2xl md:hidden"
            >
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      document
                        .getElementById(link.id)
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });
  
                      setMenuOpen(false);
                    }}
                    className="rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 text-left text-zinc-300 transition hover:bg-white/[0.06] hover:text-white"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    );
  }