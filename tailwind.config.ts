import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        'primary-gradient': 'linear-gradient(135deg, #1090CB 0%, #08D3BB 100%)',
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "green-light": "#08D3BB",
        "blue-light": "#1090CB",
        "blue-light-2": "#e7f4fa",
      }
    },
  },
  plugins: [],
};
export default config;
