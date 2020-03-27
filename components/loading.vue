<template lang="html">
  <div class="loading-page">
   <img class="atfrg-logo" src="logo.svg" alt="Atfrg.online">
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
   background-image:linear-gradient(109.6deg, #4148cf 21.2%, #5061d8 73.1%);
  text-align: center;
  padding-top: 10rem;
  font-size: 30px;
  font-family: sans-serif;
  z-index:9999999;
  img{
      height:200px
  }
}
</style>