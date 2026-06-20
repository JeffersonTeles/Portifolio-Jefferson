import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  const rootHtml = await page.evaluate(() => document.getElementById('root')?.innerHTML || 'NO ROOT');
  console.log('ROOT LENGTH:', rootHtml.length);
  console.log('HAS MAIN:', rootHtml.includes('<main'));
  console.log('HAS HERO:', rootHtml.includes('id="hero"'));
  console.log('HAS ABOUT:', rootHtml.includes('id="about"'));
  console.log('HAS PROJECTS:', rootHtml.includes('id="projects"'));
  await browser.close();
})();
