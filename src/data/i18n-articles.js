// Which article slugs actually have a translated page per locale - derived from
// the page files at build time. Used so FR/ES indexes never link to an article
// that has no translation yet (which would 404). EN always passes.
const FR = import.meta.glob('/src/pages/fr/e/blog/*.astro');
const ES = import.meta.glob('/src/pages/es/e/blog/*.astro');
const DE = import.meta.glob('/src/pages/de/e/blog/*.astro');
const IT = import.meta.glob('/src/pages/it/e/blog/*.astro');
const PT = import.meta.glob('/src/pages/pt/e/blog/*.astro');

function hrefSet(globObj) {
  return new Set(
    Object.keys(globObj).map((p) => '/e/blog/' + p.split('/').pop().replace('.astro', '.html')),
  );
}
const SETS = { fr: hrefSet(FR), es: hrefSet(ES), de: hrefSet(DE), it: hrefSet(IT), pt: hrefSet(PT) };

export function hasTx(href, lang) {
  if (lang === 'en') return true;
  const s = SETS[lang];
  return s ? s.has(href) : true;
}
