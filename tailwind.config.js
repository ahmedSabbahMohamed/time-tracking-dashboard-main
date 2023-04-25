/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        Blue: "hsl(246, 80%, 60%)",
        lred: "hsl(15, 100%, 70%)",
        sblue: "hsl(195, 74%, 62%)",
        sred: "hsl(348, 100%, 68%)",
        limegreen: "hsl(145, 58%, 55%)",
        violet: "hsl(264, 64%, 52%)",
        sorange: "hsl(43, 84%, 65%)",
        vdblue: "hsl(226, 43%, 10%)",
        dblue: "hsl(235, 46%, 20%)",
        desblue: "hsl(235, 45%, 61%)",
        paleblue: "hsl(236, 100%, 87%)",
      },
      fontSize: {
        size: "18px",
      },
      fontFamily: {
        family: ['Rubik'],
      }
    },
  },
  plugins: [],
}

