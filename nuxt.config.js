import webpack from "webpack";
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title:
      "اتفرج اون لاين مشاهدة افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online",
    meta: [
      {
        charset: "UTF-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        'http-equiv': "Content-Type",
        content: "text/html; charset=utf-8"
      },
      
      {  name: 'description', content:  "مشاهدة وتحميل مباشر افلام و مسلسلات وانمي بجودة عالية مترجمة - اتفرج اون لاين - بدون اعلانات"},
      {  name: 'keywords', content:  "مشاهدة مسلسل ,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى, فيلم , تحميل افلام , مشاهدة افلام بجودة عالية , مشاهدة انمي اون لاين, تحميل موسم برابط واحد , مشاهدة بدون اعلانات , تحميل مباشر  , افلام جديدة , مسلسل "}

    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "/fav.png"
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
    'video.js/dist/video-js.css'
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
    },
    { src: '~plugins/nuxt-video-player-plugin', ssr: false }
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
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    "@nuxtjs/apollo",
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
