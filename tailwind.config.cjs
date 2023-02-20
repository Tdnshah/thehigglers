/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
				'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
				'./node_modules/flowbite/**/*.js'
			],
	theme: {
		extend: {
		},
		colors: {
			'thc-blue-100' : '#089fcf',
			'thc-blue-200' : '#136e9d', 
			'thc-blue-300' : '#114169', 
			'thc-blue-400' : '#051937'
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-container-bleed'),
		require('flowbite/plugin'),
	] 
}
