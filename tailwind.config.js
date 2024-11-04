import colors from 'tailwindcss/colors';

export default {
  content: [
    "./src/**/*.{scss,js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js'
  ],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '3rem',
        '2xl': '14rem',
      },
    },
    fontFamily: {
      'body': ['Be Vietnam Pro', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: colors.blue[600],
        secondary: colors.gray[800],
        navbarBg: '#fff',
      },
      keyframes: {
        rotating: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotating2: {
          '0%': { transform: 'rotate(0deg)', bottom: '10%', right: '10%' },
          '100%': { transform: 'rotate(360deg)', bottom: '80%', right: '30%' },
        },
        rotating3: {
          '0%': { transform: 'rotate(0deg)', bottom: '0%', right: '65%' },
          '100%': { transform: 'rotate(360deg)', bottom: '50%', right: '35%' },
        },
      },
      animation: {
        rotating: 'rotating 6s ease-in-out infinite alternate',
        rotating2: 'rotating2 6s ease-in-out infinite alternate',
        rotating3: 'rotating3 6s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
