import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        burgerspintop: {
          "0%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(40px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        burgerspintop: "burgerspintop 2s ease infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
