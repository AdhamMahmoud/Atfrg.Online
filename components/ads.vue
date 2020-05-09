<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div id="adsBanner" class="ads">
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            ads: null,
        }
    },
    mounted() {
        var list = document.getElementById("adsBanner");
        if(document.getElementById("propellerBanner") != null){
            this.ads = document.getElementById("propellerBanner");
            list.appendChild(this.ads); 
            this.ads.style.display = 'block';   
        }
    },
    beforeDestroy() {
            this.ads.style.display = 'none';   
            var perv = document.getElementById("BannerDefault");
            perv.appendChild(this.ads); 
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
</style>
