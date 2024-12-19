/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner' : "url('./src/assets/images/about1.png')"
      },
      colors: {
        'primary' : "#070410"
      },
      fontFamily: {
       
        'tenor-sans': ['Tenor Sans', 'sans-serif'],
      },
      colors: {
        'custom-green': '#c5e4b5',
        'dark-green': '#1b370d',
      },
      keyframes: {
        zoomOutBg: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        zoomOutBg: 'zoomOutBg 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
