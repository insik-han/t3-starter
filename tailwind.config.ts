import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  extend: {
    fontFamily: {
      sans: ["var(--font-pretendard)", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};

export default config;
