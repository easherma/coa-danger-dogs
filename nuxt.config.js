const webpack = require('webpack')


module.exports = {
  modules: [
    '@nuxtjs/axios',
  ],
  mode: 'spa'
  ,
  axios: {
    // proxyHeaders: false
  },

  css: [
  // Load a Node.js module directly (here it's a Sass file)
  'tachyons',
],
  /*
  ** Headers of the page
  */
  head: {
    title: 'coa-danger-dogs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'website displaying information about dangerous dogs in Austin, Texas' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.46.0/mapbox-gl.css' },
      { rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v2.3.0/mapbox-gl-geocoder.css' }
      ],
  },
  plugins: ['~/plugins/vue-tables-2']
  ,
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        mapboxgl: 'mapbox-gl',
        geocoder: '@mapbox/mapbox-gl-geocoder'
      })
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
