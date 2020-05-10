<template>
<div>
    <div class="note2">
        <p>مشاهدة ممتعة يا صحبي 😘💙</p>
        <p> رمضان كريم ❤️❤️</p>
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
var StartAds = false;
if (process.client) {
    var videoElement;
    var adsLoaded = false;
    var adContainer;
    var adDisplayContainer;
    var adsLoader;
    var adsManager;
    window.addEventListener('resize', function (event) {
        console.log("window resized");
        if (adsManager) {
            var width = videoElement.clientWidth;
            var height = videoElement.clientHeight;
            adsManager.resize(width, height, google.ima.ViewMode.NORMAL);
        }
    });
}
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
            ads: null,
            ads2: null,
            FirstAd: false,
            captionStart: false,
            tagUrls: "",
            VideoAd: null,
            adsWork: false,
            SecoNote2: null,
            adCount: 10,
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
                    iosNative: 'force'
                },
                // ads:{
                //     enabled:true,
                //     tagUrl: "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator="
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
        adsLoaded = false;
        // document.body.removeChild(jsGoogle);
        // jsGoogle.remove();
        this.$refs['film' + this.$props.id].player.destroy();
        // this.ads.remove();
    },
    mounted() {
        //  document.domain = "atfrg.online";
        //  if(google == null){
        //         var GoogleFile = document.createElement("script");
        //         GoogleFile.type = "text/javascript";
        //         GoogleFile.src = 'https://imasdk.googleapis.com/js/sdkloader/ima3.js'
        //         document.head.appendChild(GoogleFile);
        //     }
        this.film = this.$refs['film' + this.$props.id].player;
        var list = document.getElementsByClassName("plyr__control--overlaid")[0];
        this.VideoAd = document.createElement("div");
        this.VideoAd.setAttribute('id', 'ad-container-' + this.$props.id);
        list.parentNode.insertBefore(this.VideoAd, list.nextSibling);
        videoElement = document.getElementById('vid' + this.$props.id);
        this.initializeIMA();
        this.tagUrls = 'https://www.movcpm.com/watch.xml?key=823fbda75a576c389938305b8d5aba32';

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
        this.SkipButton.onclick = function() {
             adsLoader.contentComplete();
            videoElement.play();
            document.getElementById('ad-container-' + idd).remove();
            this.style.display = 'none';
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
        initializeIMA() {
            console.log("initializing IMA");
            adContainer = document.getElementById('ad-container-' + this.$props.id);
            adContainer.addEventListener('click', this.adContainerClick);
            adDisplayContainer = new google.ima.AdDisplayContainer(adContainer, videoElement);
            adsLoader = new google.ima.AdsLoader(adDisplayContainer);
            adsLoader.addEventListener(
                google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
                this.onAdsManagerLoaded,
                false);
            adsLoader.addEventListener(
                google.ima.AdErrorEvent.Type.AD_ERROR,
                this.onAdError,
                false);

            // Let the AdsLoader know when the video has ended
            videoElement.addEventListener('ended', function () {
                adsLoader.contentComplete();
            });

            var adsRequest = new google.ima.AdsRequest();
            adsRequest.adTagUrl = 'https://www.movcpm.com/watch.xml?key=823fbda75a576c389938305b8d5aba32';

            // Specify the linear and nonlinear slot sizes. This helps the SDK to
            // select the correct creative if multiple are returned.
            adsRequest.linearAdSlotWidth = document.getElementById(this.$props.id).clientWidth;
            adsRequest.linearAdSlotHeight = document.getElementById(this.$props.id).clientHeight;
            adsRequest.nonLinearAdSlotWidth = document.getElementById(this.$props.id).clientWidth;
            adsRequest.nonLinearAdSlotHeight = document.getElementById(this.$props.id).clientHeight / 3;
             adsRequest.setAdWillAutoPlay(true);
            adsRequest.setAdWillPlayMuted(true);
            adsRequest.forceNonLinearFullSlot = true;

            // Pass the request to the adsLoader to request ads
            adsLoader.requestAds(adsRequest);
        },
        SkipAd() {
            this.onContentResumeRequested();
        },
        onAdsManagerLoaded(adsManagerLoadedEvent) {
            // Instantiate the AdsManager from the adsLoader response and pass it the video element
            adsManager = adsManagerLoadedEvent.getAdsManager(
                videoElement);
            adsManager.addEventListener(
                google.ima.AdErrorEvent.Type.AD_ERROR,
                this.onAdError);
            adsManager.addEventListener(
                google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
                this.onContentPauseRequested);
            adsManager.addEventListener(
                google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
                this.onContentResumeRequested);
            adsManager.addEventListener(
                google.ima.AdEvent.Type.LOADED,
                this.onAdLoaded);
        },
        onAdLoaded(adEvent) {
            var ad = adEvent.getAd();
            if (!ad.isLinear()) {
                videoElement.play();
                this.FirstNote.style.display = 'block';
                document.getElementById('ad-container-' + this.$props.id).classList.remove("ShowAd");
                document.getElementsByClassName("plyr")[0].classList.remove("stopPointer");
                this.adsWork = false;
            }
        },
        onContentPauseRequested() {
            videoElement.pause();
        },
        onContentResumeRequested() {
            videoElement.play();
            this.FirstNote.style.display = 'block';
            document.getElementById('ad-container-' + this.$props.id).classList.remove("ShowAd");
            document.getElementsByClassName("plyr")[0].classList.remove("stopPointer");
            this.adsWork = false;
        },
        onAdError(adErrorEvent) {
            // Handle the error logging.
            console.log(adErrorEvent.getError());
            if (adsManager) {
                adsManager.destroy();
            }
        },
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
                if (this.$props.subtitles.length > 0) {
                    this.film.currentTrack = 1;
                    this.film.toggleCaptions(true);
                }
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
        countDownTimer() { 
        if (document.getElementsByTagName("video")[1] != null){
            if(document.getElementsByTagName("video")[1].src.includes("brazzers")){
                adsLoader.contentComplete();
                adsManager.destroy();
                document.getElementById('ad-container-' + this.$props.id).classList.remove("ShowAd");
                document.getElementById('ad-container-' + this.$props.id).remove();
                this.film.play();
                this.SkipButton.style.display = 'none';
                document.getElementsByClassName("plyr")[0].classList.remove("stopPointer");
            }
        }
            if (this.adCount > 0) {
                setTimeout(() => {
                    this.adCount -= 1
                    this.SkipButton.innerHTML = this.adCount + " secs";
                    this.countDownTimer();   
                }, 1000)
            } else {
                this.SkipButton.innerHTML = "Skip Ad";
                this.SkipButton.disabled = false;
            }
        },
        loadAds() {
            // Prevent this function from running on if there are already ads loaded
            StartAds = true;
            console.log("load");
            if (adsLoaded) {
                return;
            }
            adsLoaded = true;
            this.adsWork = true;
            this.SkipButton.style.display = 'block';
            // var count = 10;
            //    this.timer = setInterval(this.timerSkip(), 1000);
            this.countDownTimer();

            // var counter = setInterval(this.timerSkip(), 1000); //1000 will  run it every 1 second
            // Prevent triggering immediate playback when ads are loading
            // event.preventDefault();

            console.log("loading ads");
            document.getElementById('ad-container-' + this.$props.id).classList.add("ShowAd");
            document.getElementsByClassName("plyr")[0].classList.add("stopPointer");
            // Initialize the container. Must be done via a user action on mobile devices.
            // videoElement.load();
            adDisplayContainer.initialize();
            videoElement.pause();
            var width = videoElement.clientWidth;
            var height = videoElement.clientHeight;
            try {
                //  console.log(google.ima.Ad.getAdvertiserName());
                adsManager.init(width, height, google.ima.ViewMode.NORMAL);
                adsManager.start();
                
            } catch (adError) {
                // Play the video without ads, if an error occurs
                console.log("AdsManager could not be started");
                document.getElementById('ad-container-' + this.$props.id).classList.remove("ShowAd");
                document.getElementsByClassName("plyr")[0].classList.remove("stopPointer");
                this.SkipButton.style.display = 'none';
                this.adsWork = false;
                // videoElement.play();
                videoElement.play();
                this.FirstNote.style.display = 'block';
            }
            // console.log(google.ima.Ad.getAdvertiserName());
            // document.getElementById('ad-container-' + this.$props.id).classList.remove("ShowAd");
            // document.getElementsByClassName("plyr")[0].classList.add("stopPointer");
            // this.SecoNote2.style.display = 'none';
            // this.film.play();
        },
        adContainerClick(event) {
            // console.log("ad container clicked");
            // if (videoElement.paused) {
            //     videoElement.play();
            // } else {
            //     videoElement.pause();
            // }
        },
        nowPlaying() {
            if (this.film != null) {
                // Ads Start
                this.loadAds(); 
                if (this.$props.subtitles.length > 0 && this.captionStart == false) {
                    this.film.currentTrack = 1;
                    this.captionStart = true;
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
        color: #fff;
        position: absolute;
        z-index: 2;
        height: auto;
        width: 80px;
        z-index: 9999;
        top: 5%;
        left: 5%;
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
    color: #fff;
    position: absolute;
    z-index: 2;
    height: 0;
    width: 0;
    // z-index: 9999;
    bottom: 11%;
    left: 24%;
    background-color: transparent !important;
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

    .plyr__control--overlaid {
        pointer-events: none;
    }
}

.stopPointer {
    .plyr__controls {
        pointer-events: none;
    }

    .plyr__control--overlaid {
        pointer-events: none;
    }

}

.skip-button {
    border: 0;
    color: #fff;
    position: absolute;
    z-index: 2;
    height: auto;
    padding: 10px 4rem;
    z-index: 9999;
    bottom: 18%;
    right: 5%;
    letter-spacing: 1px;
    background-color: #2e2e2ec4;
}
</style>
