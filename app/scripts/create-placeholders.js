const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createOperatorPlaceholder() {
  const outputDir = path.join(__dirname, '..', 'public', 'images', 'people', 'operator');
  
  // Create a simple placeholder - 800x600 gray image with text
  const svg = `
    <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#D2B48C"/>
      <text x="400" y="280" font-family="system-ui" font-size="24" fill="#55514A" text-anchor="middle" dominant-baseline="middle">
        OPERATOR PLACEHOLDER
      </text>
      <text x="400" y="320" font-family="system-ui" font-size="16" fill="#777267" text-anchor="middle" dominant-baseline="middle">
        Replace with photorealistic operator-idle.webp
      </text>
      <text x="400" y="360" font-family="system-ui" font-size="14" fill="#9A5146" text-anchor="middle" dominant-baseline="middle">
        ~25-40s Indian male, casual clothes, behind counter
      </text>
    </svg>
  `;
  
  await sharp(Buffer.from(svg))
    .webp({ quality: 85 })
    .toFile(path.join(outputDir, 'operator-idle.webp'));
  
  await sharp(Buffer.from(svg))
    .avif({ quality: 70 })
    .toFile(path.join(outputDir, 'operator-idle.avif'));
  
  console.log('Created operator-idle.webp and operator-idle.avif (placeholder)');
}

async function createAudioPlaceholders() {
  const outputDir = path.join(__dirname, '..', 'public', 'audio', 'ambience');
  
  // Create silent MP3 placeholders using a minimal valid MP3 header
  // This is a very short silent MP3 (about 0.1 seconds)
  const silentMp3 = Buffer.from([
    0xFF, 0xFB, 0x90, 0x44, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
  ]);
  
  fs.writeFileSync(path.join(outputDir, 'ambience-fan-loop.mp3'), silentMp3);
  fs.writeFileSync(path.join(outputDir, 'ambience-room-loop.mp3'), silentMp3);
  fs.writeFileSync(path.join(outputDir, 'music-cafe-fm-01.mp3'), silentMp3);
  
  console.log('Created placeholder audio files (silent MP3s - replace with real audio)');
}

async function main() {
  await createOperatorPlaceholder();
  await createAudioPlaceholders();
  console.log('\nAll placeholder assets created!');
}

main().catch(console.error);