// Records 3 fps frames while scrolling a page top to bottom (live site or mirror)
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const { getCliArg } = require('./utils');

(async () => {
  const url = getCliArg('--url', '');
  const out = path.resolve(getCliArg('--out', 'frames/live'));
  const width = parseInt(getCliArg('--width', '1440'), 10);
  const height = parseInt(getCliArg('--height', '900'), 10);
  const fps = 3;
  const pxPerSecond = parseInt(getCliArg('--speed', '600'), 10);
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3500);
  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  const step = pxPerSecond / fps;
  let i = 0;
  for (let y = 0; y < total - height + step; y += step) {
    await page.mouse.wheel(0, i === 0 ? 0 : step);
    await page.waitForTimeout(1000 / fps);
    const sy = await page.evaluate(() => Math.round(scrollY));
    await page.screenshot({ path: path.join(out, `f${String(i).padStart(4, '0')}_y${sy}.png`) });
    i++;
  }
  console.log(JSON.stringify({ url, frames: i, pageHeight: total }));
  await browser.close();
})();
