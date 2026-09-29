/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'serif'],
      },
      colors: {
        'background-primario': '#0B0E14',
        'background-secundario': '#151A21',
        'laranja-motor': '#FF5D00',
        'amarelo-alerta': '#FFB000',
      }
    },
  },
  plugins: [],
}