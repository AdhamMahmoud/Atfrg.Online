<template>
<div>
    <div class="note2">
        <p>مشاهدة ممتعة يا صحبي 😘💙</p>
        <p> رمضان كريم ❤️❤️</p>
        <span @click="reloadPage()">تحديث المحتوي</span>
    </div>
    
    <vue-plyr clickToPlay="true" class="player-mov" :ref="'film' + id"  seektime="10" :title="title" :id="id" :options="playerOptions" @playing="nowPlaying" @enterfullscreen="enterfullscreenFull" @loadeddata="loadeddata" :emit="['playing','loadeddata','enterfullscreen']">
        <video crossorigin="anonymous" :id="'vid'+ id" playsinline :poster="poster">
            <!-- Video Source -->
            <source v-for="video in links" :key="video.id" :src="LinkToken(validLink(video.path))" type="video/mp4" :size="video.quality.replace('Q','')">
            <!-- Video Subtitles -->
            <track v-for="(subtitle, index) in subtitleNew" :key="subtitle.id" kind="captions" :label="subtitle.name" :srclang="subtitle.lang.name" :src="LinkToken(subtitle.path.substring(0, subtitle.path.length - 4) + '.vtt')" :default="{ 'default': index == subtitleNew.length - 2}">
        </video>
    </vue-plyr>
 
    <!-- <div class="note2">
        <p>💙 يوجد اختبار للأعلانات  نأسف اذا كان شئ خارج مجرد تجربة</p>
    </div> -->
    <!-- <div id="p_3227038"></div> -->
    <!-- <div class="fb-page" style="margin: 0 auto;display: block; width: 340px;" data-href="https://www.facebook.com/atfrg.online0/" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true">
        <blockquote cite="https://www.facebook.com/atfrg.online0/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/atfrg.online0/">Atfrg Online</a></blockquote>
    </div> -->
</div>
</template>

