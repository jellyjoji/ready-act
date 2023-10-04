/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard'],
      },
      colors: {
        'primary-800': '#103D25',
        'primary-700': '#1B653D',
        'primary-600': '#258D55',
        'primary-500': '#30B66E',
        'primary-400': '#49CF87',
        'primary-300': '#72DAA2',
        'primary-200': '#EBF8E8',
        'map-500': '#F09847',
        'map-200': '#FEF7F1',
        'info-500': '#0A72EC',
        'info-400': '#328CF6',
        'info-300': '#63A7F8',
        'info-200': '#93C3FA',
        'info-100': '#C4DEFC',
        'cancel-500': '#FA4343',
        'cancel-400': '#D26A6A',
        'cancel-300': '#DE9191',
        'cancel-200': '#EAB8B8',
        'cancel-100': '#F6E0E0',
        'greenishgray-800': '#1A211D',
        'greenishgray-700': '#323E38',
        'greenishgray-600': '#59625C',
        'greenishgray-500': '#8D948F',
        'greenishgray-400': '#AEB4B0',
        'greenishgray-300': '#DCE0DE',
        'greenishgray-200': '#F6F8F7',
        'greenishgray-100': '#FBFBFB',
        'line-400': '#DFDFDF',
        'line-300': '#E6E6E6',
        'line-200': '#ECEDED',
        'line-100': '#F1F4F4',
      },
    },
  },
  plugins: [],
};
