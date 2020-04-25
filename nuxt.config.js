import webpack from "webpack";
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    meta: [
      {
        charset: "UTF-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        name: "propeller",
        content: "6db572cc55a14b132d2e20b503cf81b1"
      },
      {
        'http-equiv': "Content-Type",
        content: "text/html; charset=utf-8"
      },  
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      },  
    ],
    link: [
      {
        rel: "icon",
        type: "image/svg",
        href: "/fav.svg"
      },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Tajawal:500&display=swap' },
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/3e50565740.js?ver=1.1",
        type: "text/javascript"
      },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=UA-162494703-1",
        async :"",
        type: "text/javascript"
      },
      {
        src: "//inpagepush.com/400/3246513",
        async :"async",
        "data-cfasync" :"false",
        type: "text/javascript"
      },
      // {
      //   async :"async",
      //   "data-cfasync" :"false",
      //   src: "//native.propellerclick.com/1?z=3227038&eid=p_3227038",
      // },
      {
        "data-cfasync" :"false",
        src: "//p393613.clksite.com/adServe/banners?tid=393613_773071_0&eid=ads2",
      },
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    "~assets/css/main.css",
    "vue-plyr/dist/vue-plyr.css",
    "swiper/dist/css/swiper.css",
    "~assets/css/iconmonstr-iconic-font.min.css",
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: "~/plugins/vue-plyr",
    },
    {
      src: "~/plugins/lazyload",
      mode: "client",
    },
    {
      src: "~/plugins/swiper",
      mode: "client",
    },
  ],
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#008dff",
    height: "3px",
    throttle: 0,
    duration: 5000
  },
  // mounted() {
  //   this.$loading = this.$refs.loading;
  // },
  
  /*
   ** Nuxt.js modules
   */
  generate: {
    dir: "dist"
  },
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    "@nuxtjs/apollo",
    '@nuxtjs/sitemap',
    '@nuxtjs/component-cache',
    'nuxt-polyfill',
  ],
  apollo: {
    clientConfigs: {
      default: "~/plugins/my-alternative-apollo-config.js"
      // alternative: user path to config which returns exact same config options
    }
  },
  polyfill: {
    features: [
        /* 
            Feature without detect:

            Note: 
              This is not recommended for most polyfills
              because the polyfill will always be loaded, parsed and executed.
        */
        {
            require: 'url-polyfill' // NPM package or require path of file
        },

        /* 
            Feature with detect:

            Detection is better because the polyfill will not be 
            loaded, parsed and executed if it's not necessary.
        */
        {
            require: 'intersection-observer',
            detect: () => 'IntersectionObserver' in window,
        },

        /*
            Feature with detect & install:

            Some polyfills require a installation step
            Hence you could supply a install function which accepts the require result
        */
        {
            require: 'smoothscroll-polyfill',

            // Detection found in source: https://github.com/iamdustan/smoothscroll/blob/master/src/smoothscroll.js
            detect: () => 'scrollBehavior' in document.documentElement.style && window.__forceSmoothScrollPolyfill__ !== true,

            // Optional install function called client side after the package is required:
            install: (smoothscroll) => smoothscroll.polyfill()
        }
    ]
},
  /*
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // webpack config

    /*
     ** You can extend webpack config here
     */
    transpile: ["vue-plyr"],
    vendor: ["vue-plyr"],
    extend(config, ctx) {
      const vueLoader = config.module.rules.find(
        rule => rule.loader === "vue-loader"
      );
      const originalOptions = vueLoader.options;
      vueLoader.options = {
        ...originalOptions,
        transpileOptions: {
          transforms: {
            dangerousTaggedTemplateString: true
          }
        }
      };
    }
    // publicPath: "./aflam"
  }
};
