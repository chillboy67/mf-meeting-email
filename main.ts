// One joke about a meeting that should have been an email.
// The joke line must be at most 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "The meeting ended with everyone agreeing to email what we just spent an hour saying out loud.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke + "\n");
