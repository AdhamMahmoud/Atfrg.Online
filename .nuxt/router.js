import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2a3829eb = () => interopDefault(import('..\\pages\\anime\\index.vue' /* webpackChunkName: "pages_anime_index" */))
const _64bdd9f8 = () => interopDefault(import('..\\pages\\mood.vue' /* webpackChunkName: "pages_mood" */))
const _1f59db1c = () => interopDefault(import('..\\pages\\movies\\index.vue' /* webpackChunkName: "pages_movies_index" */))
const _28612850 = () => interopDefault(import('..\\pages\\serieses\\index.vue' /* webpackChunkName: "pages_serieses_index" */))
const _c072330a = () => interopDefault(import('..\\pages\\anime\\last-updated.vue' /* webpackChunkName: "pages_anime_last-updated" */))
const _df43259a = () => interopDefault(import('..\\pages\\anime\\new-release.vue' /* webpackChunkName: "pages_anime_new-release" */))
const _a0f92d40 = () => interopDefault(import('..\\pages\\movies\\last-release.vue' /* webpackChunkName: "pages_movies_last-release" */))
const _81bcc618 = () => interopDefault(import('..\\pages\\movies\\most-watched.vue' /* webpackChunkName: "pages_movies_most-watched" */))
const _6614947a = () => interopDefault(import('..\\pages\\movies\\new-release.vue' /* webpackChunkName: "pages_movies_new-release" */))
const _4afadc76 = () => interopDefault(import('..\\pages\\serieses\\last-updated.vue' /* webpackChunkName: "pages_serieses_last-updated" */))
const _c3b36850 = () => interopDefault(import('..\\pages\\serieses\\new-release.vue' /* webpackChunkName: "pages_serieses_new-release" */))
const _20d08d8c = () => interopDefault(import('..\\pages\\movie\\genre\\_name.vue' /* webpackChunkName: "pages_movie_genre__name" */))
const _a018ca5a = () => interopDefault(import('..\\pages\\series\\episode\\_name.vue' /* webpackChunkName: "pages_series_episode__name" */))
const _372f89da = () => interopDefault(import('..\\pages\\series\\season\\_name.vue' /* webpackChunkName: "pages_series_season__name" */))
const _785d1c47 = () => interopDefault(import('..\\pages\\movie\\_name.vue' /* webpackChunkName: "pages_movie__name" */))
const _4069f156 = () => interopDefault(import('..\\pages\\series\\_name.vue' /* webpackChunkName: "pages_series__name" */))
const _255e6fd6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _2a3829eb,
    name: "anime"
  }, {
    path: "/mood",
    component: _64bdd9f8,
    name: "mood"
  }, {
    path: "/movies",
    component: _1f59db1c,
    name: "movies"
  }, {
    path: "/serieses",
    component: _28612850,
    name: "serieses"
  }, {
    path: "/anime/last-updated",
    component: _c072330a,
    name: "anime-last-updated"
  }, {
    path: "/anime/new-release",
    component: _df43259a,
    name: "anime-new-release"
  }, {
    path: "/movies/last-release",
    component: _a0f92d40,
    name: "movies-last-release"
  }, {
    path: "/movies/most-watched",
    component: _81bcc618,
    name: "movies-most-watched"
  }, {
    path: "/movies/new-release",
    component: _6614947a,
    name: "movies-new-release"
  }, {
    path: "/serieses/last-updated",
    component: _4afadc76,
    name: "serieses-last-updated"
  }, {
    path: "/serieses/new-release",
    component: _c3b36850,
    name: "serieses-new-release"
  }, {
    path: "/movie/genre/:name?",
    component: _20d08d8c,
    name: "movie-genre-name"
  }, {
    path: "/series/episode/:name?",
    component: _a018ca5a,
    name: "series-episode-name"
  }, {
    path: "/series/season/:name?",
    component: _372f89da,
    name: "series-season-name"
  }, {
    path: "/movie/:name?",
    component: _785d1c47,
    name: "movie-name"
  }, {
    path: "/series/:name?",
    component: _4069f156,
    name: "series-name"
  }, {
    path: "/",
    component: _255e6fd6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
