# The World Today — Sunday, 22 November 2026

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/reksi77/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/reksi77/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

A one-page newspaper front page summing up the full day of world news
of Sunday, 22 November 2026 — **35 stories from 7 regions and 13
fields** in a single 1024&times;1024 image.

## The front page

**THE WORLD TODAY**, dated **SUNDAY, 22 NOVEMBER 2026**, is built on
the winning formula: density over tidiness. It carries a masthead that
advertises the count, a "THE DAY IN UTC" timeline (7 timed events), a
"THE DAY IN NUMBERS" strip (6 big figures), 3 illustrated lead
stories, 10 numbered stories with mini-charts, a "WHERE IT HAPPENED"
world map with numbered pins, 22 "ALSO TODAY" briefs, and a "DATE
CHECK" box that explicitly strikes out stories from other dates.

### 3 leads

1. **COP31 collapses: no deal as EU rejects pact without fossil
   fuels** — the EU formally rejected the draft Antalya Pact; the
   longest climate summit ever ended with no agreement, the first COP
   to fail outright since Copenhagen 2009. (Reuters, The Guardian, BBC
   — CONFIRMED)
2. **Gulf in flames: Iran hits U.S. bases in Bahrain; two civilians
   hurt** — Bahrain confirmed two injured; the IRGC claimed it
   destroyed two Patriot radars (unverified) and downed a fourth U.S.
   MQ-1 drone in 24 hours. (Reuters, AFP, Al Jazeera — CONFIRMED;
   IRGC claim REPORTED)
3. **Dymer flattened: drone collapses flats, 14 missing under
   rubble** — a Russian drone destroyed a five-storey block near Kyiv;
   186 drones were launched overnight, 161 downed. (AP, Reuters,
   Ukraine SES — CONFIRMED)

### 10 numbered stories

1. **Baltic freighter still burning after drone hit** — the Russian
   cargo ship *Sparta II* burned through the night off Finland; all 16
   crew evacuated. (Reuters)
2. **Java factory fire: 24 body bags, dozens missing** — fire at the
   PT Fonusa Agung Mulia candy factory in Cikande; 29 still missing.
   (Reuters)
3. **Seoul minister quits over AI exam-cheating chaos** — Education
   Minister Choi Kyo-jin resigned; 111 suspected cheating cases among
   500,000 Suneung candidates. (Yonhap, AFP)
4. **"El Chapo Isidro" captured in Sinaloa raid; 11 dead** — FBI Ten
   Most Wanted fugitive Fausto Isidro Meza Flores seized in Guasave.
   (AP, Reuters)
5. **Moscow cries "Iron Curtain" as Estonia seals border** — all road
   crossings with Russia shut from 1 December for at least six months.
   (Al Jazeera, Reuters)
6. **Bitcoin claws back $60,000 after two-year low** — up 9% from a
   $55,130 low after a $1.8bn liquidation wave eased. (Reuters,
   CoinDesk)
7. **Nigeria boat toll rises to 24 in Bayelsa** — NEMA team deployed
   after the capsize. (Citizen Digital, Vanguard)
8. **Ethiopia launches polio drive for 11.3m children** — house-to-house
   campaign with WHO and UNICEF. (WHO, PANA — OFFICIAL)
9. **Mongolia heads for snap presidential vote** — president resigned
   amid $25m bribery allegations; parliament approved 96–8. (MONTSAME,
   AFP)
10. **Black Foils win Dubai SailGP as GBR title hopes die** — New
    Zealand beat Australia in the final race. (SailGP, Reuters)

### Also today (22 briefs)

Saturday football (Arsenal 2–2 Newcastle; Leeds stun Chelsea 4–1;
Man City 1–1 Fulham; Real Madrid 2–1 Celta; Roma 5–1 Parma; PSG 3–2
Nice); Liverpool v Man Utd and NFL Week 11 fixtures; Australia edge
Wales 29–26 in rugby; India declare 720/9 in the New Zealand Test;
West Bank settler arson condemned; Gaza: IDF names 3 killed; two
tankers hit near Hormuz; swimmer crosses the strait in protest;
Kaliningrad air alert; Ukraine hits a Krasnodar facility; Brazil's
Senate backs Lula's fiscal plan; China travel; Jeffries vows to end
the Iran war; FBI hack; South Sudan attack in Duk; Somalia opens a
naval HQ; heat in south-east Australia and Cyclone Xavier.

### Date check

Stories from other dates are explicitly struck out on the page, not
counted: Peru's 6.9 quake (21 Nov, 00:09 UTC), the Trump–Xi–Putin
Shenzhen summit (19 Nov), Nvidia's 14% fall on an SEC probe report
(20 Nov), and the S&P 500 correction (20 Nov). "Not yet": the COP31
final text, NFL Sunday results, Liverpool v Man Utd.

All facts come from wire reports dated 22 November 2026. Saturday
items are marked (Sat). Claims that could not be independently
verified are tagged REPORTED.

## How it was made

`compose.html` is a hand-written newspaper layout (masthead, timeline
and numbers strips, three leads with hand-drawn SVG illustrations, ten
numbered stories with mini-charts, a hand-drawn SVG world map, briefs,
and a date-check box — no photos, no downloaded assets). It was
rendered to `entry.png` (1024&times;1024, under 1 MiB) with a headless
browser, and the result was visually checked for legible text and no
overflow.

`main.ts` copies `entry.png` into `$MAKEFUN_OUTPUT_DIR/entry.png` and
validates the copy: PNG signature, 1024&times;1024 dimensions, size
&le; 1 MiB, and a matching SHA-256 checksum. It uses only the Node
standard library, makes no network requests, and is deterministic.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `entry.png` into the output directory and prints its
dimensions, size, and SHA-256.

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?ref=t3nmdwvx&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
