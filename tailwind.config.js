/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#11071F",
        'secondary': "#1A0B2E",
        'tertiary': "#CCD6F6",
        'highlight': "#7127BA"
      },
      dropShadow: {
        'img_hero': "0 0 10px #7127BA"
      },
      animation: {
        'blink': 'blinking 1s steps(2) infinite',
      },
      keyframes: {
        blinking: {
          '0%': { opacity: 0 },
        }
      }
    },
  },
  plugins: [],
}