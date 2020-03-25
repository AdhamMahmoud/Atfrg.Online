<template>
<!-- Home Slider -->
<div class="home-slider">
    <div v-swiper:mySwiperChoosen="swiperOption" class="my-swiper">
        <div class="swiper-wrapper">
            <!-- Slide Start -->
            <div v-for="movie in movies" :key="movie.id" class="swiper-slide big-slide" :style="'background-image:url(' + GetSlide(movie.posters) +')'">

                <!-- Slider Overlay -->
                <div class="slide-overlay"></div>
                <!-- Slider Info -->
                <div class="slide-info">
                    <div class="title">{{ movie.title }}</div>
                    <div class="overview">{{ movie.overview }}</div>
                    <nuxt-link :to="'/movie/' + movie.title">Play <i class="fas fa-play"></i></nuxt-link>
                </div>
            </div>
            <div v-for="series in tvSerieses" :key="series.id" class="swiper-slide big-slide" :style="'background-image:url(' + GetSlide(series.posters) +')'">

                <!-- Slider Overlay -->
                <div class="slide-overlay"></div>
                <!-- Slider Info -->
                <div class="slide-info">
                    <div class="title">{{ series.title }}</div>
                    <div class="overview">{{ series.overview }}</div>
                    <nuxt-link :to="'/Series/' + series.title">Play <i class="fas fa-play"></i></nuxt-link>
                </div>

            </div>
            <!-- Slide End -->
        </div>
    </div>
    <!-- Slider Start -->
</div>
</template>

<script>
import resultNotFound from "~/components/resultNotFound.vue";
import gql from "graphql-tag";
export default {
    apollo: {
        movies: {
            query: gql `
        query GetSliderMovies {
          movies(
            orderBy: createdAt_DESC
            first: 2
            where: { isPublished: true, posters_some: { size_in: FULL_SCREEN } }
          ) {
            id
            title
            posters {
              size
              path
            }
            audience
            overview
            genres {
              name
            }
          }
        }
      `
        },
        tvSerieses: {
            query: gql `
        query GetSlidertvSerieses {
          tvSerieses(
            orderBy: createdAt_DESC
            first: 4
            where: { isPublished: true, posters_some: { size_in: FULL_SCREEN } }
          ) {
            id
            title
            seriesType
            overview
            posters {
              size
              path
            }
            audience
            genres {
              name
            }
          }
        }
      `
        }
    },
    components: {
        resultNotFound
    },
    data: function () {
        return {
            movies: [],
            tvSerieses: [],
            sliderplay: true,
            active: 0,
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 1,
                //  autoplay: {
                //    delay: 10000,
                //    disableOnInteraction: false
                //  },
            }
        };
    },
    methods: {
        GetSlide(posters) {
            var path = "";
            for (var i = 0; i < posters.length; i++) {
                if (posters[i].size == "FULL_SCREEN") {
                    path = posters[i].path;
                }
            }
            return path;
        },
        getaudience(audience) {
            var audienceText = "";
            if (audience == "G") {
                audienceText = "للمشاهدة العامة, مناسب لجميع الاعمار.";
            } else if (audience == "PG") {
                audienceText = "ينصح بإرشاد الآباء, بعض المشاهد ربما لا تناسب الاطفال.";
            } else if (audience == "PG13") {
                audienceText = "يجب إرشاد الآباء, لا يناسب الأطفال أقل من 13 سنة.";
            } else if (audience == "R") {
                audienceText = "للكبار فقط , يحتوى على مشاهد فاضحة او عنيفة.";
            } else if (audience == "NC17") {
                audienceText =
                    " لا يصلح لمن هما اقل من 17 عاما , يحتوى على مشاهد فاضحة او عنيفة";
            } else {
                audienceText = "غير مصنف";
            }

            return audience + " - " + audienceText;
        },
        secondsToHms(d) {
            d = Number(d);
            var h = Math.floor(d / 3600);
            var m = Math.floor((d % 3600) / 60);
            var s = Math.floor((d % 3600) % 60);

            var hDisplay = h > 0 ? h + (h == 1 ? " ساعة, " : " ساعة, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " دقيقة, " : " دقيقة, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " ثانية" : " ثانية") : "";
            return hDisplay + mDisplay + sDisplay;
        }
    }
};
</script>

<style lang="scss">
@import "~/assets/sass/_vars.scss";
@import "~/assets/sass/_mixins.scss";


</style>
