import rss from '@astrojs/rss';

const SITE = 'https://coldwa.st';

export function GET() {
  return rss({
    title: 'Coldwast - Programming & Dev Guides',
    description:
      'Original, regularly-updated programming guides - Haskell, Cabal and the modern developer toolchain. Independent and community-maintained.',
    site: SITE,
    items: [
      {
        title: 'Cabal Sandboxes: What They Were, and What Replaced Them',
        link: `${SITE}/e/blog/2013-08-20-Cabal-sandbox.html`,
        pubDate: new Date('2026-06-13T10:00:00Z'),
        description:
          'A modern, community-updated guide to Cabal sandboxes (cabal-install 1.18) and the nix-style v2-build workflow that replaced them.',
        categories: ['haskell', 'cabal'],
      },
      {
        title: 'Cabal 2.0: the Release that Reshaped Haskell Builds',
        link: `${SITE}/e/blog/2017-09-09-Cabal-2-0.html`,
        pubDate: new Date('2026-06-13T10:05:00Z'),
        description:
          'Nix-style local builds, Backpack mixins, the caret operator and a better solver - and how each stands in the 2026 toolchain.',
        categories: ['haskell', 'cabal'],
      },
      {
        title: 'Parallelising cabal-install: How Haskell Builds Use Your Cores',
        link: `${SITE}/e/blog/2011-08-22-GSoC-Final.html`,
        pubDate: new Date('2026-06-13T10:10:00Z'),
        description:
          'Dependency-graph parallelism, -j builds and GHC job semaphores - the topic a 2011 GSoC project put on the map, updated for 2026.',
        categories: ['haskell', 'cabal'],
      },
    ],
    customData: '<language>en</language>',
  });
}
