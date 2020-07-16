<template>
<div>
    <div class="home-slider-block" style="margin-top: -21rem">
    <div class="container-fluid back-color">
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-2 flex col-6">
                        <!-- Block Title -->
                        <div class="block-type">
                            <nuxt-link to="/movies">
                               افلام جديدة
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="col-md-10 col-6">
                        <!-- Categories List -->
                        <div class="more-btn">
                            <nuxt-link to="/movies/most-watched"> المزيد </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="Slider-list">
        <div class="container-fluid">
            <div class="row" ref="collapsedevs">
                <div class="col-md-12">
                    <div :class="{ col_show : active == 'mostviewMovies' , col_hide : active != 'mostviewMovies' }" id="mostviewMovies">
                        <!-- Apoolo Query -->
                        <ApolloQuery :query='gql => gql`
                      query getMoviestwo {
                      movies(orderBy: releaseDate_DESC, first:15,  where :{ isPublished: true, createdAt_lte:"2050"}) {
                        id
                        title
                        posters {
                          size
                          path
                        }
                        audience
                        movieQuality
                        videoQualities
                        runtime
                        genres {
                          name
                        }
                        watchCount
                        imdbId
                        releaseDate
                        trailerPath
                      }
                    }
                    `'>
                            <template v-slot="{ result: { loading, error, data } }">
                                <!-- Loading -->
                                <div v-if="loading" class="loading">
                                    <img src="https://atfrgimages.b-cdn.net/images/load.svg" class="svg-load" height="32px" width="32px">
                                </div>
                                <!-- Error -->
                                <div v-else-if="error" class="error apollo">
                                    <resultNotFound />
                                </div>
                                <!-- Result -->
                                <div v-else-if="data && data.movies.length > 0" class="Slider-block">
                                    <!-- Container End -->
                                    <div v-swiper:mySwiperOnw7a="swiperOption" class="my-swiper">
                                        <div class="swiper-wrapper">
                                            <div v-for="movie in data.movies" :key="movie.id" :class="[{ poster_over : overId == movie.id }, 'swiper-slide' ]" @mouseover="itemOver(movie.id)" @mouseleave="itemNotOver">
                                                <TrailerItem :releaseDate="movie.releaseDate" :id="movie.id" :title="movie.title" :quality="movie.movieQuality" :poster="movie.posters" :trailer="movie.trailerPath" :genres="movie.genres" :watchCount="movie.watchCount" :audience="movie.audience" :videoQualities="movie.videoQualities[0]" :runtime="movie.runtime" :run="true" :imdbId="movie.imdbId" />
                                            </div>
                                        </div>
                                        <div class="swiper-button-prev" slot="button-prev"><i class="fas fa-chevron-right"></i></div>
                                        <div class="swiper-button-next" slot="button-next"><i class="fas fa-chevron-left"></i></div>
                                    </div>
                                    <!-- No result -->
                                </div>
                                <div v-else class="no-result apollo">
                                    <resultNotFound />
                                </div>
                            </template>
                        </ApolloQuery>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
     <div class="home-slider-block">
      <div class="container-fluid back-color">
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-2 col-xs-12 flex col-6">
                        <!-- Block Title -->
                        <div class="block-type">
                            <nuxt-link to="/movies">
                              الأكثر مشاهدة
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="col-md-10 col-6">
                        <!-- Categories List -->
                        <div class="more-btn">
                            <nuxt-link to="/movies/most-watched"> المزيد </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="Slider-list">
        <div class="container-fluid">
            <div class="row" ref="collapsedevs">
                <div class="col-md-12">
                    <div :class="{ col_show : active == 'mostviewMovies' , col_hide : active != 'mostviewMovies' }" id="mostviewMovies">
                        <!-- Apoolo Query -->
                        <ApolloQuery :query='gql => gql`
                      query getMoviestwo {
                      movies(orderBy: watchCount_DESC, first:15,  where :{ isPublished: true}) {
                        id
                        title
                        posters {
                          size
                          path
                        }
                        audience
                        movieQuality
                        videoQualities
                        runtime
                        genres {
                          name
                        }
                        watchCount
                        imdbId
                        releaseDate
                        trailerPath
                      }
                    }
                    `'>
                            <template v-slot="{ result: { loading, error, data } }">
                                <!-- Loading -->
                                <div v-if="loading" class="loading">
                                    <img src="https://atfrgimages.b-cdn.net/images/load.svg" class="svg-load" height="32px" width="32px">
                                </div>
                                <!-- Error -->
                                <div v-else-if="error" class="error apollo">
                                    <resultNotFound />
                                </div>
                                <!-- Result -->
                                <div v-else-if="data && data.movies.length > 0" class="Slider-block">
                                    <!-- Container End -->
                                    <div v-swiper:mySwiperOnwA1x="swiperOption" class="my-swiper">
                                        <div class="swiper-wrapper">
                                            <div v-for="movie in data.movies" :key="movie.id" :class="[{ poster_over : overId == movie.id }, 'swiper-slide' ]" @mouseover="itemOver(movie.id)" @mouseleave="itemNotOver">
                                                <TrailerItem :releaseDate="movie.releaseDate" :id="movie.id" :title="movie.title" :quality="movie.movieQuality" :poster="movie.posters" :trailer="movie.trailerPath" :genres="movie.genres" :watchCount="movie.watchCount" :audience="movie.audience" :videoQualities="movie.videoQualities[0]" :runtime="movie.runtime" :run="true" :imdbId="movie.imdbId" />
                                            </div>
                                        </div>
                                        <div class="swiper-button-prev" slot="button-prev"><i class="fas fa-chevron-right"></i></div>
                                        <div class="swiper-button-next" slot="button-next"><i class="fas fa-chevron-left"></i></div>
                                    </div>
                                    <!-- No result -->
                                </div>
                                <div v-else class="no-result apollo">
                                    <resultNotFound />
                                </div>
                            </template>
                        </ApolloQuery>

                    </div>
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
    data: function () {
        return {
            overId: 0,
            timer: null,
            swiperOption: {
                slidesPerView: 8,
                spaceBetween: 5,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 8,
                        spaceBetween: 5
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 5
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 5
                    },
                    320: {
                        slidesPerView: 2,
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

<style lang="scss">
@import "~/assets/sass/_vars.scss";
@import "~/assets/sass/_mixins.scss";
// .home-slider-block:first-of-type{
//     margin-top: -24rem !important;
//     box-shadow: none;
// }

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
    justify-content: flex-end;
        font-size: 16px;

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
