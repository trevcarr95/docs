import js from "@eslint/js";
import * as mdxPlugin from "eslint-plugin-mdx";

const eslintConfig = [
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    ...js.configs.recommended,
  },
];

const mdxConfig = [
  // https://github.com/mdx-js/eslint-mdx/blob/d6fc093fb32ab58fb226e8cf42ac77399b8a4758/README.md#flat-config
  {
    name: "custom/mdx/recommended",
    files: ["**/*.mdx"],
    ...mdxPlugin.flat,
    processor: mdxPlugin.createRemarkProcessor({
      lintCodeBlocks: true,
      languageMapper: {},
    }),
  },
  {
    name: "custom/mdx/code-blocks",
    files: ["**/*.mdx"],
    ...mdxPlugin.flatCodeBlocks,
    rules: {
      ...mdxPlugin.flatCodeBlocks.rules,
      "no-var": "error",
      "prefer-const": "error",
    },
  },
];

const config = [...eslintConfig, ...mdxConfig];

export default config;
