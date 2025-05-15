import { type Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        background: {
          DEFAULT: "#0D0D0D",
          light: "#1A1A1A",
        },
        gold: {
          DEFAULT: "#D4A45C",
          light: "#E6BD7A",
        },
        meat: "#8C1C13",
        cream: "#F5F0E1",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideUp: "slideUp 0.8s ease-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
