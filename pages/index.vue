<template>
<!-- Home Page -->
<div class="home">

<!-- Container -->
<div class="container-fluid">
  <div class="row">
    <div class="col-md-12">
      <!-- Home Slider -->
      <HomeSlider />
    <!--  Movies Block -->
    <Movies />
    <Netflix />
    <!-- Serieses Block -->
    <Serieses />
     <!--Animes Block -->
    <Anime />
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
import Anime from '~/components/animes/AnimeHome.vue'
import loading from '~/components/loading.vue'
export default {
 head: {
    title:"اتفرج اون لاين مشاهدة وتحميل افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online",
    meta: [
       { hid: 'description', name: 'description', content:  "مشاهدة ومتحميل مباشر افلام و مسلسلات وانمي بجودة عالية مترجمة - اتفرج اون لاين - بدون اعلانات" || ""},
        { hid: 'keywords', name: 'keywords', content:  "مشاهدة مسلسل ,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى, فيلم , تحميل افلام , مشاهدة افلام بجودة عالية , مشاهدة انمي اون لاين, تحميل موسم برابط واحد , مشاهدة بدون اعلانات , تحميل مباشر  , افلام جديدة , مسلسل " || ""}

    ]
  },
   data: function () {
        return {
          loading:true,
        }
   },
  components: {
    HomeSlider,
    Movies,
    Serieses,
    Anime,
    loading,
    Netflix
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
