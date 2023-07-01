/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme_white: "#ffffff",
        theme_black: "#000000",
        theme_dark_violet: "#250e36",
        theme_medium_violet: "#aa00ff",
        theme_light_violet:"#cc66ff",
        theme_dark_pink: "#cf51d0",
        theme_light_gray: "#a6a6a6",
        theme_medium_gray: "#808080",
        theme_dark_gray: "#595959",
      },
    },
  },
  plugins: [],
};
