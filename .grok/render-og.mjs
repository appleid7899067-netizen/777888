import { chromium } from "playwright";
import { pathToFileURL } from "node:url";

const html = pathToFileURL("/workspace/.grok/og-card.html").href;
const outPng = "/workspace/.grok/og-card.png";

const browser = await chromium.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 2,
  });
  await page.goto(html, { waitUntil: "load", timeout: 15000 });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(200);
  await page.screenshot({ path: outPng, type: "png", clip: { x: 0, y: 0, width: 1200, height: 630 } });
  console.log(JSON.stringify({ ok: true, screenshot: outPng }));
} catch (err) {
  console.error(JSON.stringify({ ok: false, error: String(err?.message || err) }));
  process.exitCode = 1;
} finally {
  await browser.close();
}
