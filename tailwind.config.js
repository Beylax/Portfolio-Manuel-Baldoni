/* @type {import('tailwindcss').Config} */
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
        'highlight': "#7127BA",
        "hemerald": "#50C878",
        "javascript": "#ffd600",
        "linkedin": "#0077B5",
        "github": "#333",
        "instagram": "#fb3958",
        "html": "#f1652a",
        "css": "#006bc0",
        "react": "#61dbfc"
      },
      dropShadow: {
        'img_hero': "0 0 10px #7127BA"
      },
      animation: {
        'blink': 'blinking 1s steps(2) infinite',
        'spin': 'spinning 10s linear infinite',
        'spin-reverse': 'spinning-reverse 10s linear infinite',
        'pause': 'pause'
      },
      keyframes: {
        blinking: {
          '0%': { opacity: 0 },
        },
        spinning: {
          '0%': { rotate: "0deg" },
          '100%': { rotate: "360deg" },
        },
        "spinning-reverse": {
          '0%': { rotate: "0deg" },
          '100%': { rotate: "-360deg" },
        }
      },
      spacing: {
        translate: {
          'center-x': "transform: translateX(-50%)",
          'center-y': "transform: translateY(-50%)"
        }
      }
    },
  },
  plugins: [],
}