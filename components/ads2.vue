<template>
<div class="container">
    <div class="row">
        <div class="col-12">
            <div id="ads" class="ads">
                <p> الأعلانات دي عشانك عشان نستمر ❤️</p>
                <div id="container-af30aca1ff5507bbeb531b00839438e8"></div>

            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
       data: function () {
        return {
            ads:null,
        }
       },
       mounted(){
        // var list = document.getElementById("ads");
        // this.ads = document.createElement("div");
        // var sc = document.createElement('script');
        // // this.ads.classList.add("vide-ad");
        // sc.setAttribute('data-cfasync','false');
        // // sc.setAttribute('src','//pl15441614.passtechusa.com/af30aca1ff5507bbeb531b00839438e8/invoke.js');
        // this.ads.appendChild(sc);
        // list.appendChild(this.ads);
       },
          beforeDestroy() {
        //  this.ads.remove();
    },
}
</script>
<style lang="scss">
.ads{
    text-align: center;
    .it-client{
    margin:0 auto !important;
    }
}
</style>