module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'azulCapres': {
        100: '#CAF0F8',
        200: '#ADEBF4',
        300: '#90E0EF',
        400: '#48CAE4',
        500: '#00B4D8',
        600: '#0096C7',
        700: '#0078B6',
        800: '#023E8A',
        900: '#03045E',
      },
      'amarilloCapres': {
        100: '#FFE092',
        200: '#FFDB80',
        300: '#FFD66D',
        400: 'FFD15B',
        500: '#FFCB49',
        600: '#FFC637',
        700: '#FFC125',
        800: '#FFB912',
        900: '#FFA800',
      },
      'grisCapres': {
        100: '#F8F9FA',
        200: '#E9ECEF',
        300: '#DEE2E6',
        400: '#CED4DA',
        500: '#ADB5BD',
        600: '#6C757D',
        700: '#495057',
        800: '#343A40',
        900: '#212529'
      },
      'rojoCapres': {
        100: '#FF7E7E',
        200: '#FF6969',
        300: '#FF5353',
        400: '#FF3E3E',
        500: '#FF2828',
        600: '#FF1313',
        700: '#FF0000',
        800: '#E70000',
        900: '#D00000',
      },

    },
    extend: {
      backgroundImage:{
        'mobile-image-background': "url('/src/assets/images/img6.jpg')"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}