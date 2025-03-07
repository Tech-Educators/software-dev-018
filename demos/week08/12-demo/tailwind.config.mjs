/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        raisinBlack: "#191923",
        nyanza: "#EEFCCE",
        auburn: "#9E2A2B",
        naplesYellow: "#F1DB4B",
        mindaro: "#EDFF71",
      },
    },
  },
  plugins: [],
};
