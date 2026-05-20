import type { Metadata } from "next";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/500-italic.css";
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
