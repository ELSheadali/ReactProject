module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_b2: "#ffffffb2" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        indigo: { A100: "#7c98fb", A100_01: "#8da6ff" },
      },
      fontFamily: {
        rubikglitch: "Rubik Glitch",
        baloo: "Baloo",
        balootamma: "Baloo Tamma",
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
