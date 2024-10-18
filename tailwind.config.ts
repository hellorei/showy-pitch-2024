import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    patterns: {
      opacities: {
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      },
    },
    extend: {
      // media  breakpoints
      screens: {
        "3xl": "1600px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        narrow: "var(--font-narrow)",
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      fontSize: {
        "10xl": [
          "9rem",
          {
            lineHeight: "0.9",
          },
        ],
        "11xl": [
          "9.5rem",
          {
            lineHeight: "0.9",
          },
        ],
        "12xl": [
          "10rem",
          {
            lineHeight: "0.8",
          },
        ],
        "13xl": [
          "11rem",
          {
            lineHeight: "0.8",
          },
        ],
        "14xl": [
          "12rem",
          {
            lineHeight: "0.8",
          },
        ],
        "15xl": [
          "14rem",
          {
            lineHeight: "0.8",
          },
        ],
      },
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        gradient: "animatedgradient 6s ease infinite alternate",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
