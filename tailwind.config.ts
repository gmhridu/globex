import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F4B23A",
        "primary-dark": "#DAA520",
        secondary: "#0C1B2A",
        accent: "#F7F8FA",
        "text-gray": "#6C757D",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "bounce-gentle": "bounceGentle 2s infinite",
      },
      keyframes: {
        bounceGentle: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
    },
  },
  plugins: [],
};

export default config;
