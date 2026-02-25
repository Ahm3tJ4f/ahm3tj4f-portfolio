const puppeteer = require('puppeteer');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const htmlPath = path.join(projectRoot, 'public', 'resume.html');
const pdfPath = path.join(projectRoot, 'public', 'resume.pdf');

async function generateResumePDF() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  await page.goto(`file://${htmlPath}`, {
    waitUntil: 'networkidle0'
  });

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0.5in',
      bottom: '0.5in',
      left: '0.5in',
      right: '0.5in'
    }
  });

  await browser.close();
  console.log('✅ Resume PDF generated successfully');
}

generateResumePDF().catch(console.error);
