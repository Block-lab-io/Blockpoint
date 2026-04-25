"use client";
import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="waitlist" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3">
          Early Access
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          Be first in Africa.
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          We are launching in Nigeria first. Join the waitlist and get early
          access before anyone else.
        </p>

        {submitted ? (
          <div className="rounded-2xl border border-accent/30 bg-accent/10 p-10">
            <h3 className="text-white font-bold text-2xl mb-2">
              You are on the list.
            </h3>
            <p className="text-slate-400">
              We will notify you the moment Blockpoint goes live. Welcome to the
              future of African finance.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-5 py-4 rounded-xl bg-card border border-border text-white placeholder-slate-600 focus:outline-none focus:border-accent/50 transition-colors text-sm"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 rounded-xl bg-accent hover:bg-accent/90 text-white font-semibold text-sm transition-all duration-200 disabled:opacity-70 whitespace-nowrap glow"
            >
              {loading ? "Joining..." : "Join Waitlist"}
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-slate-600">
          No spam. No noise. Just a ping when we launch.
        </p>
      </div>
    </section>
  );
}
