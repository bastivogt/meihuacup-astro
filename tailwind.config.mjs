import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {
			colors: {
				// Configure your color palette here
				"purple-1": "#53269b",
				"purple-2": "#9b49b2",
				"white": "white",
				"grey-lighter": "#c4c4c4"
			},
			fontFamily: {
				sans: ['Open Sans Variable', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
