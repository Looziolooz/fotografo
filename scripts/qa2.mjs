// QA the infinite-loop home and the horizontal portfolio gallery.
//   node scripts/qa2.mjs
import { chromium } from "playwright";
import fs from "node:fs/promises";

const BASE = "http://localhost:3210";
const OUT = "docs/design-references/clone";
await fs.mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
try {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();

  // HOME — infinite vertical loop
  await page.goto(BASE + "/", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1500);
  const trackY0 = await page.evaluate(() => document.querySelector("main div > div")?.style.transform || "");
  await page.screenshot({ path: `${OUT}/home-grid-1.png` });
  await page.mouse.move(720, 450);
  for (let i = 0; i < 12; i++) { await page.mouse.wheel(0, 600); await page.waitForTimeout(60); }
  await page.waitForTimeout(900);
  const trackY1 = await page.evaluate(() => document.querySelector("main div > div")?.style.transform || "");
  await page.screenshot({ path: `${OUT}/home-grid-2.png` });
  console.log("home transform before:", trackY0, "| after:", trackY1);

  // PORTFOLIO — horizontal scroll
  await page.goto(BASE + "/portfolio/francesca-roberto", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${OUT}/portfolio-1.png` });
  await page.mouse.move(720, 450);
  for (let i = 0; i < 16; i++) { await page.mouse.wheel(0, 600); await page.waitForTimeout(60); }
  await page.waitForTimeout(1000);
  const trX = await page.evaluate(() => document.querySelector("main div > div")?.style.transform || "");
  await page.screenshot({ path: `${OUT}/portfolio-2.png` });
  console.log("portfolio transform after scroll:", trX);

  await ctx.close();
} finally {
  await browser.close();
}
console.log("QA2 DONE");
