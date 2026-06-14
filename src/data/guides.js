// Single source of truth for the guide list — used by the home, the /e/ index,
// the per-category pages and the search page.
export const guides = [
  { href:'/e/blog/2026-06-14-what-is-haskell.html', cats:'Haskell, Concepts', title:'What Is Haskell? A Clear Introduction (2026)', dek:'Haskell is a purely functional, statically typed, lazy language with powerful type inference. The ideas that define it — purity, immutability, laziness, strong types — what it is used for, and how to start.', date:'Jun 14, 2026', read:'7 min read', img:'https://images.unsplash.com/photo-1610986603166-f78428624e76?w=1200&q=80&auto=format&fit=crop', imgAlt:'Syntax-highlighted source code on a screen' },
  { href:'/e/blog/2026-06-14-haskell-list-comprehensions.html', cats:'Haskell, Syntax', title:'Haskell List Comprehensions, Explained (2026)', dek:'A list comprehension builds a list from generators with optional guards — concise and close to set-builder notation. Syntax, multiple generators, guards, and how they relate to map and filter.', date:'Jun 14, 2026', read:'6 min read' },
  { href:'/e/blog/2026-06-14-lazy-evaluation-haskell.html', cats:'Haskell, Concepts', title:'Lazy Evaluation in Haskell, Explained (2026)', dek:'Haskell computes a value only when it is actually needed. What lazy evaluation is, thunks, infinite data structures, the space-leak trap, and forcing strictness with seq and BangPatterns.', date:'Jun 14, 2026', read:'8 min read' },
  { href:'/e/blog/2026-06-14-haskell-monads.html', cats:'Haskell, Concepts', title:'Monads in Haskell, Explained Without the Jargon (2026)', dek:'A monad sequences computations carrying context — Maybe, Either, IO, lists. What it really is, bind (>>=) and return, and do-notation, plainly.', date:'Jun 14, 2026', read:'8 min read' },
  { href:'/e/blog/2026-06-14-ghc-compiler-guide.html', cats:'Haskell, Compiler', title:'GHC, the Glasgow Haskell Compiler: a Practical 2026 Guide', dek:'What GHC is, installing it with GHCup, using GHCi, the flags that matter (-O2, -Wall, -threaded, -j), and how it fits with Cabal and Stack.', date:'Jun 14, 2026', read:'7 min read' },
  { href:'/e/blog/2026-06-14-haskell-language-server.html', cats:'Haskell, Editor', title:'Haskell Language Server (HLS): Setup and Common Fixes (2026)', dek:'What HLS does, installing it with GHCup, wiring it into VS Code and Neovim, matching it to your GHC, and fixing the usual errors.', date:'Jun 14, 2026', read:'7 min read' },
  { href:'/e/blog/2026-06-14-ghcup-install-haskell.html', cats:'Haskell, Toolchain', title:'Install Haskell with GHCup: the 2026 Toolchain Guide', dek:'GHCup is the recommended way to install GHC, Cabal, Stack and HLS in 2026 — clean install, version switching, and the common pitfalls that trip newcomers.', date:'Jun 14, 2026', read:'8 min read', img:'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&q=80&auto=format&fit=crop', imgAlt:'A Linux terminal prompt' },
  { href:'/e/blog/2013-08-20-Cabal-sandbox.html', cats:'Haskell, Cabal, Build', title:'Cabal Sandboxes: What They Were, and What Replaced Them', dek:'The per-project isolation idea that won so completely it became invisible. What sandboxes were, and the nix-style cabal build workflow that superseded them.', date:'Jun 13, 2026', read:'9 min read' },
  { href:'/e/blog/2017-09-09-Cabal-2-0.html', cats:'Haskell, Cabal, Build', title:'Cabal 2.0: the Release that Reshaped Haskell Builds', dek:'Nix-style builds, Backpack, the caret operator and a better solver — what 2.0 introduced and where each feature stands in the 2026 toolchain.', date:'Jun 13, 2026', read:'7 min read' },
  { href:'/e/blog/2011-08-22-GSoC-Final.html', cats:'Haskell, Performance', title:'Parallelising cabal-install: How Haskell Builds Use Your Cores', dek:'Why a build is a dependency graph, how -j builds use your cores, and the modern job-semaphore fix for oversubscription on wide dependency trees.', date:'Jun 13, 2026', read:'6 min read' },
];

// Category pages shown in the catbar and the "browse by topic" lists.
export const categories = [
  { slug:'haskell',     label:'Haskell',      match:'haskell' },
  { slug:'concepts',    label:'Concepts',     match:'concept' },
  { slug:'cabal',       label:'Cabal & builds', match:'cabal' },
  { slug:'toolchain',   label:'Toolchain',    match:'toolchain' },
  { slug:'compiler',    label:'Compiler',     match:'compiler' },
  { slug:'performance', label:'Performance',  match:'performance' },
  { slug:'editor',      label:'Editor & HLS', match:'editor' },
];

export function guidesFor(match) {
  const m = match.toLowerCase();
  return guides.filter((g) => g.cats.toLowerCase().includes(m));
}
