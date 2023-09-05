/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        primary: "#00AEA4",
        secondary: "#F26C48",
        background: "#F0F0F0",
        icons: "#F2F2F2",
      },
      textColor: {
        customText: "rgba(199, 64, 27, 1)",
      },
      borderColor: {
        customBorder: "rgba(199, 64, 27, 1)",
      },
      boxShadow: {
        primary: "0 5px 0 0.5px rgba(59, 59, 59, 0.50)",
        secondary: "0 5px 0 0.5px rgba(199, 64, 27, 1)",
      },
    },
  },
  plugins: [],
};
