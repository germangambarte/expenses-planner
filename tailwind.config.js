/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,js,tsx,jsx}'],
  theme: {
    extend: {
      colors: {
        light: '#f2f0e3',
        dark: '#202020',
        accent: '#f76f53',
        "accent-soft": '#f76f5344',
      }
    }
  },
  plugins: []
}
