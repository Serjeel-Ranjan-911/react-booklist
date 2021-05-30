module.exports = {
<<<<<<< HEAD
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
=======
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        booklistRed: {
          light: '#ec3333',
          DEFAULT: '#e02224',
          dark: '#ca1e20',
        },
        booklistBlue: {
          light: '#2675ae',
          DEFAULT: '#195885',
          dark: '#14496e',
        },
      },
      gridTemplateColumns: {
        layout: '250px auto',
      },
      gridTemplateRows: {
        layout: '10% auto',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
>>>>>>> main
