/** @type {import("prettier").Config} */
module.exports = {
  plugins: [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports",
  ],
  tailwindFunctions: ["clsx", "cn", "cva"],
  importOrder: [
    "^react$",
    "^next(.*)$",
    "^@/components/(.*)$",
    "^@/lib/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  semi: true,
  singleQuote: false, // Use double quotes
  tabWidth: 2,
  trailingComma: "es5",
};
