/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0ef",
        darkBlue: "#04091ee6",
        purple: "#ae00ff",
        grey: "#232531",
      },
      boxShadow: {
        shadowButtom: "0px 8px 8px rgba(0, 0, 0, 40%)",
      },
      backgroundImage: {
        hero: "url('/public/imgs/man.png')",
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
        playwrite: ['"Playwrite HU"'],
      },
    },
  },
  plugins: [],
};
