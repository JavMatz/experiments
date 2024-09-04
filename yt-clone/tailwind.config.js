/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				'dark-background': '#202020',
				'dark-foreground-separator': '#373737'
			}
		},
	},
	plugins: [],
}

