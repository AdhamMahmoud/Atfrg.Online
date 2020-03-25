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
                        <nuxt-link  to="/anime">
                            <i class="im im-monitor-o"></i>
                            الانمي
                        </nuxt-link>
                        </div>
                    </div>
                    <div class="col-md-10">
                        <!-- Categories List -->
                        <div class="categories">
                            <ul ref="collapsebtns">
                                <!-- Item .1 -->
                                <li>
                                    <button :class="{active : CollapseActive == 'lastupdatesMovies'}" @click="active('lastupdatesMovies')" aria-controls="lastupdatesMovies">
                                        <i class="far fa-clock"></i>  اخر التحديثات
                                    </button>
                                </li>
                                <!-- Item .2 -->
                                <li>

                                    <button :class="{active : CollapseActive == 'choosen'}" @click="active('choosen')" aria-controls="choosen">
                                        <i class="fas fa-award"></i> انمي جديد 
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
import SliderList from '~/components/animes/SliderList.vue';
export default {
    data() {
        return {
            CollapseActive: "lastupdatesMovies"
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

<style lang="scss">
@import '~/assets/sass/_vars.scss';
@import '~/assets/sass/_mixins.scss';
</style>
