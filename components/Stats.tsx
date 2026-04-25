const stats = [
  { value: "1.4B", label: "People in Africa" },
  { value: "60%+", label: "Unbanked or underbanked" },
  { value: "$48B", label: "Annual remittances" },
  { value: "8%", label: "Average remittance fee" },
  { value: "400ms", label: "Solana block time" },
];

export default function Stats() {
  return (
    <section className="py-12 border-y border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-black text-accent-light mb-1">
                {s.value}
              </div>
              <div className="text-xs md:text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
