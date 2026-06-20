import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'screenshot.png' });
  
  const hasText = await page.evaluate(() => document.body.innerText.includes('CRAFTING'));
  console.log('HAS TEXT:', hasText);
  await browser.close();
})();
