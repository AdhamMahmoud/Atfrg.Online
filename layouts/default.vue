<template>
<div :class="{ 'darkMod' : darkMode}">
    <!-- Header -->
    <!-- <loading v-if="loading"></loading> -->
    <Header :darkMode.sync="darkMode" />
    
    <nuxt />

    <!-- Footer -->
    <Footer />
    <div id="BannerDefault">
        <div id="container-327995df4fccdfc89fe420ae6b341666" style="display:none"></div>
        <div id="container-460d6761d1e465c09fca4ee917dd0ccb" style="display:none"></div>
        <div id="container-b7d66cc8d304167ae2aa320276ca566c" style="display:none"></div>
    </div>
</div>
</template>
<script>

import Header from "~/components/Header.vue";
import SearchArea from "~/components/SearchArea.vue";
import Footer from "~/components/Footer.vue";
import loading from "~/components/loading.vue";
export default {
    components: {
        Header,
        SearchArea,
        Footer,
        loading
    },
    methods: {
        addFile(url){
            var newScript = document.createElement('script');
            newScript.type = 'text/javascript';
            newScript.src = ''+url+'';
            document.getElementsByTagName("head")[0].appendChild(newScript);
        },
    },
    data: function () {
        return {
            darkMode: true,
            loading: true,
            ads: null,
            StartAds: false,
        }
    },
    mounted() {
   

        //  document.domain = "atfrg.online";
        // setTimeout(() => this.StartAds = true, 1000);
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-162494703-1');
    }
};
</script>

<style>
.body{
    overflow-x: hidden;
    z-index: 99999;
}
#BannerDefault {
    z-index: -10;
    display: none;
}
</style>
