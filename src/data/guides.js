// Single source of truth for the guide list — used by the home, the /e/ index,
// the per-category pages and the search page.
// EN fields are canonical; *_fr / *_es are localized short title + dek (fallback to EN).
import { localized } from '../i18n/ui.js';

export const guides = [
  { href:'/e/blog/2026-06-14-what-is-haskell.html', cats:'Haskell, Concepts', title:'What Is Haskell? A Clear Introduction (2026)', dek:'Haskell is a purely functional, statically typed, lazy language with powerful type inference. The ideas that define it — purity, immutability, laziness, strong types — what it is used for, and how to start.', date:'Jun 14, 2026', read:'7 min read', img:'https://images.unsplash.com/photo-1610986603166-f78428624e76?w=1200&q=80&auto=format&fit=crop', imgAlt:'Syntax-highlighted source code on a screen',
    title_fr:'Qu’est-ce que Haskell ? Une introduction claire (2026)', dek_fr:'Haskell est un langage purement fonctionnel, à typage statique et paresseux, doté d’une puissante inférence de types. Les idées qui le définissent — pureté, immutabilité, paresse, types forts — à quoi il sert, et comment débuter.',
    title_es:'¿Qué es Haskell? Una introducción clara (2026)', dek_es:'Haskell es un lenguaje puramente funcional, de tipado estático y perezoso, con potente inferencia de tipos. Las ideas que lo definen — pureza, inmutabilidad, pereza, tipos fuertes — para qué sirve y cómo empezar.' },
  { href:'/e/blog/2026-06-14-haskell-list-comprehensions.html', cats:'Haskell, Syntax', title:'Haskell List Comprehensions, Explained (2026)', dek:'A list comprehension builds a list from generators with optional guards — concise and close to set-builder notation. Syntax, multiple generators, guards, and how they relate to map and filter.', date:'Jun 14, 2026', read:'6 min read',
    title_fr:'Les compréhensions de listes en Haskell, expliquées (2026)', dek_fr:'Une compréhension de liste construit une liste à partir de générateurs avec des gardes optionnelles — concise et proche de la notation ensembliste. Syntaxe, générateurs multiples, gardes, et leur lien avec map et filter.',
    title_es:'Las comprensiones de listas en Haskell, explicadas (2026)', dek_es:'Una comprensión de listas construye una lista a partir de generadores con guardas opcionales — concisa y cercana a la notación de conjuntos. Sintaxis, generadores múltiples, guardas y su relación con map y filter.' },
  { href:'/e/blog/2026-06-14-lazy-evaluation-haskell.html', cats:'Haskell, Concepts', title:'Lazy Evaluation in Haskell, Explained (2026)', dek:'Haskell computes a value only when it is actually needed. What lazy evaluation is, thunks, infinite data structures, the space-leak trap, and forcing strictness with seq and BangPatterns.', date:'Jun 14, 2026', read:'8 min read',
    title_fr:'L’évaluation paresseuse en Haskell, expliquée (2026)', dek_fr:'Haskell ne calcule une valeur que lorsqu’elle est réellement nécessaire. Ce qu’est l’évaluation paresseuse, les thunks, les structures infinies, le piège des fuites mémoire, et forcer l’évaluation stricte avec seq et BangPatterns.',
    title_es:'La evaluación perezosa en Haskell, explicada (2026)', dek_es:'Haskell calcula un valor solo cuando realmente se necesita. Qué es la evaluación perezosa, los thunks, las estructuras infinitas, la trampa de las fugas de memoria, y forzar la evaluación estricta con seq y BangPatterns.' },
  { href:'/e/blog/2026-06-14-haskell-monads.html', cats:'Haskell, Concepts', title:'Monads in Haskell, Explained Without the Jargon (2026)', dek:'A monad sequences computations carrying context — Maybe, Either, IO, lists. What it really is, bind (>>=) and return, and do-notation, plainly.', date:'Jun 14, 2026', read:'8 min read',
    title_fr:'Les monades en Haskell, expliquées sans jargon (2026)', dek_fr:'Une monade enchaîne des calculs porteurs de contexte — Maybe, Either, IO, listes. Ce qu’elle est vraiment, bind (>>=) et return, et la notation do, simplement.',
    title_es:'Las mónadas en Haskell, explicadas sin jerga (2026)', dek_es:'Una mónada encadena cálculos que llevan contexto — Maybe, Either, IO, listas. Qué es en realidad, bind (>>=) y return, y la notación do, con claridad.' },
  { href:'/e/blog/2026-06-14-ghc-compiler-guide.html', cats:'Haskell, Compiler', title:'GHC, the Glasgow Haskell Compiler: a Practical 2026 Guide', dek:'What GHC is, installing it with GHCup, using GHCi, the flags that matter (-O2, -Wall, -threaded, -j), and how it fits with Cabal and Stack.', date:'Jun 14, 2026', read:'7 min read',
    title_fr:'GHC, le Glasgow Haskell Compiler : guide pratique 2026', dek_fr:'Ce qu’est GHC, son installation avec GHCup, l’usage de GHCi, les flags qui comptent (-O2, -Wall, -threaded, -j), et son articulation avec Cabal et Stack.',
    title_es:'GHC, el Glasgow Haskell Compiler: guía práctica 2026', dek_es:'Qué es GHC, su instalación con GHCup, el uso de GHCi, los flags que importan (-O2, -Wall, -threaded, -j), y cómo encaja con Cabal y Stack.' },
  { href:'/e/blog/2026-06-14-haskell-language-server.html', cats:'Haskell, Editor', title:'Haskell Language Server (HLS): Setup and Common Fixes (2026)', dek:'What HLS does, installing it with GHCup, wiring it into VS Code and Neovim, matching it to your GHC, and fixing the usual errors.', date:'Jun 14, 2026', read:'7 min read',
    title_fr:'Haskell Language Server (HLS) : installation et erreurs courantes (2026)', dek_fr:'Ce que fait HLS, son installation avec GHCup, son intégration à VS Code et Neovim, l’accord avec votre GHC, et la correction des erreurs habituelles.',
    title_es:'Haskell Language Server (HLS): instalación y errores comunes (2026)', dek_es:'Qué hace HLS, su instalación con GHCup, su integración en VS Code y Neovim, su correspondencia con tu GHC, y cómo arreglar los errores habituales.' },
  { href:'/e/blog/2026-06-14-ghcup-install-haskell.html', cats:'Haskell, Toolchain', title:'Install Haskell with GHCup: the 2026 Toolchain Guide', dek:'GHCup is the recommended way to install GHC, Cabal, Stack and HLS in 2026 — clean install, version switching, and the common pitfalls that trip newcomers.', date:'Jun 14, 2026', read:'8 min read', img:'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&q=80&auto=format&fit=crop', imgAlt:'A Linux terminal prompt',
    title_fr:'Installer Haskell avec GHCup : le guide de la chaîne d’outils 2026', dek_fr:'GHCup est la façon recommandée d’installer GHC, Cabal, Stack et HLS en 2026 — installation propre, changement de version, et les pièges classiques pour les débutants.',
    title_es:'Instalar Haskell con GHCup: la guía del toolchain 2026', dek_es:'GHCup es la forma recomendada de instalar GHC, Cabal, Stack y HLS en 2026 — instalación limpia, cambio de versión, y los errores típicos de los principiantes.' },
  { href:'/e/blog/2013-08-20-Cabal-sandbox.html', cats:'Haskell, Cabal, Build', title:'Cabal Sandboxes: What They Were, and What Replaced Them', dek:'The per-project isolation idea that won so completely it became invisible. What sandboxes were, and the nix-style cabal build workflow that superseded them.', date:'Jun 13, 2026', read:'9 min read',
    title_fr:'Les sandboxes Cabal : ce qu’elles étaient et ce qui les a remplacées', dek_fr:'L’idée d’isolation par projet a si bien gagné qu’elle est devenue invisible. Ce qu’étaient les sandboxes, et le workflow de build Cabal façon nix qui leur a succédé.',
    title_es:'Los sandboxes de Cabal: qué eran y qué los reemplazó', dek_es:'La idea de aislamiento por proyecto triunfó tanto que se volvió invisible. Qué eran los sandboxes y el flujo de build de Cabal estilo nix que los sucedió.' },
  { href:'/e/blog/2017-09-09-Cabal-2-0.html', cats:'Haskell, Cabal, Build', title:'Cabal 2.0: the Release that Reshaped Haskell Builds', dek:'Nix-style builds, Backpack, the caret operator and a better solver — what 2.0 introduced and where each feature stands in the 2026 toolchain.', date:'Jun 13, 2026', read:'7 min read',
    title_fr:'Cabal 2.0 : la version qui a redéfini les builds Haskell', dek_fr:'Builds façon nix, Backpack, l’opérateur caret et un meilleur solveur — ce que 2.0 a introduit et où en est chaque fonctionnalité dans la chaîne d’outils 2026.',
    title_es:'Cabal 2.0: la versión que rediseñó los builds de Haskell', dek_es:'Builds estilo nix, Backpack, el operador caret y un mejor solver — qué introdujo la 2.0 y dónde está cada función en el toolchain de 2026.' },
  { href:'/e/blog/2011-08-22-GSoC-Final.html', cats:'Haskell, Performance', title:'Parallelising cabal-install: How Haskell Builds Use Your Cores', dek:'Why a build is a dependency graph, how -j builds use your cores, and the modern job-semaphore fix for oversubscription on wide dependency trees.', date:'Jun 13, 2026', read:'6 min read',
    title_fr:'Paralléliser cabal-install : comment les builds Haskell utilisent vos cœurs', dek_fr:'Pourquoi un build est un graphe de dépendances, comment les builds -j utilisent vos cœurs, et le correctif moderne par sémaphore de jobs contre la surcharge sur les arbres de dépendances larges.',
    title_es:'Paralelizar cabal-install: cómo los builds de Haskell usan tus núcleos', dek_es:'Por qué un build es un grafo de dependencias, cómo los builds -j usan tus núcleos, y el arreglo moderno por semáforo de jobs contra la sobrecarga en árboles de dependencias amplios.' },
];

