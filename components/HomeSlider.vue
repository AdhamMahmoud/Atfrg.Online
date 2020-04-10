<template>
<!-- Home Slider -->
<div class="home-slider">
    <div v-swiper:mySwiperChoosen="swiperOption" class="my-swiper">
        <div class="swiper-wrapper">
                <div v-for="series in tvSerieses" :key="series.id" class="swiper-slide big-slide" :style="'background-image:url(' + GetSlide(series.posters) +')'">

                <!-- Slider Overlay -->
                <div class="slide-overlay"></div>
                <!-- Slider Info -->
                <div class="slide-info">
                             <nuxt-link :to="'/Series/' + series.title">  
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
<g>
	<g>
		<path d="M443.86,196.919L141.46,10.514C119.582-2.955,93.131-3.515,70.702,9.016c-22.429,12.529-35.819,35.35-35.819,61.041
			v371.112c0,38.846,31.3,70.619,69.77,70.829c0.105,0,0.21,0.001,0.313,0.001c12.022-0.001,24.55-3.769,36.251-10.909
			c9.413-5.743,12.388-18.029,6.645-27.441c-5.743-9.414-18.031-12.388-27.441-6.645c-5.473,3.338-10.818,5.065-15.553,5.064
			c-14.515-0.079-30.056-12.513-30.056-30.898V70.058c0-11.021,5.744-20.808,15.364-26.183c9.621-5.375,20.966-5.135,30.339,0.636
			l302.401,186.405c9.089,5.596,14.29,14.927,14.268,25.601c-0.022,10.673-5.261,19.983-14.4,25.56L204.147,415.945
			c-9.404,5.758-12.36,18.049-6.602,27.452c5.757,9.404,18.048,12.36,27.452,6.602l218.611-133.852
			c20.931-12.769,33.457-35.029,33.507-59.55C477.165,232.079,464.729,209.767,443.86,196.919z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</nuxt-link>
                    <div class="title">{{ series.title }}</div>
                    <div class="overview">{{ series.overview }}</div>
           
                </div>

            </div>
            <!-- Slide End -->
            <!-- Slide Start -->
            <div v-for="movie in movies" :key="movie.id" class="swiper-slide big-slide" :style="'background-image:url(' + GetSlide(movie.posters) +')'">

                <!-- Slider Overlay -->
                <div class="slide-overlay"></div>
                <!-- Slider Info -->
                <div class="slide-info">
                    <nuxt-link :to="'/movie/' + movie.title">
                   <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
<g>
	<g>
		<path d="M443.86,196.919L141.46,10.514C119.582-2.955,93.131-3.515,70.702,9.016c-22.429,12.529-35.819,35.35-35.819,61.041
			v371.112c0,38.846,31.3,70.619,69.77,70.829c0.105,0,0.21,0.001,0.313,0.001c12.022-0.001,24.55-3.769,36.251-10.909
			c9.413-5.743,12.388-18.029,6.645-27.441c-5.743-9.414-18.031-12.388-27.441-6.645c-5.473,3.338-10.818,5.065-15.553,5.064
			c-14.515-0.079-30.056-12.513-30.056-30.898V70.058c0-11.021,5.744-20.808,15.364-26.183c9.621-5.375,20.966-5.135,30.339,0.636
			l302.401,186.405c9.089,5.596,14.29,14.927,14.268,25.601c-0.022,10.673-5.261,19.983-14.4,25.56L204.147,415.945
			c-9.404,5.758-12.36,18.049-6.602,27.452c5.757,9.404,18.048,12.36,27.452,6.602l218.611-133.852
			c20.931-12.769,33.457-35.029,33.507-59.55C477.165,232.079,464.729,209.767,443.86,196.919z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

                    </nuxt-link>
                    <div class="title">{{ movie.title }}</div>
                    <div class="overview">{{ movie.overview }}</div>       
                </div>
            </div>
        
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
            createdAt
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
            createdAt
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
            slides:[],
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 1,
                 autoplay: {
                   delay: 10000,
                   disableOnInteraction: false
                 },
            }
        };
    },
    methods: {
            LinkToken(path){
            var crypto = require('crypto');
            var securityKey = '6ecb7c25-9744-498a-a49b-ae4c7980c861';
            var newpath = path.substring(24, path.length);
            // Set the time of expiry to one hour from now
            var expires = Math.round(Date.now() / 1000) + 43200;

            var hashableBase = securityKey + newpath + expires;
            // Generate and encode the token 
            var md5String = crypto.createHash("md5").update(hashableBase).digest("binary");
            var token = new Buffer(md5String, 'binary').toString('base64');
            token = token.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
            var url = 'https://atfrgonline.b-cdn.net' + newpath + '?token=' + token + '&expires=' + expires;
            return url;
        },
        GetSlide(posters) {
            var path = "";
            for (var i = 0; i < posters.length; i++) {
                if (posters[i].size == "FULL_SCREEN") {
                    path = posters[i].path;
                }
            }
            return this.LinkToken(path);
        },
        GetSlides(){
            var movies = this.movies;
            var tv = this.tvSerieses;
            var count = movies.length + tv.length;
            for(i = 0;  i < count; i++){
                
            }
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
