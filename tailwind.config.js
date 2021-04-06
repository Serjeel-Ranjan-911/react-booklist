module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				booklistRed: '#e02224',
				'booklistRed-light': '#ec3333',
				'booklistRed-dark': '#ca1e20',
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
