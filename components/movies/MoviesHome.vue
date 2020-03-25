<template>
<!-- Movies Home -->
<div class="home-slider-block">
    <!-- Container -->
    <div class="container-fluid back-color">
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-2 flex">
                        <!-- Block Title -->
                        <div class="block-type">
                        <nuxt-link  to="/movies">
                            <i class="im im-video"></i>
                            افلام
                        </nuxt-link>
                        </div>
                    </div>
                    <div class="col-md-10">
                        <!-- Categories List -->
                        <div class="categories">
                            <ul ref="collapsebtns">
                                <!-- Item .1 -->
                                <li>
                                    <button :class="{active : CollapseActive == 'mostviewMovies'}" aria-controls="mostviewMovies" @click="active('mostviewMovies')">
                                        <i class="fas fa-fire"></i> الاكثر مشاهدة</button>
                                </li>
                                <!-- Item .2 -->
                                <li>
                                    <button :class="{active : CollapseActive == 'lastupdatesMovies'}" @click="active('lastupdatesMovies')" aria-controls="lastupdatesMovies">
                                        <i class="far fa-clock"></i> اخر التحديثات
                                    </button>
                                </li>
                                <!-- Item .3 -->
                                <li>

                                    <button :class="{active : CollapseActive == 'choosen'}" @click="active('choosen')" aria-controls="choosen">
                                        <i class="fas fa-award"></i> افلام جديدة
                                    </button>
                                </li>
                                <!-- Item .4 -->
                                <li>
                                    <button :class="{active : CollapseActive == 'BluRay'}" @click="active('BluRay')">
                                        <i class="fas fa-compact-disc"></i> BluRay
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
        },
    }
}
</script>

<style lang="scss" scoped="">
@import '~/assets/sass/_vars.scss';
@import '~/assets/sass/_mixins.scss';
.home-slider-block {
      margin-top: -19rem;
      box-shadow: none;
}
@include sm{
    .home-slider-block{
        margin-top: -24rem !important;
}
}
</style>
