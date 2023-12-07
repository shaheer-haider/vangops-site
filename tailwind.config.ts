export default {
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Libre Baskerville', 'serif']
      },

      extend: {
        colors: {
          bgColor: '#070C0E',
          headingColor: '#FFFFFF',
          paraColor: '#AAAAAA',
          primary: '#E81C25',
          stroke: '#640E12',
          cardColor: '#0E0B0B',
          footerColor: '#0F1314',
        }
      }
    },
    content: [
      './components/**/*.{vue,js,ts}',
      './layouts/**/*.vue',
      './pages/*.vue',
      './pages/**/*.vue',
      './pages/**/**/*.vue',
      './pages/**/**/**/*.vue',
      './composables/*.{js,ts}',
      './composables/**/*.{js,ts}',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}'
    ],
    plugins: [require('@tailwindcss/typography')],
    cssPath: '~/assets/css/tailwind.css'
  }
