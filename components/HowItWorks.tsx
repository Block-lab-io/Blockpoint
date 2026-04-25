const steps = [
  {
    number: "01",
    title: "Sign up with email or phone",
    desc: "No seed phrase. No crypto knowledge required. Powered by embedded wallets — your Solana wallet is created silently in the background.",
  },
  {
    number: "02",
    title: "Fund from your bank account",
    desc: "Transfer from GTBank, Access, M-Pesa, Zenith, or any African bank directly into your Blockpoint wallet. Fiat in, USDC ready.",
  },
  {
    number: "03",
    title: "Save, send, pay, earn",
    desc: "Pay your NEPA bill, send money to Accra, lock USDC for yield, receive a merchant payment — all from one clean dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-card/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3">
            Simple by design
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Up and running in 60 seconds
          </h2>
          <p className="text-slate-400 text-lg">
            No crypto experience required. Just a phone and a bank account.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-[30px] top-16 bottom-16 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent" />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-8">
                <div className="flex-shrink-0 w-[60px] h-[60px] rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <span className="text-accent-light font-black text-lg">{step.number}</span>
                </div>
                <div className="pt-3">
                  <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed max-w-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center">
          <p className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3">
            Why Solana
          </p>
          <h3 className="text-white font-bold text-2xl mb-4">
            400ms finality. Near-zero fees. Gasless for users.
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Solana is the only blockchain where a fintech product can feel like a web2 app.
            Users never need to hold SOL — Blockpoint sponsors all transaction fees via Helius.
            No friction. No confusing gas prompts. Just money that moves.
          </p>
        </div>
      </div>
    </section>
  );
}
