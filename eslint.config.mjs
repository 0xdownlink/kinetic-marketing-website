import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

// The same rules the site had inside kinetic-studio: ESLint's recommended set,
// typescript-eslint's strict type-checked set and Next's core-web-vitals rules.
//
// .vercel/ holds files Vercel's build writes next to the app (such as
// adapter-toolbar-script.js). They aren't ours, so lint skips them.
export default defineConfig([
  globalIgnores([
    "**/node_modules/",
    "**/.next/",
    "**/.vercel/",
    "**/coverage/",
    "next-env.d.ts",
  ]),

  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      globals: { ...globals.node },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [nextPlugin.configs["core-web-vitals"]],
    languageOptions: { globals: { ...globals.browser } },
    settings: { next: { rootDir: import.meta.dirname } },
  },
]);
