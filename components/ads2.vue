<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div id="adsBanner2" class="ads">
            </div>
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
        var list = document.getElementById("adsBanner2");
        if(document.getElementById("propellerDownload") != null){
            this.ads2 = document.getElementById("propellerDownload");
            list.appendChild(this.ads2); 
            this.ads2.style.display = 'block';   
        }
    },
    beforeDestroy() {
            this.ads2.style.display = 'none';   
            document.getElementById("BannerDefault").appendChild(this.ads2); 
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
#propellerDownload{
max-height: 260px;
}
</style>
