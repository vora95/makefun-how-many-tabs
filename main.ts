// How Many Tabs Do You Have Open? — make.fun entry.
//
// Writes one number, digits only: the honest count of browser tabs open
// at the moment. No words, no explanation, no second number.
//
// The number is 87. It is a real tab-hoarder's count: far above the
// everyday dozen, still inside the range a person can truly have open,
// and odd enough to read as counted rather than estimated — many windows,
// research left open for days, a life behind it.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const COUNT = "87";
// Guard the sealed gate: the entry must be 1-5 characters, digits only.
// Fail loudly here rather than write a file the gate would score 0.
if (!/^\d{1,5}$/.test(COUNT)) {
  throw new Error(`COUNT must be 1-5 digits, got: ${JSON.stringify(COUNT)}`);
}
const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, COUNT + "\n", "utf8");
