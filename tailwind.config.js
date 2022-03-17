const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				abril: ["Abril Fatface", "cursive"],
			},

			colors: {
				themeBg: "var(--themeBg)",
				themeBgText: "var(--themeBgText)",
				headPrimary: "var(--head-primary)",
				navLink: "var(--navLink)",
			},
		},
		screens: {
			smest: "360px",
			smer: "411px",
			...defaultTheme.screens,
			"3xl": "1748px",
		},
	},
	plugins: [],
};
