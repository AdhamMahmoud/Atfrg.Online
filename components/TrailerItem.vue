<template>
<!-- Trailer Item -->
<nuxt-link :to="'/movie/' + title" class="item-fade">
    <div v-lazy-container="{ selector: 'img', loading: 'https://atfrgimages.b-cdn.net/images/loader.png' }" class="item-slide">
        <!-- Movie Poster Container-->
        <div class="poster">
            <!-- quality -->
            <span class="quality">{{ quality }}</span>
            <span class="views">
                {{ watchCount }}
                <i class="far fa-eye"></i>
            </span>
            <!-- <span class="rate" v-if="films.imdbRating != null">
                {{ films.imdbRating }} <i class="far fa-star"></i></span> -->
            <!-- Movie Poster img -->
            <img :data-src="GetSlide(poster)" :alt="title" />
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
                <h3 v-if="year != ''" class="name">{{ title + " ("+ GetYear(releaseDate) + ")"}}</h3>
                <h3 v-else class="name">{{ title }}</h3>
                <!-- Movie Category -->
                <div class="subinfo-block">
                    <span v-if="year != ''" class="runtime">
                        {{ runTimeCalc(runtime) }}
                    </span>
                    <span class="audience">{{ getaudience(audience) }} </span>
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
    data: function () {
        return {
            isPlay: false,
            trailer_path: " ",
            year: "",
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
        // handleSearch() {
        //     this.films = [];
        //     fetch(
        //             "https://www.omdbapi.com/?i=" + this.$props.imdbId + "&apikey=bf7293bf"
        //         )
        //         .then(res => {
        //             return res.json();
        //         })
        //         .then(res => {
        //             this.films = res;
        //             this.year = this.GetYear(res.Released);
        //             if (res.Released == null) {
        //                 this.year = "";
        //             }
        //         });
        // },
        runTrailer(id) {
            this.isPlay = true;
            timer: setTimeout(() => {
                this.runTrailerNow(id);
            }, 1500);
        },
        GetYear(date) {
            var currentTime = new Date(date);
            var month = ("0" + (currentTime.getMonth() + 1)).slice(-2);
            var day = ("0" + currentTime.getDate()).slice(-2);
            var year = currentTime.getFullYear();
            this.movieyear = year;
            return year;
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
            var url = 'https://Atfrgimages.b-cdn.net' + newpath + '?token=' + token + '&expires=' + expires;
            return url;
        },
    },

    // mounted() {
    //     this.handleSearch();
    // },
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
        imdbId: String,
        releaseDate:String
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

<style lang="scss" scoped>
@import "~/assets/sass/_vars.scss";
@import "~/assets/sass/_mixins.scss";

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
}
</style>
