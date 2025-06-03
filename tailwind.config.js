/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'os-bg': '#1f1f2e',
        'os-accent': '#3b82f6',
        'os-window': '#2a2a3d'
      }
    }
  },
  plugins: []
};