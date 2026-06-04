import localFont from "next/font/local";

/** Neue — the body / UI sans (self-hosted from the original site). */
export const neue = localFont({
  variable: "--font-neue",
  display: "swap",
  src: [
    { path: "../../public/fonts/neue-300.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/neue-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/neue-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/neue-700.woff2", weight: "700", style: "normal" },
  ],
});

/** Ogg — the editorial serif used for display headings. */
export const ogg = localFont({
  variable: "--font-ogg",
  display: "swap",
  src: [
    { path: "../../public/fonts/ogg-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/ogg-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/ogg-500.woff2", weight: "500", style: "normal" },
  ],
});
