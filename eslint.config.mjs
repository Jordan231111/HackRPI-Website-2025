// ESLint 9 Flat Config (ESM) for Next.js 15 + TypeScript + Prettier
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

const config = [
	// Migrate from .eslintignore
	{
		ignores: [
			".next/",
			"out/",
			"dist/",
			"build/",
			"coverage/",
			"node_modules/",
			".pnp/",
			".pnp.js",
			"**/.DS_Store",
			"**/*.pem",
			"**/.env*",
			"!**/.env.example",
			"**/npm-debug.log*",
			"**/yarn-debug.log*",
			"**/yarn-error.log*",
			"**/.pnpm-debug.log*",
			"**/*.tsbuildinfo",
			"next-env.d.ts",
		],
	},
	js.configs.recommended,
	// Bring in Next core-web-vitals and React/TS presets via compat
	...compat.extends(
		"next/core-web-vitals",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"prettier",
	),
	// Use TS parser for TS/TSX (and CTS) files
	{
		files: ["**/*.ts", "**/*.tsx", "**/*.cts"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
			},
		},
	},
	// Browser globals for app code
	{
		files: [
			"app/**/*.{js,jsx,ts,tsx}",
			"components/**/*.{js,jsx,ts,tsx}",
			"utils/**/*.{js,jsx,ts,tsx}",
			"data/**/*.{js,ts}",
		],
		languageOptions: {
			globals: { ...globals.browser },
		},
	},
	// CommonJS configs & scripts (CJS)
	{
		files: [
			"*.config.{js,cjs}",
			"**/*.config.{js,cjs}",
			"scripts/**/*.{js,cjs}",
			"jest.config.{js,cjs}",
			"playwright.config.{js,cjs}",
			"babel.config.{js,cjs}",
			"*.cts",
			"**/*.cts",
			"scripts/**/*.cts",
			"jest.config.cts",
			"playwright.config.cts",
			"babel.config.cts",
		],
		languageOptions: {
			sourceType: "commonjs",
			globals: { ...globals.node },
		},
	},
	// ESM configs & scripts (MJS/TS)
	{
		files: [
			"*.config.{mjs,ts}",
			"**/*.config.{mjs,ts}",
			"scripts/**/*.{mjs,ts}",
			"jest.config.{mjs,ts}",
			"playwright.config.{mjs,ts}",
			"babel.config.{mjs,ts}",
		],
		languageOptions: {
			// keep default module semantics
			globals: { ...globals.node },
		},
	},
	// Jest globals in tests
	{
		files: [
			"__tests__/**/*.{js,jsx,ts,tsx}",
			"**/*.test.{js,jsx,ts,tsx}",
			"jest.setup.{js,ts}",
		],
		languageOptions: {
			globals: { ...globals.jest },
		},
	},
	// Local rules and plugins
	{
		plugins: {
			prettier: prettierPlugin,
		},
		settings: {
			react: { version: "detect" },
		},
		rules: {
			// Formatting by Prettier
			indent: "off",
			quotes: ["error", "double", { allowTemplateLiterals: true }],
			semi: ["error", "always"],
			// React 17+ automatic JSX runtime
			"react/react-in-jsx-scope": "off",
			// Keep as warn; fix in code later if needed
			"react/jsx-no-target-blank": "warn",
			// Keep plugin active to avoid unknown-rule errors from inline directives
			"prettier/prettier": "warn",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{ argsIgnorePattern: "^_", varsIgnorePattern: "^_", ignoreRestSiblings: true },
			],
			"@typescript-eslint/no-explicit-any": "off",
		},
	},
];

export default config;
