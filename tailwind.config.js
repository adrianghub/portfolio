module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        accent: 'var(--color-text-accent)',
        dark: 'var(--color-text-dark)'
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)'
      },
      borderColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)'
      },
      typography: () => ({
        dark: {
          css: {
            color: 'white'
          }
        }
      }),
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
        }
      },
      keyframes: {
        fadeIn: {
          '0%, ': { opacity: '0' },
          '100%': { opacity: '0.3' }
        },
        bounce: {
          '0%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(-25%)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          },
          '100%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.3s',
        bounce: 'bounce 1s infinite'
      }
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
};
