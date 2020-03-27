import webpack from "webpack";
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title:
      "اتفرج اونلاين مشاهدة افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
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
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    "~assets/css/main.css",
    "vue-plyr/dist/vue-plyr.css",
    "swiper/dist/css/swiper.css",
    "~assets/css/iconmonstr-iconic-font.min.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: "~/plugins/vue-plyr",
    },
    {
      src: "~/plugins/swiper",
      mode: "client",
    },
    {
      src: "~/plugins/lazyload",
      mode: "client",
    }
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
  mounted() {
    this.$loading = this.$refs.loading;
  },
  
  /*
   ** Nuxt.js modules
   */
  generate: {
    dir: "dist"
  },
  render: {
    static: {
      setHeaders(res) {
        res.setHeader('X-Frame-Options', 'ALLOWALL')
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET')
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
   }
 }
},
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    "@nuxtjs/apollo",
    '@nuxtjs/proxy'
  ],
  proxy: {
    '/api/': { target: 'https://api.example.com/', pathRewrite: {'^/api/': ''}, changeOrigin: true }
  },
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
