export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-white font-black text-xs">B</span>
              </div>
              <span className="text-white font-bold">Blockpoint</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              The onchain financial OS for Africa. Built on Solana.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 text-sm text-slate-500">
            <div className="flex flex-col gap-2">
              <span className="text-slate-300 font-semibold text-xs uppercase tracking-wider mb-1">
                Product
              </span>
              {["Features", "How It Works", "Roadmap"].map((l) => (
                <a key={l} href="#" className="hover:text-white transition-colors">
                  {l}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-slate-300 font-semibold text-xs uppercase tracking-wider mb-1">
                Developers
              </span>
              {["Docs", "GitHub", "API"].map((l) => (
                <a key={l} href="#" className="hover:text-white transition-colors">
                  {l}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-slate-300 font-semibold text-xs uppercase tracking-wider mb-1">
                Connect
              </span>
              {["Twitter / X", "Telegram", "Email"].map((l) => (
                <a key={l} href="#" className="hover:text-white transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>2025 Blockpoint. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Testnet live — Mainnet coming soon</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
