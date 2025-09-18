/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2",   // Azul principal
        secondary: "#4CAF50", // Verde
        danger: "#F44336",    // Rojo
        warning: "#FFC107",   // Amarillo
        accent: "#FF9800",    // Naranja
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
