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

  await page.goto('https://portifolio-jefferson-phi.vercel.app', { waitUntil: 'networkidle2' });
  const rootHtml = await page.evaluate(() => document.getElementById('root')?.innerHTML || 'NO ROOT');
  console.log('ROOT LENGTH:', rootHtml.length);
  
  const displayInfo = await page.evaluate(() => {
    return document.body.style.display || 'normal';
  });
  console.log('BODY DISPLAY:', displayInfo);
  
  await browser.close();
})();
