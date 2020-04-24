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
    ],
    link: [
      {
        rel: "icon",
        type: "image/svg",
        href: "/fav.svg"
      },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Tajawal:500&display=swap' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.plyr.io/3.5.10/plyr.css' },
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
        src: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0&appId=637758733683983&autoLogAppEvents=1",
        async :"",
        defer:"",
        crossorigin:"anonymous",
        type: "text/javascript"
      },
      // {
      //   src: "//inpagepush.com/400/3218692",
      //   async :"async",
      //   "data-cfasync" :"false",
      //   type: "text/javascript"
      // },
      {
        async :"async",
        "data-cfasync" :"false",
        src: "http://native.propellerclick.com/1?z=3241905&eid=p_3241905",
      },
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    "~assets/css/main.css",
    "vue-plyr/dist/vue-plyr.css",
    'plyr/dist/plyr.css',
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
  ],
  apollo: {
    clientConfigs: {
      default: "~/plugins/my-alternative-apollo-config.js"
      // alternative: user path to config which returns exact same config options
    }
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
