// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind-global.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@nuxtseo/module'
  ],
  googleFonts: {
    // Used for external Google fonts
    // prefetch: false,
    // preconnect: true,
    // download: false,
    outputDir: '~/assets/google/',
    stylePath: 'css/nuxt-google-fonts.css',
    fontsDir: 'fonts',
    overwriting: true,
    display: 'swap',
    families: {
      Montserrat: {
        wght: [100, 500, 700],
        ital: [500]
      },
      Raleway: {
        wght: [100, 500, 700],
        ital: [500]
      },
    },
  },
  // Fontaine font fallback list
  fontMetrics: {
    fonts: [ 'Montserrat', 'Raleway'],
  },
  runtimeConfig: {
    public: {
      wordpressUrl: 'http://ordnung-headless-wordpress.local/graphql',    
    }
  },
  site: {
    identity: {
      type: 'Organization'
    },
    url: 'https://ordnung.nl',
    name: 'Ordnung - Custom Headless Wordpress',
    description: 'Custom headless Wordpress and Nuxt websites.',
    defaultLocale: 'en',
    trailingSlash: true,
  },
  // nitro: {
  //   prerender: {
  //     routes: ['/', '/sitemap.xml']
  //   }
  // },

})