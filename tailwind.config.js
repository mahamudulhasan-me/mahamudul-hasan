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
        // primary
        p1: "#01080E",
        p2: "#011627",
        p3: "#011221",
        p4: "#1E2D3D",
        // secondary
        s1: "#607B96",
        s2: "#3C9D93",
        s3: "#4D5BCE",
        // accent
        a1: "#FEA55F",
        a2: "#43D9AD",
        a3: "#E99287",
        a4: "#C98BDF",
      },
    },
  },
  plugins: [],
};
