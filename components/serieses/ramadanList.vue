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
           <ApolloQuery :query='gql => gql`
                     query GetSerieses {
                      tvSerieses(orderBy: updatedAt_DESC,first:10,  where: { isPublished: true, lang: {name:"Arabic"}, seriesType: TV  }) {
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
                    `'>
              <template v-slot="{ result: { loading, error, data } }">
                <!-- Loading -->
                <div
                  v-if="loading"
                  class="loading"
                >
                  <img
                    src="load.svg"
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
                   <div v-swiper:mySwiperblurays="swiperOption" class="my-swiper">
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
              <nuxt-link to="/ramadan"> <i class="im im-angle-right-circle"></i>
              </nuxt-link>
            </div>
          </div>
          <div
            :class="{ col_show : active == 'choosen' , col_hide : active != 'choosen' }"
            id="last"
          >
          <ApolloQuery :query='gql => gql`
                     query GetSeriesesq {
                      tvSerieses(orderBy: updatedAt_DESC,first:20, where: { isPublished: true, lang: {name:"Arabic"}, seriesType: TV}) {
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
                          episodes(orderBy:createdAt_DESC,first:1){
                              id
                              title
                              order
                          }
                        }
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
                    src="load.svg"
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
                   <div v-swiper:mySwiperblus="swiperOption" class="my-swiper">
                    <div class="swiper-wrapper">
                      <div
                        v-for="series in data.tvSerieses"
                        :key="series.id"
                        :class="[{ poster_over : overId == series.id } , 'swiper-slide']"
                      >
                        <div v-for="episode in series.seasons[0].episodes" :key="episode.id">
                         <Epsitem :id="episode.id" :title="episode.title" :order="episode.order" :poster="GetPoster(series.posters)" :genres="series.genres" :audience="series.audience" path="/series/episode/" />
                        </div>
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
              <nuxt-link to="/ramadan-last">تشوف اخر الحلقات ؟
              </nuxt-link>
            </div>
            <!-- <div class="ads" id="ads">
                <div id="container-af30aca1ff5507bbeb531b00839438e8"></div>
            </div> -->
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
import Epsitem from '~/components/Epsitem.vue';
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
    Epsitem,
    HooperNavigation
  },
  props: {
    active: String
  },
  mounted(){
      //  var list = document.getElementById("ads");
      //   this.ads = document.createElement("div");
      //   var sc = document.createElement('script');
      //   // this.ads.classList.add("vide-ad");
      //   sc.setAttribute('data-cfasync','false');
      //    sc.setAttribute('src','//pl15441614.passtechusa.com/af30aca1ff5507bbeb531b00839438e8/invoke.js');
      //   this.ads.appendChild(sc);
      //   list.appendChild(this.ads);
  },
  data: function() {
    return {
      overId: 0,
      ads:null,
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
              spaceBetween: 5
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 5
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

            if (path.includes("cdn.atfrg")) {
                path = this.LinkToken2(path);
            }
            return path;
        },
         LinkToken2(path){
            var newpath = path.substring(24, path.length);
            var url = 'https://Atfrgimages.b-cdn.net' + newpath;
            return url;
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
<style lang= "scss" scoped>
@import "~/assets/sass/_vars.scss";
@import "~/assets/sass/_mixins.scss";
.item-slide{
    max-width: 250px; 
}
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
.ads{
    text-align: center;
      width: 50%;
      pointer-events: none;
      margin: 0 auto;
    max-height: 200px;
    .it-client{
    margin:0 auto !important;
    }
}
@include sm{
.ads{
   width: auto;
}
}
</style>
