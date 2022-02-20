import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _486f1485 = () => interopDefault(import('..\\pages\\anime\\index.vue' /* webpackChunkName: "pages_anime_index" */))
const _30426eb0 = () => interopDefault(import('..\\pages\\copyright.vue' /* webpackChunkName: "pages_copyright" */))
const _ff6084f4 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages_home" */))
const _e9dd90c4 = () => interopDefault(import('..\\pages\\mood.vue' /* webpackChunkName: "pages_mood" */))
const _ce0d09d0 = () => interopDefault(import('..\\pages\\movies\\index.vue' /* webpackChunkName: "pages_movies_index" */))
const _cdc1f752 = () => interopDefault(import('..\\pages\\ramadan.vue' /* webpackChunkName: "pages_ramadan" */))
const _03697afc = () => interopDefault(import('..\\pages\\ramadan-last.vue' /* webpackChunkName: "pages_ramadan-last" */))
const _410fff76 = () => interopDefault(import('..\\pages\\serieses\\index.vue' /* webpackChunkName: "pages_serieses_index" */))
const _ed6c8abe = () => interopDefault(import('..\\pages\\anime\\last-updated.vue' /* webpackChunkName: "pages_anime_last-updated" */))
const _1a850766 = () => interopDefault(import('..\\pages\\anime\\new-release.vue' /* webpackChunkName: "pages_anime_new-release" */))
const _47d75a56 = () => interopDefault(import('..\\pages\\movies\\arabic.vue' /* webpackChunkName: "pages_movies_arabic" */))
const _1349cc0c = () => interopDefault(import('..\\pages\\movies\\last-release.vue' /* webpackChunkName: "pages_movies_last-release" */))
const _05f94d8e = () => interopDefault(import('..\\pages\\movies\\most-watched.vue' /* webpackChunkName: "pages_movies_most-watched" */))
const _4f9768a0 = () => interopDefault(import('..\\pages\\movies\\new-release.vue' /* webpackChunkName: "pages_movies_new-release" */))
const _22e4df5e = () => interopDefault(import('..\\pages\\Netflix\\movies.vue' /* webpackChunkName: "pages_Netflix_movies" */))
const _726c7c92 = () => interopDefault(import('..\\pages\\Netflix\\series.vue' /* webpackChunkName: "pages_Netflix_series" */))
const _3aa8ce90 = () => interopDefault(import('..\\pages\\serieses\\last-updated.vue' /* webpackChunkName: "pages_serieses_last-updated" */))
const _3244ae7e = () => interopDefault(import('..\\pages\\serieses\\new-release.vue' /* webpackChunkName: "pages_serieses_new-release" */))
const _4dcae540 = () => interopDefault(import('..\\pages\\movie\\genre\\_name.vue' /* webpackChunkName: "pages_movie_genre__name" */))
const _b185bc06 = () => interopDefault(import('..\\pages\\series\\episode\\_id.vue' /* webpackChunkName: "pages_series_episode__id" */))
const _78869db9 = () => interopDefault(import('..\\pages\\series\\season\\_name.vue' /* webpackChunkName: "pages_series_season__name" */))
const _2d8f6718 = () => interopDefault(import('..\\pages\\episodetest\\_id.vue' /* webpackChunkName: "pages_episodetest__id" */))
const _d2d7f23e = () => interopDefault(import('..\\pages\\movie\\_name.vue' /* webpackChunkName: "pages_movie__name" */))
const _2ee196eb = () => interopDefault(import('..\\pages\\movtest\\_name.vue' /* webpackChunkName: "pages_movtest__name" */))
const _2ddf4c08 = () => interopDefault(import('..\\pages\\series\\_name.vue' /* webpackChunkName: "pages_series__name" */))
const _12352cd0 = () => interopDefault(import('..\\pages\\translators\\_name.vue' /* webpackChunkName: "pages_translators__name" */))
const _4435928a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _486f1485,
    name: "anime"
  }, {
    path: "/copyright",
    component: _30426eb0,
    name: "copyright"
  }, {
    path: "/home",
    component: _ff6084f4,
    name: "home"
  }, {
    path: "/mood",
    component: _e9dd90c4,
    name: "mood"
  }, {
    path: "/movies",
    component: _ce0d09d0,
    name: "movies"
  }, {
    path: "/ramadan",
    component: _cdc1f752,
    name: "ramadan"
  }, {
    path: "/ramadan-last",
    component: _03697afc,
    name: "ramadan-last"
  }, {
    path: "/serieses",
    component: _410fff76,
    name: "serieses"
  }, {
    path: "/anime/last-updated",
    component: _ed6c8abe,
    name: "anime-last-updated"
  }, {
    path: "/anime/new-release",
    component: _1a850766,
    name: "anime-new-release"
  }, {
    path: "/movies/arabic",
    component: _47d75a56,
    name: "movies-arabic"
  }, {
    path: "/movies/last-release",
    component: _1349cc0c,
    name: "movies-last-release"
  }, {
    path: "/movies/most-watched",
    component: _05f94d8e,
    name: "movies-most-watched"
  }, {
    path: "/movies/new-release",
    component: _4f9768a0,
    name: "movies-new-release"
  }, {
    path: "/Netflix/movies",
    component: _22e4df5e,
    name: "Netflix-movies"
  }, {
    path: "/Netflix/series",
    component: _726c7c92,
    name: "Netflix-series"
  }, {
    path: "/serieses/last-updated",
    component: _3aa8ce90,
    name: "serieses-last-updated"
  }, {
    path: "/serieses/new-release",
    component: _3244ae7e,
    name: "serieses-new-release"
  }, {
    path: "/movie/genre/:name?",
    component: _4dcae540,
    name: "movie-genre-name"
  }, {
    path: "/series/episode/:id?",
    component: _b185bc06,
    name: "series-episode-id"
  }, {
    path: "/series/season/:name?",
    component: _78869db9,
    name: "series-season-name"
  }, {
    path: "/episodetest/:id?",
    component: _2d8f6718,
    name: "episodetest-id"
  }, {
    path: "/movie/:name?",
    component: _d2d7f23e,
    name: "movie-name"
  }, {
    path: "/movtest/:name?",
    component: _2ee196eb,
    name: "movtest-name"
  }, {
    path: "/series/:name?",
    component: _2ddf4c08,
    name: "series-name"
  }, {
    path: "/translators/:name?",
    component: _12352cd0,
    name: "translators-name"
  }, {
    path: "/",
    component: _4435928a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
