<template>
<!-- Trailer Item -->
  <nuxt-link :to="path + title">
    <div v-lazy-container="{ selector: 'img', loading: 'https://atfrgimages.b-cdn.net/images/loader.png' }"
        class="item-slide">
        <!-- Movie Poster Container-->
        <div class="poster">
            <!-- quality -->
            <span class="views">
                {{ seassonCount(seasons) }}
                <i class="fas fa-video"></i>
            </span>
 
            <!-- Movie Poster img -->
            <img :data-src="GetSlide(poster)" :alt="title"></div>
            <!-- Movie Overlay -->
            <div class="overlay">
                    <!-- Movie Overlay Information -->
                    <div class="information">
                        <!-- Movie Name -->
                        <h3 class="name">{{title}}</h3>
                        <!-- Movie Category -->
                        <div class="subinfo-block">
                            <span class="audience">{{ getaudience(audience) }}
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
      data:function(){
        return{
        seasonCount:1,
         films: []
      }
    },
    methods:{
        handleSearch() {
      // this.films = [];
      // fetch(
      //   "https://www.omdbapi.com/?i=" + this.$props.seasons[0].imdbId + "&apikey=bf7293bf"
      // )
      //   .then(res => {
      //     return res.json();
      //   })
      //   .then(res => {
      //     this.films = res;
      //   });
    },
      GetSlide(posters) {
      var po = posters;
      if(po.includes("cdn.atfrg")){
        po = this.LinkToken(po);
      }
      return po;
    },
    LinkToken(path) {
            path = path.replace(/^\s+/g, '');
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
            var url = 'https://Atfrgimages.b-cdn.net' + newpath + '?token=' + token + '&expires=' + expires;
            return url;
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
  
    props:{
    id:String,
    title:String,
    quality:String,
    poster:String,
    genres:Array,
    seasons:Array,
    audience:String,
    path:String
  },
  //  mounted() {
  //   this.handleSearch();
  // },
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
