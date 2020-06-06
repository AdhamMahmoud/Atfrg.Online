<template>
<!-- Movies Home -->
<div>
    <!-- Container -->
    <SliderList :active="CollapseActive" />
</div>
</template>

<script>
import SliderList from '~/components/movies/NetFlixSlider.vue';
export default {
    data() {
        return {
            CollapseActive: "series"
        }
    },
    components: {
        SliderList
    },
    methods: {
        Collapse(e) {
            var element = document.getElementsByClassName("collapse");
            element.classList.remove('show');
        },
        active(name) {
            this.CollapseActive = name;
              var element = document.getElementById("colla2");
                 element.classList.remove("show");
        },
        ShowNav(e){
             var element = document.getElementById("colla2");
                 element.classList.toggle("show");
        }
    }
}
</script>

<style lang="scss" scoped="">
@import '~/assets/sass/_vars.scss';
@import '~/assets/sass/_mixins.scss';
.home-slider-block {
      margin-top: 0;
      box-shadow: none;
}
@include sm{
    .home-slider-block{
        margin-top: 0 !important;
}
}
</style>
