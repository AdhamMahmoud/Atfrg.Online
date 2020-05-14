<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <!-- <div id="adsBanner2" class="ads">
            </div> -->
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            ads2: null,
        }
    },
    mounted() {
        // var list = document.getElementById("adsBanner2");
        // if(document.getElementById("container-327995df4fccdfc89fe420ae6b341666") != null){
        //     this.ads2 = document.getElementById("container-327995df4fccdfc89fe420ae6b341666");
        //     list.appendChild(this.ads2); 
        //     this.ads2.style.display = 'block';   
        // }
    },
    beforeDestroy() {
            // this.ads2.style.display = 'none';   
            // document.getElementById("BannerDefault").appendChild(this.ads2); 
    },
}
</script>

<style lang="scss">
.ads {
    text-align: center;
    max-height: 260px;
    .it-client {
        margin: 0 auto !important;
    }
}
// #container-327995df4fccdfc89fe420ae6b341666{
// max-height: 260px;
// overflow: hidden;
// margin-bottom: 1rem;
// }
</style>