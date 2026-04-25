import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blockpoint — The Onchain Financial OS for Africa",
  description: "Banking. Payments. DeFi. Bills. One app. Your keys. Built on Solana.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
