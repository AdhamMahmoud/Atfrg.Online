<template>
  <!-- Single Series -->
  <div class="Single-Series">
    <!-- Container -->
    <div class="container">
      <div class="row">
        <!-- poster -->
        <div class="col-md-3">
          <div class="poster">
            <img
              :src="GetPoster(posters)"
              :alt="title"
            ></div>
          <div class="descrption">
            <div class="title">القصة</div>
            <span class="story">{{ overview }}</span>
          </div>
        </div>
        <!-- Information -->
        <div class="col-md-9">
          <div class="movie-information">
            <!-- Series Title -->
            <div class="movie-title">
              {{ title }}
            </div>
            <!-- Series Info List -->
            <ul class="information-list">
              <li> <span>الغة</span> <i class="fas fa-angle-double-left"></i> <span>{{ lang }}</span></li>
              <li> <span>تاريخ الاصدار</span><i class="fas fa-angle-double-left"></i> <span>{{ getReleaseDate(releaseDate) }}</span></li>
              <li> <span>الجمهور</span><i class="fas fa-angle-double-left"></i> <span>{{ getaudience(audience) }}</span></li>
              <li> <span>النوع</span><i class="fas fa-angle-double-left"></i> <span>
                  <div class="genres">
                    <i
                      v-for="genre in genres"
                      :key="genre.id"
                    > {{ genre.name }} </i>
                  </div>
                </span></li>
              <li> <span>عدد الاجزاء</span><i class="fas fa-angle-double-left"></i> <span>{{ seassonCount(seasons) }} جزء</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <!-- Watch List -->
          <div class="watch-list">
            <button
              :class="{ active : active == 'trailer'}"
              @click="activeCol('trailer')"
            >
              الاعلان
            </button>
            <button
              :class="{ active : active == 'movie'}"
              @click="activeCol('movie')"
            >

              الحلقة</button>
            <button
              :class="{ active : active == 'download'}"
              @click="activeCol('download')"
            >
              التحميل</button>
          </div>
        </div>
      </div>
      <!-- List -->
      <div class="row">
        <div class="col-md-12">
          <!-- trailer -->
          <div
            :class="{ col_show : active == 'trailer' , col_hide : active != 'trailer' }"
            id="trailer"
          >
            <!-- Trailer Player -->
            <vue-plyr
              class="player-mov player-trailer"
              ref="e3lan"
              :options="playerOptions"
            >
              <div
                :id="trailerPath"
                data-plyr-provider="youtube"
                :data-plyr-embed-id="trailerPath"
              ></div>
            </vue-plyr>
          </div>
          <!-- Movie -->
          <div
            :class="{ col_show : active == 'movie' , col_hide : active != 'movie' }"
            id="movie"
          >
           <button
              v-if="ShowIntroBtn"
              class="skipIntro"
              @click="skip()"
            >Skip Intro</button>
              <div class="chat chat-video" v-if="firstNote">
              <div class="mine messages">
                  <div class="message last">
                      <p> جهزت فشارك والحاجة ال هتشربها 😋 ؟</p>
                        <button @click="CloseNote">كلو تمام</button>
                  </div>
              </div>
          </div>
            <div class="chat chat-video" v-if="secondNote">
              <div class="mine messages">
                  <div class="message last">
                      <p>خد بريك كدا ادخل الحمام وحات حاجة تشربها ✌️❤️</p>
                        <button @click="CloseNote(2)">تمام</button>
                  </div>
              </div>
          </div>
            <!-- Movie Player -->
            <vue-plyr
              class="player-mov"
              ref="film"
              seektime="10"
              :title="title"
              :id="id"
              :options="playerOptions"
              @playing="nowPlaying"
              :emit="['playing']"
            >
              <video>
                <!-- Video Source -->
                <source
                  v-for="video in seasons[0].episodes[0].links"
                  :key="video.id"
                  :src="video.path"
                  type="video/webm"
                  :size="video.quality.replace('Q','')"
                >
                <!-- Video Subtitles -->
                <track
                  v-for="(subtitle, index) in seasons[0].episodes[0].subtitles"
                  :key="subtitle.id"
                  kind="captions"
                  :label="subtitle.name"
                  :srclang="subtitle.lang.name"
                  :src="subtitle.path"
                  :default="{ 'default': index == seasons[0].episodes[0].subtitles.length - 2}"
                >
              </video>
            </vue-plyr>
          </div>
          <!-- Download -->
          <div
            :class="{ col_show : active == 'download' , col_hide : active != 'download' }"
            id="download"
          >
            <ul class="download-item">
              <li
                v-for="video in seasons[0].episodes[0].links"
                :key="video.id"
              >
                <nuxt-link :to="video.path">{{video.quality.replace('Q','')}}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Container -->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="other-title">
            الحلقات المتاحة
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="same-movies Slider-block">
            <div
              v-swiper:mySwiperOnwa="swiperOption"
              class="my-swiper"
            >
              <div class="swiper-wrapper">
                <div
                  v-for="episode in seasons[0].episodes"
                  :key="episode.id"
                  :class="[{ poster_over : overId == episode.id }, 'swiper-slide' ]"
                  @mouseover="itemOver(episode.id)"
                  @mouseleave="itemNotOver"
                >
                  <SeriesItem
                    :id="episode.id"
                    :title="episode.title"
                    :poster="GetPoster(episode.posters)"
                    :genres="genres"
                    :audience="audience"
                    path="/series/episode/"
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
          </div>
        </div>
      </div>
    </div>
    <!-- Container -->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="other-title">
            الأجزاء المتاحة
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="same-movies">
            <ApolloQuery
              :query="gql => gql`
                  query gettvSeries($title:String) {
                   tvSerieses(where: {isPublished: true , seasons_some:{title_contains:$title}}) {
                        id
                        title
                        posters {
                        size
                        path
                        }
                        audience
                        trailerPath
                        releaseDate
                        genres {
                        name
                        }
                        lang {
                        id
                        name
                        }
                        keywords
                        overview
                        seasons{
                          id
                          title
                          slug
                          trailerPath
                          releaseDate
                          imdbId
                          posters {
                            size
                            path
                          }
                          episodes {
                          id
                          title
                          runtime
                          isPublished
                          posters {
                            size
                            path
                          }
                          videoQualities
                          subtitles {
                            id
                            path
                            name
                            lang{
                              id
                              name
                            }
                          }
                          links {
                            id
                            path
                            quality
                          }
                          slug
                        }
                      }
                    }
                    }
                    `"
              :variables="{ title: $route.params.name }"
            >
              <template v-slot="{ result: { loading, error, data } }">
                <!-- Loading -->
                <div
                  v-if="loading"
                  class="loading apollo"
                >Loading...</div>
                <!-- Error -->
                <div
                  v-else-if="error"
                  class="error apollo"
                >
                  <resultNotFound />
                </div>
                <!-- Result -->
                <div
                  v-else-if="data && data.tvSerieses.length > 0"
                  class="Slider-block"
                >
                  <!-- Container End -->
                  <div
                    v-swiper:mySwiperOn="swiperOption"
                    class="my-swiper"
                  >
                    <div class="swiper-wrapper">
                      <div
                        v-for="season in data.tvSerieses[0].seasons"
                        :key="season.id"
                        :class="[{ poster_over : overId == season.id }, 'swiper-slide' ]"
                        @mouseover="itemOver(season.id)"
                        @mouseleave="itemNotOver"
                      >
                        <SeriesItem
                          :id="season.id"
                          :title="season.title"
                          :poster=" GetPoster(season.posters)"
                          :genres="genres"
                          :audience="audience"
                          :seasons="season.episodes"
                          path="/series/season/"
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
                >
                  <resultNotFound />
                </div>
              </template>
            </ApolloQuery>
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
import gql from "graphql-tag";
export default {
  components: {
    TrailerItem,
    resultNotFound,
    SeriesItem
  },
  data: function() {
    return {
      active: "movie",
      overId: 0,
      timer: null,
      ShowIntroBtn: false,
      firstNote:false,
      secondNote:false,
      notesdone:false,
      currentTimes: 0,
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 4,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            1024: {
              slidesPerView: 5,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40
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
  props: {
    id: String,
    title: String,
    posters: Array,
    genres: Array,
    audience: String,
    trailerPath: String,
    lang: String,
    releaseDate: String,
    overview: String,
    keywords: Array,
    seasons: Array
  },
  created() {
    this.handleSearch();
  },
  mounted() {
    this.handleSearch();
    this.film = this.$refs.film.player;
    this.e3lan = this.$refs.e3lan.player;
  },
  methods: {
    
    activeCol(name) {
      this.active = name;
      this.VideoClose();
    },
    CloseNote(num) {
            this.firstNote = false;
            if (num == 2) {
                this.secondNote = false;
                this.notesdone = true;
            }

        },
        nowPlaying() {
            this.film.currentTrack = 1;
            this.film.toggleCaptions(true);
            if (this.film.currentTime < 120) {
                this.ShowIntroBtn = true;
                this.firstNote = true;
                this.film.fullscreen.exit();
            } else {
                this.ShowIntroBtn = false;
                this.firstNote = false;
            }
            if (this.film.currentTime > (this.$props.runtime / 2 * 60) && this.notesdone != true) {
                if (this.secondNote == false) {
                    this.film.fullscreen.exit();
                }
                this.secondNote = true;
            }
            this.timer = setTimeout(() => {
                this.ShowIntroBtn = false;
            }, 120000);
        },
        skip() {
            this.film.currentTime = 120;
            this.ShowIntroBtn = false;
        },
    seassonCount(c) {
      var count = 1;
      if (c != null) {
        for (var i = 1; i < c.length; i++) {
          count++;
        }
      }
      return count;
    },
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
    },
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
    VideoClose() {
      this.film.pause();
      this.e3lan.pause();
    },
    getReleaseDate(date) {
      var currentTime = new Date(date);
      var month = ("0" + (currentTime.getMonth() + 1)).slice(-2);
      var day = ("0" + currentTime.getDate()).slice(-2);
      var year = currentTime.getFullYear();
      var date = day + "/" + month + "/" + year;
      return date;
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
    getRunTime(runtime) {
      var d = Number(runtime);
      var h = Math.floor(d / 3600);
      var m = Math.floor((d % 3600) / 60);
      var s = Math.floor((d % 3600) % 60);

      var hDisplay = h > 0 ? h + (h == 1 ? " ساعة, " : " ساعة, ") : "";
      var mDisplay = m > 0 ? m + (m == 1 ? " دقيقة, " : " دقيقة, ") : "";
      var sDisplay = s > 0 ? s + (s == 1 ? " ثانية" : " ثانية") : "";
      return hDisplay + mDisplay + sDisplay;
    }
  },
  computed: {
    playerOptions() {
      const options = {
        captions: {
          active: false
        },
        controls: [
          "play-large", // The large play button in the center
          "restart", // Restart playback
          "rewind", // Rewind by the seek time (default 10 seconds)
          "play", // Play/pause playback
          "fast-forward", // Fast forward by the seek time (default 10 seconds)
          "progress", // The progress bar and scrubber for playback and buffering
          "current-time", // The current time of playback
          "duration", // The full duration of the media
          "mute", // Toggle mute
          "volume", // Volume control
          "captions", // Toggle captions
          "settings", // Settings menu
          "pip", // Picture-in-picture (currently Safari only)
          "airplay", // Airplay (currently Safari only)
          "fullscreen" // Toggle fullscreen
        ]
      };
      return options;
    }
  }
};
</script>

<style lang="scss">
*:focus {
  outline: none;
  box-shadow: none;
}

@import "~/assets/sass/_vars.scss";
@import "~/assets/sass/_mixins.scss";

.Single-Series {
  margin: 20px 0;
  text-align: right;
  direction: rtl;
  margin-bottom: 40px;
  // Vue Custom Style

  // .plyr__progress__container {
  //   width: 100%;
  // }

  .plyr__volume {
    input {
      width: 60px;
    }
  }
  .plyr video {
    width: 100%;
    min-height: 550px;
    border-radius: 20px;
    object-fit: cover;
  }
}

</style>
