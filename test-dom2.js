import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER ERROR:', msg.text());
    }
  });

  page.on('pageerror', err => {
    console.log('PAGE EXCEPTION:', err.toString());
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  const rootHtml = await page.evaluate(() => document.getElementById('root')?.innerHTML || 'NO ROOT');
  console.log('ROOT HTML:', rootHtml.substring(0, 500));
  await browser.close();
})();
