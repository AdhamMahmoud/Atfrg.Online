<template>
  <div :class="{ 'darkMod' : darkMode}">
    <!-- Header -->
    <loading v-if="loading"></loading>
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

  data: function() {
    return {
      darkMode: true,
      loading:true,
    }
  },
      mounted(){
       setTimeout(() => this.loading = false, 800);
      window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-162494703-1');
  }
};
</script>
