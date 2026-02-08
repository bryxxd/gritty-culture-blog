/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      sm: "799px",
      md: "800px",
      lg: "1200px",
    },
    maxWidth: {
      sm: "799px",
      md: "800px",
      lg: "1280px",
    },
    extend: {
      fontFamily: {
        sans: ["Geist", "sans-serif"],
        geist: ["Geist", "sans-serif"],
        instrumentSerif: ["Instrument Serif", "serif"],
        tiltWarp: ["Tilt Warp", "sans-serif"],
      },
      colors: {
        "background-1": "#0F0E0E",
        "background-2": "#1F1F1F",
        "background-3": "#555659",
        "background-4": "#FFFFFF",
        "background-5": "#FF5700",
        "background-6": "#32CE57",
        "background-7": "#A3CAFF",
        "paragraph-1": "#F6F8FB",
        "paragraph-2": "#0F0E0E",
        "paragraph-3": "#8C8D92",
        "paragraph-4": "#D1D2D8",
        "headline-1": "#F6F8FB",
        "headline-2": "#DBE0EC",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee-md": "marquee 20s linear infinite",
        "marquee-sm": "marquee 10s linear infinite",
        pause: "paused",
      },
    },
  },
  plugins: [],
};
