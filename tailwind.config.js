module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				lightblue: {
					100: '#aceaff',
					800: '#205e82',
					900: '#0C4A6E'
				},
				cyan: {
					900: '#164E63'
				}
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ['active'],
		},
	},
	plugins: [],
}
