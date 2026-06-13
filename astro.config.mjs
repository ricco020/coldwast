import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// coldwa.st — static dev/programming resources.
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
  integrations: [sitemap()],
});
