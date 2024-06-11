import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/{app,components,styles}/**/**.{js,ts,jsx,tsx,scss}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
