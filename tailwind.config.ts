import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "#FFFFFF00",
        grey: {
          DEFAULT: "#F3F3F7",
          border: "#DCDCDC",
          button: "#F7F7FA",
          text: {
            DEFAULT: "#4D4D4D",
            light: "#8A8A8A",
          },
        },
        primary: {
          light: "#FA7C54",
          dark: "#4D4D4D",
          DEFAULT: "#FA7C54",
        },
        secondary: {
          orange: "#EB5231",
          purple: "#571FCF",
          green: "#42BB4E",
          white: "#F3F3F7",
        },
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
