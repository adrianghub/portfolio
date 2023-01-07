module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/core/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}',
    './src/shared/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        button: {
          wenge: {
            100: '#f5f0f2',
            200: '#e0d2d8',
            300: '#cbb3be',
            400: '#b695a3',
            500: '#a27789',
            600: '#885d70',
            700: '#6a4957',
            800: '#2d1f25',
            900: '#2d1f25'
          }
        },
        whitechocolate: {
          300: '#EDE4DA'
        }
      },
      keyframes: {
        fadeIn: {
          '0%, ': { opacity: '0' },
          '100%': { opacity: '0.3' }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.3s'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
