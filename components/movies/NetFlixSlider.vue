<template>
  <div class="Slider-list">
    <div class="container-fluid">
      <div
        class="row"
        ref="collapsedevs"
      >
        <div class="col-md-12">
          <div
            :class="{ col_show : active == 'series' , col_hide : active != 'series' }"
            id="series"
          >
           <ApolloQuery :query="gql => gql`
                     query GetSerieses {
                      tvSerieses(orderBy: updatedAt_DESC,first:10,  where: { isPublished: true, Production: NETFLIX, seriesType: TV , seasons_some:{episodes_some:{id_gt:1}, }}) {
                        id
                        title
                        posters {
                          size
                          path
                        }
                        audience
                        releaseDate
                        genres {
                          name
                        }
                        seasons {
                          id
                          imdbId
                        }
                      }
                    }
                    `">
              <template v-slot="{ result: { loading, error, data } }">
                <!-- Loading -->
                <div
                  v-if="loading"
                  class="loading"
                >
                  <img
                    src="https://atfrgimages.b-cdn.net/images/load.svg"
                    class="svg-load"
                    height="32px"
                    width="32px"
                  >
                </div>
                <!-- Error -->
                <div
                  v-else-if="error"
                  class="error apollo"
                > <resultNotFound /></div>
                <!-- Result -->
                <div
                  v-else-if="data && data.tvSerieses.length > 0"
                  class="Slider-block"
                >
                  <!-- Container End -->
                  <div
                    v-swiper:mySwiperNetflix="swiperOption"
                    class="my-swiper"
                  >
                    <div class="swiper-wrapper">
                      <div
                        v-for="series in data.tvSerieses"
                        :key="series.id"
                        :class="[{ poster_over : overId == series.id }, 'swiper-slide' ]"
                        @mouseover="itemOver(series.id)"
                        @mouseleave="itemNotOver"
                      >
                        <SeriesItem
                          :id="series.id"
                          :title="series.title"
                          :poster="GetPoster(series.posters)"
                          :genres="series.genres"
                          :audience="series.audience"
                          :seasons="series.seasons"
                          path="/series/"
                        />
                      </div>
                    </div>
                    <div
                      class="swiper-button-prev"
                      slot="button-prev"
                    ><i class="fas fa-chevron-right"></i></div>
                    <div
                      class="swiper-button-next"
                      slot="button-next"
                    ><i class="fas fa-chevron-left"></i></div>
                  </div>
                  <!-- No result -->
                </div>
                <div
                  v-else
                  class="no-result apollo"
                > <resultNotFound /></div>
              </template>
            </ApolloQuery>
            <div class="more-btn">
              <nuxt-link to="/Netflix/series"> <i class="im im-angle-right-circle"></i>
              </nuxt-link>
            </div>
          </div>
          <div
            :class="{ col_show : active == 'movies' , col_hide : active != 'movies' }"
            id="movies"
          >
            <ApolloQuery :query="gql => gql`
                      query getMoviestwo {
                      movies(orderBy: releaseDate_DESC, first:15,  where :{ isPublished: true,Production: NETFLIX, watchCount_lte:9999999}) {
                        id
                        title
                        posters {
                          size
                          path
                        }
                        audience
                        trailerPath
                        movieQuality
                        videoQualities
                        runtime
                        genres {
                          name
                        }
                        watchCount
                        imdbId
                      }
                    }
                    `">
              <template v-slot="{ result: { loading, error, data } }">
                <!-- Loading -->
                <div
                  v-if="loading"
                  class="loading apollo"
                >
                  <img
                    src="https://atfrgimages.b-cdn.net/images/load.svg"
                    class="svg-load"
                    height="32px"
                    width="32px"
                  >
                </div>
                <!-- Error -->
                <div
                  v-else-if="error"
                  class="error apollo"
                >
                  <resultNotFound />
                </div>
                <!-- Result -->
                <div
                  v-else-if="data && data.movies.length > 0"
                  class="Slider-block"
                >
                  <!-- Container End -->
                  <div
                    v-swiper:mySwiperTwoEW="swiperOption"
                    class="my-swiper"
                  >
                    <div class="swiper-wrapper">
                      <div
                        v-for="movie in data.movies"
                        :key="movie.id"
                        :class="['swiper-slide' , { poster_over : overId == movie.id }, ]"
                        @mouseover="itemOver(movie.id)"
                        @mouseleave="itemNotOver"
                      >
                        <TrailerItem
                          :id="movie.id"
                          :title="movie.title"
                          :quality="movie.movieQuality"
                          :poster="movie.posters"
                          :trailer="movie.trailerPath"
                          :genres="movie.genres"
                          :watchCount="movie.watchCount"
                          :audience="movie.audience"
                          :videoQualities="movie.videoQualities[0]"
                          :runtime="movie.runtime"
                          :run="true"
                          :imdbId="movie.imdbId"
                        />
                      </div>
                    </div>
                    <div
                      class="swiper-button-prev"
                      slot="button-prev"
                    ><i class="fas fa-chevron-right"></i></div>
                    <div
                      class="swiper-button-next"
                      slot="button-next"
                    ><i class="fas fa-chevron-left"></i></div>
                  </div>
                  <!-- No result -->
                </div>
                <div
                  v-else
                  class="no-result apollo"
                >
                  <resultNotFound />
                </div>
              </template>
            </ApolloQuery>
            <div class="more-btn">
              <nuxt-link to="/Netflix/movies"> <i class="im im-angle-right-circle"></i>
              </nuxt-link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import resultNotFound from "~/components/resultNotFound.vue";
import TrailerItem from "~/components/TrailerItem.vue";
import SeriesItem from "~/components/SeriesItem.vue";
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
} from "hooper";
import "hooper/dist/hooper.css";

export default {
  components: {
    resultNotFound,
    TrailerItem,
    Hooper,
    Slide,
    SeriesItem,
    HooperNavigation
  },
  props: {
    active: String
  },
  data: function() {
    return {
      overId: 0,
      timer: null,
      swiperOption: {
         slidesPerView: 5,
         spaceBetween: 5,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            1024: {
              slidesPerView: 5,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 5
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 5
            }
        }
      }
    };
  },
  methods: {
      GetPoster(posters) {
      var path = "";
      var i;
      for (i = 0; i < posters.length; i++) {
        if (posters[i].size == "THUMBNAIL") {
          path = posters[i].path;
        }
      }
      return path;
    },
    itemOver(id) {
      if (this.overId == 0) {
        this.overId = 1;
        this.timer = setTimeout(() => {
          if (this.overId == 1) {
            this.overId = id;
          }
        }, 1500);
      }
    },
    itemNotOver() {
      this.overId = 0;
      clearTimeout(this.timer);
    }
  }
};
</script>
<style lang= "scss">
@import "~/assets/sass/_vars.scss";
@import "~/assets/sass/_mixins.scss";

.col_show {
  display: block;
  overflow: hidden;
  @include transition(1s);
}
.col_hide {
  display: none;
  overflow: hidden;
  @include transition(0.8s);
}
.more-btn {
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  a {
    color: $primary-color !important;
    @include transition(0.3s);
    &:hover {
      color: $secondary-color !important;
      @include transition(0.3s);
    }
  }
}
</style>
