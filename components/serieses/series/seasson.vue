<template>
<!-- Single Series -->
<div class="Single-Series">
    <!-- Container -->
    <!-- <ads></ads> -->
    <div class="container">
         <!-- <div class="row">
            <div class="col-12">
                  <div style="margin:0 auto;margin-bottom:2rem">
                <script data-cfasync='false' type='text/javascript' src='//p393613.clksite.com/adServe/banners?tid=393613_773071_4&eid=393613_773071_4'></script>
                <div id="393613_773071_4"></div>
                </div>
            </div>
        </div> -->
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
                        <li> <span>عدد الحلقات</span><i class="fas fa-angle-double-left"></i> <span>{{ seassonCount(episodes) }} حلقة</span></li>
                        <li> <span>التقيم</span><i class="fas fa-angle-double-left"></i> <span> 10 / {{ films.imdbRating }} ( {{ films.imdbVotes }} شخص)</span></li>
                    </ul>
                     <ads></ads>
                </div>
            </div>
        </div>
    </div>
    <!-- Container -->
   
    <!-- Container -->
    <div class="container" style="padding: 0;
    border-radius: 20px;">
        <div class="row">
            <div class="col-md-12">
                <div class="other-title">
                     الحلقات المتاحة لـ {{title}}
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="same-movies Slider-block row">
                    <div v-for="episode in episodes" :key="episode.id" style="min-width:130px;margin-bottom:1rem;" :class="[{ poster_over : overId == episode.id }, 'swiper-slide col-md-2 col-6' ]" @mouseover="itemOver(episode.id)" @mouseleave="itemNotOver">
                        <Epsitem :id="episode.id" :order="episode.order"  :title="episode.title" :poster="GetPoster(posters)" :genres="genres" :audience="audience" path="/series/episode/" />
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
                <div class="same-movies" v-if="$route.params.name != null">
                    <ApolloQuery :query="gql => gql`
                  query gettvSeries($title:String!) {
                   tvSerieses(where: {isPublished: true , seasons_some:{title_contains:$title}}) {
                        id
                        title
                        posters {
                        size
                        path
                        }
                        audience
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
                                <div v-swiper:mySwiperOnw2="swiperOption" class="my-swiper">
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
import SeriesItem from '~/components/SeriesItem.vue';
import Epsitem from '~/components/Epsitem.vue';
import bugs from '~/components/bugs.vue';
import gql from 'graphql-tag';
import episodePlayer from "~/components/episodePlayer.vue";
import ads from "~/components/ads.vue";
import downloadAds from "~/components/ads2.vue";
export default {
    components: {
        resultNotFound,
        SeriesItem,
        Epsitem,
        bugs,
        episodePlayer,
        ads,
        downloadAds
    },
    head(){
    return{
       title: "مسلسل "+this.$props.title+" - اتفرج اون لاين Atfrg.Online" ,
        meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content:  "مسلسل "+this.$props.title+" مترجم اون لاين بجودة عالية - اتفرج اون لاين Atfrg.Online" || ""},
        { hid: 'keywords', name: 'keywords', content:  "مشاهدة مسلسل ,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى, فيلم "+this.$props.title+" , تحميل افلام , مشاهدة افلام بجودة عالية , مشاهدة انمي اون لاين, تحميل موسم برابط واحد , مشاهدة بدون اعلانات , تحميل مباشر  , افلام جديدة , مسلسل "+this.$props.title+"" || ""},
        {
            property: "og:title",
            content: "مسلسل "+this.$props.title+" مترجم - اتفرج اون لاين Atfrg.Online"
        },
        {
            property: "og:description",
            content: "مسلسل "+this.$props.title+" مترجم اون لاين بجودة عالية - اتفرج اون لاين Atfrg.Online" || ""
        },
        {
            property: "og:image",
            content: this.GetPoster(this.$props.posters)
        },

      ]
    }
  },
    data: function () {
        return {
            films: [],
            active: "movie",
            overId: 0,
            ShowIntroBtn: false,
            firstNote: false,
            secondNote: false,
            notesdone: false,
            timer: null,
            swiperOption: {
                slidesPerView: 6,
                spaceBetween: 5,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 5
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 5
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 5
                    },
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 5
                    }
                }
            },
        }
    },

    props: {
        id: String,
        title: String,
        posters: Array,
        genres: Array,
        audience: String,
        lang: String,
        releaseDate: String,
        overview: String,
        keywords: Array,
        seasons: Array,
        episodes: Array,
        imdbId: String

    },
    created() {
        this.handleSearch();
    },
    mounted() {
        this.handleSearch();
        // this.film = this.$refs.film.player;
    },
    methods: {
          GetNext(series) {
            if(series.length > 2){
            var Currindex = series.findIndex(x => x.id === this.$props.id);
            if (Currindex + 1 < series.length) {
                var Next = series[Currindex + 2];
                return Next.id;
            } else {
                return "#";
            }
               }
               else{
                    return "#";
               }

        },
        GetPerv(series) {
            if(series.length > 2){
            var Currindex = series.findIndex(x => x.id === this.$props.id);
            if (Currindex - 1 > 0) {
                var Next = series[Currindex - 1];
                return Next.id;
            } else {
                return "#";
            }
             }
             else{
                return "#";
             }

        },
          LinkToken(path){
          if (path.includes("cdn.atfrg")) {
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
          }
          else if (path.includes("AtfrgRamadan")) {
                var crypto = require('crypto');
                var securityKey = '7544a7f3-75bd-4456-a42b-b6c1e8f28255';
                var newpath = path.substring(30, path.length);
                // Set the time of expiry to one hour from now
                var expires = Math.round(Date.now() / 1000) + 21600;

                var hashableBase = securityKey + newpath + expires;
                // Generate and encode the token 
                var md5String = crypto.createHash("md5").update(hashableBase).digest("binary");
                var token = new Buffer(md5String, 'binary').toString('base64');
                token = token.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
                var url = 'https://AtfrgRamadan.b-cdn.net' + newpath + '?token=' + token + '&expires=' + expires;
          }
            return url;
        },
          DownloadAd(){
        var list = document.getElementById("download-ad");
        this.ads = document.createElement("div");
        var sc = document.createElement('script');
        // this.ads.classList.add("vide-ad");
        sc.setAttribute('data-cfasync','false');
        sc.setAttribute('src','//native.propellerclick.com/1?z=3261472');
        this.ads.appendChild(sc);
        list.appendChild(this.ads);
        },
          Download(path){
        if (path.includes("cdn.atfrg")) {
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
            // newpath = path.substring(25, newpath.length);
            var url = 'https://atfrgdownload.b-cdn.net' + newpath + '?token=' + token + '&expires=' + expires;
             } else if (path.includes("AtfrgRamadan")) {
                var crypto = require('crypto');
                var securityKey = '27ab3ad5-9fbb-4713-9671-5d4cb7a1a31e';
                var newpath = path.substring(30, path.length);
                // Set the time of expiry to one hour from now
                var expires = Math.round(Date.now() / 1000) + 21600;

                var hashableBase = securityKey + newpath + expires;
                // Generate and encode the token 
                var md5String = crypto.createHash("md5").update(hashableBase).digest("binary");
                var token = new Buffer(md5String, 'binary').toString('base64');
                token = token.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
                
             var url = 'https://atfrgdownload.b-cdn.net' + newpath + '?token=' + token + '&expires=' + expires;
                // var url = 'https://atfrg.store/?file=' + newpath + '?token=' + token + '&expires=' + expires + '&name=' +  this.$props.title;
          }
            return url;
        },
        validLink(path) {
            var type = path.slice(-3).toLowerCase();
            path = path.substring(0, path.length - 3) + type;
            // path = path.replace(/ /g, '%20');
            return path;
        },
         activeCol(name) {
            this.active = name;
            this.VideoClose();
        },
        handleSearch() {
            this.films = [];
            fetch('https://www.omdbapi.com/?i=' + this.$props.imdbId + '&apikey=bf7293bf')
                .then((res) => {
                    return res.json()
                })
                .then((res) => {
                    this.films = res;
                })
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
            fetch('https://www.omdbapi.com/?i=' + this.$props.imdbId + '&apikey=bf7293bf')
                .then((res) => {
                    return res.json()
                })
                .then((res) => {
                    this.films = res;
                })
        },
        VideoClose() {
            // this.film.pause();
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
    },
}
</script>

<style lang="scss">
*:focus {
    outline: none;
    box-shadow: none;
}

@import '~/assets/sass/_vars.scss';
@import '~/assets/sass/_mixins.scss';
</style>
