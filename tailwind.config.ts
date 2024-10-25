import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'], // Default to DM Sans
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        bold: "700",
      },
      // Colors based on the hierarchy you defined in :root
      colors: {
        primary: 'var(--primary)',   // Primary color
        secondary: 'var(--secondary)', // Secondary color
        tertiary: 'var(--tertiary)',   // Tertiary color
      },
      // Border radius variables
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        settle: {
          '0%': { transform: 'translateY(-100%)' },
          '80%': { transform: 'translateY(10%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        settle: 'settle 1s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Tailwind CSS animate plugin
};

export default config;
