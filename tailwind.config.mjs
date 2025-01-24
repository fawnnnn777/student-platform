/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        show:{
          '0%':{backgroundColor: 'green'},
          '100%':{backgroundColor: 'blue'}
        }
      },
      height:{
        '128': '35rem'
      },
      colors: {
        background: "#FFDB00",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
