import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('https://portifolio-jefferson-phi.vercel.app', { waitUntil: 'networkidle0' });
  const swRegistrations = await page.evaluate(async () => {
    if ('serviceWorker' in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      return regs.map(r => r.active ? r.active.scriptURL : 'pending');
    }
    return [];
  });
  console.log('SW URLS:', swRegistrations);
  await browser.close();
})();