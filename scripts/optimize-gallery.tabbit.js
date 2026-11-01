// Run through Tabbit's nodejs command. Uses the browser's existing WebP encoder.
// Reads original artwork locally; no preview server or extra image tools are needed.
const fs = await import('node:fs/promises');
const path = await import('node:path');
const root = '/Users/mima1234/Desktop/XIAOZHAO个人网站/xiaozhao-portfolio';
const sources = path.join(root, 'source-assets/gallery');
const output = path.join(root, 'dist/assets/gallery');
const catalog = JSON.parse(await fs.readFile(path.join(sources, 'catalog.json'), 'utf8'));
await fs.mkdir(output, { recursive: true });
await page.goto('about:blank', { waitUntil: 'load' });
const results = [];
for (const item of catalog) {
  const input = await fs.readFile(path.join(sources, item.source));
  const encoded = await page.evaluate(async ({ id, base64, sourceWidth }) => {
    const source = new Image();
    source.src = 'data:image/png;base64,' + base64;
    await source.decode();
    const variants = [
      { width: 320, quality: .82, suffix: '-320' },
      { width: 640, quality: .82, suffix: '-640' },
      { width: Math.min(1600, sourceWidth), quality: .88, suffix: '' }
    ];
    const outputs = [];
    for (const variant of variants) {
      const canvas = document.createElement('canvas');
      canvas.width = variant.width;
      canvas.height = Math.round(source.naturalHeight * variant.width / source.naturalWidth);
      const ctx = canvas.getContext('2d', { alpha: true });
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/webp', variant.quality));
      if (blob?.type !== 'image/webp') throw new Error('WebP encoding unavailable');
      const data = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      outputs.push({ filename: id + variant.suffix + '.webp', width: canvas.width, height: canvas.height, bytes: blob.size, data });
    }
    return outputs;
  }, { id: item.id, base64: input.toString('base64'), sourceWidth: item.width });
  const files = [];
  for (const { data, ...file } of encoded) {
    await fs.writeFile(path.join(output, file.filename), Buffer.from(data, 'base64'));
    files.push(file);
  }
  results.push({ id: item.id, sourceBytes: item.bytes, files });
}
return results;
