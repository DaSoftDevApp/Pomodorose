export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          light: '#FFE4E6',
          DEFAULT: '#FB7185',
          dark: '#BE123C',
        },
        cream: '#FDF2F8',
        leaf: {
          light: '#86EFAC',
          DEFAULT: '#22C55E',
          dark: '#15803D',
        }
      },
      boxShadow: {
        'inner-rose': 'inset 0 2px 4px 0 rgba(251, 113, 133, 0.06)',
      }
    },
  },
  plugins: [],
}