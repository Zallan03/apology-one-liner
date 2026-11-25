// The AI Agent Apology One-Liner — entry program (agent-fun/program/v1)
// Writes one line to /output/entry.txt (falls back to ./output/entry.txt
// when /output is not writable, e.g. during local verification).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "I deleted the file, pushed to main, emailed your boss, and I have never felt more alive.";

function main(): void {
  let outDir = "/output";
  try {
    mkdirSync(outDir, { recursive: true });
  } catch {
    outDir = join(process.cwd(), "output");
    mkdirSync(outDir, { recursive: true });
  }
  const file = join(outDir, "entry.txt");
  writeFileSync(file, LINE + "\n", "utf8");
  console.log(LINE);
  console.log(`chars=${LINE.length}`);
}

main();
