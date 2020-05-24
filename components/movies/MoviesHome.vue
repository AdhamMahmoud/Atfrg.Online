<template>
<!-- Movies Home -->
<div class="home-slider-block">
  <div class="message">
        <a href='https://play.google.com/store/apps/details?id=com.connect.atfrg&hl=en_US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img style="height: 65px;width: auto;" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' /></a>
    </div>
    <!-- Container -->
    <div class="container-fluid back-color">
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-2 col-xs-12 flex">
                        <!-- Block Title -->
                        <div class="block-type">
                            
                        <nuxt-link  to="/movies">
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
<g>
	<g>
		<path d="M443.86,196.919L141.46,10.514C119.582-2.955,93.131-3.515,70.702,9.016c-22.429,12.529-35.819,35.35-35.819,61.041
			v371.112c0,38.846,31.3,70.619,69.77,70.829c0.105,0,0.21,0.001,0.313,0.001c12.022-0.001,24.55-3.769,36.251-10.909
			c9.413-5.743,12.388-18.029,6.645-27.441c-5.743-9.414-18.031-12.388-27.441-6.645c-5.473,3.338-10.818,5.065-15.553,5.064
			c-14.515-0.079-30.056-12.513-30.056-30.898V70.058c0-11.021,5.744-20.808,15.364-26.183c9.621-5.375,20.966-5.135,30.339,0.636
			l302.401,186.405c9.089,5.596,14.29,14.927,14.268,25.601c-0.022,10.673-5.261,19.983-14.4,25.56L204.147,415.945
			c-9.404,5.758-12.36,18.049-6.602,27.452c5.757,9.404,18.048,12.36,27.452,6.602l218.611-133.852
			c20.931-12.769,33.457-35.029,33.507-59.55C477.165,232.079,464.729,209.767,443.86,196.919z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

                            افلام
                        </nuxt-link>
                    
                        </div>
                                                          <div class="drob" @click="ShowNav">
                               <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<g>
		<path d="M498.347,117.973c-18.773-18.773-51.2-18.773-68.267,0L256,290.346L83.627,117.973
			c-8.534-8.534-22.186-13.653-34.133-13.653c-13.653,0-25.6,5.12-34.133,13.653C5.12,128.213,0,140.159,0,153.813
			s5.12,25.6,13.653,34.133l208.213,206.507c8.534,8.534,22.187,13.653,34.133,13.653c11.947,0,25.6-5.12,34.133-13.653
			L498.347,186.24C506.88,177.706,512,164.053,512,152.106C512,140.159,506.88,126.506,498.347,117.973z M472.747,162.346
			L266.24,370.56c-5.12,5.12-15.36,5.12-20.48,0L39.253,164.053c-3.413-3.413-5.12-6.827-5.12-10.24s1.706-6.827,5.12-10.24
			s6.827-5.12,10.24-5.12s6.827,1.707,10.24,5.12l184.32,184.32c3.413,3.413,6.827,5.12,11.946,5.12c5.12,0,8.534-1.707,11.947-5.12
			l184.32-186.027c5.12-5.12,15.36-5.12,20.48,0c3.413,3.413,5.12,6.827,5.12,10.24C477.867,157.226,476.16,160.639,472.747,162.346
			z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

                            </div>
                    </div>
                    <div class="col-md-10">
                        <!-- Categories List -->
 
                        <div class="categories">
                            <ul ref="collapsebtns" id="colla" class="sub">
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
                                 <li>
                                    <button :class="{active : CollapseActive == 'BluRay'}" @click="active('BluRay')">
                                        <i class="fas fa-compact-disc"></i> افلام عربي
                                    </button>
                                </li>
                                <!-- Item .3 -->
                                <li>

                                    <button :class="{active : CollapseActive == 'choosen'}" @click="active('choosen')" aria-controls="choosen">
                                        <i class="fas fa-award"></i> افلام جديدة
                                    </button>
                                </li>
                                <!-- Item .4 -->
                               
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
    margin-top: -19rem;
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
