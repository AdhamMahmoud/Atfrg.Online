<template>
<!-- Single Movie -->
<div class="Single-Movie">
    <!-- Container -->
    <div class="container">
        <div class="row">
            <!-- poster -->
            <div class="col-md-3">
                <div class="poster">
                    <img :src="GetPoster(poster)" :alt="title"></div>
                <div class="descrption">
                    <div class="title">القصة</div>
                    <span class="story">{{ overview }}</span>
                </div>
            </div>
            <!-- Information -->
            <div class="col-md-9">
                <div class="movie-information">
                    <!-- Movie Title -->
                    <div  v-if="lang != 'Arabic'" class="movie-title">
                        {{ title + " (" +this.movieyear+")"}}
                    </div>
                    <div  v-else class="movie-title">
                        {{ title }}
                    </div>
                    <!-- Movie Info List -->
                    <ul class="information-list">
                        <li> <span>اللغة</span> <i class="fas fa-angle-double-left"></i> <span>{{ lang }}</span></li>
                        <li v-if="lang != 'Arabic'"> <span>تاريخ الاصدار</span><i class="fas fa-angle-double-left"></i> <span>{{ getReleaseDate(releaseDate) }}</span></li>
                        <li> <span>الجمهور</span><i class="fas fa-angle-double-left"></i> <span>{{ getaudience(audience) }}</span></li>
                        <li  v-if="lang != 'Arabic'"> <span>المدة</span> <i class="fas fa-angle-double-left"></i><span>{{ getRunTime(runtime) }} </span></li>
                        <li> <span>الجودة</span><i class="fas fa-angle-double-left"></i> <span>{{ quality }} - {{ videoQualities }}</span></li>
                        <li> <span>النوع</span><i class="fas fa-angle-double-left"></i>
                            <span>
                                <i v-for="gen in genres" :key="gen.id">
                                    {{ gen.name }}
                                </i>
                            </span>
                        </li>
                        <li  v-if="lang != 'Arabic'"> <span>التقيم</span><i class="fas fa-angle-double-left"></i> <span> 10 / {{ films.imdbRating }} ( {{ films.imdbVotes }} شخص)</span></li>
                        <li v-if="subtitles.length > 0 && subtitles[0].path != null && subtitles[0].path.length > 0 && lang != 'Arabic'"> <span>الترجمة</span><i class="fas fa-angle-double-left"></i>
                            شكر خاص لـ
                            <span>
                                <i v-for="subtitle in subtitles" :key="subtitle.id">
                                    {{ subtitle.name }}
                                </i>
                            </span>
                        </li>
                        <li v-else><span>الترجمة</span><i class="fas fa-angle-double-left"></i> لا يوجد</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Container -->
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <!-- Watch List -->
                <div class="watch-list">
                    <button :class="{ active : active == 'trailer'}" @click="activeCol('trailer')">
                        الاعلان
                    </button>
                    <button :class="{ active : active == 'movie'}" @click="activeCol('movie')">

                        الفيلم</button>
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
                    <!-- Trailer Player -->
                    <iframe class="player-mov player-trailer" v-if="active == 'trailer'" :src="'https://www.youtube.com/embed/'+trailer"> </iframe>
                </div>
                <!-- Movie -->
                <div v-if="active == 'movie' " :class="{ col_show : active == 'movie' , col_hide : active != 'movie' }" id="movie">
                    <!-- Movie Player -->

                    <MoviePlayer :id="id" :title="title" :poster="GetPoster(poster)" :links="movLinks" :subtitles="subtitles"></MoviePlayer>

                </div>
                <!-- Download -->
                <div :class="{ col_show : active == 'download' , col_hide : active != 'download' }" id="download">
                    <div class="note">
                        للتحميل يرجي تحميل <span>الفيلم + الترجمة. </span>
                        يتم وضعهم في مكان <span>واحد</span> بنفس الاسم لتعمل الترجمة.
                        ننصح بأستخدام برنامج <nuxt-link to="https://www.videolan.org/vlc/download-windows.html">VLC</nuxt-link> .
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
                            <tr v-for="video in movLinks" :key="video.id">
                                <th scope="row">1</th>
                                <td>{{video.quality.replace('Q','')}}</td>
                                <td>
                                    <a :href="Download(validLink(video.path)) " download>تحميل</a>
                                </td>
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
                            <tr v-for="subtitle in subtitles" :key="subtitle.id">
                                <th scope="row">{{subtitle.lang.name}}</th>
                                <td>{{subtitle.name }}</td>
                                <td v-if="subtitle.path.length > 0">
                                    <a :href="Download(validLink(subtitle.path))" download>تحميل</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <bugs :title="title"></bugs>
            </div>
        </div>
    </div>
    <!-- Container -->
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="other-title">
                    افلام مشابهة
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="same-movies">
                    <ApolloQuery :query="gql => gql`
                      query getMovies($audience: Audience!, $genres2: String! , $id: ID!, $Production: Production) {
                      movies(orderBy: watchCount_DESC, first:10, where: { isPublished: true , audience: $audience , genres_some: { name: $genres2 }, Production:$Production, id_not:$id}) {
                        id
                        title
                        posters {
                          size
                          path
                        }
                        audience
                        trailerPath
                        movieQuality
                        imdbId
                        videoQualities
                        runtime
                        genres {
                          name
                        }
                        watchCount
                      }
                    }
                    `" :variables="{ audience , genres2 , id, Production}">
                        <template v-slot="{ result: { loading, error, data } }">
                            <!-- Loading -->
                            <div v-if="loading" class="loading apollo">
                                <img src="https://atfrgimages.b-cdn.net/images/load.svg" class="svg-load" height="32px" width="32px">
                            </div>
                            <!-- Error -->
                            <div v-else-if="error" class="error apollo">
                                <resultNotFound />
                            </div>
                            <!-- Result -->
                            <div v-else-if="data && data.movies.length > 0" class="Slider-block">
                                <!-- Container End -->
                                <div v-swiper:mySwiper2="swiperOption" class="my-swiper">
                                    <div class="swiper-wrapper">
                                        <div v-for="movie in data.movies" :key="movie.id" :class="['swiper-slide' , { poster_over : overId == movie.id }, ]" @mouseover="itemOver(movie.id)" @mouseleave="itemNotOver">
                                            <TrailerItem :id="movie.id" :title="movie.title" :imdbId="movie.imdbId" :quality="movie.movieQuality" :poster="movie.posters" :trailer="movie.trailerPath" :genres="movie.genres" :watchCount="movie.watchCount" :audience="movie.audience" :videoQualities="movie.videoQualities[0]" :runtime="movie.runtime" @mouseleave="itemNotOver" :run="true" />
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
import MoviePlayer from "~/components/MoviePlayer.vue";
import TrailerItem from "~/components/TrailerItem.vue";
import bugs from "~/components/bugs.vue";
import gql from "graphql-tag";
const WatchCount_Movie = gql `
   mutation Movie($id: ID,$watchCount:Int) {
    updateMovie(where:{id:$id},data:{
    watchCount:$watchCount
    })
    {
        id
    }
    }
 `;
export default {
    components: {
        TrailerItem,
        resultNotFound,
        bugs,
        MoviePlayer
    },
    head() {
        return {
            title: this.gettitle,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'description',
                    name: 'description',
                    content: "مشاهدة فيلم " + this.$props.title + " مترجم اون لاين بجودة عالية - اتفرج اون لاين Atfrg.Online" || ""
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: "مشاهدة فيلم,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى, فيلم " + this.$props.title + " , تحميل افلام , مشاهدة افلام بجودة عالية , مشاهدة انمي اون لاين, تحميل موسم برابط واحد , مشاهدة بدون اعلانات , تحميل مباشر  , افلام جديدة" || ""
                }
            ]
        }
    },
    data: function () {
        return {
            ShowIntroBtn: false,
            firstNote: false,
            secondNote: false,
            notesdone: false,
            currentTimes: 0,
            timeload: false,
            movieyear: "",
            films: [],
            active: "movie",
            overId: 0,
            timer: null,
            swiperOption: {
                slidesPerView: 4,
                spaceBetween: 10,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10
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
        quality: String,
        poster: Array,
        trailer: String,
        genres: Array,
        watchCount: Number,
        audience: String,
        videoQualities: String,
        runtime: Number,
        lang: String,
        releaseDate: String,
        overview: String,
        subtitles: Array,
        movLinks: Array,
        imdbId: String,
        Production: String
    },
    mounted() {
        this.handleSearch();
        // this.film = this.$refs.film.player;
        // this.e3lan = this.$refs.e3lan.player;
        this.WatchCount();
    },
    computed: {
        genres2(){
           return this.$props.genres[0].name;
        },
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
    },
    methods: {
        validLink(path) {
            var type = path.slice(-3).toLowerCase();
            path = path.substring(0, path.length - 3) + type
            return path;
        },
        LinkToken(path) {
            var crypto = require('crypto');
            var securityKey = '6ecb7c25-9744-498a-a49b-ae4c7980c861';
            var newpath = path.substring(24, path.length);
            // Set the time of expiry to one hour from now
            var expires = Math.round(Date.now() / 1000) + 21600;

            var hashableBase = securityKey + newpath + expires;
            // Generate and encode the token 
            var md5String = crypto.createHash("md5").update(hashableBase).digest("binary");
            var token = new Buffer(md5String, 'binary').toString('base64');
            token = token.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
            var url = 'https://atfrgonline.b-cdn.net' + newpath + '?token=' + token + '&expires=' + expires;
            return url;
        },
        Download(path) {
            var crypto = require('crypto');
            var securityKey = '27ab3ad5-9fbb-4713-9671-5d4cb7a1a31e';
            var newpath = path.substring(24, path.length);
            // Set the time of expiry to one hour from now
            var expires = Math.round(Date.now() / 1000) + 21600;
            var hashableBase = securityKey + newpath + expires;
            // Generate and encode the token 
            var md5String = crypto.createHash("md5").update(hashableBase).digest("binary");
            var token = new Buffer(md5String, 'binary').toString('base64');
            token = token.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
            var url = 'https://atfrgdownload.b-cdn.net' + newpath + '?token=' + token + '&expires=' + expires;
            return url;
        },
        CloseNote(num) {
            this.firstNote = false;
            if (num == 2) {
                this.secondNote = false;
                this.notesdone = true;
            }

        },
        loadeddata() {
            if (this.readCookie(this.$props.id) != 0) {
                var time = parseInt(this.readCookie(this.$props.id));
                this.timer = setTimeout(() => {
                    this.film.currentTime = time;
                }, 2000);
            }
        },
        nowPlaying() {
            this.film.currentTrack = 1;
            this.film.toggleCaptions(true);
            if (this.film.currentTime > (this.$props.runtime / 2 * 60) && this.notesdone != true) {
                if (this.secondNote == false) {}
                this.secondNote = true;
            }
            this.timer = setTimeout(() => {
                this.ShowIntroBtn = false;
            }, 120000);
            if (this.film.currentTime > 120) {
                this.createCookie(this.$props.id, this.film.currentTime, 10);
            }

        },
        skip() {
            this.film.currentTime = 120;
            this.ShowIntroBtn = false;
        },
        WatchCount() {
            var count = this.$props.watchCount + 1;
            this.$apollo.mutate({
                mutation: WatchCount_Movie,
                variables: {
                    id: this.$props.id,
                    watchCount: count
                },
            }).then((data) => {}).catch((error) => {
                console.log(error);
                this.check = false;
            });
        },

        GetPoster(posters) {
            var path = "";
            var i;
            for (i = 0; i < posters.length; i++) {
                if (posters[i].size == "THUMBNAIL") {
                    path = posters[i].path;
                }
            }

            if (path.includes("cdn.atfrg")) {
                path = this.LinkToken(path);
            }
            return path;
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
            var url = 'https://atfrgonline.b-cdn.net' + newpath + '?token=' + token + '&expires=' + expires;
            return url;
        },

        activeCol(name) {
            this.active = name;
            this.VideoClose();
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
                    "https://www.omdbapi.com/?i=" + this.$props.imdbId + "&apikey=bf7293bf"
                )
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    this.films = res;
                });
        },
        VideoClose() {
            // this.film.pause();
            // this.e3lan.pause();
        },

        getReleaseDate(date) {
            var currentTime = new Date(date);
            var month = ("0" + (currentTime.getMonth() + 1)).slice(-2);
            var day = ("0" + currentTime.getDate()).slice(-2);
            var year = currentTime.getFullYear();
            this.movieyear = year;
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
            var d = Number(runtime * 60);
            var h = Math.floor(d / 3600);
            var m = Math.floor((d % 3600) / 60);
            var s = Math.floor((d % 3600) % 60);

            var hDisplay = h > 0 ? h + (h == 1 ? " ساعة, " : " ساعة, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " دقيقة, " : " دقيقة, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " ثانية" : " ثانية") : "";
            return hDisplay + mDisplay + sDisplay;
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

.skipIntro {
    position: absolute;
    bottom: 100px;
    z-index: 999;
    right: 50px;
    background-color: #393939a6;
    color: #fff;
    border: none;
    display: block;
    padding: 0.5rem 2rem;
    @include transition(0.3s);

    &:hover {
        background-color: darken(#393939a6, 30);
        @include transition(0.3s);
    }
}

.Single-Movie {
    margin: 20px 0;
    text-align: right;
    direction: rtl;
    margin-bottom: 40px;
    // Vue Custom Style

    // .plyr__progress__container {
    //   width: 100%;
    // }

    .same-movies {
        padding: 0 10px;
    }

    .chat-video {
        bottom: 7rem;
        right: 2.2rem;

        .mine .message.last:after {
            background: #000;
        }

        .mine .message.last:before {
            background-image: none;
            background-color: #393939;
        }

        .mine .message {
            background-image: none;
            background-color: #393939;
        }
    }
}
</style>
