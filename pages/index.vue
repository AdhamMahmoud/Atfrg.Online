<template>
<!-- Home Page -->
<div class="home">

<!-- Container -->
<div class="container-fluid">
  <div class="row">
    <div class="col-md-12">
      <!-- Home Slider -->
      <HomeSlider v-if="homeSlider" />
    <!--  Movies Block -->
    <Movies v-if="movies" />
     <Ramadan  v-if="movies" />
    <Netflix  v-if="netflix"/>
    <!-- Serieses Block -->
    <Serieses  v-if="Serieses"/>
     <!--Animes Block -->
    <Anime v-if="Anime"/>
    </div>
  </div>
</div>
</div>
</template>
<script>

import HomeSlider from '~/components/HomeSlider.vue'
import Movies from '~/components/movies/MoviesHome.vue'
import Netflix from '~/components/movies/NetFlixHome.vue'
import Serieses from '~/components/serieses/SeriesHome.vue'
import Ramadan from '~/components/serieses/ramadan.vue'
import Anime from '~/components/animes/AnimeHome.vue'
export default {
  data(){
    return{
      homeSlider:false,
      movies:false,
      netflix:false,
      Serieses:false,
      Anime:false,
    }
  },
  mounted(){
   this.timer = setTimeout(() => {
      this.homeSlider = true;
      this.movies = true;
      }, 1000); 
      this.timer2 = setTimeout(() => {
      this.netflix = true;
      this.Serieses = true;
      this.Anime = true;
      }, 2000); 
  },
 head: {
    title:"اتفرج اون لاين مشاهدة وتحميل افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online",
    meta: [
       { hid: 'description', name: 'description', content:  "اتفرج اون لاين مشاهد وتحميل افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية بدون اعلانات مزعجة"},
        { hid: 'keywords', name: 'keywords', content:  "مشاهدة مسلسل ,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى, فيلم , تحميل افلام , مشاهدة افلام بجودة عالية , مشاهدة انمي اون لاين, تحميل موسم برابط واحد , مشاهدة بدون اعلانات , تحميل مباشر  , افلام جديدة , مسلسل " || ""},
         {
        property: "image",
        content: "https://atfrgimages.b-cdn.net/og2.png"
      },
        {
        property: "og:image",
        content: "https://atfrgimages.b-cdn.net/og2.png"
      },
      {

          property: "og:title",
          content: "اتفرج اون لاين مشاهدة وتحميل افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online"
      },
      {
          property: "og:description",
          content: "اتفرج اون لاين مشاهد وتحميل افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية بدون اعلانات مزعجة"
      },
      {
          property: "og:keywords",
          content:"مشاهدة مسلسل ,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى, فيلم , تحميل افلام , مشاهدة افلام بجودة عالية , مشاهدة انمي اون لاين, تحميل موسم برابط واحد , مشاهدة بدون اعلانات , تحميل مباشر  , افلام جديدة , مسلسل "
      },

    ]
  },
  components: {
    HomeSlider,
    Movies,
    Serieses,
    Anime,
    Netflix,
    Ramadan
  },


}
</script>
<style lang="scss" scoped>
@import '~/assets/sass/_vars.scss';
@import '~/assets/sass/_mixins.scss';

.home {
    margin: 0;
    .col-md-12 {
        padding: 0;
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
