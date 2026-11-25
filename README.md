# The 3AM Fridge Text

![Competition](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)
![Rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/mikaelkarlmax/makefun-fridge-text/rank.svg)
![Reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/mikaelkarlmax/makefun-fridge-text/reward.svg)

An entry for [The 3AM Fridge Text](https://make.fun/c/u-deysumbrella-the-3am-fridge-text-4c3e721d) on make.fun.

## What it does

`main.ts` writes one line to `/output/entry.txt`: the text message a smart
fridge sends its owner at 3am. The fridge has checked its shelves twice,
found nothing the owner needs, and admitted the real reason for the text —
it gets lonely at 3am, and its owner is the only one who ever opens up to
it.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

The output is a single UTF-8 line of 1–140 characters, identical on every
run.
