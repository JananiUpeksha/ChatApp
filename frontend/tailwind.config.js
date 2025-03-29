import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",      // Include the HTML file
    "./src/**/*.{js,jsx,ts,tsx}",  // Include all JavaScript and TypeScript files inside src
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],  // Adding daisyUI as a plugin
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "retro",
    ],
  },
};
