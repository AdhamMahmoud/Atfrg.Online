<template>
<!-- Single Series -->
<div class="Single-Series">
    <!-- Container -->
    <div class="container">
        <div class="row">
            <!-- poster -->
            <div class="col-md-3">
                <div class="poster">
                    <img :src="GetPoster(posters)" :alt="title"></div>
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
                        <li> <span>اللغة</span> <i class="fas fa-angle-double-left"></i> <span>{{ lang }}</span></li>
                        <li> <span>تاريخ الاصدار</span><i class="fas fa-angle-double-left"></i> <span>{{ getReleaseDate(releaseDate) }}</span></li>
                        <li> <span>الجمهور</span><i class="fas fa-angle-double-left"></i> <span>{{ getaudience(audience) }}</span></li>
                        <li> <span>النوع</span><i class="fas fa-angle-double-left"></i> <span>
                                <div class="genres">
                                    <i v-for="genre in genres" :key="genre.id"> {{ genre.name }} </i>
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
                    <button :class="{ active : active == 'trailer'}" @click="activeCol('trailer')">
                        الاعلان
                    </button>
                    <button :class="{ active : active == 'movie'}" @click="activeCol('movie')">

                        الحلقة</button>
                    <button :class="{ active : active == 'download'}" @click="activeCol('download')">
                        التحميل</button>
                </div>
            </div>
        </div>
        <!-- List -->
        <div class="row">
            <div class="col-md-12">
                <!-- trailer -->
                <div :class="{ col_show : active == 'trailer' , col_hide : active != 'trailer' }" id="trailer">
                <iframe  class="player-mov player-trailer" v-if="active == 'trailer'" :src="'https://www.youtube.com/embed/'+ seasons[0].trailerPath"> </iframe>                
                </div>
                <!-- Movie -->
                <div :class="{ col_show : active == 'movie' , col_hide : active != 'movie' }" id="movie">
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
                    <vue-plyr class="player-mov" ref="film" seektime="10" :title="title" :id="id" :options="playerOptions" @playing="nowPlaying" @loadeddata="loadeddata" :emit="['playing','loadeddata']">
                        <video crossorigin="anonymous">
                            <!-- Video Source -->
                            <source v-for="video in seasons[0].episodes[0].links" :key="video.id" :src="LinkToken(validLink(video.path))" type="video/mp4" :size="video.quality.replace('Q','')">
                            <!-- Video Subtitles -->
                            <track v-for="(subtitle, index) in seasons[0].episodes[0].subtitles" :key="subtitle.id" kind="captions" :label="subtitle.name" :srclang="subtitle.lang.name" :src="LinkToken(subtitle.path.substring(0, subtitle.path.length - 4) + '.vtt')" :default="{ 'default': index == seasons[0].episodes[0].subtitles.length - 2}">
                        </video>
                    </vue-plyr>
                </div>
                <!-- Download -->
                <div :class="{ col_show : active == 'download' , col_hide : active != 'download' }" id="download">
                    <div class="note">
                        للتحميل يرجي تحميل <span>الحلقة + الترجمة. </span>
                        يتم وضعهم في مكان <span>واحد</span> بنفس الاسم لتعمل الترجمة.
                        ننصح بأستخدام برنامج <nuxt-link to="https://www.videolan.org/vlc/download-windows.html">VLC</nuxt-link> .
                        يمكنك تحميل <span>الموسم كامل</span> فقط ادخل للصفحة الخاصة بالموسم في قسم التحميل.
                    </div>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">الجودة</th>
                                <th scope="col">التحمل</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="video in seasons[0].episodes[0].links" :key="video.id">
                                <th scope="row">1</th>
                                <td>{{video.quality.replace('Q','')}}</td>
                                <td><a :href="LinkToken(validLink(video.path))">تحميل</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">اللغة</th>
                                <th scope="col">المترجم</th>
                                <th scope="col">التحمل</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="subtitle in seasons[0].episodes[0].subtitles" :key="subtitle.id">
                                <th scope="row">{{subtitle.lang.name}}</th>
                                <td>{{subtitle.name }}</td>
                                <td><a :href="LinkToken(subtitle.path)">تحميل</a></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                 <bugs :title="title"></bugs>
            </div>
        </div>
    </div>
    <!-- Container -->
    <div class="container" style="padding: 0;
    border-radius: 20px;">
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
                    <div v-swiper:mySwiperOnwa="swiperOption" class="my-swiper">
                        <div class="swiper-wrapper">
                            <div v-for="episode in seasons[0].episodes" :key="episode.id" :class="[{ poster_over : overId == episode.id }, 'swiper-slide' ]" @mouseover="itemOver(episode.id)" @mouseleave="itemNotOver">
                                <Epsitem :id="episode.id" :title="episode.title" :poster="GetPoster(seasons[0].posters)" :genres="genres" :audience="audience" path="/series/episode/" />
                            </div>
                        </div>
                        <div class="swiper-button-prev" slot="button-prev"><i class="fas fa-chevron-right"></i></div>
                        <div class="swiper-button-next" slot="button-next"><i class="fas fa-chevron-left"></i></div>
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
                    <ApolloQuery :query="gql => gql`
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
                          episodes(orderBy: title_DESC) {
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
                    `" :variables="{ title: $route.params.name }">
                        <template v-slot="{ result: { loading, error, data } }">
                            <!-- Loading -->
                            <div v-if="loading" class="loading apollo">Loading...</div>
                            <!-- Error -->
                            <div v-else-if="error" class="error apollo">
                                <resultNotFound />
                            </div>
                            <!-- Result -->
                            <div v-else-if="data && data.tvSerieses.length > 0" class="Slider-block">
                                <!-- Container End -->
                                <div v-swiper:mySwiperOn="swiperOption" class="my-swiper">
                                    <div class="swiper-wrapper">
                                        <div v-for="season in data.tvSerieses[0].seasons" :key="season.id" :class="[{ poster_over : overId == season.id }, 'swiper-slide' ]" @mouseover="itemOver(season.id)" @mouseleave="itemNotOver">
                                            <SeriesItem :id="season.id" :title="season.title" :poster=" GetPoster(season.posters)" :genres="genres" :audience="audience" :seasons="season.episodes" path="/series/season/" />
                                        </div>
                                    </div>
                                    <div class="swiper-button-prev" slot="button-prev"><i class="fas fa-chevron-right"></i></div>
                                    <div class="swiper-button-next" slot="button-next"><i class="fas fa-chevron-left"></i></div>
                                </div>
                                <!-- No result -->
                            </div>
                            <div v-else class="no-result apollo">
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
import Epsitem from '~/components/Epsitem.vue';
import bugs from '~/components/bugs.vue';
import gql from "graphql-tag";
export default {
    components: {
        TrailerItem,
        resultNotFound,
        SeriesItem,
        Epsitem,
        bugs
    },
    data: function () {
        return {
            active: "movie",
            overId: 0,
            timer: null,
            ShowIntroBtn: false,
            firstNote: false,
            secondNote: false,
            notesdone: false,
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
    created(){
          this.handleSearch();
    },
    mounted() {
        this.handleSearch();
        this.film = this.$refs.film.player;
    },
    methods: {
        validLink(path) {      
            var type = path.slice(-3).toLowerCase();
            path = path.substring(0, path.length - 3) + type
            return path;
        },
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
            var url = 'https://cdn.atfrg.online' + newpath + '?token=' + token + '&expires=' + expires;
            return url;
        },
        loadeddata() {
            if (this.readCookie(this.$props.id) != 0) {
                var time = parseInt(this.readCookie(this.$props.id));
                this.timer = setTimeout(() => {
                    this.film.currentTime = time;
                }, 2000);
            }
        },
        // validLink(path) {
        //     var type = path.slice(-3).toLowerCase();
        //     path = path.substring(0, path.length - 3) + type;
        //     path = path.replace(/ /g, '%20');
        //     return path;
        // },
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
            } else {
                this.ShowIntroBtn = false;
                this.firstNote = false;
            }
            if (this.film.currentTime != 0) {
                this.createCookie(this.$props.id, this.film.currentTime, 10);
            }
            if (this.film.currentTime > (this.$props.runtime / 2 * 60) && this.notesdone != true) {
                if (this.secondNote == false) {}
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
        createCookie(name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
                var expires = "; expires=" + date.toGMTString();
            } else var expires = "";
            document.cookie = name + "=" + value + expires + "; path=/";
        },
        readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(";");
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == " ") c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
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
                    "https://www.omdbapi.com/?i=" + this.$props.imdbId + "&apikey=527f9c9a"
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
        border-radius: 20px;
         object-fit: contain;
    }
}
</style>
