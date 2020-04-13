<template lang="html">
  <div class="loading-page">
   <img class="atfrg-logo" src="~/assets/images/FullLogo.svg" alt="Atfrg.online">
   <svg class="loadi" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style=" display: block; shape-rendering: auto;" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" fill="none" stroke="#fff" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(53.2159 50 50)"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>  </circle></svg>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  },
}
</script>

<style lang="scss" scoped="">
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
   background-image:linear-gradient(109.6deg, #4148cfad 21.2%, #5061d8ad 73.1%);
  text-align: center;
  padding-top: 11rem;
  font-size: 30px;
  font-family: sans-serif;
  z-index:9999999;
  img{
      height:200px;
}
.loadi{
  margin: 2rem auto;
}
}
// .darkMod {
// .loading-page {
//   background-image:none;
//     background-color: #0F0F0F;
// }
// }
@media (max-width:500px) {
  .loading-page {
  img{
      height:200px;
      padding:20px
  }
}
}

</style>