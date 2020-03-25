<template>
<!-- Trailer Item -->
  <nuxt-link :to="path + title">
    <div v-lazy-container="{ selector: 'img', loading: 'load.svg' }"
        class="item-slide">
        <!-- Movie Poster Container-->
        <div class="poster">
            <!-- quality -->
            <span class="views">
                {{ seassonCount(seasons) }}
                <i class="fas fa-video"></i>
            </span>
            <!-- Movie Poster img -->
            <img :data-src="poster" :alt="title"></div>
            <!-- Movie Overlay -->
            <div class="overlay">
                    <!-- Movie Overlay Information -->
                    <div class="information">
                        <!-- Movie Name -->
                        <h3 class="name">{{title}}</h3>
                        <!-- Movie Category -->
                        <div class="subinfo-block">
                            <span class="audience">{{ audience }}
                            </span>
                            <div class="genres">
                              <i v-for="genre in genres" :key="genre.id"> {{ genre.name }} </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </nuxt-link>
</template>

<script>
export default {
    methods:{
    runTimeCalc(secounds){
      return secondsToHms(secounds);
    },
    seassonCount(c){
      var count = 1;
      if(c != null){
        for(var i = 1; i < c.length; i++){
          count++;
        }
      }
      return count;
    }
  },
      data:function(){
        return{
        seasonCount:1,
      }
    },
    props:{
    id:String,
    title:String,
    quality:String,
    poster:String,
    genres:Array,
    seasons:Array,
    audience:String,
    path:String
  }
}

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " ساعة, " : " ساعة, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " دقيقة, " : " دقيقة, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " ثانية" : " ثانية") : "";
    return hDisplay + mDisplay + sDisplay;
}

</script>

<style lang= "scss" scoped="">
@import '~/assets/sass/_vars.scss';
@import '~/assets/sass/_mixins.scss';


</style>
