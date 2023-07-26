/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        VT323: ['VT323', 'monospace'],
      },
      animation: {
        marquee: 'marqueeAnimation 30s linear infinite',
      },
      keyframes: {
        marqueeAnimation: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      }
    },
  },
  variants: {},
  plugins: [],
}

