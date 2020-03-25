<template>
  <div :class="{ 'darkMod' : darkMode}">
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
export default {
  components: {
    Header,
    SearchArea,
    Footer
  },

  data: function() {
    return {
      darkMode: false
    };
  },
  mounted(){
    // (function(d, s, id) {
    //   var js, fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) return;
    //   js = d.createElement(s); js.id = id;
    //   js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    //   fjs.parentNode.insertBefore(js, fjs);
    // }(document, 'script', 'facebook-jssdk'));
    //  window.fbAsyncInit = function() {
    //   FB.init({
    //     appId            : '256554538684363',
    //     autoLogAppEvents : true,
    //     xfbml            : true,
    //     version          : 'v6.0'
    //   });
    //   FB.CustomerChat.show();

    // };
    
  }
};
</script>
