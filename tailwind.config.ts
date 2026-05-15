import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1F2933",
        muted: "#5C6B73",
        line: "#D9E2E7",
        brand: {
          50: "#EEF4F7",
          100: "#DDE9EF",
          200: "#C2D4DD",
          500: "#456F87",
          600: "#2E5870",
          700: "#1D4258",
          800: "#123247",
          900: "#0B2435"
        },
        calm: "#F8FAFB"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(18, 50, 71, 0.08)",
        card: "0 16px 34px rgba(18, 50, 71, 0.09)"
      }
    }
  },
  plugins: []
};

export default config;
