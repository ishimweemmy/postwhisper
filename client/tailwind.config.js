/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      width : {
        '650' : '650px',
        '500': '500px'
       },
      height : {
        '500' : '500px', 
        'sm' : '2px'
      },
      backgroundColor : {
        'primary' : '#4897E4'
      },
      borderWidth : {
        'primary' : '3px'
      }
    },
  },
  plugins: [],
}