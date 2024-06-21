export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Bestin John | Frontend Web Engineer',
    meta: [{
        hid: 'charset',
        charset: 'utf-8'
      },
      {
        'http-equiv': "X-UA-Compatible",
        content: "IE=edge"
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: "keywords",
        content: "Bestin John, Portfolio, Developer, HTML, CSS, JS, VueJS, NuxtJS, KnockoutJS, ReactJS, VueJS, Btech, CS, Computer Science, eCommerce, Web, Frontend, Bootstrap, experience, skills, computer science, engineering, developed skills, Technische universität, Kaiserslautern Germany, Model engineering college, Computer Science, Engineering"
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Portfolio of Bestin John. An enthusiastic frontend developer who loves to be creative at the same time explore new technologies loves to travel and play cricket.'
      },
      {
        name: "title",
        content: "Bestin John | Frontend Web Engineer"
      },
      // Open Graph / Facebook
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://bestinjohn.com/"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "https://bestinjohn.com/"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Bestin John | Frontend Web Engineer"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Portfolio of Bestin John. An enthusiastic frontend developer who loves to be creative at the same time explore new technologies Loves to travel and play cricket."
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://bestinjohn.com/img/og-image.jpeg"
      },
      // Twitter
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:url",
        property: "twitter:url",
        content: "https://bestinjohn.com/"
      },
      {
        hid: "twitter:title",
        property: "twitter:title",
        content: "Bestin John | Frontend Web Engineer"
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content: "Portfolio of Bestin John. An enthusiastic frontend developer who loves to be creative at the same time explore new technologies Loves to travel and play cricket."
      },
      {
        hid: "twitter:image",
        property: "twitter:image",
        content: "https://bestinjohn.com/img/og-image.jpeg"
      }
    ],
    link: [{
        rel: "canonical",
        href: "https://bestinjohn.com"
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      }
    ],
    script: [{
      type: "application/ld+json",
      json: {
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Bestin John",
        "url": "https://www.bestinjohn.com",
        "address": "",
        "sameAs": [
          "https://www.facebook.com/bestinjohn",
          "https://twitter.com/_bestinjohn",
          "https://www.instagram.com/iambestin/",
          "https://www.linkedin.com/in/bestin-john/",
          "https://github.com/bestii"
        ]
      }
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/global.scss'],

  // Include styleResources in every Component
  styleResources: {
    scss: [
      '@/assets/scss/abstracts/_mixin.scss'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://nuxtjs.org/blog/going-dark-with-nuxtjs-color-mode/
    '@nuxtjs/color-mode',
    // https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg',
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    // https://google-analytics.nuxtjs.org/
    '@nuxtjs/google-analytics',
    // https://www.npmjs.com/package/nuxt-facebook-pixel-module
    'nuxt-facebook-pixel-module'
  ],
  // https://google-analytics.nuxtjs.org/setup
  googleAnalytics: {
    id: 'UA-162815630-1'
  },
  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '4077659688961118',
    autoPageView: true,
    disabled: false
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/acidjazz/tv-toast
    ['nuxt-tailvue', {
      toast: true
    }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: "Bestin John ",
      short_name: "Bestin John",
      lang: 'en',
      theme_color: "#091a28",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
