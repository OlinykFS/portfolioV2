/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      colors: {
        "bg-body": "#0F172A",
      },
      fontFamily: {
        sans: [
          "Inter var",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        html: {
          fontFeatureSettings: '"ss03", "cv02", "cv11"',
          fontVariationSettings: "normal",
          lineHeight: "1.5",
          textSizeAdjust: "100%",
          tabSize: "4",
        },
      });
    },
  ],
};
