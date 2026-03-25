import { chromium } from 'playwright';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs/promises';

const slides = [
  'slide-01-capa',
  'slide-02-agenda',
  'slide-03-missao',
  'slide-04-visao',
  'slide-05-valores',
  'slide-06-hedgehog',
  'slide-07-oceano-azul',
  'slide-08-escada-de-valor',
  'slide-09-unit-economics',
  'slide-10-flywheel',
  'slide-11-fases',
  'slide-12-metas-validacao',
  'slide-13-metas-tracao',
  'slide-14-investimento',
  'slide-15-proximos-passos',
  'slide-16-encerramento',
];

const baseUrl = 'http://localhost:6006/iframe.html?viewMode=story&id=apresenta%C3%A7%C3%B5es-planejamento-estrat%C3%A9gico-2026--';

async function generatePDF() {
  console.log('Iniciando geração do PDF...');

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });

  const pdfBuffers = [];

  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    const page = await context.newPage();
    const url = `${baseUrl}${slide}`;

    console.log(`Gerando slide ${i + 1}/${slides.length}: ${slide}`);

    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000); // Aguardar renderização completa

    const pdfBuffer = await page.pdf({
      width: '1920px',
      height: '1080px',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    pdfBuffers.push(pdfBuffer);
    await page.close();
  }

  await browser.close();

  // Combinar todos os PDFs em um único arquivo
  console.log('Combinando slides em um único PDF...');

  const mergedPdf = await PDFDocument.create();

  for (const pdfBuffer of pdfBuffers) {
    const pdf = await PDFDocument.load(pdfBuffer);
    const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    pages.forEach(page => mergedPdf.addPage(page));
  }

  const mergedPdfBytes = await mergedPdf.save();

  const outputPath = '/Users/edilson/projetos/SmartSenior/docs/presentations/SmartSenior-Planejamento-Estrategico-2026.pdf';
  await fs.writeFile(outputPath, mergedPdfBytes);

  console.log(`PDF gerado com sucesso: ${outputPath}`);
  console.log(`Total de slides: ${slides.length}`);
}

generatePDF().catch(console.error);
