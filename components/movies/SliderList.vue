<template>
  <div class="Slider-list">
    <div class="container-fluid">
      <div
        class="row"
        ref="collapsedevs"
      >
        <div class="col-md-12">
          <div
            :class="{ col_show : active == 'mostviewMovies' , col_hide : active != 'mostviewMovies' }"
            id="mostviewMovies"
          >
            <!-- Apoolo Query -->
            <ApolloQuery :query='gql => gql`
                      query getMoviestwo {
                      movies(orderBy: watchCount_DESC, first:15,  where :{ isPublished: true,updatedAt_lte:"9999"}) {
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
                    `'>
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
                    v-swiper:mySwiperOnwA="swiperOption"
                    class="my-swiper"
                  >
                    <div class="swiper-wrapper">
                      <div
                        v-for="movie in data.movies"
                        :key="movie.id"
                        :class="[{ poster_over : overId == movie.id }, 'swiper-slide' ]"
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
              <nuxt-link to="/movies/most-watched"> <i class="im im-angle-right-circle"></i>
              </nuxt-link>
            </div>
          </div>
          <div
            :class="{ col_show : active == 'lastupdatesMovies' , col_hide : active != 'lastupdatesMovies' }"
            id="lastupdatesMovies"
          >
            <ApolloQuery :query="gql => gql`
                      query getMoviestwo {
                      movies(orderBy: updatedAt_DESC, first:10,  where :{ isPublished: true}) {
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
              <nuxt-link to="/movies/last-release"> <i class="im im-angle-right-circle"></i>
              </nuxt-link>
            </div>
          </div>
          <div
            :class="{ col_show : active == 'choosen' , col_hide : active != 'choosen' }"
            id="choosen"
          >
            <ApolloQuery :query='gql => gql`
                      query getMoviestwo {
                      movies(orderBy: releaseDate_DESC,  first:10, where :{ isPublished: true, releaseDate_lt:"2020"}) {
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
                    `'>
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
                    v-swiper:mySwiperChoosen="swiperOption"
                    class="my-swiper"
                  >
                    <div class="swiper-wrapper">
                      <div
                        v-for="movie in data.movies"
                        :key="movie.id"
                        :class="[{ poster_over : overId == movie.id }, 'swiper-slide']"
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
                          :imdbId="movie.imdbId"
                          :run="true"
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
              <nuxt-link to="/movies/new-release"> <i class="im im-angle-right-circle"></i> </nuxt-link>
            </div>
          </div>
          <div
            :class="{ col_show : active == 'BluRay' , col_hide : active != 'BluRay' }"
            id="BluRay"
          >
            <ApolloQuery :query='gql => gql`
                      query getMoviestwo {
                      movies(orderBy: updatedAt_DESC, first:15,  where :{ isPublished: true,watchCount_lte:9999999,lang:{name:"Arabic"}}) {
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
                    `'>
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
                    v-swiper:mySwiperbluray="swiperOption"
                    class="my-swiper"
                  >
                    <div class="swiper-wrapper">
                      <div
                        v-for="movie in data.movies"
                        :key="movie.id"
                        :class="[{ poster_over : overId == movie.id }, 'swiper-slide']"
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
              <nuxt-link to="/movies/arabic"> <i class="im im-angle-right-circle"></i> </nuxt-link>
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
