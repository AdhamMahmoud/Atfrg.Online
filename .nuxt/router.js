import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1d4e9fb5 = () => interopDefault(import('..\\pages\\anime\\index.vue' /* webpackChunkName: "pages_anime_index" */))
const _5b06f2ce = () => interopDefault(import('..\\pages\\mood.vue' /* webpackChunkName: "pages_mood" */))
const _600b55e8 = () => interopDefault(import('..\\pages\\movies\\index.vue' /* webpackChunkName: "pages_movies_index" */))
const _e9d33374 = () => interopDefault(import('..\\pages\\serieses\\index.vue' /* webpackChunkName: "pages_serieses_index" */))
const _09203971 = () => interopDefault(import('..\\pages\\anime\\last-updated.vue' /* webpackChunkName: "pages_anime_last-updated" */))
const _51b3e37d = () => interopDefault(import('..\\pages\\anime\\new-release.vue' /* webpackChunkName: "pages_anime_new-release" */))
const _7154752a = () => interopDefault(import('..\\pages\\movies\\last-release.vue' /* webpackChunkName: "pages_movies_last-release" */))
const _fe1aae84 = () => interopDefault(import('..\\pages\\movies\\most-watched.vue' /* webpackChunkName: "pages_movies_most-watched" */))
const _61243120 = () => interopDefault(import('..\\pages\\movies\\new-release.vue' /* webpackChunkName: "pages_movies_new-release" */))
const _468fc480 = () => interopDefault(import('..\\pages\\serieses\\last-updated.vue' /* webpackChunkName: "pages_serieses_last-updated" */))
const _1676b94e = () => interopDefault(import('..\\pages\\serieses\\new-release.vue' /* webpackChunkName: "pages_serieses_new-release" */))
const _58f10c30 = () => interopDefault(import('..\\pages\\movie\\genre\\_name.vue' /* webpackChunkName: "pages_movie_genre__name" */))
const _22367d2d = () => interopDefault(import('..\\pages\\series\\episode\\_id.vue' /* webpackChunkName: "pages_series_episode__id" */))
const _5cb8a889 = () => interopDefault(import('..\\pages\\series\\season\\_name.vue' /* webpackChunkName: "pages_series_season__name" */))
const _6b739211 = () => interopDefault(import('..\\pages\\movie\\_name.vue' /* webpackChunkName: "pages_movie__name" */))
const _9fbb9668 = () => interopDefault(import('..\\pages\\series\\_name.vue' /* webpackChunkName: "pages_series__name" */))
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
    path: "/mood",
    component: _5b06f2ce,
    name: "mood"
  }, {
    path: "/movies",
    component: _600b55e8,
    name: "movies"
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
    path: "/movie/:name?",
    component: _6b739211,
    name: "movie-name"
  }, {
    path: "/series/:name?",
    component: _9fbb9668,
    name: "series-name"
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
