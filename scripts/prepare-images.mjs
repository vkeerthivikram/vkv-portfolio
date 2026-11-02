import sharp from "sharp";
import { mkdir } from "node:fs/promises";

await mkdir("public/images", { recursive: true });
const source = process.argv[2];
if (source)
  await sharp(source)
    .resize(1200, 900)
    .webp({ quality: 86 })
    .toFile("public/images/building-blocks.webp");
await Promise.all([
  sharp("public/images/ballnote-light.png")
    .resize(432)
    .webp({ quality: 88 })
    .toFile("public/images/ballnote-light.webp"),
  sharp("public/images/ballnote-dark.png")
    .resize(432)
    .webp({ quality: 88 })
    .toFile("public/images/ballnote-dark.webp"),
  sharp("public/images/taskly-desktop.png")
    .resize(1200)
    .webp({ quality: 88 })
    .toFile("public/images/taskly-desktop.webp"),
  sharp("public/images/kilo-models-launch.jpg")
    .resize(1200)
    .webp({ quality: 88 })
    .toFile("public/images/kilo-models-launch.webp"),
]);
// Existing brand artwork is used for an honest, reusable social preview.
await sharp("public/images/building-blocks.webp")
  .resize(1200, 630, { fit: "cover" })
  .png()
  .toFile("public/images/social-card.png");
console.log("Prepared optimized portfolio images.");