<script>
// import './dist/vue-plyr.ssr.js';
// import 'vue-plyr/dist/vue-plyr.css';
export default {
    data() {
        return {
            Show: false,
            load: false,
            loader: null,
            film: null,
            secondNote: false,
            notesdone: false,
            firstNote: null,
            SecoNote: null,
            logo: null,
            ads:null,
        }
    },
    props: {
        title: String,
        poster: String,
        id: String,
        links: Array,
        subtitles: Array,
    },
    computed: {
        playerOptions() {
            const options = {
                toggleInvert: true,
                clickToPlay: true,
                captions: {
                    active: true
                },
                fullscreen:{
                    enabled: true, fallback: true, iosNative: 'force' 
                },
                debug:true,
                controls: [
                    "play-large", // The large play button in the center
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
                    "fullscreen" // Toggle fullscreen
                ]
            };
            return options;
        },
        subtitleNew() {
            var sub = this.$props.subtitles;
            if (sub.length > 0) {
                if (sub[0].path.length > 5) {
                    return sub;
                } else {
                    return null;
                }
            }
            return sub;
        },
    },
    beforeDestroy() {
        this.$refs['film' + this.$props.id].player.destroy();
    },
    mounted() {
        this.film = this.$refs['film' + this.$props.id].player;
        var list = document.getElementsByClassName("plyr__control--overlaid")[0];
        this.loader = document.createElement("i");
        this.loader.classList.add("video-loader");
        this.loader.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style=" display: block; shape-rendering: auto;" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" fill="none" stroke="#fff" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(53.2159 50 50)"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>  </circle></svg>';
        list.parentNode.insertBefore(this.loader, list.nextSibling);
        // Create Notes .1
        this.ads = document.createElement("div");
        var sc = document.createElement('script');
        this.ads.classList.add("vide-ad");
        sc.setAttribute('data-cfasync','false');
        sc.setAttribute('src','//p393613.clksite.com/adServe/banners?tid=393613_773071_7');
        this.ads.appendChild(sc);
        list.parentNode.insertBefore(this.ads, list.nextSibling);

         this.timer = setTimeout(() => {
            this.ads.style.display = 'none';
            this.ShowAd();
        }, 10000);


        this.FirstNote = document.createElement("div");
        this.FirstNote.classList.add("chat");
        this.FirstNote.classList.add("chatb");
        this.FirstNote.classList.add("chat-video");
        list.parentNode.insertBefore(this.FirstNote, list.nextSibling);
        var mess = document.createElement("div");
        mess.classList.add("mine");
        mess.classList.add("messages");
        this.FirstNote.appendChild(mess);
        var mine = document.createElement("div");
        mine.classList.add("message");
        mine.classList.add("last");
        this.FirstNote.appendChild(mine);
        var text = document.createElement("p");
        text.innerHTML = '💙💙 صلي علي محمد';
        mine.appendChild(text);
        this.FirstNote.style.display = 'none';
        // Create Notes.2
        this.SecoNote = document.createElement("div");
        this.SecoNote.classList.add("chat");
        this.SecoNote.classList.add("chatb");
        this.SecoNote.classList.add("chat-video");
        list.parentNode.insertBefore(this.SecoNote, list.nextSibling);
        var mess2 = document.createElement("div");
        mess2.classList.add("mine");
        mess2.classList.add("messages");
        this.SecoNote.appendChild(mess2);
        var mine2 = document.createElement("div");
        mine2.classList.add("message");
        mine2.classList.add("last");
        this.SecoNote.appendChild(mine2);
        var text2 = document.createElement("p");
        text2.innerHTML = '✌️❤️ خد بريك كدا وقوم صلي';
        mine2.appendChild(text2);
        this.SecoNote.style.display = 'none';
        if (this.$props.subtitles.length > 0) {
            if (this.$props.subtitles[0].path.length > 5) {
                this.logo = document.createElement("img");
                this.logo.classList.add("video-logo");
                this.logo.src = "/logo.svg";
                list.parentNode.insertBefore(this.logo, list.nextSibling);
            }
        }
        if (this.$props.subtitles.length == 0 || this.$props.subtitles == null) {
            this.logo = document.createElement("img");
            this.logo.classList.add("video-logo");
            this.logo.src = "/logo.svg";
            list.parentNode.insertBefore(this.logo, list.nextSibling);
        }
        //  if(window.innerWidth < 800){
        //     var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        //     var iOS2 = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
        //     if(iOS == true && iOS2 == true){
        //         document.body.querySelector('.plyr__control[data-plyr="fullscreen"]').style.display = 'none';
        //     }
        //  }

    },
    methods: {
        ShowAd(){
            this.ads.style.display = 'none';
            this.timer = setTimeout(() => {
            this.ads.style.display = 'block';
            // hide after 20
            this.timer = setTimeout(() => {
            this.ads.style.display = 'none';
                this.ShowAd();
            }, 10000);
        }, 9000000);
        },
        validLink(path) {
            var type = path.slice(-3).toLowerCase();
            path = path.substring(0, path.length - 3) + type;
            return path;
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
        CloseNote(num) {
            this.firstNote = false;
            if (num == 2) {
                this.secondNote = false;
                this.notesdone = true;
            }
        },
        enterfullscreenFull() {
            // var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            // var iOS2 = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
            if (window.innerWidth < 800) {
            screen.orientation.lock('landscape');
            screen.msLockOrientation.lock("landscape");
            screen.mozLockOrientation.lock("landscape");
          if (this.$props.subtitles.length > 0) {
                this.film.currentTrack = 1;
                this.film.toggleCaptions(true);
            }
            }
    },
    loadeddata() {
        this.FirstNote.style.display = 'block';
        if (this.readCookie(this.$props.id) != 0) {
            var time = parseInt(this.readCookie(this.$props.id));
            if (time != 0) {
                this.timer = setTimeout(() => {
                    this.film.currentTime = time;
                }, 1200);
            }
        }
    },
    nowPlaying() {
        if (this.film != null) {
            if (this.$props.subtitles.length > 0) {
                this.film.currentTrack = 1;
            }
            this.timer = setTimeout(() => {
                this.FirstNote.style.display = 'none';
            }, 10000);
            if (this.$props.subtitles.length > 0) {
                if (this.$props.subtitles[0].path.length > 1) {
                    this.film.toggleCaptions(true);
                }
            }
            if (this.film.currentTime > (this.$props.runtime / 2 * 60)) {
                this.SecoNote.style.display = 'block';
                this.timer = setTimeout(() => {
                    this.SecoNote.style.display = 'none';
                }, 5000);
            }
            this.timer = setTimeout(() => {
                this.ShowIntroBtn = false;
            }, 120000);
            if (this.film.currentTime > 120) {
                this.createCookie(this.$props.id, this.film.currentTime, 10);
            }
        }
        //  this.loader.style.display = "block";
    },
    createCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            var expires = "; expires=" + date.toGMTString();
        } else var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    },
    reloadPage() {
        window.location.reload()
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
}
</script>

<style lang="scss">
@import "~/assets/sass/_vars.scss";
@import "~/assets/sass/_mixins.scss";

.note2 {
    text-align: center;
    margin: 1rem 0;

    span {
        color: $secondary-color;
        cursor: pointer;
    }
}

.plyr--full-ui input[type=range] {
    color: #FFD700;
}

.plyr__control--overlaid {
    background: rgba(255, 215, 0, 0.67);
}

.plyr--video .plyr__control.plyr__tab-focus,
.plyr--video .plyr__control:hover,
.plyr--video .plyr__control[aria-expanded=true] {
    background: #FFD700;
}

.plyr__control.plyr__tab-focus {
    box-shadow: 0 0 0 5px rgba(255, 215, 0, 0.67);
}

.plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]::before {
    background: #FFD700;
}

