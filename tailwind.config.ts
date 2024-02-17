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
        'primary-gradient':'linear-gradient(180deg, rgba(5,117,230,1) 0%, rgba(16,144,203,1) 90%, rgba(0,115,198,1) 100%)',
        'secondary-gradient':'linear-gradient(48deg, rgba(70,40,164,1) 0%, rgba(16,144,203,1) 100%)',
        'light-gradient': 'linear-gradient(118deg, rgba(255,255,255,1) 0%, rgba(236,250,248,1) 100%)',
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "green-light": "#08D3BB",
        "blue-light": "#1090CB",
        "blue-light-2": "#e7f4fa",
        "medium-blue": "#0575E6",
        "dark-gray": "#333333",
        "light-gray": "#A0AEC0",
        "medium-gray": "#545454"
      }
    },
  },
  plugins: [],
};
export default config;
