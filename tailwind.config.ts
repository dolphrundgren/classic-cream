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
            transform: "rotate(0deg) translateY(0px) translateX(0px)",
          },
          "50%": {
            transform: "rotate(45deg) translateY(-15px) translateX(15px)",
          },
          "100%": {
            transform: "rotate(0deg)  translateY(0px) translateX(0px)",
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
