/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {
    colors: { ink: '#09090b', panel: '#111113', line: '#27272a' },
    fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
    boxShadow: { glow: '0 0 40px rgba(124, 58, 237, .10)' }
  } },
  plugins: [],
}
