/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        neumorphicInset:
          "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        myshadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        myshadow2: "0 3px 10px rgba(0, 0, 0, 0)",
        neumorphic: "-5px -5px 14px #ffffff",
      },
      backgroundImage: {
        neumorphic: "linear-gradient(145deg, #f0f0f0, #cacaca)",
      },
      borderRadius: {
        "50px": "50px",
      },
      fontFamily: {
        poetsen: ['"Poetsen One"', "serif"],
        corben: ['"Corben"', "serif"],
      },
    },
  },
  plugins: [],
};
