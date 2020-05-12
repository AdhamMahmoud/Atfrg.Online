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
        if (document.getElementById("container-460d6761d1e465c09fca4ee917dd0ccb") != null) {
                        this.ads = document.getElementById("container-460d6761d1e465c09fca4ee917dd0ccb");
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
#container-460d6761d1e465c09fca4ee917dd0ccb{
max-height: 260px;
overflow: hidden;
margin-bottom: 1rem;
}

</style>