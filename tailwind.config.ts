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
        midnight: "#080C10",
        ivory: "#EEE8DC",
        "chicago-red": "#CE1141",
        gold: "#C9A84C",
      },
    },
  },
  plugins: [],
};

export default config;
