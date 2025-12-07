module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        darkgreen: '#2E7D32',
        cream: '#F5F5DC',
        softgray: '#E0E0E0'
      },
      borderRadius: {
        'xl': '1rem'
      }
    }
  },
  plugins: [],
}
