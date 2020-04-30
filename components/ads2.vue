<template>
<div class="container">
    <div class="row">
        <div class="col-12">
            <div id="ads-download" class="ads">
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
        var list = document.getElementById("ads-download");
        this.ads = document.createElement("div");
        var sc = document.createElement('script');
        // this.ads.classList.add("vide-ad");
        sc.setAttribute('data-cfasync','false');
        sc.setAttribute('src','//native.propellerclick.com/1?z=3258718');
        this.ads.appendChild(sc);
        list.appendChild(this.ads);
       },
        beforeDestroy() {
        this.ads.remove();
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