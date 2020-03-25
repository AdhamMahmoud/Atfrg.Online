<template>
  <!-- Trailer Item -->
  <nuxt-link
    :to="'/movie/' + title"
    class="item-fade"
  >
    <div
      v-lazy-container="{ selector: 'img', loading: 'load.svg' }"
      class="item-slide"
      @mouseover="runTrailer(id)"
      @mouseleave="stopTrailer(id)"
    >
      <!-- Movie Poster Container-->
      <div class="poster">
        <!-- quality -->
        <span class="quality">{{ quality }}</span>
        <span class="views">
          {{ watchCount }}
          <i class="far fa-eye"></i>
        </span>
        <span
          class="rate"
          v-if="films.imdbRating != null"
        >
          {{ films.imdbRating }} <i class="far fa-star"></i></span>
        <!-- Movie Poster img -->
        <img
          :data-src="GetSlide(poster)"
          :alt="title"
        />
      </div>

      <!-- Movie Overlay -->
      <div class="overlay">
        <!-- Movie Trailer -->
        <!-- <div v-if="run == true" class="overlay-trailer" style="display:none;" :ref="id + 'poster'">
                  <vue-plyr :options="playerOptions" :id="id" class="trailer" :ref="id">
                    <video>
                      <source :src="trailer" type="video/mp4"/>
                    </video>
                  </vue-plyr>
                </div> -->
        <!-- Movie Overlay Information -->
        <div class="information">
          <!-- Movie Name -->
          <h3 class="name">{{ title }}</h3>
          <!-- Movie Category -->
          <div class="subinfo-block">
            <span class="runtime">
              {{ runTimeCalc(runtime) }}
            </span>
            <span class="audience">{{ audience }} </span>
            <div class="genres">
              <i
                v-for="genre in genres"
                :key="genre.id"
              > {{ genre.name }} </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  data: function() {
    return {
      isPlay: false,
      trailer_path: " ",
      films: []
    };
  },
  computed: {
    playerOptions() {
      const options = {
        captions: {
          active: false
        },
        controls: [
          "play-large" // The large play button in the center
        ]
      };
      return options;
    }
  },
  methods: {
    handleSearch() {
      this.films = [];
      fetch(
        "http://www.omdbapi.com/?i=" + this.$props.imdbId + "&apikey=527f9c9a"
      )
        .then(res => {
          return res.json();
        })
        .then(res => {
          this.films = res;
        });
    },
    runTrailer(id) {
      this.isPlay = true;
      timer: setTimeout(() => {
        this.runTrailerNow(id);
      }, 1500);
    },
    runTrailerNow(id) {
      if (this.isPlay && this.$refs[id]) {
        this.trailer_path = this.$props.trailer;
        this.$refs[id].player.play();
        this.$refs[id + "poster"].style = "display:block";
      }
    },
    stopTrailer(id) {
      this.isPlay = false;
      if (this.$refs[id]) {
        this.$refs[id].player.stop();
        this.trailer_path = " ";
        this.$refs[id + "poster"].style = "display:none";
        clearTimeout(this.timer);
      }
    },
    runTimeCalc(secounds) {
      return secondsToHms(secounds);
    },
    GetSlide(posters) {
      var path = "";
      var i;
      for (i = 0; i < posters.length; i++) {
        if (posters[i].size == "THUMBNAIL") {
          path = posters[i].path;
        }
      }
      return path;
    }
  },
  mounted() {
    this.handleSearch();
  },
  props: {
    id: String,
    title: String,
    quality: String,
    poster: Array,
    trailer: String,
    genres: Array,
    watchCount: Number,
    audience: String,
    movieQuality: String,
    runtime: Number,
    run: Boolean,
    imdbId: String
  }
};

function secondsToHms(d) {
  d = Number(d * 60);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? " ساعة, " : " ساعة, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " دقيقة, " : " دقيقة, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " ثانية" : " ثانية") : "";
  return hDisplay + mDisplay + sDisplay;
}
</script>

<style lang="scss" scoped="">
@import "~/assets/sass/_vars.scss";
@import "~/assets/sass/_mixins.scss";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
