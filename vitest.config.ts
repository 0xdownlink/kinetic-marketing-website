import path from "node:path";
import { defineConfig } from "vitest/config";

// Next compiles JSX itself, so tests set the automatic runtime explicitly.
// "@/" maps to src/, as in tsconfig.json.
export default defineConfig({
  oxc: { jsx: { runtime: "automatic" } },
  resolve: { alias: { "@": path.resolve(import.meta.dirname, "src") } },
  test: { environment: "node" },
});
