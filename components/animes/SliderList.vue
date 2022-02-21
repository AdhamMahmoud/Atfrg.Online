<template>
    <div class="Slider-list">
        <div class="container-fluid">
            <div class="row" ref="collapsedevs">
              <div class="col-md-12">
                <div :class="{ col_show : active == 'lastupdatesMovies' , col_hide : active != 'lastupdatesMovies' }" id="lastupdatesMovies">
                  <ApolloQuery
                    :query="gql => gql`
                     query GetSerieses {
                      tvSerieses(orderBy: createdAt_DESC, first:10, where: { isPublished: true, seriesType: ANIME }) {
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
                        }
                      }
                    }
                    `">
                    <template v-slot="{ result: { loading, error, data } }">
                    <!-- Loading -->
                    <div v-if="loading" class="loading">
                    <img src="load.svg" class="svg-load" height="32px" width="32px">
                    </div>
                    <!-- Error -->
                    <div v-else-if="error" class="error apollo"><resultNotFound /></div>
                    <!-- Result -->
                    <div v-else-if="data && data.tvSerieses.length > 0" class="Slider-block">
                    <!-- Container End -->
                  <div v-swiper:mySwiperOn1="swiperOption" class="my-swiper">
                      <div class="swiper-wrapper">
                        <div v-for="series in data.tvSerieses" :key="series.id" :class="[{ poster_over : overId == series.id }, 'swiper-slide' ]" @mouseover="itemOver(series.id)"  @mouseleave="itemNotOver">
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
                      <div class="swiper-button-prev" slot="button-prev"><i class="fas fa-chevron-right"></i></div>
                      <div class="swiper-button-next" slot="button-next"><i class="fas fa-chevron-left"></i></div>
                    </div>
                  <!-- No result -->
                  </div>
               <div
                  v-else
                  class="no-result apollo"
                ><resultNotFound /></div>
                  </template>
                  </ApolloQuery>
                   <div class="more-btn" style="justify-content: center"><nuxt-link to="/anime/new-release"> <i class="im im-angle-right-circle"></i> </nuxt-link></div>
              </div>
                <div :class="{ col_show : active == 'choosen' , col_hide : active != 'choosen' }" id="choosen">
                   <ApolloQuery
                    :query="gql => gql`
                     query GetSerieses {
                      tvSerieses(orderBy: createdAt_DESC, first:10, where: { isPublished: true , seriesType: ANIME}) {
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
                        }
                      }
                    }
                    `">
                    <template v-slot="{ result: { loading, error, data } }">
                    <!-- Loading -->
                    <div v-if="loading" class="loading">
                    <img src="load.svg" class="svg-load" height="32px" width="32px">
                    </div>
                    <!-- Error -->
                    <div v-else-if="error" class="error apollo"><resultNotFound /></div>
                    <!-- Result -->
                    <div v-else-if="data && data.tvSerieses.length > 0" class="Slider-block">
                    <!-- Container End -->
                  <div v-swiper:mySwiperOn2="swiperOption" class="my-swiper">
                      <div class="swiper-wrapper">
                        <div v-for="series in data.tvSerieses" :key="series.id" :class="[{ poster_over : overId == series.id }, 'swiper-slide' ]" @mouseover="itemOver(series.id)"  @mouseleave="itemNotOver">
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
                      <div class="swiper-button-prev" slot="button-prev"><i class="fas fa-chevron-right"></i></div>
                      <div class="swiper-button-next" slot="button-next"><i class="fas fa-chevron-left"></i></div>
                    </div>
                  <!-- No result -->
                  </div>
                   <div
                  v-else
                  class="no-result apollo"
                ><resultNotFound /></div>
                  </template>
                  </ApolloQuery>
                   <div class="more-btn" style="justify-content: center"><nuxt-link to="/anime/last-updated"> <i class="im im-angle-right-circle"></i></nuxt-link></div>
              </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import SeriesItem from '~/components/SeriesItem.vue';
import resultNotFound from "~/components/resultNotFound.vue";
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  components:{
    SeriesItem,
    Hooper,
    Slide,
    HooperNavigation,
    resultNotFound
  },
  props:{
    active:String
  },
  data: function() {
    return {
      overId:0,
      timer:null,
      swiperOption: {
          slidesPerView: 8,
          spaceBetween: 5,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
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
      },
    }
  },
  methods:{
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
  itemOver(id){
      if(this.overId == 0){
        this.overId = 1;
        this.timer = setTimeout(() => {
          if(this.overId == 1) {
            this.overId = id;
            }
          }, 1500);
      }
    },
    itemNotOver(){
      this.overId = 0;
      clearTimeout(this.timer);
    }
  }
}
</script>
<style lang= "scss">
@import '~/assets/sass/_vars.scss';
@import '~/assets/sass/_mixins.scss';

.col_show{
  display: block;
  overflow: hidden;
  @include transition(1s);
}
.col_hide{
  display: none;
  overflow: hidden;
  @include transition(0.8s);
}
.more-btn{
    padding-bottom: 1rem;
    display: flex;
    justify-content: flex-end;
    padding: 5px 0;
    a {
      color:$primary-color !important;
      @include transition(0.3s);
      &:hover{
        color:$secondary-color !important;
        @include transition(0.3s);
      }
    }
}

</style>
