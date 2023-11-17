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
    '@nuxtjs/google-fonts'
],
  googleFonts: {
    // Used for external Google fonts
    // prefetch: false,
    // preconnect: true,
    // download: false,
    outputDir: '~/assets/',
    stylePath: 'css/nuxt-google-fonts.css',
    fontsDir: 'fonts',
    overwriting: false,
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
  // Not necessary for Google fonts in Fontaine
  // Custom local fonts individually named (no group family name) for Fontaine
  // Configure @font-face rules/src in ~/assets/css/main.css
  // fontMetrics: {
  //   fonts: [
  //     'Montserrat', { family: 'Montserrat', src: '~/assets/fonts/Montserrat-Medium.woff2' },
  //     'Montserrat', { family: 'Montserrat', src: '~/assets/fonts/Montserrat-Bold.woff2' },
  //     'Raleway', { family: 'Raleway', src: '~/assets/fonts/Raleway-Bold.woff2' },
  //   ],
  // },
  runtimeConfig: {
    public: {
      wordpressUrl: 'http://ordnung-headless-wordpress.local/graphql',
      // site: 'https://ordnung.nl',
      
      site: {
        url: 'https://ordnung.nl',
        name: 'Ordnung',
        // description: 'Custom headless Wordpress and Nuxt websites.',
        defaultLocale: 'en',
        trailingSlash: true,
      },
    }
  },
  // nitro: {
  //   prerender: {
  //     routes: ['/', '/sitemap.xml']
  //   }
  // },

})