const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter'],
				hand: ['Handlee']
			},
			backgroundImage: {
				pattern: "url('./src/assets/bg-patterns.png')"
			},
			boxShadow: {
				sm: '5px 5px 0px 0px rgba(0, 0, 0, 1)'
			}
		},
		colors: {
			black: colors.black,
			white: colors.white,
			gray: {
				...colors.gray,
				500: '#706f6f'
			},
			neutral: {
				900: '#0C0C0C'
			},
			pink: { 200: '#FFC9F0' },
			amber: {
				200: '#FFE68C',
				300: '#eecd56'
			},
			sky: {
				200: '#9DDCFF'
			}
		}
	},
	plugins: []
}
