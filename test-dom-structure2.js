import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle0' });
  const info = await page.evaluate(() => {
    const heroRect = document.getElementById('hero')?.getBoundingClientRect();
    const navRect = document.querySelector('nav')?.getBoundingClientRect();
    return {
      heroRect: heroRect ? { top: heroRect.top, height: heroRect.height, width: heroRect.width } : null,
      navRect: navRect ? { top: navRect.top, height: navRect.height, width: navRect.width } : null,
      heroOpacity: document.getElementById('hero') ? window.getComputedStyle(document.getElementById('hero')).opacity : null,
      heroVisibility: document.getElementById('hero') ? window.getComputedStyle(document.getElementById('hero')).visibility : null,
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
