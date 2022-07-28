/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screen: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        scrDrakBlue: "#1A1B21",
        scrBrown: "#F3BF99",
        scrLigthBlueButton: "#5093E2",
        scrFooter: "#161619",
        scrText: "#DCDCDC",
        scrSubTitle: "#F5F5F5",
        scrIcons: "#918E9B",
        scrTextButton: "#374151",
        scrBackGroundButtonWhite: "#D1D5DB",
      },
    },
  },
  plugins: [],
};
