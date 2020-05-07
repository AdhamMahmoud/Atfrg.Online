<template>
<div class="container">
    <div class="row">
        <div class="col-12">
            <div id="ads" class="ads">
                <p> الأعلانات دي عشانك عشان نستمر ❤️</p>
                <div id="container-65550475d009aa6f1c54ac2455097cc9"></div>

            </div>
        </div>
    </div>
</div>
</template>
<script>
const atOptions = {
		'key' : '65550475d009aa6f1c54ac2455097cc9',
		'format' : 'iframe',
		'height' : 50,
		'width' : 320,
		'params' : {}
	};
export default {
       data: function () {
        return {
            ads:null,
        }
       },
       mounted(){
        var list = document.getElementById("ads");
        this.ads = document.createElement("div");
        var sc = document.createElement('script');
        // this.ads.classList.add("vide-ad");
        sc.setAttribute('data-cfasync','false');
         sc.setAttribute('src','//pl15441614.passtechusa.com/af30aca1ff5507bbeb531b00839438e8/invoke.js');
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
     max-height:260px;
    .it-client{
    margin:0 auto !important;
    }
}
</style>