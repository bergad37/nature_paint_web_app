/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#DD5312",
        backgroundColor: "#FFFFFF",
        secondarybackgroundColor:"#FFF5F0",
        textColor: "#000000",
        primaryTextColor: "",
        danger: "#AB2424",
        correctGreen: "#24AB62",
      },
    },
  },
  plugins: [],
};
