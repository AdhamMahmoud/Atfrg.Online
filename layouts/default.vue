<template>
<div :class="{ 'darkMod' : darkMode}" >
    <!-- Header -->
  
    <Header :darkMode.sync="darkMode" />

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
            // this.timer = setTimeout(() => {
            //     var list = document.getElementById("atfrg");
            //     this.ads = document.createElement("div");
            //     var sc = document.createElement('script');
            //     this.ads.classList.add("ad");
            //     sc.setAttribute('data-cfasync', 'false');
            //     sc.setAttribute('src', '//pl15441614.passtechusa.com/af30aca1ff5507bbeb531b00839438e8/invoke.js');
            //     // sc.setAttribute('src','//native.propellerclick.com/1?z=3252004');
            //     this.ads.appendChild(sc);
            //     list.parentNode.insertBefore(this.ads, list.nextSibling);
            // }, 10000);

        },
    },
    data: function () {
        return {
            darkMode: true,
            loading: true,
            ads: null,
        }
    },
    mounted() {
        
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-162494703-1');
    }
};
</script>
