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
      {
        hid: 'description',
        name: 'description',
        content: "اتفرج اون لاين مشاهد وتحميل افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية بدون اعلانات مزعجة"
    },
    {
        hid: 'keywords',
        name: 'keywords',
        content: "مشاهدة مسلسل ,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى, فيلم , تحميل افلام , مشاهدة افلام بجودة عالية , مشاهدة انمي اون لاين, تحميل موسم برابط واحد , مشاهدة بدون اعلانات , تحميل مباشر  , افلام جديدة , مسلسل " || ""
    },
    {
        property: "image",
        content: "https://atfrgimages.b-cdn.net/og2.png"
    },
    {
        property: "og:image",
        content: "https://atfrgimages.b-cdn.net/og2.png"
    },
    {

        property: "og:title",
        content: "اتفرج اون لاين مشاهدة وتحميل افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online"
    },
    {
        property: "og:description",
        content: "اتفرج اون لاين مشاهد وتحميل افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية بدون اعلانات مزعجة"
    },
    {
        property: "og:keywords",
        content: "مشاهدة مسلسل ,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى, فيلم , تحميل افلام , مشاهدة افلام بجودة عالية , مشاهدة انمي اون لاين, تحميل موسم برابط واحد , مشاهدة بدون اعلانات , تحميل مباشر  , افلام جديدة , مسلسل "
    },     
    ],
    title: "اتفرج اون لاين مشاهدة وتحميل افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online",
    link: [
      {
        rel: "icon",
        type: "image/svg",
        href: "https://atfrgimages.b-cdn.net/images/fav.svg"
      },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Tajawal:500&display=swap' },
    ],
    script: [
      // {
      //   src:'//imasdk.googleapis.com/js/sdkloader/ima3.js',
      //   type: "text/javascript"
      // },
      {
        src: "https://kit.fontawesome.com/3e50565740.js?ver=1.1",
        type: "text/javascript"
      },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=UA-162494703-1",
        async :"",
        type: "text/javascript"
      },

      // {
      //   src: "//inpagepush.com/400/3246513",
      //   async :"async",
      //   "data-cfasync" :"false",
      //   type: "text/javascript"
      // },
      
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
  //   document.domain = "atfrg.online";
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
    '@nuxtjs/pwa',
    // '@nuxtjs/onesignal',
    "@nuxtjs/apollo",
    '@nuxtjs/sitemap',
    '@nuxtjs/proxy',
    // '@nuxtjs/component-cache',
    'nuxt-polyfill',
  ],
//   oneSignal: {
//     // cdn: true,

//     // // Use any custom URL
//     // OneSignalSDK: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js',
//   init: {
//     appId: 'a3e9bedc-f343-47e5-b28f-fa8ef039b8ad',
//     allowLocalhostAsSecureOrigin: true,
//     autoResubscribe:true,
//     autoRegister:true,
//     welcomeNotification: {
//         disable: false,
//         message:"اتفرج اون لاين مشاهدة مجاناً"
//     },
//     notifyButton: {
//       enable: true,
//     },
//   }
// },
    proxy: {
      // With options
      '/api2': { target: 'https://atfrg.space/database/', ws: true },

    },
 
    pwa: {
      manifest: {
        crossorigin: 'use-credentials'
      },
      // workbox:{
      //   cachingExtensions: '~/plugins/workbox-range-request.js',
      // },
      meta: {
        /* meta options */
        nativeUI:true,
        mobileAppIOS:true,
        author:"Adham Mahmoud",
        name:"اتفرج اون لاين مشاهدة وتحميل افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online",
        description:"اتفرج اون لاين مشاهدة وتحميل افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online",
        ogType:"website",
        ogSiteName:"اتفرج اون لاين",
        ogTitle:"اتفرج اون لاين مشاهدة وتحميل افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online",
        ogDescription:"اتفرج اون لاين مشاهد وتحميل افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية بدون اعلانات مزعجة",
        ogImage:"https://atfrgimages.b-cdn.net/og2.png"
      }
    },
  apollo: {
    clientConfigs: {
       default: "~/plugins/my-alternative-apollo-config.js"
      // alternative: user path to config which returns exact same config options
    },
    errorHandler: '~/plugins/apollo-error-handler.js'
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
    transpile: ["vue-plyr"],
    vendor: ["vue-plyr"],
    crossorigin:"anonymous",
    cache:true,
    optimization:{
      minimize: true,
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: undefined,
        cacheGroups: {}
      }
  },
  html:{
    minify:{
      collapseBooleanAttributes: true,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      trimCustomFragments: true,
    }
  },
  optimizeCSS:true,
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
