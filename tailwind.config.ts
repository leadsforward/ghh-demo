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
        brand: {
          navy: "#072B61",
          offwhite: "#F7F6F2",
          charcoal: "#1D1D1D",
          gold: "#B89B5E",
        },
        primary: {
          50: "#EEF3FA",
          100: "#DDE7F6",
          200: "#BCD0ED",
          300: "#93B2E0",
          400: "#5F86CE",
          500: "#2F5FB8",
          600: "#072B61", // Primary Navy (brand)
          700: "#062554", // Subtle hover darkening
          800: "#041B44",
          900: "#02102A",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "#404040",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
