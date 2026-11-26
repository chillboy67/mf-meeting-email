import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "We spent 47 minutes in a meeting to decide what a one-sentence email could have said, and the only action item was scheduling another meeting.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke + "\n", "utf8");
console.log(joke);
