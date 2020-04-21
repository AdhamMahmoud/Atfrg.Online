<template>
<!-- episode -->
<div class="episode">
    <!-- Container -->
    <div class="container">
        <div class="row">
            <!-- poster -->
            <div class="col-md-3">
                <div class="poster">
                    <img :src="GetPoster(poster)" :alt="title"/>
                    </div>
                <div class="descrption">
                    <div class="title">القصة</div>
                    <span class="story">{{ Series.overview }}</span>
                </div>
            </div>
            
            <!-- Information -->
            <div class="col-md-9">
                <div class="movie-information">
                    <!-- Movie Title -->
                    <div class="movie-title">
                        {{ title }}
                    </div>
                    <!-- Movie Info List -->
                    <ul class="information-list">
                        <li> <span>اللغة</span> <i class="fas fa-angle-double-left"></i> <span>{{ Series.lang.name}}</span></li>
                        <li> <span>تاريخ الاصدار</span><i class="fas fa-angle-double-left"></i> <span>{{ getReleaseDate( Series.releaseDate) }}</span></li>
                        <li> <span>الجمهور</span><i class="fas fa-angle-double-left"></i> <span>{{ getaudience(Series.audience) }}</span></li>
                        <!-- <li> <span>المدة</span> <i class="fas fa-angle-double-left"></i><span>{{ getRunTime(runtime) }} </span></li> -->
                        <li> <span>الجودة</span><i class="fas fa-angle-double-lefft"></i> <span>{{ videoQualities }}</span></li>
                        <li> <span>النوع</span><i class="fas fa-angle-double-left"></i> <span>{{ films.Genre }}</span></li>
                        <li> <span>التقيم</span><i class="fas fa-angle-double-left"></i> <span> 10 / {{ films.imdbRating }} ( {{ films.imdbVotes }} شخص)</span></li>
                        <li v-if="subtitles.length > 0 && subtitles[0].path != null && subtitles[0].path.length > 0"> <span>الترجمة</span><i class="fas fa-angle-double-left"></i>
                            شكر خاص لـ
                            <span>
                                <i v-for="subtitle in subtitles" :key="subtitle.id" >
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

                        {{title}}</button>
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
                    <iframe class="player-mov player-trailer" v-if="active == 'trailer'" :src="'https://www.youtube.com/embed/'+ season.trailerPath"> </iframe>
                </div>
                <!-- Movie -->
                <div :class="{ col_show : active == 'movie' , col_hide : active != 'movie' }" id="movie">
                      <MoviePlayer :id="id" :title="title" :poster="GetPoster(poster)" :links="epLinks" :subtitles="subtitles"></MoviePlayer>
                   
                      <ApolloQuery :query="gql => gql`
                  query gettvSeries($id:ID!) {
                      seasons(orderBy:order_DESC, where: {episodes_some:{id:$id}}){
                       episodes(orderBy:order_DESC, where: {isPublished: true}) {
                          id
                          title
                          order
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
                    `" :variables="{ id: $route.params.id }">
                        <template v-slot="{ result: { loading, error, data } }">
                            <!-- Loading -->
                            <div v-if="loading" class="loading apollo">Loading...</div>
                            <!-- Error -->
                            <div v-else-if="error" class="error apollo">
                                <resultNotFound />
                            </div>
                            <!-- Result -->
                            <div v-else-if="data && data.seasons[0].episodes.length > 0">
                                <!-- Container End -->
                                 <div class="others">
                      
                                 <nuxt-link v-if="GetNext(data.seasons[0]) != '#'" :to="GetNext(data.seasons[0])">الحلقة السابقة</nuxt-link>
                                <nuxt-link v-if="GetPerv(data.seasons[0]) != '#'" :to="GetPerv(data.seasons[0])"> الحلقة التالية</nuxt-link>
                                </div>

                            </div>
                            <div v-else class="no-result apollo">
                                <resultNotFound />
                            </div>
                        </template>
                    </ApolloQuery>

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
                            <tr v-for="video in epLinks" :key="video.id">
                                <th scope="row">1</th>
                                <td>{{video.quality.replace('Q','')}}</td>
                                 <td><a :href="Download(validLink(video.path))">تحميل</a></td>
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
                                <td v-if="subtitle.path.length > 0"><a :href="Download(validLink(subtitle.path))">تحميل</a></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <bugs :title="topTitle + ' ' + title"></bugs>
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
             <ApolloQuery :query="gql => gql`
                  query gettvSeries($id:ID!) {
                      seasons(orderBy:order_DESC, where: {episodes_some:{id:$id}}){
                       episodes(orderBy:order_DESC, where: {isPublished: true}) {
                          id
                          title
                          order
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
                    `" :variables="{ id: $route.params.id }">
                        <template v-slot="{ result: { loading, error, data } }">
                            <!-- Loading -->
                            <div v-if="loading" class="loading apollo">Loading...</div>
                            <!-- Error -->
                            <div v-else-if="error" class="error apollo">
                                <resultNotFound />
                            </div>
                            <!-- Result -->
                            <div v-else-if="data && data.seasons[0].episodes.length > 0" class="same-movies Slider-block row">
                                <!-- Container End -->
                             <div v-for="episode in data.seasons[0].episodes" :key="episode.id" :class="[{ poster_over : overId == episode.id }, 'swiper-slide col-md-3 col-6' ]" @mouseover="itemOver(episode.id)" @mouseleave="itemNotOver">
                                        <Epsitem :id="episode.id" :title="episode.title" :order="episode.order" :poster="GetPoster(poster)" :genres="Series.genres" :audience="Series.audience" path="/series/episode/" />
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
                  <ApolloQuery :query="gql => gql`
                  query gettvSeries($id:ID!) {
                       tvSerieses(where: { seasons_some:{episodes_some:{id:$id}}, isPublished: true }) {
                        seasons(orderBy:order_DESC){
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
                          episodes{
                              id
                              title
                          }
                         }
                       }
                    }
                    `" :variables="{ id: $route.params.id }">
                        <template v-slot="{ result: { loading, error, data } }">
                            <!-- Loading -->
                            <div v-if="loading" class="loading apollo">Loading...</div>
                            <!-- Error -->
                            <div v-else-if="error" class="error apollo">
                                <resultNotFound />
                            </div>
                            <!-- Result -->
                            <div v-else-if="data && data.tvSerieses.length > 0" class="same-movies Slider-block">
                                <!-- Container End -->
                                <div v-swiper:mySwiperOnw2="swiperOption" class="my-swiper">
                                    <div class="swiper-wrapper">
                                        <div v-for="seasonb in data.tvSerieses[0].seasons" :key="seasonb.id" :class="[{ poster_over : overId == seasonb.id }, 'swiper-slide' ]" @mouseover="itemOver(seasonb.id)" @mouseleave="itemNotOver">
                                            <SeriesItem :id="seasonb.id" :title="seasonb.title" :poster=" GetPoster(seasonb.posters)" :genres="Series.genres" :audience="Series.audience" :seasons="seasonb.episodes" path="/series/season/" />
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
</template>

<script>
import gql from 'graphql-tag';
import resultNotFound from "~/components/resultNotFound.vue";
import SeriesItem from '~/components/SeriesItem.vue';
import Epsitem from '~/components/Epsitem.vue';
import bugs from '~/components/bugs.vue';
import MoviePlayer from "~/components/MoviePlayer.vue";
export default {
    data: function () {
        return {
            ShowIntroBtn: false,
            firstNote: false,
            secondNote: false,
            notesdone: false,
            films: [],
            tvSerieses: [],
            active: "movie",
            overId: 0,
            episode: [],
            e3lan: [],
            timer: null,
            swiperOption: {
                slidesPerView: 4,
                spaceBetween: 40,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 40
                    }
                }
            },
        }
    },
    props: {
        id: String,
        title: String,
        season:Array,
        poster: Array,
        runtime: Number,
        subtitles: Array,
        epLinks: Array,
        order:Number,
        Series:Object,
        imdbId:String,
        videoQualities: String
    },
    apollo: {
        tvSerieses: {
            query: gql `query gettvSeries($id: [ID!]) {
  tvSerieses(
    where: {
      isPublished: true
      AND: { seasons_some: { episodes_some: { id_in: $id } } }
    }
  ) {
    id
    title
    audience
    genres {
      id
      name
    }
    lang {
      id
      name
    }
    overview
    releaseDate
    seasons(orderBy:order_DESC) {
      id
      title
      imdbId
      slug
      trailerPath
      releaseDate
      posters {
        size
        path
      }
      episodes(orderBy:order_DESC) {
        id
        title
        runtime
        isPublished
        posters {
          id
          size
          path
        }
        videoQualities
      }
    }
  }
} `,
            variables() {
                // Use vue reactive properties here
                return {
                    id: this.$props.id,
                }
            },
        },
    },
    components: {
        SeriesItem,
        resultNotFound,
        Epsitem,
        MoviePlayer,
        bugs
    },
    head() {
        return {
            title: "مشاهدة وتحميل " + this.$props.title + " مسلسل  " + this.$props.season[0].title + " - Atfrg.Online  اتفرج اون لاين",
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'description',
                    name: 'description',
                    content: "مشاهدة وتحميل " + this.$props.title + " مسلسل  " + this.$props.season[0].title + " - Atfrg.Online  اتفرج اون لاين" || ""
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: "مشاهدة فيلم,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى" || ""
                },
                 {
                    property: "og:title",
                    content: "مشاهدة وتحميل " + this.$props.title + " مسلسل  " + this.$props.season[0].title + " - Atfrg.Online  اتفرج اون لاين"
                },
                {
                    property: "og:description",
                    content: "مشاهدة وتحميل " + this.$props.title + " مسلسل  " + this.$props.season[0].title + " - Atfrg.Online  اتفرج اون لاين" || ""
                },
                {
                    property: "og:image",
                    content: this.GetPoster(this.$props.poster)
                },
            ]
        }
    },
    computed: {
        playerOptions() {
            const options = {
                captions: {
                    active: false
                },
                controls: [
                    'play-large', // The large play button in the center
                    'restart', // Restart playback
                    'rewind', // Rewind by the seek time (default 10 seconds)
                    'play', // Play/pause playback
                    'fast-forward', // Fast forward by the seek time (default 10 seconds)
                    'progress', // The progress bar and scrubber for playback and buffering
                    'current-time', // The current time of playback
                    'duration', // The full duration of the media
                    'mute', // Toggle mute
                    'volume', // Volume control
                    'captions', // Toggle captions
                    'settings', // Settings menu
                    'pip', // Picture-in-picture (currently Safari only)
                    'airplay', // Airplay (currently Safari only)
                    'fullscreen', // Toggle fullscreen
                ],
            };
            return options
        },
        topTitle() {
            if (this.tvSerieses.length > 0) {
                return this.season.title;
            }
        }

    },
    mounted(){
     this.handleSearch(this.$props.imdbId);
    },
    methods: {
 
        GetNext(series) {
            var Currindex = series.episodes.findIndex(x => x.id === this.$props.id);
            if (Currindex + 1  < series.episodes.length) {
                var Next = series.episodes[Currindex + 1];
                return Next.id;
            } else {
                return "#";
            }

        },
        GetPerv(series) {
            var Currindex = series.episodes.findIndex(x => x.id === this.$props.id);
            if (Currindex - 1 >= 0) {
                var Next = series.episodes[Currindex - 1];
                return Next.id;
            } else {
                return "#";
            }

        },
        validLink(path) {
            var type = path.slice(-3).toLowerCase();
            path = path.substring(0, path.length - 3) + type;
            // path = path.replace(/ /g, '%20');
            return path;
        },
        LinkToken(path){
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
        Download(path){
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
         GetPoster(posters) {
            var path = "";
            var i;
            for (i = 0; i < posters.length; i++) {
                if (posters[i].size == "THUMBNAIL") {
                    path = posters[i].path;
                }
            }

            if (path.includes("cdn.atfrg")) {
                path = this.LinkToken2(path);
            }
            return path;
        },
         LinkToken2(path){
            var newpath = path.substring(24, path.length);
            var url = 'https://Atfrgimages.b-cdn.net' + newpath;
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
        handleSearch(id) {
            this.films = [];
                fetch('https://www.omdbapi.com/?i=' + id + '&apikey=bf7293bf')
                    .then((res) => {
                        return res.json()
                    })
                    .then((res) => {
                        this.films = res;
                    })
        },
        VideoClose() {
            // this.$refs.episode.player.pause();
        },
        CloseNote(num) {
            this.firstNote = false;
            if (num == 2) {
                this.secondNote = false;
                this.notesdone = true;
            }

        },
        nowPlaying() {
            this.$refs.episode.player.currentTrack = 1;
            this.$refs.episode.player.toggleCaptions(true);
            if (this.$refs.episode.currentTime > (this.$props.runtime / 2 * 60) && this.notesdone != true) {
                if (this.secondNote == false) {}
                this.secondNote = true;
            }
            this.timer = setTimeout(() => {
                this.ShowIntroBtn = false;
            }, 120000);
            if (this.$refs.episode.player.currentTime != 0) {
                this.createCookie(this.$props.id, this.$refs.episode.player.currentTime, 10);
            }
        },
        skip() {
            this.$refs.episode.currentTime = 120;
            this.ShowIntroBtn = false;
        },
        getReleaseDate(date) {
            var currentTime = new Date(date);
            var month = ("0" + (currentTime.getMonth() + 1)).slice(-2);
            var day = ("0" + currentTime.getDate()).slice(-2);
            var year = currentTime.getFullYear();
            var date = day + "/" + month + "/" + year;
            return date;
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
                audienceText = " لا يصلح لمن هما اقل من 17 عاما , يحتوى على مشاهد فاضحة او عنيفة";
            } else {
                audienceText = "غير مصنف";
            }

            return audience + " - " + audienceText;
        },
        getRunTime(runtime) {
            var d = Number(runtime);
            var h = Math.floor(d / 3600);
            var m = Math.floor(d % 3600 / 60);
            var s = Math.floor(d % 3600 % 60);

            var hDisplay = h > 0 ? h + (h == 1 ? " ساعة, " : " ساعة, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " دقيقة, " : " دقيقة, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " ثانية" : " ثانية") : "";
            return hDisplay + mDisplay + sDisplay;
        }
    }
}
</script>

<style lang="scss">
*:focus {
    outline: none;
    box-shadow: none;
}

@import '~/assets/sass/_vars.scss';
@import '~/assets/sass/_mixins.scss';

.episode {
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
