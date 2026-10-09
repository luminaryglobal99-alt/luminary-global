/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37', // Champagne Gold
          light: '#F4E8C1',
          dark: '#B89025',
        },
        forest: {
          DEFAULT: '#1B3B2B', // Dark Forest Green
          dark: '#0F2319',
          light: '#2E5943',
        },
        pearl: '#FDFBF7',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-kanit)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
