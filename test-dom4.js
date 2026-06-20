import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  const styles = await page.evaluate(() => {
    const nav = document.querySelector('nav')?.style.opacity;
    const hero = document.getElementById('hero')?.style.opacity;
    return { nav, hero };
  });
  console.log(styles);
  await browser.close();
})();
