/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        gray: {
          100: "#010f1c",
          200: "#010f1b",
          300: "#00060a",
          400: "rgba(0, 0, 0, 0.63)",
          500: "rgba(255, 255, 255, 0.4)",
          600: "rgba(0, 0, 0, 0.3)",
          700: "rgba(255, 255, 255, 0.2)",
          800: "rgba(255, 255, 255, 0.5)",
        },
        yellow: {
          100: "#dcf500",
          200: "#daf600",
          300: "#ddf400",
        },
        white: "#fff",
        orangered: "#ef431e",
        palevioletred: "#f35f86",
        goldenrod: "#f6bc1c",
        turquoise: "#15dac2",
        yellowgreen: "#9ada15",
      },
      spacing: {},
      fontFamily: {
        striker: "Striker",
        "sulphur-point": "'Sulphur Point'",
        poppins: "Poppins",
        obit: "Obit",
      },
      borderRadius: {
        "131xl": "150px",
      },
      fontSize: {
        "13xl": "32px",
        xl: "20px",
        base: "16px",
        "77xl": "96px",
        "181xl": "200px",
        "3xl": "22px",
        "51xl": "70px",
        lg: "18px",
        "15xl": "34px",
        inherit: "inherit",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