.plyr--audio .plyr__control.plyr__tab-focus,
.plyr--audio .plyr__control:hover,
.plyr--audio .plyr__control[aria-expanded=true] {
    background: #FFD700;
}

.plyr--video .plyr__progress__buffer {
    color: rgba(8, 108, 248, 0.55);
}

.plyr--video.plyr--loading .plyr__progress__buffer {
    background-color: rgba(8, 108, 248, 0.55);
}

/* .plyr__control--pressed{
    opacity: 1 !important;
    visibility: inherit !important;
} */
.plyr__volume {
    input {
        width: 60px;
    }
}

.plyr {
    height: 600px;
}

.plyr video {
    width: 100%;
    object-fit: contain;
    height: 100%;
}

.plyr__video-wrapper {
    height: 100%;
}

.video-loader {
    display: none;
    border: 0;
    border-radius: 100%;
    color: #fff;
    display: none;
    left: 50%;
    padding: 15px;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 2;
    background-color: transparent !important;
}

.video-logo {
    border: 0;
    color: #fff;
    position: absolute;
    z-index: 2;
    height: auto;
    width: 110px;
    z-index: 9999;
    top: 5%;
    left: 5%;
    background-color: transparent !important;
}

.plyr--loading .video-loader {
    display: block;
}

@include sm {
    .plyr {
        height: 400px;
    }

    .plyr video {
        object-fit: contain !important;
    }
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

.chat .message {
    background-color: #232323;
}
.plyr:-webkit-full-screen .plyr__captions {
    z-index:99999;
    display:block;
}
@include xl {
    .plyr__captions {
        font-size: 26px !important;
        bottom: 2rem !important;
    }

    .plyr:-webkit-full-screen .plyr__captions {
        font-size: 30px !important;
        bottom: 4rem !important;
        z-index:99999;
    }
}

@include lg {
    .plyr__captions {
        font-size: 24px !important;
        bottom: 2rem !important;
    }

    .plyr:-webkit-full-screen .plyr__captions {
        font-size: 26px !important;
        bottom: 4rem !important;
         z-index:99999;
    }
}
.vide-ad{
      border: 0;
    color: #fff;
    position: absolute;
    z-index: 2;
    height: auto;
    width: auto;
    z-index: 9999;
    bottom: 10%;
    left: 23%;
    background-color: transparent !important;
}
</style>
