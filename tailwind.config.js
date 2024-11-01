/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      colors: {
        portoBlue: '#0070C0',
        portoDarkBlue: '#005B99',
        portoLightGray: '#F2F5F8',
        portoGray: '#333333',
      },
    },
  },
  plugins: [],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
