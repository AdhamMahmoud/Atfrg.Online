<template>
<div class="container">
    <div class="row">
        <div class="col-12">
            <div id="ads-Footer" class="ads">
                <p> الأعلانات دي عشانك عشان نستمر ❤️</p>
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
        // var list = document.getElementById("ads-Footer");
        // this.ads = document.createElement("div");
        // var sc = document.createElement('script');
        // // this.ads.classList.add("vide-ad");
        // sc.setAttribute('data-cfasync','false');
        // sc.setAttribute('src','//p393613.clksite.com/adServe/banners?tid=393613_773071_3');
        // this.ads.appendChild(sc);
        // list.appendChild(this.ads);
       }
}
</script>
<style lang="scss">
.ads{
    text-align: center;
    .it-client{
    margin:0 auto !important;
    margin-bottom: 2rem;
    }
}
</style>