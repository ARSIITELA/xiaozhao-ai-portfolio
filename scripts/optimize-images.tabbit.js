// Run through Tabbit's nodejs command with the local preview serving on port 8765.
// Uses the browser's existing WebP encoder; no downloaded image tools are needed.
const fs = await import('node:fs/promises');
const path = await import('node:path');
const output = '/Users/mima1234/Desktop/XIAOZHAO个人网站/xiaozhao-portfolio/dist/assets';
const jobs = [
  ['painted-character', [512, 1024]],
  ['painted-wordmark', [480, 960, 1440, 1920]],
  ['painted-orbit', [320, 640, 1254]],
  ['painted-glider', [320, 640, 1254]],
  ['painted-notebook', [320, 640, 1254]],
  ['paint-study', [640, 1254]],
  ['paint-study', [384], 'paint-texture-384']
];
await page.goto('http://127.0.0.1:8765/assets/painted-character.png', { waitUntil: 'load' });
const results = [];
for (const [name, widths, alias] of jobs) {
  const encoded = await page.evaluate(async ({ name, widths, alias }) => {
    const source = new Image();
    source.src = '/assets/' + name + '.png';
    await source.decode();
    const items = [];
    for (const width of widths) {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = Math.round(source.naturalHeight * width / source.naturalWidth);
      const ctx = canvas.getContext('2d', { alpha: true });
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/webp', .82));
      if (blob?.type !== 'image/webp') throw new Error('WebP encoding unavailable');
      const data = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      const stem = alias || name + (width === widths[widths.length - 1] ? '' : '-' + width);
      items.push({ filename: stem + '.webp', width, height: canvas.height, bytes: blob.size, data });
    }
    return items;
  }, { name, widths, alias });
  for (const { data, ...item } of encoded) {
    await fs.writeFile(path.join(output, item.filename), Buffer.from(data, 'base64'));
    results.push(item);
  }
}
return results;
