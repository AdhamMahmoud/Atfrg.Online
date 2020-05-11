<template>
<div :class="{ 'darkMod' : darkMode}" >
    <!-- Header -->
    <!-- <loading v-if="loading"></loading> -->
    <Header :darkMode.sync="darkMode" />
    <div id="BannerDefault">
     <div id="container-327995df4fccdfc89fe420ae6b341666" style="display:none"></div>
     <div id="container-460d6761d1e465c09fca4ee917dd0ccb" style="display:none"></div>
    </div>
    <nuxt />

    <!-- Footer -->
    <Footer />
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
        ShowAd() {
            this.timer = setTimeout(() => {
                this.StartAds = true;
            }, 5000);
        },
    },
    data: function () {
        return {
            darkMode: true,
            loading: true,
            ads: null,
            StartAds:false,
        }
    },
    mounted() {
        this.ShowAd();
        //  document.domain = "atfrg.online";
        // setTimeout(() => this.loading = false, 500);
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-162494703-1');
    }
};
</script>
<style scoped>
.BannerDefault{
    z-index: -10;
    display: none;
}
</style>