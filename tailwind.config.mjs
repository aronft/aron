/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter'],
				hand: ['Handlee']
			},
			colors: {
				neutral: {
					900: '#0C0C0C'
				}
			},
			backgroundImage: {
				pattern: "url('./src/assets/bg-patterns.png')"
			}
		}
	},
	plugins: []
}
