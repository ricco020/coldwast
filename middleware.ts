/**
 * Language negotiation on the bare domain.
 *
 * Reported by Eric on 2026-08-09: opening https://coldwa.st/ from a French
 * browser lands on the English page. The localised versions exist and answer
 * 200 (/fr, /es, /de, /it, /pt) but the root was served in English to
 * everyone because nothing looked at the request language.
 *
 * This runs only on "/" and only when the browser states a preference:
 *   - Googlebot and other crawlers send no Accept-Language, so they keep
 *     getting the English root, which stays the x-default. Indexing is
 *     unchanged.
 *   - A browser asking for French gets a 302 (temporary, never 301: the URL
 *     that is right for one visitor is wrong for the next) to /fr.
 *
 * Vary: Accept-Language is mandatory here. Without it the CDN could hand a
 * cached French redirect to an English visitor.
 *
 * Note: /e/ is the legacy English blog kept for the expired-domain backlinks;
 * it is not a locale and is never a redirect target.
 */

const LOCALES = ['fr', 'es', 'de', 'it', 'pt'] as const;

// vercel.json sets trailingSlash: false - /fr/ is itself redirected to /fr,
// so pointing at the slashed form would cost a second hop.
const TRAILING_SLASH = false;

/** Best supported locale from an Accept-Language header, or null for English. */
function pickLocale(header: string | null): string | null {
  if (!header) return null;

  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params
        .map((p) => p.trim())
        .find((p) => p.startsWith('q='));
      const weight = q ? Number.parseFloat(q.slice(2)) : 1;
      return {
        // "fr-FR" and "fr" both mean French here; we only key on the primary
        // subtag because the site has no regional variants.
        base: tag.trim().toLowerCase().split('-')[0],
        weight: Number.isFinite(weight) ? weight : 0,
      };
    })
    .filter((entry) => entry.base && entry.weight > 0)
    .sort((a, b) => b.weight - a.weight);

  for (const { base } of ranked) {
    // English wins as soon as it outranks every locale we translate into:
    // the root already serves it, so there is nothing to redirect to.
    if (base === 'en') return null;
    if ((LOCALES as readonly string[]).includes(base)) return base;
  }

  return null;
}

export default function middleware(request: Request): Response | undefined {
  const locale = pickLocale(request.headers.get('accept-language'));

  if (!locale) {
    return undefined;
  }

  const url = new URL(request.url);
  url.pathname = TRAILING_SLASH ? `/${locale}/` : `/${locale}`;

  return new Response(null, {
    status: 302,
    headers: {
      Location: url.toString(),
      Vary: 'Accept-Language',
      'Cache-Control': 'no-store',
    },
  });
}

export const config = {
  // Only the bare domain. Every other path already carries its own locale.
  matcher: '/',
};
