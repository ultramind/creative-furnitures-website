/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "978px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#FF014F",
        bgColor: "#dde1e7",
        textColor: "#dde1e7",
      },
    },
  },
  plugins: [],
};
