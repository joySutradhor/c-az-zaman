/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primaryColor: "#FE8E38",
			},

			fontFamily: {
				Barlow: ["Barlow"],
				Inter: ["Inter"],
			},
		},
	},
	plugins: [],
};
