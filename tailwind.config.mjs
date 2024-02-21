const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter'],
				hand: ['Handlee']
			},
			fontSize: {
				xs: 'clamp(0.64rem, 0.12vw + 0.61rem, 0.7rem)',
				sm: 'clamp(0.8rem, 0.25vw + 0.74rem, 0.94rem)',
				base: [
					'clamp(1rem, 0.45vw + 0.89rem, 1.25rem)',
					{
						lineHeight: '1.65'
					}
				],
				md: 'clamp(1.25rem, 0.76vw + 1.06rem, 1.67rem)',
				lg: 'clamp(1.56rem, 1.2vw + 1.26rem, 2.22rem)',
				xl: 'clamp(1.95rem, 1.83vw + 1.5rem, 2.96rem)',
				xxl: 'clamp(2.44rem, 2.74vw + 1.76rem, 3.95rem)',
				xxxl: 'clamp(3.05rem, 4.02vw + 2.05rem, 5.26rem)'
			},
			backgroundImage: {},
			boxShadow: {
				sm: '5px 5px 0px 0px rgba(0, 0, 0, 1)'
			},
			gridTemplateColumns: {
				auto: 'repeat(auto-fill, minmax(min(100%, 25rem, 1fr))'
			},
			borderWidth: {
				3: '3px'
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
