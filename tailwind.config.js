/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      textColor: {
        defaultColor: '#FF5C00', // Use the hexadecimal color value
      },
      boxShadow: {
        card: '1px 1px 14px 6px rgba(200, 200, 200, 0.15);',
      },
      colors: {
        progress: 'rgba(255, 128, 40, 0.9)',
        modalBtn: 'rgba(55, 200, 113, 0.9)',
      },
    },
  },
  plugins: [],
}
