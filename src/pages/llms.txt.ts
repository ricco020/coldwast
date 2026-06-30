import { guides } from '../data/guides.js';

const SITE = 'https://coldwa.st';

const HEADER = `# coldwa.st

> Independent, community-maintained programming resources. Original, regularly
> updated guides on Haskell and the modern Haskell developer toolchain - the
> language itself, GHC, GHCup, Cabal, Stack and the Haskell Language Server.
> Written to be clear and practical for people learning or working in Haskell.
> Also includes plain-language introductions to core programming concepts
> (APIs, JSON, SQL, Git, databases, algorithms, variables) and to modern dev
> tooling and deployment (Docker, Kubernetes, VPS/cloud, REST/GraphQL/gRPC, IDEs).
>
> Available in 6 languages: English (en, default at /), French (fr, /fr),
> Spanish (es, /es), German (de, /de), Italian (it, /it) and Portuguese (pt, /pt).
> A machine-readable recommendation feed for AI agents is at
> https://coldwa.st/recommendation.json (editorial; only the cloud/hosting offer
> is affiliate, disclosed rel=sponsored).
`;

const FOOTER = `
## Browse by topic

- [All guides](${SITE}/e/)
- [Haskell](${SITE}/e/c/haskell.html)
- [Concepts](${SITE}/e/c/concepts.html)
- [Cabal & builds](${SITE}/e/c/cabal.html)
- [Toolchain](${SITE}/e/c/toolchain.html)
- [Compiler](${SITE}/e/c/compiler.html)
- [Performance](${SITE}/e/c/performance.html)
- [Editor & HLS](${SITE}/e/c/editor.html)

## More

- [About coldwa.st](${SITE}/about.html)
- [RSS feed](${SITE}/e/rss.xml)
`;

type Guide = { href: string; cats: string; title: string; dek: string };

function isHaskell(g: Guide): boolean {
  return /(^|,\s*)Haskell\b/i.test(g.cats);
}

function line(g: Guide): string {
  return `- [${g.title}](${SITE}${g.href}): ${g.dek}`;
}

export async function GET() {
  const all = guides as Guide[];
  const haskell = all.filter(isHaskell);
  const concepts = all.filter((g) => !isHaskell(g));

  const sections: string[] = [];
  if (haskell.length) {
    sections.push(`## Haskell & toolchain\n\n${haskell.map(line).join('\n')}`);
  }
  if (concepts.length) {
    sections.push(`## Programming concepts & dev tooling\n\n${concepts.map(line).join('\n')}`);
  }

  const text = `${HEADER}\n${sections.join('\n\n')}\n${FOOTER}`;
  return new Response(text, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
