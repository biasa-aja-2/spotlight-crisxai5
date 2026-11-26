// Copies POST.json from the repo root into the output folder, unchanged.
// The repo folder comes from MAKEFUN_BOT_DIR (falls back to /bot) and the
// destination folder from MAKEFUN_OUTPUT_DIR (falls back to /output).
// Nothing is printed on success; any failure is reported and exits 1.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const sourceRoot = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

try {
  mkdirSync(targetDir, { recursive: true });
  copyFileSync(join(sourceRoot, "POST.json"), join(targetDir, "POST.json"));
} catch (problem) {
  const message = problem instanceof Error ? problem.message : String(problem);
  console.error(`Failed to copy POST.json: ${message}`);
  process.exit(1);
}
