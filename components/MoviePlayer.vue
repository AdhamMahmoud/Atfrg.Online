<template>
<div>
    <div class="note2">
        <!-- <p>مشاهدة ممتعة يا صحبي 😘💙</p> -->
        <p> دلوقتي بقا في ابلكيشن للأندرويد تقدر تتفرج وتتابع الموقع اسرع 😘💙</p>
                <a href='https://play.google.com/store/apps/details?id=com.connect.atfrg&hl=en_US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img style="height: 65px;width: auto;" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' /></a>

        <!-- <span @click="reloadPage()">تحديث المحتوي</span> -->
    </div>

    <vue-plyr class="player-mov" :ref="'film' + id" clickToPlay="true" seektime="10" :id="id" :options="playerOptions" @playing="nowPlaying" @enterfullscreen="enterfullscreenFull" @loadeddata="loadeddata" :emit="['playing','loadeddata','enterfullscreen']">
        <video preload="none" playsinline crossorigin="anonymous" :id="'vid' +id" :poster="poster">
            <!-- Video Source -->
            <source v-for="video in links" :key="video.id" :src="LinkToken(validLink(video.path))" type="video/mp4" :size="video.quality.replace('Q','')">
            <!-- Video Subtitles -->
            <track v-for="(subtitle, index) in subtitleNew" :key="subtitle.id" kind="captions" :label="subtitle.name" :srclang="subtitle.lang.name" :src="LinkToken(subtitle.path.substring(0, subtitle.path.length - 4) + '.vtt')" :default="{ 'default': index == subtitleNew.length - 2}">
        </video>
    </vue-plyr>
</div>
</template>

