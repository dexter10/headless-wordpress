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
    '@nuxtseo/module',
    // 'nuxt-link-checker',
    'nuxt-schema-org',
  ],
  runtimeConfig: {
    public: {
      wpGraphqlUrl: 'http://ordnung-headless-wordpress.local/graphql',
      // WP_GRAPHQL_URL: 'http://ordnung-headless-wordpress.local/graphql',
      // WP_GRAPHQL_URL: process.env.WP_GRAPHQL_URL,
      // Wordpress application password: name: graphql, pw: u4zL Y8EZ s8Mn lcXX RFde l5u5
        // For schema-org plugin
      site: {
        identity: {
          type: 'Organization'
        },
        url: 'https://ordnung.nl',
        name: 'Ordnung',
        description: 'Custom headless Wordpress and Nuxt websites.',
        defaultLocale: 'en',
        trailingSlash: true,
      },
    }
  },
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

  app: {
    head: {
      titleTemplate: '%s %separator %siteName',
    }
  },
  // For schema-org plugin
  // site: {
  //   identity: {
  //     type: 'Organization'
  //   },
  //   url: 'https://ordnung.nl',
  //   name: 'Ordnung',
  //   description: 'Custom headless Wordpress and Nuxt websites.',
  //   defaultLocale: 'en',
  //   trailingSlash: true,
  // },
  // nitro: {
  //   prerender: {
  //     routes: ['/', '/sitemap.xml']
  //   }
  // },

})