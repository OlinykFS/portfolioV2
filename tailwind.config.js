/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      colors: { "bg-body": "#0F172A" },
      fontFamily: { sans: ["Inter var", ...defaultTheme.fontFamily.sans] },
    },
  },
  plugins: [
    ({ addBase, theme }) => {
      addBase({
        "@font-face": {
          fontFamily: "Inter var",
          fontWeight: "100 900",
          fontDisplay: "swap",
          fontStyle: "normal",
          src: 'url("/src/fonts/InterVariable.woff2") format("woff2")',
        },
        ":root": { fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"' },
        html: {
          fontFamily: theme("fontFamily.sans"),
          fontVariationSettings: '"opsz" 32',
          "@supports (font-variation-settings: normal)": {
            fontFamily: '"Inter var", sans-serif',
          },
        },
        body: {
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
      });
    },
  ],
};
