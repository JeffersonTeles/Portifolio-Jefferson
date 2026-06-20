import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle0' });
  const info = await page.evaluate(() => {
    return {
      bodyStyle: document.body.style.cssText,
      rootStyle: document.getElementById('root')?.style.cssText,
      mainStyle: document.querySelector('main')?.style.cssText,
      heroRect: document.getElementById('hero')?.getBoundingClientRect(),
      navRect: document.querySelector('nav')?.getBoundingClientRect(),
      zIndexes: Array.from(document.querySelectorAll('*')).filter(el => {
        const z = window.getComputedStyle(el).zIndex;
        return z !== 'auto' && parseInt(z) > 10;
      }).map(el => ({
        tag: el.tagName,
        id: el.id,
        className: el.className,
        z: window.getComputedStyle(el).zIndex
      }))
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
