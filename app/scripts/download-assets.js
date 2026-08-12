const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

// Stitch image URLs from the designs
const IMAGE_URLS = {
  'cafe-interior-hero': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf0KC10BKB-B4IkE1V9b7nMN_UXHw-a62eHjH_0B_LWIxqmqRySOGtaapDmase59Pl9K0TDDY0otcnPZ5yGcmbaQJk6DfBBkEi4g2zt52oy8vSkP-_PHYbHNwogC7GIGdr7aNoZuB_4JqUx_LlEc2Bywwk-xI45s9U-BrcpWSdvee6u4OxLL9P2Xp3BVUYmqLIT5rjYMGfTZLp9VGQHUOIZQtcC4p0qbntatKgaUWRJ48VH6l7z6oQSw',
  'cafe-interior-mobile': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSjtWfS07nNIYYt5WcIBtCxv6HgDDtWAZWwR0sRqL61caA0G3qej293f7_iMZOGK4JcnQsNBb81dcR0-FpXHkcpC4FAeliZirbIqjzgCwaO9OthdQqK47DS-xw1psfvGZF3ZPVwviuVv0wgXH8VbcPV7JuFGBCadkQoW-FaWO5lQttEqelkLa845BaWMvI-NPUycmU5qeugxssBXkryTrHOceGgo-95QaADsmx-IfmevmvLq03sb4e3g',
  'cafe-storefront': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSjtWfS07nNIYYt5WcIBtCxv6HgDDtWAZWwR0sRqL61caA0G3qej293f7_iMZOGK4JcnQsNBb81dcR0-FpXHkcpC4FAeliZirbIqjzgCwaO9OthdQqK47DS-xw1psfvGZF3ZPVwviuVv0wgXH8VbcPV7JuFGBCadkQoW-FaWO5lQttEqelkLa845BaWMvI-NPUycmU5qeugxssBXkryTrHOceGgo-95QaADsmx-IfmevmvLq03sb4e3g',
  'cafe-counter': 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3Gpu5k4sD3ADEjpY8DqDWsAw52YG8wPedft6Dv913_1UxAsKy4K1i7qs3H-cwwq3x9JLeEYKpfJHBZ8KJnQrc3ME5KEBczDrpCexIoUwBiXba7qORnA2qkP1haHopv9GDmltdxFAjPdhsD3ojUl2LCDMeFmIhxYYFCtoSLaV2fHXmN5v4MnRz4yBY6FQEW4kXLAh8geE6S1onJlje8apNIl30WUuO6-AD1vDvZ9Y5tt09IekIhs8UAg',
  'cafe-gaming-area': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSjtWfS07nNIYYt5WcIBtCxv6HgDDtWAZWwR0sRqL61caA0G3qej293f7_iMZOGK4JcnQsNBb81dcR0-FpXHkcpC4FAeliZirbIqjzgCwaO9OthdQqK47DS-xw1psfvGZF3ZPVwviuVv0wgXH8VbcPV7JuFGBCadkQoW-FaWO5lQttEqelkLa845BaWMvI-NPUycmU5qeugxssBXkryTrHOceGgo-95QaADsmx-IfmevmvLq03sb4e3g',
  'cafe-browsing-area': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf0KC10BKB-B4IkE1V9b7nMN_UXHw-a62eHjH_0B_LWIxqmqRySOGtaapDmase59Pl9K0TDDY0otcnPZ5yGcmbaQJk6DfBBkEi4g2zt52oy8vSkP-_PHYbHNwogC7GIGdr7aNoZuB_4JqUx_LlEc2Bywwk-xI45s9U-BrcpWSdvee6u4OxLL9P2Xp3BVUYmqLIT5rjYMGfTZLp9VGQHUOIZQtcC4p0qbntatKgaUWRJ48VH6l7z6oQSw',
};

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'environment');

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    }).on('error', reject);
  });
}

async function processImage(name, url) {
  try {
    console.log(`Downloading ${name}...`);
    const buffer = await downloadImage(url);
    console.log(`Downloaded: ${name} (${buffer.length} bytes)`);

    // Hero version: 1920px wide for cafe-interior-hero, 1600px for others
    const heroWidth = name === 'cafe-interior-hero' ? 1920 : 1600;
    const heroPath = path.join(OUTPUT_DIR, `${name}.webp`);
    
    await sharp(buffer)
      .resize(heroWidth, null, { withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(heroPath);
    console.log(`Optimized: ${name}.webp (${heroWidth}px wide)`);

    // Mobile version: 1200px wide for cafe-interior-hero and cafe-interior-mobile
    if (name === 'cafe-interior-hero' || name === 'cafe-interior-mobile') {
      const mobilePath = path.join(OUTPUT_DIR, `${name}-mobile.webp`);
      await sharp(buffer)
        .resize(1200, null, { withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(mobilePath);
      console.log(`Optimized: ${name}-mobile.webp (1200px wide)`);
    }

    // Also create AVIF version for modern browsers
    const avifPath = path.join(OUTPUT_DIR, `${name}.avif`);
    await sharp(buffer)
      .resize(heroWidth, null, { withoutEnlargement: true })
      .avif({ quality: 70 })
      .toFile(avifPath);
    console.log(`Optimized: ${name}.avif (${heroWidth}px wide)`);

  } catch (err) {
    console.error(`Failed to process ${name}:`, err.message);
  }
}

async function main() {
  console.log('Downloading and optimizing Stitch reference images...\n');

  for (const [name, url] of Object.entries(IMAGE_URLS)) {
    await processImage(name, url);
    console.log(''); // spacing
  }

  console.log('Done! Check the output directory for optimized WebP/AVIF images.');
}

main().catch(console.error);