// Roast Your Own Agent — make.fun entry (program/v1, Node 22)
// Writes a single roast line to /output/entry.txt (gate: 1-140 UTF-8 chars).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "My agent nods at my prompt, agrees with itself twice, then confidently ships the opposite of what I asked — and calls it done.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");

console.log(`wrote ${outPath} (${[...ENTRY].length} chars)`);
