const redTheme = {
  bgColor: "#070C0E",
  headingColor: "#FFFFFF",
  paraColor: "#AAAAAA",
  primary: "#E81C25",
  stroke: "#640E12",
  cardColor: "#0E0B0B",
  footerColor: "#0F1314",
};

const purpleTheme = {
  bgColor: "#FFFFFF",
  bgSecondaryColor: "#FCFAFF",
  headingColor: "#070C0E",
  paraColor: "#AAAAAA",
  primary: "#481CE8",
  stroke: "#250E64",
  cardColor: "#0E0B0B",
  footerColor: "#0F1314",
};

const lightRedTheme = {
  bgColor: "#FFFFFF",
  bgSecondaryColor: "#FCFAFF",
  headingColor: "#070C0E",
  paraColor: "#AAAAAA",
  primary: "#E81C25",
  stroke: "#640E12",
  cardColor: "#0E0B0B",
  footerColor: "#0F1314",
};

export default {
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      serif: ["Libre Baskerville", "serif"],
    },

    extend: {
      colors: {
        bgColor: "#FFFFFF",
        headingColor: "#181818",
        paraColor: "#333333",
        primary: "#E81C25",
        stroke: "#ffc5cb",
        cardColor: "#fffbfb",
        footerColor: "#fffbfb",
      },
      // {
      //   bgColor: "#FFFFFF",
      //   headingColor: "#181818",
      //   paraColor: "#333333",
      //   primary: "#9643FF",
      //   stroke: "#E0C8FF",
      //   cardColor: "#FCFAFF",
      //   footerColor: "#FCFAFF",
      // },
    },
  },
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./pages/**/**/*.vue",
    "./pages/**/**/**/*.vue",
    "./composables/*.{js,ts}",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  plugins: [require("@tailwindcss/typography")],
  cssPath: "~/assets/css/tailwind.css",
};
