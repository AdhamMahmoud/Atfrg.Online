<template>
<div>
    <div class="note2">
        <!-- <p>مشاهدة ممتعة يا صحبي 😘💙</p> -->
        <p> دلوقتي بقا في ابلكيشن للأندرويد تقدر تتفرج وتتابع الموقع اسرع 😘💙</p>
                <a href='https://play.google.com/store/apps/details?id=com.connect.atfrg&hl=en_US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img style="height: 65px;width: auto;" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' /></a>

        <!-- <span @click="reloadPage()">تحديث المحتوي</span> -->
    </div>
     <!-- <div style="color:red" class="note2" v-show="VideoAd" >الأعلان 10 ثواني وبعدين اتفرج برحتك 💙</div> -->
    <!-- <iframe class="player-mov player-trailer" allow="autoplay" v-if="VideoAd" :src="'https://www.youtube.com/embed/UrL-QAfAwv4?autoplay=1'"> </iframe> -->
    <div class="plyr__video-embed" id="player" v-show="IsFrame">
        <iframe
            :src="links[0].path"
            allowfullscreen
            allowtransparency
            allow="autoplay"
        ></iframe>
    </div>

    <vue-plyr v-show="!IsFrame" class="player-mov" :ref="'film' + id" clickToPlay="true" seektime="10" :id="id" :options="playerOptions" @playing="nowPlaying" @enterfullscreen="enterfullscreenFull" @loadeddata="loadeddata" :emit="['playing','loadeddata','enterfullscreen']">
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
        //     {
        //     src: "//inpagepush.com/400/3246513",
        //     async :"async",
        //     "data-cfasync" :"false",
        //     type: "text/javascript"
        // },
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
            VideoAd:false,
            nextbutton:null,
            // adsLoaded:false,
        }
    },
    props: {
        title: String,
        poster: String,
        id: String,
        links: Array,
        subtitles: Array,
        next:String,
        episodes:Array
    },
    computed: {
        IsFrame(){
            if(this.$props.links[0].path.includes('atfrg')){
                return false;
            }
            else{
                return true;
            }
        },
        playerOptions() {
            const options = {
                toggleInvert: true,
                clickToPlay: true,
                storage:false,
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
        // this.ads.style.display = 'none';   
        // document.getElementById("BannerDefault").appendChild(this.ads); 
        this.$refs['film' + this.$props.id].player.destroy();
    },
    mounted() {
        this.film = this.$refs['film' + this.$props.id].player;
        var list = document.getElementsByClassName("plyr__control--overlaid")[0];
        var controls = document.getElementsByClassName("plyr__controls__item")[2];
        var rightIcons = document.getElementsByClassName("plyr__controls__item")[6];
        // // Banner Ads Get To Video Container
        // if(document.getElementById("container-b7d66cc8d304167ae2aa320276ca566c") != null){
        //     this.ads = document.getElementById("container-b7d66cc8d304167ae2aa320276ca566c");
        //     this.ads.classList.add("vide-ad");
        //     list.parentNode.insertBefore(this.ads, list.nextSibling);
        //     this.ads.style.display = 'none';   
        // }

        var ItemTitle = document.createElement("div");
        ItemTitle.innerHTML = this.$props.title;
        ItemTitle.classList.add("itemtitle");
        controls.parentNode.insertBefore(ItemTitle, controls.nextSibling);


        var episodesButton = document.createElement("button");
        episodesButton.type = "button";
        episodesButton.classList.add("plyr__controls__item");
        episodesButton.classList.add("plyr__control");
        episodesButton.innerHTML = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 327.241 327.241" style="enable-background:new 0 0 327.241 327.241;" xml:space="preserve"> <g> <g> <path style="fill:currentColor;" d="M81.627,123.311H69.693H37.866H25.932H0v166.768h245.614v-31.451v-11.934v-30.831V203.93v-80.618 H81.627z M153.534,219.867l-34.542,25.162c-3.019,2.184-6.564,3.335-10.251,3.335c-2.727,0-5.448-0.65-7.882-1.886 c-5.871-3.001-9.517-8.938-9.517-15.508v-50.307c0-6.564,3.64-12.507,9.499-15.502c5.77-2.924,12.948-2.345,18.145,1.432 l34.536,25.156c4.481,3.282,7.148,8.539,7.148,14.058S158.003,216.591,153.534,219.867z"/> <path style="fill:currentColor;" d="M111.962,176.243c-0.937-0.68-2.053-1.044-3.216-1.044c-0.859,0-1.718,0.203-2.488,0.603 c-1.838,0.931-2.983,2.798-2.983,4.857v50.307c0,2.065,1.146,3.926,2.995,4.869c1.784,0.913,4.046,0.734,5.71-0.465l34.512-25.144 c1.396-1.026,2.244-2.679,2.244-4.415s-0.847-3.389-2.255-4.427L111.962,176.243z"/> </g> <polygon style="fill:currentColor;" points="283.48,203.93 283.48,215.863 283.48,246.694 257.548,246.694 257.548,215.863 257.548,203.93 257.548,111.378 81.627,111.378 69.693,111.378 37.866,111.378 37.866,79.92 69.693,79.92 81.627,79.92 283.48,79.92 	"/> <polygon style="fill:currentColor;" points="327.241,203.93 295.414,203.93 295.414,67.987 81.627,67.987 81.627,37.162 327.241,37.162 "/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>';
        rightIcons.parentNode.insertBefore(episodesButton, rightIcons.nextSibling);
            var tpp = this;
        var episodesList = document.createElement("ul");
        episodesList.classList.add("episodesList");
        for(var i = 0; i < this.$props.episodes.length; i++){
            var ep = document.createElement("li");
            episodesList.appendChild(ep);
            var eplink = document.createElement("a");
            eplink.innerHTML =  this.$props.episodes[i].title;
            eplink.going =  this.$props.episodes[i].id;
            var idd = this.$props.episodes[i].id;
            ep.appendChild(eplink);
            var iee = this.$props.episodes[i].id;
            eplink.onclick = function () {
                 tpp.$router.push(this.going);        
             };
        }
        rightIcons.parentNode.insertBefore(episodesList, rightIcons.nextSibling);
        episodesList.style.display = 'none';
         episodesButton.onclick = function () {
             if(episodesList.style.display == 'block'){
                episodesList.style.display = 'none';
        }
             else{
                  episodesList.style.display = 'block';
             }
           
        };
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
        this.nextbutton = document.createElement("button");
        this.nextbutton.innerHTML = 'Nex Episode';
        this.nextbutton.href = this.next;
        this.nextbutton.classList.add("skip-button");
        list.parentNode.insertBefore(this.nextbutton, list.nextSibling);
        this.nextbutton.style.display = 'none';
         this.nextbutton.onclick = function () {
            tpp.$router.push(""+tpp.next+"");        
        };
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
        GoLink(link){
            this.$router.push(link);
            console.log(link)
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
                plyr.play();
                this.SkipButton.style.display = 'none';
                this.ads.style.display = 'none';
                this.SkipButton.innerHTML = "10 sec";
                this.adCount = 10;
                this.AdCountInVideo();      
            }
        },
        nowPlaying() {
            if (this.film != null) {
                // Ads Start
                // //  this.loadAds();
                // if (this.adsloadeds == false) {   
                //     this.VideoAd = true;    
                //     this.adsloadeds = true; 
                //     this.film.pause();
                //     this.timer = setTimeout(() => {    
                //         this.VideoAd = false; 
                //          this.film.play();
                //     }, 15000);         
                //         // this.AdCountInVideo();
                //         // this.adsloadeds = true;
                // }
                if(this.film.currentTime > this.film.duration - 120){
                    if(this.next != '#'){
                        this.nextbutton.style.display = 'block';
                    }
                    else{
                        this.nextbutton.style.display = 'none';
                    }
                    
                }
                else{
                    this.nextbutton.style.display = 'none';
                }
                if (this.$props.subtitles.length > 0 && this.film.currentTrack == 0 &&  this.captionStart == false) {
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
    background: #3a3a3a;
}
.plyr__control.plyr__tab-focus {
    box-shadow:none;
}
.plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]::before {
    background: #3a3a3a;
}
.plyr--audio .plyr__control.plyr__tab-focus,
.plyr--audio .plyr__control:hover,
.plyr--audio .plyr__control[aria-expanded=true] {
    background: #3a3a3a;
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
    height: 500px;
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
.episodesList li a{
    cursor: pointer;
}
</style>