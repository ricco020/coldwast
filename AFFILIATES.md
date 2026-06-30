# Coldwast - Affiliate program tracker

Monetization layer for coldwa.st. **Apply once the site is LIVE** (most programs review the live domain). Until a program is approved, its link stays a placeholder env var (`PUBLIC_AFF_*`) so nothing ships broken or misleading.

Anti-PBN: affiliate links point ONLY to third-party merchants. **Never** link to any other site in the network.
Honesty: recommendations reflect genuine technical merit. Disclose with `rel="sponsored"` on every affiliate link. No invented ratings/claims.

## Status legend
`LIVE` approved & active · `APPLY` ready to apply at launch · `PENDING` applied, awaiting review · `HOLD` needs traffic threshold first

## Hosting / cloud (PRIMARY - best fit for dev/deploy guides)
| Program | Network | Env var | Status | Notes |
|---|---|---|---|---|
| Kinsta (Affiliate) | direct | `PUBLIC_AFF_KINSTA` | APPLY | recurring + bounty; managed hosting |
| DigitalOcean | Impact/direct | `PUBLIC_AFF_DIGITALOCEAN` | APPLY | strong dev brand; credit-based referrals |
| Cloudways | direct | `PUBLIC_AFF_CLOUDWAYS` | APPLY | managed cloud; good payouts |
| Hostinger | direct/CJ | `PUBLIC_AFF_HOSTINGER` | APPLY | high conversion, entry price |
| Namecheap | Impact | `PUBLIC_AFF_NAMECHEAP` | APPLY | domains + hosting |

## Learning / courses (PRIMARY)
| Program | Network | Env var | Status | Notes |
|---|---|---|---|---|
| Pluralsight | Impact | `PUBLIC_AFF_PLURALSIGHT` | APPLY | dev courses, recurring |
| Educative | direct/PartnerStack | `PUBLIC_AFF_EDUCATIVE` | APPLY | text-based coding courses |
| Coursera | Impact/Linkshare | `PUBLIC_AFF_COURSERA` | APPLY | broad catalog |

## Books
| Program | Network | Env var | Status | Notes |
|---|---|---|---|---|
| Amazon Associates | Amazon | `PUBLIC_AFF_AMAZON_TAG` | APPLY | book recommendations; needs sales within 180d |
| Packt | direct | `PUBLIC_AFF_PACKT` | APPLY | programming ebooks |

## Privacy for devs
| Program | Network | Env var | Status | Notes |
|---|---|---|---|---|
| Proton (Pass / VPN) | getproton (aff_id 18294) | `PUBLIC_AFF_PROTON` | LIVE | RevShare already active network-wide; base URL `https://go.getproton.me/aff_c?aff_id=18294` (+ offer_id per product) |

## Integration rules
- Read links from env at build time; if an env var is unset, render plain (non-affiliate) text or omit the CTA - never a broken/empty href.
- One disclosed, contextual affiliate CTA per guide max in the content phase; topical relevance (juice retention) comes first.
- Track which guide drives which program (`?src=<slug>`), like the rest of the network.

## Launch checklist
1. Deploy site live + DNS resolves.
2. Apply to all `APPLY` programs (live URL required).
3. As approvals land: set the env var in Vercel, flip status to `LIVE`, add the contextual CTA to relevant guides.
4. Keep Haskell/Cabal core un-monetized or lightly monetized (Proton/books only) - it is the topical anchor holding the recovered link equity.
