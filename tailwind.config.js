module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'masterit-logo': "url('/images/masterit-logo.png')"
       })
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
      visibility: ['hover', 'focus'],
      transitionDuration: ['hover', 'focus'],
      animation: ['hover', 'focus'],
      rotate: ['active', 'group-hover'],
    },
  },
  plugins: [
    /*thirt party lib for blur background*/
    require('@jinsung.lim/tailwindcss-filters'),
  ],
}
