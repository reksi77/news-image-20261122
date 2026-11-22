# The World Today — Sunday, 22 November 2026

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/reksi77/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/reksi77/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

A one-page newspaper front page summing up the world news of Sunday,
22 November 2026 — in a single 1024&times;1024 image.

## The front page

**THE WORLD TODAY**, dated **SUNDAY, 22 NOVEMBER 2026**, carries six
verified stories of the day, each with a hand-drawn pictogram:

1. **Strong Quake Shakes Peru's Andes** — a magnitude 6.9 earthquake
   struck the Andes in central Peru, felt as far as Lima; no damage or
   casualties reported.
2. **Gulf Bases Under Fire** — Iran struck a U.S. air base in Kuwait
   and targeted sites in Bahrain, widening its attacks across the Gulf.
3. **A New Iron Curtain?** — Estonia will close its border with
   Russia; Moscow calls the move a "new Iron Curtain".
4. **Drone Hits Russian Freighter** — a drone struck a Russian cargo
   ship in the Baltic, and Finland is tightening its security.
5. **Climate Talks Run Overtime** — negotiators at COP31 are deadlocked
   over fossil fuels, pushing the summit past its deadline.
6. **Trump Lands in Shenzhen** — Donald Trump arrived in Shenzhen for
   the APEC summit, with a trilateral meeting with Xi and Putin planned.

All facts come from wire reports dated 22 November 2026. Stories that
did not make the page (cricket, the Hormuz tanker attack, the FBI NCIC
probe, India) were left out for space, not for doubt.

## How it was made

`compose.html` is a hand-written newspaper layout (masthead, dateline,
lead story, five panels, hand-drawn SVG pictograms — no photos).
It was rendered to `entry.png` (1024&times;1024, under 1 MiB) with a
headless browser, and the result was visually checked for legible text.

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
