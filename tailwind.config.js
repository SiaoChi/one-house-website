/** @type {import('tailwindcss').Config} */
import color from 'tailwindcss/colors';
import { fontSize } from 'tailwindcss/defaultTheme';

delete color.lightBlue;
delete color.warmGray;
delete color.trueGray;
delete color.coolGray;
delete color.blueGray;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      ...fontSize,
    },
    fontFamily: {
      reddit: ['Reddit Sans', 'sans-serif'],
      redditSemiBold: ['Reddit Sans semiBold', 'sans-serif'],
      redditItalic: ['Reddit Sans italic', 'sans-serif'],
      noto: ['Noto Sans TC', 'sans-serif'],
    },
    colors: {
      ...color,
      primary: '#b3b3b3',
      secondary: '#ff6600',
      tertiary: '#ff0066',
      quaternary: '#00ff00',
      backgroundColor: '#ffffff',
      textColor: '#000000',
      hover: '#b3b3b3',
    },
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
