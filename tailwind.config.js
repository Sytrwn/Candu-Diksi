/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "font-candu": ["Monserrat"],
    },

    extend: {
      colors: {
        hitam: "#222831",
        biru: "#245BB8",
        ungu: "#7D308D",
        hijau: "#4CE0B3",
      },
    },
  },
  plugins: [require("daisyui")],
};
