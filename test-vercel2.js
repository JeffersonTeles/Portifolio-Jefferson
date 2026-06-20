import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  page.on('response', response => {
    if (!response.ok()) {
      console.log('404 URL:', response.url());
    }
  });

  await page.goto('https://portifolio-jefferson-phi.vercel.app', { waitUntil: 'networkidle2' });
  await browser.close();
})();
