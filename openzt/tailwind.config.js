
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#BEE5B0',
          DEFAULT: '#93B885',
          dark: '#77956C',
        },
        accent: {
          DEFAULT: '#FED284',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./assets/**/*.js",
    "../docs/**/*.html",
  ]
};