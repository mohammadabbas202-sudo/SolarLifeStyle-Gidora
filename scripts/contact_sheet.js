// Builds a contact sheet from frames using the browser (no extra deps)
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const [dir, out, cols = '3', step = '2', start = '0', end = '9999'] = process.argv.slice(2);
(async () => {
  const files = fs.readdirSync(dir).filter(f => f.startsWith('f') && f.endsWith('.png')).sort().slice(+start, +end).filter((_, i) => i % +step === 0);
  const html = `<body style="margin:0;display:grid;grid-template-columns:repeat(${cols},480px);gap:2px;background:#f0f">${files.map(f => `<figure style="margin:0;position:relative"><img width=480 src="data:image/png;base64,${fs.readFileSync(path.join(dir, f)).toString('base64')}"><figcaption style="position:absolute;top:2px;left:4px;color:red;font:12px monospace;background:#fff8">${f.slice(0,-4)}</figcaption></figure>`).join('')}</body>`;
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 480 * +cols + 2 * (+cols - 1), height: 300 } });
  await page.setContent(html);
  await page.waitForTimeout(500);
  await page.screenshot({ path: out, fullPage: true });
  await browser.close();
  console.log(out, files.length);
})();
