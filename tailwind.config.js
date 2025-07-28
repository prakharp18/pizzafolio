// tailwind.config.js or tailwind.config.mjs
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pathway: ['"Pathway Extreme"', 'sans-serif'],
        montecarlo: ['"MonteCarlo"', 'cursive'],
        wix: ['"Wix Madefor Display"', 'sans-serif'],
        martian: ['"Martian Mono"', 'monospace'],
        azeret: ['"Azeret Mono"', 'monospace'],
      },
    },
  },
  plugins: [animate],
};
