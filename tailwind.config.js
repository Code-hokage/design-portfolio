/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0ef",
        darkBlue: "#04091e",
        purple: "#ae00ff",
        grey: "#232531",
      },
      boxShadow: {
        shadowButtom: "0px 8px 8px rgba(0, 0, 0, 40%)",
      },
      backgroundImage: {
        hero: "url('/public/man.png')",
        ihatins: "url('/public/imgs/ihatins/mock-test0.png')",
        west: "url('/public/imgs/west/west1.png')",
        wed: "url('/public/imgs/wed/wed1.png')",
        mine: "url('/public/imgs/mine/mine5.png')",
        otasco: "url('/public/imgs/otasco/otasco1.png')",
      },
      keyframes: {
        refine: {
          "0%": {
            right: "0%",
          },
          "50%": {
            right: "-6%",
          },
          "75%": {
            right: "-7%",
            opacity: "0%",
          },
          "100%": {
            right: "0%",
          },
        },
      },
      animation: {
        refineSlide: "refine 1s infinite",
      },
      fontFamily: {
        // logoFont: ['"Bebas Neue", "sans-serif"'],
        // title: ['"Nosifer", "sans-serif"'],
      },
    },
    
    screens: {
      sm: { min: "320px", max: "640px" },
      md: { min: "641px", max: "1007px" },
      lg: { min: "1007px" },
    },
  },
  plugins: [],
};
