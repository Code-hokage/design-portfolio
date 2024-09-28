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
        project1Mockup: "url('/public/imgs/web/project1/project1-mockup.png')",
        project2Mockup: "url('/public/imgs/web/project2/project2-mockup.png')",
        project3Mockup: "url('/public/imgs/web/project3/project3-mockup.png')",
        project4Mockup: "url('/public/imgs/web/project4/project4-mockup.png')",
        project5Mockup: "url('/public/imgs/web/project5/project5-mockup.png')",
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
