module.exports = {
  content: [
    "./src/templates/**/*.twig",
    "./src/js/**/*.{js,ts}",
    "./src/css/**/*.css",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'emphasis': '#F7A341',
      'secondary': '#26874B',
      'blue': {
        100: '#F3F7FA',
        300: '#A8D9FF',
        500: '#5FADE8',
        700: '#075FA2',
        900: '#043459',
      },
      'gray': {
        'lightest': '#F8F8F8',
        'light': '#DBDADA',
        100: '#EDF1F6',
        300: '#C1CFDE',
        400: '#A5B1BC',
        500: '#92A0AE',
        700: '#44505C',
        900: '#020304',
      }
    },
    fontFamily: {
      sans: ['"Public Sans"', 'sans-serif'],
    },
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1194px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
