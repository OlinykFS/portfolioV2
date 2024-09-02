/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      colors: { "bg-body": "#0F172A" },
      fontFamily: { sans: '"Inter var", system-ui, sans-serif' },
    },
  },
  plugins: [
    ({ addBase }) => {
      addBase({
        "@font-face": {
          fontFamily: "Inter var",
          fontWeight: "300 700",
          fontStyle: "normal",
          src: 'url("/src/fonts/InterVariable.woff2") format("woff2")',
        },
        body: { fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"' },
      });
    },
  ],
};
