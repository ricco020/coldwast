// CTA perso par contenu (Eric 2026-06-19) — l'encart "Recommandé" reflète le
// SUJET de chaque page au lieu de toujours parler de Haskell. Offre fixe =
// Infomaniak cloud/VPS (seul programme), seul l'ANGLE change. Défaut = dev
// généraliste (PAS Haskell, qui n'est plus la thématique principale).
// honnêteté: faits vérifiables uniquement (Infomaniak = hébergeur suisse, VPS/cloud).

const ANGLES = {
  en: {
    haskell:    { h: 'Need a box to build and run Haskell?', p: 'Compiling GHC and running your app is smoother on a real Linux server. Infomaniak (Swiss, privacy-respecting) offers VPS and cloud servers for it.' },
    containers: { h: 'Run your containers on a real server', p: 'Docker and Kubernetes shine on a proper Linux host. Infomaniak — a Swiss, privacy-respecting host — offers VPS and cloud servers to run your containers.' },
    server:     { h: 'Get a real Linux server', p: 'A VPS gives you full control to build, deploy and host your projects. Infomaniak — Swiss and privacy-respecting — offers VPS and cloud servers.' },
    api:        { h: 'Host your API', p: 'An API or webhook needs a reliable, always-on server. Infomaniak — a Swiss, privacy-respecting host — offers VPS and cloud servers to run it.' },
    database:   { h: 'Host your database', p: 'Running Postgres, MySQL or a NoSQL store wants a real server you control. Infomaniak — Swiss, privacy-respecting — offers VPS and cloud servers.' },
    devops:     { h: 'Run your builds and deploys', p: 'CI/CD pipelines and deployments need real compute. Infomaniak — a Swiss, privacy-respecting host — offers VPS and cloud servers.' },
    default:    { h: 'Deploy your project', p: 'Building, running an API or hosting an app wants a real Linux box. Infomaniak — a Swiss, privacy-respecting host — offers VPS and cloud servers for it.' },
  },
  fr: {
    haskell:    { h: 'Besoin d’une machine pour builder et faire tourner Haskell ?', p: 'Compiler GHC et faire tourner votre app est plus simple sur un vrai serveur Linux. Infomaniak (suisse, respectueux de la vie privée) propose VPS et serveurs cloud pour ça.' },
    containers: { h: 'Faites tourner vos conteneurs sur un vrai serveur', p: 'Docker et Kubernetes donnent le meilleur sur un vrai hôte Linux. Infomaniak — hébergeur suisse respectueux de la vie privée — propose VPS et serveurs cloud pour vos conteneurs.' },
    server:     { h: 'Obtenez un vrai serveur Linux', p: 'Un VPS vous donne le contrôle total pour builder, déployer et héberger vos projets. Infomaniak — suisse et respectueux de la vie privée — propose VPS et serveurs cloud.' },
    api:        { h: 'Hébergez votre API', p: 'Une API ou un webhook demande un serveur fiable, toujours en ligne. Infomaniak — hébergeur suisse respectueux de la vie privée — propose VPS et serveurs cloud.' },
    database:   { h: 'Hébergez votre base de données', p: 'Faire tourner Postgres, MySQL ou un store NoSQL demande un vrai serveur que vous contrôlez. Infomaniak — suisse, respectueux de la vie privée — propose VPS et serveurs cloud.' },
    devops:     { h: 'Lancez vos builds et déploiements', p: 'Les pipelines CI/CD et les déploiements demandent une vraie puissance de calcul. Infomaniak — hébergeur suisse respectueux de la vie privée — propose VPS et serveurs cloud.' },
    default:    { h: 'Déployez votre projet', p: 'Builder, faire tourner une API ou héberger une app demande une vraie machine Linux. Infomaniak — hébergeur suisse respectueux de la vie privée — propose VPS et serveurs cloud.' },
  },
  es: {
    haskell:    { h: '¿Necesitas una máquina para compilar y ejecutar Haskell?', p: 'Compilar GHC y ejecutar tu app es más fácil en un servidor Linux real. Infomaniak (suizo, respetuoso con la privacidad) ofrece VPS y servidores cloud para ello.' },
    containers: { h: 'Ejecuta tus contenedores en un servidor real', p: 'Docker y Kubernetes rinden mejor en un host Linux real. Infomaniak — un host suizo que respeta la privacidad — ofrece VPS y servidores cloud para tus contenedores.' },
    server:     { h: 'Consigue un servidor Linux real', p: 'Un VPS te da control total para compilar, desplegar y alojar tus proyectos. Infomaniak — suizo y respetuoso con la privacidad — ofrece VPS y servidores cloud.' },
    api:        { h: 'Aloja tu API', p: 'Una API o webhook necesita un servidor fiable y siempre activo. Infomaniak — un host suizo que respeta la privacidad — ofrece VPS y servidores cloud.' },
    database:   { h: 'Aloja tu base de datos', p: 'Ejecutar Postgres, MySQL o un store NoSQL pide un servidor real que controles. Infomaniak — suizo, respetuoso con la privacidad — ofrece VPS y servidores cloud.' },
    devops:     { h: 'Ejecuta tus builds y despliegues', p: 'Los pipelines CI/CD y los despliegues necesitan cómputo real. Infomaniak — un host suizo que respeta la privacidad — ofrece VPS y servidores cloud.' },
    default:    { h: 'Despliega tu proyecto', p: 'Compilar, ejecutar una API o alojar una app pide una máquina Linux real. Infomaniak — un host suizo que respeta la privacidad — ofrece VPS y servidores cloud.' },
  },
};

const RULES = [
  ['haskell',    /haskell|cabal|ghc|ghcup|stack-vs|monad|functor|\bhls\b|lambda/],
  ['containers', /docker|kubernetes|k8s|container|conteneur|contenedor/],
  ['api',        /\bapi\b|webhook|rest|graphql|endpoint/],
  ['database',   /\bsql\b|nosql|database|postgres|mysql|mongo|redis|base de don|base de dat/],
  ['devops',     /devops|ci-cd|ci\/cd|pipeline|github-actions|deployment|deploy/],
  ['server',     /\bvps\b|server|serveur|servidor|linux|hosting|self-host/],
];

export function ctaAngle(lang, hint = '') {
  const L = ANGLES[lang] || ANGLES.en;
  const h = String(hint).toLowerCase();
  for (const [key, re] of RULES) {
    if (re.test(h)) return L[key];
  }
  return L.default;
}
