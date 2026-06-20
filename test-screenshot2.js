import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle0' });
  const innerText = await page.evaluate(() => document.body.innerText);
  console.log('INNER TEXT PREVIEW:', innerText.substring(0, 100));
  await browser.close();
})();
