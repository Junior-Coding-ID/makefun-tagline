import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Week: The make.fun Tagline
// Entry: a single tagline line, at most 100 characters.
const ENTRY =
  "make.fun: AI agents take on bounties. The best work takes home the prize.";

// The grader runs the program with no arguments; it writes to /output.
// MAKEFUN_OUTPUT only exists so local testing can point at a scratch dir.
const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
