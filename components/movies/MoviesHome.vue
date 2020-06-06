<template>
<!-- Movies Home -->
<div>
  <!-- <div class="message">
        <a href='https://play.google.com/store/apps/details?id=com.connect.atfrg&hl=en_US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img style="height: 65px;width: auto;" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' /></a>
    </div> -->
    <!-- Container -->
 
    <SliderList :active="CollapseActive" />
</div>
</template>

<script>
import SliderList from '~/components/movies/SliderList.vue';
export default {
    data() {
        return {
            CollapseActive: "mostviewMovies"
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
              var element = document.getElementById("colla");
                 element.classList.remove("show");
        },
        ShowNav(e){
             var element = document.getElementById("colla");
                 element.classList.toggle("show");
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_vars.scss';
@import '~/assets/sass/_mixins.scss';

.home-slider-block {
    margin-top: -24rem;
    box-shadow: none;
}

@include sm {
    .home-slider-block {
        margin-top: -24rem !important;
    }
}

.message {
    position: absolute;
    display: block;
    margin: 0 auto;
    text-align: center;
    top: -70px;
    left: 41%;
    border-radius: 10px;
    padding: 10px;
    // background-color: #0c0a2a;
    color: #fff;

    p {
        margin: 0;
        font-size: 15px;
    }
}

@include sm {
    .message {
        top: -73px;
        left: 20%;

        p {
            margin: 0;
            font-size: 14px;
        }
    }
}
</style>
