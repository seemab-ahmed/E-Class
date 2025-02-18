/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primaryblue: "#04CBF8",
      backgroundDark: "#212121",
      black: "#000000",
      white: "#ffffff",
      transparentWhite: "rgba(255, 255, 255, 0.4)",
    },
    fontFamily: {
      jura: ["Jura", "sans-serif"],
      hackathon: ["Hackathon", "sans-serif"],
      rethink: ["Rethink Sans", "sans-serif"],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
    extend: {
      screens: {
        zero: "0px",
        xs: "300px",
        330: "330px",
        350: "350px",
        391: "391px",
        xmd: "400px",
        432: "432px",
        460: "460px",
        mds: "450px",
        444: "444px",
        473: "473px",
        488: "488px",
        525: "525px",
        512: "512px",
        sm: "660px",
        713: "713px",
        smd: "768px",
        805: "805px",
        922: "922px",
        md: "1025px",
        desktop: "1025px",
        lg: "1166px",
        xlg: "1240px",
        xl: "1366px",
      },
      fontFamily: {
        jura: ["Jura", "sans-serif"],
        hackathon: ["Hackathon", "sans-serif"],
      },
      backgroundColor: {
        footerGradient: "linear-gradient(to bottom, #ffffff 8%, #151515 100%)",
        highlightAnime:
          "linear-gradient(88.16deg, #FF003D -32.4%, #0085FF 73.16%)",
      },
      letterSpacing: {
        144: "1.2em", // Custom letter spacing value
      },
      boxShadow: {
        custom:
          "0px -6.308411598205566px 37.850467681884766px 0px rgba(255, 255, 255, 0.4)",
        white: "0px 4px 30px 0px rgba(255, 255, 255, 0.9)",
        "white-glow": "0 0 40px 15px rgba(255, 255, 255, 0.5);",
      },
      width: {
        "fill-available": "-webkit-fill-available",
      },
    },
  },
  plugins: [],
};
