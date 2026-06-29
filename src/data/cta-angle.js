// CTA perso par contenu (Eric 2026-06-19) — l'encart "Recommandé" reflète le
// SUJET de chaque page au lieu de toujours parler de Haskell. Seul l'ANGLE change.
// Offre = DigitalOcean (cloud pour développeurs, MAJ 2026-06-29 : remplace Infomaniak
// — bien plus aligné avec l'audience devops de coldwa : Droplets/VPS, Kubernetes managé,
// bases managées, App Platform). Défaut = dev généraliste (PAS Haskell).
// honnêteté: faits vérifiables uniquement (DigitalOcean propose Droplets/VPS Linux,
// managed Kubernetes (DOKS), managed databases Postgres/MySQL/Redis, App Platform).

const ANGLES = {
  en: {
    haskell:    { h: 'Need a box to build and run Haskell?', p: 'Compiling GHC and running your app is smoother on a real Linux server. DigitalOcean — a developer cloud — offers Droplets (Linux VPS) with predictable pricing for it.' },
    containers: { h: 'Run your containers on a real server', p: 'Docker and Kubernetes shine on a proper Linux host. DigitalOcean offers Droplets and managed Kubernetes (DOKS) to run your containers.' },
    server:     { h: 'Get a real Linux server', p: 'A VPS gives you full control to build, deploy and host your projects. DigitalOcean Droplets are Linux VPS with root access and flat, predictable pricing.' },
    api:        { h: 'Host your API', p: 'An API or webhook needs a reliable, always-on server. DigitalOcean — a developer cloud — offers Droplets and App Platform to run it.' },
    database:   { h: 'Host your database', p: 'Running Postgres, MySQL or a NoSQL store wants a real server you control. DigitalOcean offers Droplets and managed databases (Postgres, MySQL, Redis).' },
    devops:     { h: 'Run your builds and deploys', p: 'CI/CD pipelines and deployments need real compute. DigitalOcean — a developer cloud with predictable pricing — offers Droplets for your builds and deploys.' },
    default:    { h: 'Deploy your project', p: 'Building, running an API or hosting an app wants a real Linux box. DigitalOcean — a developer cloud — offers Droplets, App Platform and managed Kubernetes for it.' },
  },
  fr: {
    haskell:    { h: 'Besoin d’une machine pour builder et faire tourner Haskell ?', p: 'Compiler GHC et faire tourner votre app est plus simple sur un vrai serveur Linux. DigitalOcean — un cloud pour développeurs — propose des Droplets (VPS Linux) à tarif prévisible pour ça.' },
    containers: { h: 'Faites tourner vos conteneurs sur un vrai serveur', p: 'Docker et Kubernetes donnent le meilleur sur un vrai hôte Linux. DigitalOcean propose des Droplets et du Kubernetes managé (DOKS) pour vos conteneurs.' },
    server:     { h: 'Obtenez un vrai serveur Linux', p: 'Un VPS vous donne le contrôle total pour builder, déployer et héberger vos projets. Les Droplets DigitalOcean sont des VPS Linux avec accès root et un tarif fixe et prévisible.' },
    api:        { h: 'Hébergez votre API', p: 'Une API ou un webhook demande un serveur fiable, toujours en ligne. DigitalOcean — un cloud pour développeurs — propose des Droplets et App Platform pour l’héberger.' },
    database:   { h: 'Hébergez votre base de données', p: 'Faire tourner Postgres, MySQL ou un store NoSQL demande un vrai serveur que vous contrôlez. DigitalOcean propose des Droplets et des bases managées (Postgres, MySQL, Redis).' },
    devops:     { h: 'Lancez vos builds et déploiements', p: 'Les pipelines CI/CD et les déploiements demandent une vraie puissance de calcul. DigitalOcean — cloud pour développeurs à tarif prévisible — propose des Droplets pour vos builds et déploiements.' },
    default:    { h: 'Déployez votre projet', p: 'Builder, faire tourner une API ou héberger une app demande une vraie machine Linux. DigitalOcean — un cloud pour développeurs — propose Droplets, App Platform et Kubernetes managé pour ça.' },
  },
  es: {
    haskell:    { h: '¿Necesitas una máquina para compilar y ejecutar Haskell?', p: 'Compilar GHC y ejecutar tu app es más fácil en un servidor Linux real. DigitalOcean — una nube para desarrolladores — ofrece Droplets (VPS Linux) con precios predecibles para ello.' },
    containers: { h: 'Ejecuta tus contenedores en un servidor real', p: 'Docker y Kubernetes rinden mejor en un host Linux real. DigitalOcean ofrece Droplets y Kubernetes gestionado (DOKS) para tus contenedores.' },
    server:     { h: 'Consigue un servidor Linux real', p: 'Un VPS te da control total para compilar, desplegar y alojar tus proyectos. Los Droplets de DigitalOcean son VPS Linux con acceso root y precios fijos y predecibles.' },
    api:        { h: 'Aloja tu API', p: 'Una API o webhook necesita un servidor fiable y siempre activo. DigitalOcean — una nube para desarrolladores — ofrece Droplets y App Platform para ejecutarlo.' },
    database:   { h: 'Aloja tu base de datos', p: 'Ejecutar Postgres, MySQL o un store NoSQL pide un servidor real que controles. DigitalOcean ofrece Droplets y bases gestionadas (Postgres, MySQL, Redis).' },
    devops:     { h: 'Ejecuta tus builds y despliegues', p: 'Los pipelines CI/CD y los despliegues necesitan cómputo real. DigitalOcean — nube para desarrolladores con precios predecibles — ofrece Droplets para tus builds y despliegues.' },
    default:    { h: 'Despliega tu proyecto', p: 'Compilar, ejecutar una API o alojar una app pide una máquina Linux real. DigitalOcean — una nube para desarrolladores — ofrece Droplets, App Platform y Kubernetes gestionado.' },
  },
  de: {
    haskell:    { h: 'Brauchen Sie einen Server, um Haskell zu bauen und auszuführen?', p: 'GHC zu kompilieren und Ihre App auszuführen läuft auf einem echten Linux-Server reibungsloser. DigitalOcean — eine Entwickler-Cloud — bietet Droplets (Linux-VPS) mit planbaren Preisen dafür.' },
    containers: { h: 'Betreiben Sie Ihre Container auf einem echten Server', p: 'Docker und Kubernetes laufen auf einem echten Linux-Host am besten. DigitalOcean bietet Droplets und managed Kubernetes (DOKS) für Ihre Container.' },
    server:     { h: 'Holen Sie sich einen echten Linux-Server', p: 'Ein VPS gibt Ihnen volle Kontrolle, um Ihre Projekte zu bauen, zu deployen und zu hosten. DigitalOcean Droplets sind Linux-VPS mit Root-Zugriff und festen, planbaren Preisen.' },
    api:        { h: 'Hosten Sie Ihre API', p: 'Eine API oder ein Webhook braucht einen zuverlässigen, dauerhaft erreichbaren Server. DigitalOcean — eine Entwickler-Cloud — bietet Droplets und App Platform dafür.' },
    database:   { h: 'Hosten Sie Ihre Datenbank', p: 'Postgres, MySQL oder einen NoSQL-Store zu betreiben verlangt einen echten Server, den Sie kontrollieren. DigitalOcean bietet Droplets und managed Datenbanken (Postgres, MySQL, Redis).' },
    devops:     { h: 'Führen Sie Ihre Builds und Deployments aus', p: 'CI/CD-Pipelines und Deployments brauchen echte Rechenleistung. DigitalOcean — Entwickler-Cloud mit planbaren Preisen — bietet Droplets für Ihre Builds und Deployments.' },
    default:    { h: 'Bringen Sie Ihr Projekt online', p: 'Bauen, eine API betreiben oder eine App hosten verlangt eine echte Linux-Maschine. DigitalOcean — eine Entwickler-Cloud — bietet Droplets, App Platform und managed Kubernetes.' },
  },
  it: {
    haskell:    { h: 'Ti serve una macchina per compilare ed eseguire Haskell?', p: 'Compilare GHC ed eseguire la tua app è più semplice su un vero server Linux. DigitalOcean — un cloud per sviluppatori — offre Droplet (VPS Linux) con prezzi prevedibili per questo.' },
    containers: { h: 'Esegui i tuoi container su un server vero', p: 'Docker e Kubernetes danno il meglio su un vero host Linux. DigitalOcean offre Droplet e Kubernetes gestito (DOKS) per i tuoi container.' },
    server:     { h: 'Ottieni un vero server Linux', p: 'Un VPS ti dà il controllo totale per compilare, distribuire e ospitare i tuoi progetti. I Droplet DigitalOcean sono VPS Linux con accesso root e prezzi fissi e prevedibili.' },
    api:        { h: 'Ospita la tua API', p: 'Un\'API o un webhook richiede un server affidabile e sempre attivo. DigitalOcean — un cloud per sviluppatori — offre Droplet e App Platform per eseguirlo.' },
    database:   { h: 'Ospita il tuo database', p: 'Eseguire Postgres, MySQL o uno store NoSQL richiede un vero server che controlli tu. DigitalOcean offre Droplet e database gestiti (Postgres, MySQL, Redis).' },
    devops:     { h: 'Esegui i tuoi build e deploy', p: 'Le pipeline CI/CD e i deployment richiedono potenza di calcolo reale. DigitalOcean — cloud per sviluppatori con prezzi prevedibili — offre Droplet per i tuoi build e deploy.' },
    default:    { h: 'Metti online il tuo progetto', p: 'Compilare, eseguire un\'API o ospitare un\'app richiede una vera macchina Linux. DigitalOcean — un cloud per sviluppatori — offre Droplet, App Platform e Kubernetes gestito.' },
  },
  pt: {
    haskell:    { h: 'Precisa de uma máquina para compilar e executar Haskell?', p: 'Compilar o GHC e executar a sua aplicação é mais simples num verdadeiro servidor Linux. A DigitalOcean — uma cloud para programadores — oferece Droplets (VPS Linux) com preços previsíveis para isso.' },
    containers: { h: 'Execute os seus contentores num servidor a sério', p: 'O Docker e o Kubernetes dão o melhor num verdadeiro host Linux. A DigitalOcean oferece Droplets e Kubernetes gerido (DOKS) para os seus contentores.' },
    server:     { h: 'Obtenha um verdadeiro servidor Linux', p: 'Um VPS dá-lhe controlo total para compilar, implementar e alojar os seus projetos. Os Droplets da DigitalOcean são VPS Linux com acesso root e preços fixos e previsíveis.' },
    api:        { h: 'Aloje a sua API', p: 'Uma API ou webhook precisa de um servidor fiável e sempre disponível. A DigitalOcean — uma cloud para programadores — oferece Droplets e App Platform para isso.' },
    database:   { h: 'Aloje a sua base de dados', p: 'Executar Postgres, MySQL ou um store NoSQL exige um servidor a sério que você controle. A DigitalOcean oferece Droplets e bases de dados geridas (Postgres, MySQL, Redis).' },
    devops:     { h: 'Execute os seus builds e deploys', p: 'As pipelines CI/CD e os deployments precisam de poder de computação a sério. A DigitalOcean — cloud para programadores com preços previsíveis — oferece Droplets para os seus builds e deploys.' },
    default:    { h: 'Coloque o seu projeto online', p: 'Compilar, executar uma API ou alojar uma app exige uma verdadeira máquina Linux. A DigitalOcean — uma cloud para programadores — oferece Droplets, App Platform e Kubernetes gerido para isso.' },
  },
};

const RULES = [
  ['haskell',    /haskell|cabal|ghc|ghcup|stack-vs|monad|functor|\bhls\b|lambda/],
  ['containers', /docker|kubernetes|k8s|container|conteneur|contenedor/],
  ['api',        /\bapi\b|webhook|rest|graphql|endpoint/],
  ['database',   /\bsql\b|nosql|database|postgres|mysql|mongo|redis|base de don|base de dat/],
  ['devops',     /devops|ci-cd|ci\/cd|pipeline|github-actions|deployment|deploy/],
  ['server',     /\bvps\b|server|serveur|servidor|linux|hosting|self-host|reverse.proxy|proxy.inver|proxy.rever/],
];

export function ctaAngle(lang, hint = '') {
  const L = ANGLES[lang] || ANGLES.en;
  const h = String(hint).toLowerCase();
  for (const [key, re] of RULES) {
    if (re.test(h)) return L[key];
  }
  return L.default;
}
