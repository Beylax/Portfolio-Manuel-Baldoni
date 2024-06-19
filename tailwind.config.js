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
		fontFamily: {
			"poppins": "var(--poppins-font)",
			"montserrat": "var(--montserrat-font)",
		},
		extend: {
			colors: {
				main: "#FFFFFF",
				primary: "#0F1012",
				secondary: "#1A0B2E",
				tertiary: "#CCD6F6",
				highlight: "#A3178C",
				highlight50: "#51127F",
				hemerald: "#00AC89",
				javascript: "#ffd600",
				linkedin: "#0077B5",
				github: "#333",
				instagram: "#fb3958",
				html: "#f1652a",
				css: "#006bc0",
				react: "#61dbfc",
			},
			dropShadow: {
				img_hero: "0 0 10px #A3178C",
			},
			animation: {
				blink: "blinking 1s steps(2) infinite",
				spin: "spinning 10s linear infinite",
				"spin-reverse": "spinning-reverse 10s linear infinite",
				pause: "pause",
				wiggle: 'wiggle 1s infinite',
			},
			keyframes: {
				blinking: {
					"0%": { opacity: 0 },
				},
				spinning: {
					"0%": { rotate: "0deg" },
					"100%": { rotate: "360deg" },
				},
				"spinning-reverse": {
					"0%": { rotate: "0deg" },
					"100%": { rotate: "-360deg" },
				},
				wiggle: {
					'0%': { transform: 'rotate(-3deg)' },
					'10%': { transform: 'rotate(3deg)' },
					'20%': { transform: 'rotate(-3deg)' },
					'30%': { transform: 'rotate(3deg)' },
					'40%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
					'100%': { transform: 'rotate(0deg)' }
				}
			},
			spacing: {
				translate: {
					"center-x": "transform: translateX(-50%)",
					"center-y": "transform: translateY(-50%)",
				},
			},
			boxShadow: {
				skill: "0 10px 20px -15px rgba(255, 255, 255, 0.8)",
				project: "0px 0px 30px -10px rgba(0,172,137,0.6)",
			},
		},
	},
	plugins: [],
};
