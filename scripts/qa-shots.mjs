// Capture screenshots of the local clone for visual QA against the original.
//   node scripts/qa-shots.mjs
import { chromium } from "playwright";
import fs from "node:fs/promises";

const BASE = "http://localhost:3210";
const OUT = "docs/design-references/clone";
await fs.mkdir(OUT, { recursive: true });
const PAGES = [["/", "home"], ["/about-us", "about"], ["/faq", "faq"], ["/contact-us", "contact"]];

const browser = await chromium.launch();
try {
  for (const [w, tag] of [[1440, "desktop"], [390, "mobile"]]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    for (const [url, name] of PAGES) {
      await page.goto(BASE + url, { waitUntil: "networkidle", timeout: 60000 });
      await page.evaluate(async () => { for (let y = 0; y < 9000; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 90)); } window.scrollTo(0, 0); });
      await page.waitForTimeout(700);
      await page.screenshot({ path: `${OUT}/${name}-${tag}.png`, fullPage: true });
      console.log(tag, name, "ok");
    }
    await ctx.close();
  }
} finally {
  await browser.close();
}
console.log("QA SHOTS DONE");
