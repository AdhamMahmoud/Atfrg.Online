<template>
<div style="overflow: hidden;">
   <!-- <ads2></ads2> -->
    <div class="container">
        <div class="row">
            <div class="col-12">
                <!-- <div id="container-af30aca1ff5507bbeb531b00839438e8"></div> -->
            </div>
        </div>
    </div>
        <div class="footer">
    <p>خليك في البيت<i class="fas fa-heart"></i></p>
</div>
</div>

</template>
<script>
import ads2 from "~/components/footerAds.vue";
export default {
    components:{
        ads2
    }
}
</script>
<style lang="scss" scoped="">
@import '~/assets/sass/_vars.scss';
@import '~/assets/sass/_mixins.scss';
.it-client{
margin:0 auto !important;
overflow: hidden;
}
.footer {
   background-image: linear-gradient(109.6deg, #4148cf 21.2%, #5061d8 73.1%);
    text-align: center;
    color: #fff;
    margin: 0;
    height: 65px;
    line-height: 65px;
    vertical-align: middle;

    p {
        margin: 0;
    }

    i {
        margin-right: 5px;
        color: red;
    }
}
#container-af30aca1ff5507bbeb531b00839438e8{
    max-height: 260px;
    overflow: hidden;
    margin-bottom: 1rem;
}
</style>
