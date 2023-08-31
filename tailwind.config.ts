import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { extend, utilities } from "./src/configs/tailwind-custom.config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      ...extend,
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ...utilities,
      });
    }),
  ],
};
export default config;
