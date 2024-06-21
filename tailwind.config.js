/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "font-candu": ["Monserrat"],
    },
    colors: {
      hitam: "#222831",
      biru: "#245BB8",
      ungu: "#7D308D",
      putih: "#ffffff",
      hijau: "#8CB9BD",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
