import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { existsSync } from 'node:fs';

// coldwa.st - static dev/programming resources.
// build.format:'file' so legacy paths like /e/blog/2013-08-20-Cabal-sandbox.html
// are emitted as literal .html files (exact backlink recovery).
export default defineConfig({
  site: 'https://coldwa.st',
  trailingSlash: 'ignore',
  output: 'static',
  build: {
    format: 'preserve',
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      // Affiliate /go redirects must not be indexed.
      filter: (page) => !page.includes('/go/'),
      // format:'preserve' emits leaf pages as literal .html files, served only at
      // their .html URL (about.html, /e/blog/X.html, /e/c/X.html…). @astrojs/sitemap
      // strips the extension → those <loc>s 404 for Googlebot. Re-append .html for any
      // URL whose built output is a leaf file (dist/<path>.html); directory indexes
      // (/, /e, /fr, /es - served clean) are left untouched.
      serialize(item) {
        const u = new URL(item.url);
        const path = decodeURIComponent(u.pathname).replace(/\/$/, '');
        if (path === '' || /\.[a-z0-9]+$/i.test(path)) return item;
        if (existsSync(`dist${path}.html`) && !existsSync(`dist${path}/index.html`)) {
          u.pathname = path + '.html';
          item.url = u.toString();
        }
        return item;
      },
    }),
  ],
});
