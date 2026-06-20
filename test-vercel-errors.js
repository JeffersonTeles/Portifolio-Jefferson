import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER CONSOLE ERROR:', msg.text());
    }
  });

  page.on('pageerror', err => {
    console.log('PAGE EXCEPTION:', err.toString());
  });

  page.on('requestfailed', request => {
    console.log('REQUEST FAILED:', request.url(), request.failure().errorText);
  });

  await page.goto('https://portifolio-jefferson-phi.vercel.app', { waitUntil: 'networkidle0' });
  const rootHtml = await page.evaluate(() => document.getElementById('root')?.innerHTML || 'NO ROOT');
  console.log('ROOT LENGTH:', rootHtml.length);
  await browser.close();
})();
