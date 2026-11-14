// Prints tools/resume.html to assets/dylan-hughes-resume.pdf: US Letter, one page, tagged for screen readers.
//   npm run resume
// Needs Playwright's Chromium (npx playwright install chromium). Without it, open tools/resume.html in a browser and
// print to PDF: US Letter, no margins, background graphics on.
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(path.join(root, 'tools/resume.html')).href, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
const height = await page.evaluate(() => document.querySelector('.page').scrollHeight / 96);
if (height > 11.01) console.warn(`The résumé is ${height.toFixed(2)} in tall: it runs past one Letter page.`);
await page.pdf({ path: path.join(root, 'assets/dylan-hughes-resume.pdf'), format: 'Letter', printBackground: true, tagged: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
await browser.close();
console.log(`assets/dylan-hughes-resume.pdf written (${height.toFixed(2)} in of 11).`);