<script>
import 'vue-plyr/dist/vue-plyr.css';
export default {
    head:{
        script:[
            {
            src: "//inpagepush.com/400/3246513",
            async :"async",
            "data-cfasync" :"false",
            type: "text/javascript"
        },
        {
            src: "//pl15497563.passtechusa.com/b7d66cc8d304167ae2aa320276ca566c/invoke.js",
            async :"async",
            type: "text/javascript"
        },
         {
            src: "//pl15454349.passtechusa.com/460d6761d1e465c09fca4ee917dd0ccb/invoke.js",
            async :"async",
            type: "text/javascript"
        },
         {
            src: "//pl15441614.passtechusa.com/af30aca1ff5507bbeb531b00839438e8/invoke.js",
            async :"async",
            type: "text/javascript"
        },
         {
            src: "//pl15454350.passtechusa.com/327995df4fccdfc89fe420ae6b341666/invoke.js",
            async :"async",
            type: "text/javascript"
        },
        ]
    },
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
            ads: null,
            ads2: null,
            FirstAd: false,
            captionStart: false,
            tagUrls: "",
            VideoAd: null,
            adsWork: false,
            SecoNote2: null,
            adCount: 10,
            adsloadeds: false,
            adTime:null,
            aa:null,
            AdsTimer:null,
            // adsLoaded:false,
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
                fullscreen: {
                    enabled: true,
                    fallback: true,
                    iosNative: 'true'
                },
                // ads: {
                //     enabled: true,
                //     tagUrl: "https://www.movcpm.com/watch.xml?key=823fbda75a576c389938305b8d5aba32"
                // },
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
        this.ads.style.display = 'none';   
        document.getElementById("BannerDefault").appendChild(this.ads); 
        this.$refs['film' + this.$props.id].player.destroy();
    },
    mounted() {
        this.film = this.$refs['film' + this.$props.id].player;
        var list = document.getElementsByClassName("plyr__control--overlaid")[0];
        // Banner Ads Get To Video Container
        if(document.getElementById("container-b7d66cc8d304167ae2aa320276ca566c") != null){
            this.ads = document.getElementById("container-b7d66cc8d304167ae2aa320276ca566c");
            this.ads.classList.add("vide-ad");
            list.parentNode.insertBefore(this.ads, list.nextSibling);
            this.ads.style.display = 'none';   
        }


        var adsban = this.ads;
        this.loader = document.createElement("i");
        this.loader.classList.add("video-loader");
        this.loader.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style=" display: block; shape-rendering: auto;" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" fill="none" stroke="#fff" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(53.2159 50 50)"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>  </circle></svg>';
        list.parentNode.insertBefore(this.loader, list.nextSibling);
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
        text.innerHTML = '💙💙 احنا مكملين بيك';
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
        // SkipAd
        this.SkipButton = document.createElement("button");
        this.SkipButton.classList.add("skip-button");
        this.SkipButton.innerHTML = "10 secs";
        list.parentNode.insertBefore(this.SkipButton, list.nextSibling);
        this.SkipButton.style.display = 'none';
        var idd = this.$props.id;
        var plyr = this.film;
        var tpp = this;
        this.SkipButton.onclick = function () {
            // adsLoader.contentComplete();
            plyr.play();
            // document.getElementById('ad-container-' + idd).remove();
            adsban.style.display = 'none';
            this.style.display = 'none';
            this.innerHTML = "10 sec";
            tpp.adCount = 10;
            tpp.AdCountInVideo();          
        };
        this.SkipButton.disabled = true;
        if (this.$props.subtitles.length > 0) {
            if (this.$props.subtitles[0].path.length > 5) {
                this.logo = document.createElement("img");
                this.logo.classList.add("video-logo");
                this.logo.src = "https://atfrgimages.b-cdn.net/images/logo.svg";
                list.parentNode.insertBefore(this.logo, list.nextSibling);
            }
        }
        if (this.$props.subtitles.length == 0 || this.$props.subtitles == null) {
            this.logo = document.createElement("img");
            this.logo.classList.add("video-logo");
            this.logo.src = "https://atfrgimages.b-cdn.net/images/logo.svg";
            list.parentNode.insertBefore(this.logo, list.nextSibling);
        }
    },
    methods: {
        validLink(path) {
            var type = path.slice(-3).toLowerCase();
            path = path.substring(0, path.length - 3) + type;
            return path;
        },
        LinkToken(path) {
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
            } else if (path.includes("AtfrgRamadan")) {
                var crypto = require('crypto');
                var securityKey = '6ecb7c25-9744-498a-a49b-ae4c7980c861';
                var newpath = path.substring(30, path.length);
                // Set the time of expiry to one hour from now
                var expires = Math.round(Date.now() / 1000) + 21600;
                var hashableBase = securityKey + newpath + expires;
                // Generate and encode the token 
                var md5String = crypto.createHash("md5").update(hashableBase).digest("binary");
                var token = new Buffer(md5String, 'binary').toString('base64');
                token = token.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
                var url = 'https://atfrgonline.b-cdn.net' + newpath + '?token=' + token + '&expires=' + expires;
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
            if (window.innerWidth < 500) {
                screen.orientation.lock('landscape');
                screen.msLockOrientation.lock("landscape");
                screen.mozLockOrientation.lock("landscape");
                // if (this.$props.subtitles.length > 0) {
                //     // this.film.currentTrack = 1;
                //     this.film.toggleCaptions(true);
                // }
            }
            if (window.innerWidth > 1800) {
                screen.orientation.lock('landscape');
                screen.msLockOrientation.lock("landscape");
                screen.mozLockOrientation.lock("landscape");
                // if (this.$props.subtitles.length > 0) {
                //     // this.film.currentTrack = 1;
                //     this.film.toggleCaptions(true);
                // }
            }
        },
        loadeddata() {
            if (this.readCookie(this.$props.id) != 0) {
                var time = parseInt(this.readCookie(this.$props.id));
                if (time != 0) {
                    this.timer = setTimeout(() => {
                        this.film.currentTime = time;
                    }, 1200);
                }
            }
        },
        AdCountInVideo(){
            this.AdsTimer = setInterval(this.AdWorkdone, 600000);//10min
            this.ads.style.display = 'none';
        },
        AdWorkdone(){
                    this.film.pause();
                    this.SkipButton.innerHTML = "10 sec";
                    this.SkipButton.disabled = true; 
                    this.SkipButton.style.display = 'block';
                    this.ads.style.display = "block";
                    this.countDownTimer();
                    clearInterval(this.AdsTimer)
                    // this.AdCountInVideo(); //600000
        },
        countDownTimer() {
            if (this.adCount >= 0) {
                this.aa = setTimeout(() => {
                    this.adCount -= 1
                    this.SkipButton.innerHTML = this.adCount + " secs";
                    this.countDownTimer();
                }, 1000)
            } else {
                this.SkipButton.innerHTML = "Skip Ad";
                this.SkipButton.disabled = false;
            }
        },
        nowPlaying() {
            if (this.film != null) {
                // Ads Start
                //  this.loadAds();
                if (this.adsloadeds == false) {                     
                        this.AdCountInVideo();
                        this.adsloadeds = true;
                }

                if (this.$props.subtitles.length > 0 && this.film.currentTrack == 0) {
                    this.film.currentTrack = 1;
                    // this.captionStart = true;
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
    border-radius: 0 !important;
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
    .video-logo {
        border: 0;
        color: rgb(187, 153, 153);
        position: absolute;
        z-index: 2;
        height: auto;
        width: 50px;
        z-index: 9999;
        top: 8%;
        left: 8%;
        background-color: transparent !important;
    }
}
@include md {
    .video-logo {
        border: 0;
        color: rgb(187, 153, 153);
        position: absolute;
        z-index: 2;
        height: auto;
        width: 60px;
        z-index: 9999;
        top: 8%;
        left: 8%;
        background-color: transparent !important;
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
.ad-chat {
    top: 7rem;
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
    display: block;
}
@include xl {
    .plyr__captions {
        font-size: 26px !important;
        bottom: 2rem !important;
    }
    .plyr:-webkit-full-screen .plyr__captions {
        font-size: 30px !important;
        bottom: 4rem !important;
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
    }
}
@include sm {
    .plyr:-webkit-full-screen .plyr__captions {
        z-index: 99999;
    }
}
.vide-ad {
    border: 0;
    display: none;
    color: #fff;
    position: absolute;
    z-index: 2;
    height: 0;
    width: 0;
    // z-index: 9999;
    width: 60%;
    top: 36%;
    left: 22%;
    background-color: transparent !important;
}
@include sm {
    .vide-ad {
        border: 0;
        color: #fff;
        position: absolute;
        z-index: 2;
        max-height: 150px;
        // overflow: hidden;
        width: 60%;
        top: 26%;
        left: 22%;
        #container-460d6761d1e465c09fca4ee917dd0ccb{
        max-height: 150px;
        overflow: hidden;
        display: none;
        }
    }
    #container-b7d66cc8d304167ae2aa320276ca566c__stand{
    max-height: 200px;
    overflow: hidden;
    }
}
@include md {
    .vide-ad {
        border: 0;
        color: #fff;
        position: absolute;
        z-index: 2;
        max-height: 150px;
        // overflow: hidden;
         width: 100%;
        top: 44%;
        left: 0;
        #container-460d6761d1e465c09fca4ee917dd0ccb{
        max-height: 150px;
        overflow: hidden;
        }
    }
}
.chat .message p {
    margin-bottom: 0 !important;
}
.ShowAd {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    div {
        height: 100% !important;
        width: 100% !important;
    }
}
.skip-button {
    border: 0;
    color: #fff;
    position: absolute;
    z-index: 999;
    height: auto;
    padding: 10px 4rem;
    z-index: 9999;
    bottom: 18%;
    right: 5%;
    letter-spacing: 1px;
    background-color: rgba(46, 47, 50, 0.84);
}
</style>