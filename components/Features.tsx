const features = [
  {
    tag: "Banking",
    title: "Save & Earn",
    desc: "Deposit USDC in NGN, GHS, KES, ZAR or USD. Your onchain bank account — no KYC gate, no minimums. Lock to earn yield.",
  },
  {
    tag: "Payments",
    title: "Send & Receive",
    desc: "P2P transfers to any wallet or phone number. Instant settlement on Solana — no waiting, no limits.",
  },
  {
    tag: "Payments",
    title: "Cross-Border",
    desc: "Send NGN from Lagos, arrive as GHS in Accra. Automatic currency conversion via onchain liquidity. No 8% FX fee.",
  },
  {
    tag: "Payments",
    title: "Merchant Payments",
    desc: "Create an invoice, share a QR or link. Onchain settlement with no chargebacks. Built for freelancers and businesses.",
  },
  {
    tag: "Utility",
    title: "Bill Payments",
    desc: "Airtime, data, electricity (NEPA, ECG, KPLC), DStv, and government payments — all directly from your wallet.",
  },
  {
    tag: "DeFi",
    title: "Swap & Yield",
    desc: "Swap assets via Jupiter, earn yield on idle USDC via Kamino, and earn BPT token rewards for every action.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3">
            Everything in one place
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Every financial primitive
            <br />
            you will ever need
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            If you can do it at a bank or with a payment app, you can do it on
            Blockpoint — faster, cheaper, and without anyone holding your money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="gradient-border rounded-2xl p-6 bg-card hover:bg-card/80 transition-all duration-300 group"
            >
              <span className="inline-block text-xs font-semibold text-accent-light bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full mb-4">
                {f.tag}
              </span>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
