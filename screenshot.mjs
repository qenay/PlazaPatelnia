/**
 * screenshot.mjs — Puppeteer screenshot of a localhost URL.
 *   node screenshot.mjs http://localhost:3001
 *   node screenshot.mjs http://localhost:3001/atrakcje.html label
 * Saved to ./temporary screenshots/screenshot-N[-label].png (auto-incremented).
 * Requires puppeteer (npm i puppeteer) in this project.
 */
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url   = process.argv[2] || 'http://localhost:3001';
const label = process.argv[3] || '';

const outDir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function nextFilename() {
  let n = 1;
  while (true) {
    const name = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
    if (!fs.existsSync(path.join(outDir, name))) return name;
    n++;
  }
}

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = () => { window.scrollBy(0, 600); y += 600; if (y < document.body.scrollHeight) setTimeout(step, 50); else resolve(); };
      step();
    });
  });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 600));
  const filename = nextFilename();
  await page.screenshot({ path: path.join(outDir, filename), fullPage: true });
  console.log(`Screenshot saved: temporary screenshots/${filename}`);
  await browser.close();
})().catch(err => { console.error('Screenshot failed:', err.message); process.exit(1); });
