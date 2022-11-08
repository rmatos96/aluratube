/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./_posts/**/*.md"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "16": "repeat(auto-fill, minmax(200px, 1fr))",
      }
    },
  },
  plugins: [],
};
