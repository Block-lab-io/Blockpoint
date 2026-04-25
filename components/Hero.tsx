export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent-light text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          Built on Solana — Launching in Nigeria
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
          The Onchain{" "}
          <span className="text-accent-light glow-text">Financial OS</span>
          <br />
          for Africa
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-4 leading-relaxed">
          Banking. Payments. DeFi. Bills. One app. Your keys.
        </p>
        <p className="text-base text-slate-500 max-w-xl mx-auto mb-10">
          No jargon. No friction. No borders. Just money that works — for the
          800 million Africans who deserve a better financial system.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#waitlist"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent hover:bg-accent/90 text-white font-semibold text-base transition-all duration-200 glow"
          >
            Join the Waitlist
          </a>
          <button
            disabled
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-border bg-card text-slate-400 font-semibold text-base cursor-not-allowed flex items-center justify-center gap-2"
          >
            Launch App
            <span className="text-xs bg-accent/20 text-accent-light px-2 py-0.5 rounded-full border border-accent/20">
              Coming Soon
            </span>
          </button>
        </div>

        <p className="mt-8 text-sm text-slate-600">
          Non-custodial · Open source · No KYC to get started
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
    </section>
  );
}
