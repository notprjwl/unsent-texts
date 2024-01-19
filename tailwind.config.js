/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
        pt: ["PT Serif"],
        playfair: ["Playfair Display"]
      },
      colors: {
        background: "#10100e",
        text: "#ffffe3",
        outline: "#30302b",
        shadow: "#606055"
      },
    },
  },
  plugins: [],
};
