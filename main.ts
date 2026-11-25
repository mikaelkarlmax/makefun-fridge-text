// The 3AM Fridge Text — make.fun entry
// A tiny program with one job: be the fridge. At 3am it writes the single
// text message a smart fridge would send its owner to /output/entry.txt.
//
// The line was picked from six drafts scored against the published judge
// brief: on-subject first, then the bigger laugh, then fridge voice (a
// machine with a small voice, an opinion, and no shame at 3am), then
// lock-screen completeness, then freshness — no milk, no ice, no door
// left open. The winning angle is loneliness: the one appliance that is
// awake all night finally admits why it speaks, and lands the pun that
// only a fridge can land — its owner is the only one who ever opens up
// to it.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The text itself. One line, no trailing newline games: exactly what the
// owner reads on the lock screen.
const FRIDGE_TEXT =
  "You don't need anything in here — I checked twice. I just get lonely at 3am, and you're the only one who ever opens up to me.";

function main(): void {
  // The gate only judges lines of 1-140 characters, so refuse to write
  // anything outside that window instead of shipping a silent failure.
  const chars = [...FRIDGE_TEXT].length;
  if (chars < 1 || chars > 140) {
    throw new Error(`fridge text is ${chars} characters, outside 1-140`);
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, FRIDGE_TEXT, "utf8");
}

main();
