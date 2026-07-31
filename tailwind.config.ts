import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#171717",
        paper: "#f7f5ef",
        moss: "#69785f",
        clay: "#b56b45",
        steel: "#46616f"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(23, 23, 23, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
