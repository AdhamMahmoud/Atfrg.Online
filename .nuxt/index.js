import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_workbox_66cc37a7 from 'nuxt_plugin_workbox_66cc37a7' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_bootstrapvue_563d4c7a from 'nuxt_plugin_bootstrapvue_563d4c7a' // Source: .\\bootstrap-vue.js (mode: 'all')
import nuxt_plugin_smoothscrollpolyfill_0d6e4523 from 'nuxt_plugin_smoothscrollpolyfill_0d6e4523' // Source: .\\nuxt-polyfill\\smoothscroll-polyfill.js (mode: 'all')
import nuxt_plugin_intersectionobserver_cfafc86c from 'nuxt_plugin_intersectionobserver_cfafc86c' // Source: .\\nuxt-polyfill\\intersection-observer.js (mode: 'all')
import nuxt_plugin_urlpolyfill_3aaa289d from 'nuxt_plugin_urlpolyfill_3aaa289d' // Source: .\\nuxt-polyfill\\url-polyfill.js (mode: 'all')
import nuxt_plugin_apollomodule_4ae73a17 from 'nuxt_plugin_apollomodule_4ae73a17' // Source: .\\apollo-module.js (mode: 'all')
import nuxt_plugin_vueplyr_9db9a11c from 'nuxt_plugin_vueplyr_9db9a11c' // Source: ..\\plugins\\vue-plyr (mode: 'all')
import nuxt_plugin_lazyload_af447860 from 'nuxt_plugin_lazyload_af447860' // Source: ..\\plugins\\lazyload (mode: 'client')
import nuxt_plugin_swiper_3a1c5924 from 'nuxt_plugin_swiper_3a1c5924' // Source: ..\\plugins\\swiper (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp (ssrContext) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"meta":[{"charset":"UTF-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"propeller","content":"6db572cc55a14b132d2e20b503cf81b1"},{"http-equiv":"Content-Type","content":"text\u002Fhtml; charset=utf-8"},{"name":"apple-mobile-web-app-capable","content":"yes"},{"hid":"description","name":"description","content":"اتفرج اون لاين مشاهد وتحميل افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية بدون اعلانات مزعجة"},{"hid":"keywords","name":"keywords","content":"مشاهدة مسلسل ,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى, فيلم , تحميل افلام , مشاهدة افلام بجودة عالية , مشاهدة انمي اون لاين, تحميل موسم برابط واحد , مشاهدة بدون اعلانات , تحميل مباشر  , افلام جديدة , مسلسل "},{"property":"image","content":"https:\u002F\u002Fatfrgimages.b-cdn.net\u002Fog2.png"},{"property":"og:image","content":"https:\u002F\u002Fatfrgimages.b-cdn.net\u002Fog2.png"},{"property":"og:title","content":"اتفرج اون لاين مشاهدة وتحميل افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online"},{"property":"og:description","content":"اتفرج اون لاين مشاهد وتحميل افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية بدون اعلانات مزعجة"},{"property":"og:keywords","content":"مشاهدة مسلسل ,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى, فيلم , تحميل افلام , مشاهدة افلام بجودة عالية , مشاهدة انمي اون لاين, تحميل موسم برابط واحد , مشاهدة بدون اعلانات , تحميل مباشر  , افلام جديدة , مسلسل "},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-status-bar-style","name":"apple-mobile-web-app-status-bar-style","content":"default"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"اتفرج اون لاين مشاهدة وتحميل افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online"},{"hid":"author","name":"author","content":"Adham Mahmoud"},{"hid":"theme-color","name":"theme-color","content":"#008dff"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"اتفرج اون لاين"}],"title":"اتفرج اون لاين مشاهدة وتحميل افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online","link":[{"rel":"icon","type":"image\u002Fsvg","href":"fav.svg"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Tajawal:500&display=swap"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.7d93f120.json","crossorigin":"use-credentials"}],"script":[{"src":"https:\u002F\u002Fkit.fontawesome.com\u002F3e50565740.js?ver=1.1","type":"text\u002Fjavascript"},{"src":"https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=UA-162494703-1","async":"","type":"text\u002Fjavascript"}],"style":[],"htmlAttrs":{"lang":"en"}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  const inject = function (key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Plugin execution

  if (process.client && typeof nuxt_plugin_workbox_66cc37a7 === 'function') {
    await nuxt_plugin_workbox_66cc37a7(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrapvue_563d4c7a === 'function') {
    await nuxt_plugin_bootstrapvue_563d4c7a(app.context, inject)
  }

  if (typeof nuxt_plugin_smoothscrollpolyfill_0d6e4523 === 'function') {
    await nuxt_plugin_smoothscrollpolyfill_0d6e4523(app.context, inject)
  }

  if (typeof nuxt_plugin_intersectionobserver_cfafc86c === 'function') {
    await nuxt_plugin_intersectionobserver_cfafc86c(app.context, inject)
  }

  if (typeof nuxt_plugin_urlpolyfill_3aaa289d === 'function') {
    await nuxt_plugin_urlpolyfill_3aaa289d(app.context, inject)
  }

  if (typeof nuxt_plugin_apollomodule_4ae73a17 === 'function') {
    await nuxt_plugin_apollomodule_4ae73a17(app.context, inject)
  }

  if (typeof nuxt_plugin_vueplyr_9db9a11c === 'function') {
    await nuxt_plugin_vueplyr_9db9a11c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_lazyload_af447860 === 'function') {
    await nuxt_plugin_lazyload_af447860(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_swiper_3a1c5924 === 'function') {
    await nuxt_plugin_swiper_3a1c5924(app.context, inject)
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
