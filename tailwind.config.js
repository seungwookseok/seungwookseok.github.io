module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#121212',
        darkText: '#E0E0E0',
        primary: '#3A86FF',
        secondary: '#00509D',
        accent: '#FF6B6B',

        cardBg1: '#151D29',
        cardBg2: '#1B2835',
        cardBg3: '#243347',
        cardBg4: '#1E2726',
        cardBg5: '#17222F',

        highlight1: '#FFB74D',
        highlight2: '#4FC3F7',
        highlight3: '#EF9A9A',
        highlight4: '#A1C5C3',
        highlight5: '#CE93D8',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
