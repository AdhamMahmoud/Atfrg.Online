import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1d4e9fb5 = () => interopDefault(import('..\\pages\\anime\\index.vue' /* webpackChunkName: "pages_anime_index" */))
const _7d923180 = () => interopDefault(import('..\\pages\\copyright.vue' /* webpackChunkName: "pages_copyright" */))
const _504578b6 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages_home" */))
const _5b06f2ce = () => interopDefault(import('..\\pages\\mood.vue' /* webpackChunkName: "pages_mood" */))
const _600b55e8 = () => interopDefault(import('..\\pages\\movies\\index.vue' /* webpackChunkName: "pages_movies_index" */))
const _1e213b27 = () => interopDefault(import('..\\pages\\ramadan.vue' /* webpackChunkName: "pages_ramadan" */))
const _4f6df3a8 = () => interopDefault(import('..\\pages\\ramadan-last.vue' /* webpackChunkName: "pages_ramadan-last" */))
const _e9d33374 = () => interopDefault(import('..\\pages\\serieses\\index.vue' /* webpackChunkName: "pages_serieses_index" */))
const _09203971 = () => interopDefault(import('..\\pages\\anime\\last-updated.vue' /* webpackChunkName: "pages_anime_last-updated" */))
const _51b3e37d = () => interopDefault(import('..\\pages\\anime\\new-release.vue' /* webpackChunkName: "pages_anime_new-release" */))
const _6300d986 = () => interopDefault(import('..\\pages\\movies\\arabic.vue' /* webpackChunkName: "pages_movies_arabic" */))
const _7154752a = () => interopDefault(import('..\\pages\\movies\\last-release.vue' /* webpackChunkName: "pages_movies_last-release" */))
const _fe1aae84 = () => interopDefault(import('..\\pages\\movies\\most-watched.vue' /* webpackChunkName: "pages_movies_most-watched" */))
const _61243120 = () => interopDefault(import('..\\pages\\movies\\new-release.vue' /* webpackChunkName: "pages_movies_new-release" */))
const _6ceb462e = () => interopDefault(import('..\\pages\\Netflix\\movies.vue' /* webpackChunkName: "pages_Netflix_movies" */))
const _871a393c = () => interopDefault(import('..\\pages\\Netflix\\series.vue' /* webpackChunkName: "pages_Netflix_series" */))
const _468fc480 = () => interopDefault(import('..\\pages\\serieses\\last-updated.vue' /* webpackChunkName: "pages_serieses_last-updated" */))
const _1676b94e = () => interopDefault(import('..\\pages\\serieses\\new-release.vue' /* webpackChunkName: "pages_serieses_new-release" */))
const _58f10c30 = () => interopDefault(import('..\\pages\\movie\\genre\\_name.vue' /* webpackChunkName: "pages_movie_genre__name" */))
const _22367d2d = () => interopDefault(import('..\\pages\\series\\episode\\_id.vue' /* webpackChunkName: "pages_series_episode__id" */))
const _5cb8a889 = () => interopDefault(import('..\\pages\\series\\season\\_name.vue' /* webpackChunkName: "pages_series_season__name" */))
const _400280b8 = () => interopDefault(import('..\\pages\\episodetest\\_id.vue' /* webpackChunkName: "pages_episodetest__id" */))
const _6b739211 = () => interopDefault(import('..\\pages\\movie\\_name.vue' /* webpackChunkName: "pages_movie__name" */))
const _4a0b161b = () => interopDefault(import('..\\pages\\movtest\\_name.vue' /* webpackChunkName: "pages_movtest__name" */))
const _9fbb9668 = () => interopDefault(import('..\\pages\\series\\_name.vue' /* webpackChunkName: "pages_series__name" */))
const _55dbd0c8 = () => interopDefault(import('..\\pages\\translators\\_name.vue' /* webpackChunkName: "pages_translators__name" */))
const _0ca6e18b = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/anime",
    component: _1d4e9fb5,
    name: "anime"
  }, {
    path: "/copyright",
    component: _7d923180,
    name: "copyright"
  }, {
    path: "/home",
    component: _504578b6,
    name: "home"
  }, {
    path: "/mood",
    component: _5b06f2ce,
    name: "mood"
  }, {
    path: "/movies",
    component: _600b55e8,
    name: "movies"
  }, {
    path: "/ramadan",
    component: _1e213b27,
    name: "ramadan"
  }, {
    path: "/ramadan-last",
    component: _4f6df3a8,
    name: "ramadan-last"
  }, {
    path: "/serieses",
    component: _e9d33374,
    name: "serieses"
  }, {
    path: "/anime/last-updated",
    component: _09203971,
    name: "anime-last-updated"
  }, {
    path: "/anime/new-release",
    component: _51b3e37d,
    name: "anime-new-release"
  }, {
    path: "/movies/arabic",
    component: _6300d986,
    name: "movies-arabic"
  }, {
    path: "/movies/last-release",
    component: _7154752a,
    name: "movies-last-release"
  }, {
    path: "/movies/most-watched",
    component: _fe1aae84,
    name: "movies-most-watched"
  }, {
    path: "/movies/new-release",
    component: _61243120,
    name: "movies-new-release"
  }, {
    path: "/Netflix/movies",
    component: _6ceb462e,
    name: "Netflix-movies"
  }, {
    path: "/Netflix/series",
    component: _871a393c,
    name: "Netflix-series"
  }, {
    path: "/serieses/last-updated",
    component: _468fc480,
    name: "serieses-last-updated"
  }, {
    path: "/serieses/new-release",
    component: _1676b94e,
    name: "serieses-new-release"
  }, {
    path: "/movie/genre/:name?",
    component: _58f10c30,
    name: "movie-genre-name"
  }, {
    path: "/series/episode/:id?",
    component: _22367d2d,
    name: "series-episode-id"
  }, {
    path: "/series/season/:name?",
    component: _5cb8a889,
    name: "series-season-name"
  }, {
    path: "/episodetest/:id?",
    component: _400280b8,
    name: "episodetest-id"
  }, {
    path: "/movie/:name?",
    component: _6b739211,
    name: "movie-name"
  }, {
    path: "/movtest/:name?",
    component: _4a0b161b,
    name: "movtest-name"
  }, {
    path: "/series/:name?",
    component: _9fbb9668,
    name: "series-name"
  }, {
    path: "/translators/:name?",
    component: _55dbd0c8,
    name: "translators-name"
  }, {
    path: "/",
    component: _0ca6e18b,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
