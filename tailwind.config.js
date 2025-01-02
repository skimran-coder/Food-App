/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myBlack: "#282932",
        myGray: "#F2EFE6",
        myYellow: "#F7B614",
        myGrayLight: "#f5f4f0",
        myGrayDark: "#e2e2e7",
      },
      fontFamily: {
        Helvetica: "Helvetica, sans-serif, Arial",
        Grotesk: "Familjen Grotesk, sans-serif",
      },
    },
  },
  plugins: [],
};
