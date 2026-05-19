import type { Metadata } from "next";
import "@fontsource/cormorant-garamond";
import "@fontsource/dm-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atelier Solari — Fotografia di matrimoni · Tuscany & Amalfi Coast",
  description:
    "Fotografia di matrimoni vintage luxury in Italia. Pellicola, medio formato, ricordi che durano.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
