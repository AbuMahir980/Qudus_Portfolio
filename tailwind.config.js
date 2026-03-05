/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'SUSE', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: '#A9792B',
        navy: '#364153',
        green: '#005F5A',
        'dark-bg': '#101828',
        'dark-card': '#1E2939',
      },
    },
  },
  plugins: [],
};
