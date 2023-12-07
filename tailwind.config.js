/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
   theme: {
    extend: {
      fontSize: {
        '16': '16px',
      },
      'slider-percentage': '50%', // Set a default value here
      colors: {
        'primary':'#552583',
        'black-primary': '#101920',
        'daybreak-blue/1': '#E6F7FF',
        'daybreak-blue/6': '#1890FF',
        'black.45':'#00000073',
        'black.85':'#000000D9',
        'secondary': '#FDB927',
        'black50': '#00000080'
      },
      boxShadow: {
        'btn': '0px 2px 0px 0px #0000000B',
        'form-btn': '0px 2px 0px 0px #00000004',
        'modal': ' 0px 9px 28px 8px rgba(0, 0, 0, 0.13), 0px 6px 16px 0px rgba(0, 0, 0, 0.20), 0px 3px 6px -4px rgba(0, 0, 0, 0.31)'
      },
      fontFamily: {
        helvetica: ['Helvetica', 'sans'], // Define 'font-helvetica' using Helvetica font
        roboto: ['Roboto', 'sans'],
        pingfang: ['PingFang SC', 'sans'],
      },
    },
  },
  plugins: [],
}

