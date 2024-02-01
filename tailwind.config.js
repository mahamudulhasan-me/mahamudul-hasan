/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#e6f1ff",
        green: "#64ffda",
        slate: { lightest: "#ccd6f6", light: "#a8b2d1", dark: "#8892b0" },
        navy: {
          lightest: "#233554",
          light: "#112240",
          dark: "#0a192f",
        },
      },
    },
  },
  plugins: [],
};
