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
			fontSize: {
				xl: ['1.25rem', '1.625'],
				'2xl': ['1.563rem', '1.625'],
				'3xl': ['1.953rem', '1.625']
			},
			backgroundImage: {},
			boxShadow: {
				sm: '5px 5px 0px 0px rgba(0, 0, 0, 1)'
			},
			gridTemplateColumns: {
				auto: 'repeat(auto-fill, minmax(min(100%, 25rem, 1fr))'
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
				50: '#F2F2F2',
				100: '#E3E3E3',
				200: '#C9C9C9',
				300: '#ADADAD',
				400: '#949494',
				500: '#787878',
				600: '#5C5C5C',
				700: '#424242',
				800: '#262626',
				900: '#0C0C0C'
			},
			pink: {
				50: '#fef1fa',
				100: '#fee5f7',
				200: '#ffc9f0',
				300: '#ffa1e3',
				400: '#ff66cf',
				500: '#fb39b7',
				600: '#eb1796',
				700: '#cd0978',
				800: '#a90b63',
				900: '#8d0e55',
				950: '#570030'
			},
			amber: {
				200: '#FFE68C',
				300: '#eecd56',
				500: '#e39c1d'
			},
			sky: {
				200: '#9DDCFF'
			},
			green: {
				300: '#79f279'
			}
		}
	},
	plugins: []
}
