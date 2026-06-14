// UI strings for the three locales. EN lives at the root; FR at /fr, ES at /es.
export const LOCALES = ['en', 'fr', 'es'];
export const DEFAULT_LOCALE = 'en';

// Prefix a root-relative path for a locale ('' for en).
export function localized(path, lang) {
  if (lang === 'en') return path;
  return '/' + lang + path;
}

export const ui = {
  en: {
    nav_guides: 'Guides', nav_about: 'About', nav_rss: 'RSS',
    in_word: 'in', search_ph: 'Search guides…',
    search_h1: 'Search the guides', search_ph2: 'Search Haskell, Cabal, GHC…',
    wrote: 'wrote', read_more: 'Read more…', updated: 'Updated 2026',
    all_guides: 'All guides', category: 'Category', guides_word: ['guide', 'guides'],
    also_related: 'Also related to', other_topics: 'Other topics', browse_topic: 'Browse by topic',
    popular: 'Popular guides', keep_reading: 'Keep reading',
    reco: 'Recommended',
    aff_h: 'Deploy your Haskell project',
    aff_p: 'Building GHC and running your app wants a real Linux box. Infomaniak — a Swiss, privacy-respecting host — offers VPS and cloud servers for it.',
    aff_cta: 'See Infomaniak cloud →',
    art_aff_h: 'Need a box to build and run Haskell?',
    art_aff_p: 'Compiling GHC and running your app is smoother on a real Linux server. Infomaniak (Swiss, privacy-respecting) offers VPS and cloud servers for it.',
    aff_disc: 'Affiliate link — supports these free guides.',
    cookie: 'We use a privacy-friendly analytics cookie (anonymised IP) only if you accept. See our',
    cookie_policy: 'policy', cookie_accept: 'Accept', cookie_decline: 'Decline',
    footer_tag: 'Coldwast — Programming & Dev Guides',
    footer_about: 'Independent, community-maintained programming references. The Haskell/Cabal guides are modern, updated rewrites of topics this domain was historically known for — original content, not authored by or affiliated with the domain’s previous owner.',
    footer_policy: 'About & editorial policy',
    no_result: 'No guide matches your search.', browse_all: 'Browse all guides →',
  },
  fr: {
    nav_guides: 'Guides', nav_about: 'À propos', nav_rss: 'RSS',
    in_word: 'dans', search_ph: 'Rechercher un guide…',
    search_h1: 'Rechercher dans les guides', search_ph2: 'Rechercher Haskell, Cabal, GHC…',
    wrote: 'a écrit', read_more: 'Lire la suite…', updated: 'Mis à jour 2026',
    all_guides: 'Tous les guides', category: 'Catégorie', guides_word: ['guide', 'guides'],
    also_related: 'Aussi en lien avec', other_topics: 'Autres thèmes', browse_topic: 'Parcourir par thème',
    popular: 'Guides populaires', keep_reading: 'À lire ensuite',
    reco: 'Recommandé',
    aff_h: 'Déployez votre projet Haskell',
    aff_p: 'Compiler GHC et faire tourner votre app demande une vraie machine Linux. Infomaniak — hébergeur suisse respectueux de la vie privée — propose VPS et serveurs cloud pour ça.',
    aff_cta: 'Voir le cloud Infomaniak →',
    art_aff_h: 'Besoin d’une machine pour builder et faire tourner Haskell ?',
    art_aff_p: 'Compiler GHC et faire tourner votre app est plus simple sur un vrai serveur Linux. Infomaniak (suisse, respectueux de la vie privée) propose VPS et serveurs cloud pour ça.',
    aff_disc: 'Lien affilié — soutient ces guides gratuits.',
    cookie: 'Nous utilisons un cookie d’analyse respectueux de la vie privée (IP anonymisée) uniquement si vous acceptez. Voir notre',
    cookie_policy: 'politique', cookie_accept: 'Accepter', cookie_decline: 'Refuser',
    footer_tag: 'Coldwast — Guides de programmation & dev',
    footer_about: 'Références de programmation indépendantes et communautaires. Les guides Haskell/Cabal sont des réécritures modernes et actualisées des sujets pour lesquels ce domaine était historiquement connu — contenu original, non rédigé par ni affilié à l’ancien propriétaire du domaine.',
    footer_policy: 'À propos & politique éditoriale',
    no_result: 'Aucun guide ne correspond à votre recherche.', browse_all: 'Voir tous les guides →',
  },
  es: {
    nav_guides: 'Guías', nav_about: 'Acerca de', nav_rss: 'RSS',
    in_word: 'en', search_ph: 'Buscar una guía…',
    search_h1: 'Buscar en las guías', search_ph2: 'Buscar Haskell, Cabal, GHC…',
    wrote: 'escribió', read_more: 'Leer más…', updated: 'Actualizado 2026',
    all_guides: 'Todas las guías', category: 'Categoría', guides_word: ['guía', 'guías'],
    also_related: 'También relacionado con', other_topics: 'Otros temas', browse_topic: 'Explorar por tema',
    popular: 'Guías populares', keep_reading: 'Sigue leyendo',
    reco: 'Recomendado',
    aff_h: 'Despliega tu proyecto Haskell',
    aff_p: 'Compilar GHC y ejecutar tu app pide una máquina Linux real. Infomaniak — un host suizo que respeta la privacidad — ofrece VPS y servidores cloud para ello.',
    aff_cta: 'Ver el cloud de Infomaniak →',
    art_aff_h: '¿Necesitas una máquina para compilar y ejecutar Haskell?',
    art_aff_p: 'Compilar GHC y ejecutar tu app es más fácil en un servidor Linux real. Infomaniak (suizo, respetuoso con la privacidad) ofrece VPS y servidores cloud para ello.',
    aff_disc: 'Enlace de afiliado — apoya estas guías gratuitas.',
    cookie: 'Usamos una cookie de analítica respetuosa con la privacidad (IP anonimizada) solo si la aceptas. Consulta nuestra',
    cookie_policy: 'política', cookie_accept: 'Aceptar', cookie_decline: 'Rechazar',
    footer_tag: 'Coldwast — Guías de programación y desarrollo',
    footer_about: 'Referencias de programación independientes y mantenidas por la comunidad. Las guías de Haskell/Cabal son reescrituras modernas y actualizadas de los temas por los que este dominio era conocido históricamente — contenido original, no escrito por ni afiliado al anterior propietario del dominio.',
    footer_policy: 'Acerca de & política editorial',
    no_result: 'Ninguna guía coincide con tu búsqueda.', browse_all: 'Ver todas las guías →',
  },
};
