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
        primary: {
          50: "#e6f0f7",
          100: "#cce1ef",
          200: "#99c3df",
          300: "#66a5cf",
          400: "#3387bf",
          500: "#0069af", // Classic KC Royals-inspired blue
          600: "#004687", // Main primary - confident, architectural blue
          700: "#003366", // Darker for hover states and depth
          800: "#002244", // Very dark for contrast
          900: "#001122", // Darkest for text/accents
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
