const colors = require('tailwindcss/colors')
module.exports = {
  content: ["index.html","./src/**/*.jsx"],
  theme: {
    extend: {},
colors:{
  ...colors,
  fondo:"#f6f6f6",
  primario:"#006192",
  secundario:"#64cd98",
  fondoBoton:"#d1d1d1",
}
  },
  plugins: [require('autoprefixer')],
}