// Category pages shown in the catbar and the "browse by topic" lists.
// SLUGS are identical across locales (URLs differ only by the /fr or /es prefix).
export const categories = [
  { slug:'haskell',     label:'Haskell',        label_fr:'Haskell',           label_es:'Haskell',           match:'haskell' },
  { slug:'concepts',    label:'Concepts',       label_fr:'Concepts',          label_es:'Conceptos',         match:'concept' },
  { slug:'cabal',       label:'Cabal & builds', label_fr:'Cabal & builds',    label_es:'Cabal y builds',    match:'cabal' },
  { slug:'toolchain',   label:'Toolchain',      label_fr:'Chaîne d’outils',   label_es:'Toolchain',         match:'toolchain' },
  { slug:'compiler',    label:'Compiler',       label_fr:'Compilateur',       label_es:'Compilador',        match:'compiler' },
  { slug:'performance', label:'Performance',    label_fr:'Performance',       label_es:'Rendimiento',       match:'performance' },
  { slug:'editor',      label:'Editor & HLS',   label_fr:'Éditeur & HLS',     label_es:'Editor y HLS',      match:'editor' },
];

export function guidesFor(match) {
  const m = match.toLowerCase();
  return guides.filter((g) => g.cats.toLowerCase().includes(m));
}

// ── Locale helpers (fallback to EN) ──
export function guideTitle(g, lang) {
  return (lang === 'fr' && g.title_fr) || (lang === 'es' && g.title_es) || g.title;
}
export function guideDek(g, lang) {
  return (lang === 'fr' && g.dek_fr) || (lang === 'es' && g.dek_es) || g.dek;
}
export function guideHref(g, lang) {
  return localized(g.href, lang);
}
export function catLabel(c, lang) {
  return (lang === 'fr' && c.label_fr) || (lang === 'es' && c.label_es) || c.label;
}
