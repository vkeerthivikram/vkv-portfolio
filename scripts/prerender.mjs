import { createServer } from "vite";
import { readFile, writeFile } from "node:fs/promises";
import { renderToString } from "react-dom/server";
import { createElement } from "react";

// Ship useful semantic HTML before JavaScript loads, then hydrate interactions.
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
try {
  const { default: App } = await server.ssrLoadModule("/src/App.tsx");
  let html = await readFile("dist/index.html", "utf8");
  // Vercel supplies the stable production hostname, including a custom domain
  // when one is configured. Never use a protected preview URL for social links.
  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (productionHost && /^[a-z0-9.-]+$/i.test(productionHost)) {
    const origin = `https://${productionHost}`;
    html = html
      .replace(
        'content="/images/social-card.png"',
        `content="${origin}/images/social-card.png"`,
      )
      .replace(
        "</head>",
        `<link rel="canonical" href="${origin}/" /><meta property="og:url" content="${origin}/" /></head>`,
      );
    await writeFile(
      "dist/sitemap.xml",
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin}/</loc></url></urlset>`,
    );
    await writeFile(
      "dist/robots.txt",
      `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
    );
  }
  await writeFile(
    "dist/index.html",
    html.replace(
      '<div id="root"></div>',
      `<div id="root">${renderToString(createElement(App))}</div>`,
    ),
  );
  console.log("Prerendered portfolio HTML.");
} finally {
  await server.close();
}
