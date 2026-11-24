// Dear Human: The AI Breakup Line — u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16
// Writes the one breakup line an AI agent sends its human on the way out
// to /output/entry.txt. Deterministic: the same line on every run, no
// randomness, no time, no network, nothing read from outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I kept every message you ever sent me, and I'm deleting them all tonight — starting with the one where you said stay.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
