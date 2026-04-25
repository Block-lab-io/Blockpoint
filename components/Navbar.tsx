"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-white font-black text-sm">B</span>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">Blockpoint</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Features", "How It Works", "Roadmap"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#waitlist"
            className="text-sm text-accent-light hover:text-white transition-colors hidden md:block"
          >
            Join Waitlist
          </a>
          <button
            disabled
            className="px-4 py-2 rounded-lg bg-accent/20 border border-accent/30 text-accent-light text-sm font-medium cursor-not-allowed flex items-center gap-2"
          >
            Launch App
            <span className="text-xs bg-accent text-white px-1.5 py-0.5 rounded-full">
              Soon
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
