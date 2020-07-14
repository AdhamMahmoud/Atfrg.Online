<template>
<!-- <div :class="{ 'darkMod' : darkMode}"> -->
    <div class="darkMod">
    <!-- Header -->
    <!-- <loading v-if="loading"></loading> -->
    <Header :darkMode.sync="darkMode" />
    
    <nuxt />

    <!-- Footer -->
    <Footer />
    <div id="BannerDefault">
        <div id="container-327995df4fccdfc89fe420ae6b341666" style="display:none"></div>
        <div id="container-460d6761d1e465c09fca4ee917dd0ccb" style="display:none"></div>
        <div id="container-b7d66cc8d304167ae2aa320276ca566c" style="display:none"></div>
    </div>
</div>
</template>

<script>
if (process.client) {
(function(a,b,c){Object.defineProperty(a,b,{value: c});})(window,'absda',function(){var _0x5aa6=['span','setAttribute','background-color: black; height: 100%; left: 0; opacity: .7; top: 0; position: fixed; width: 100%; z-index: 2147483650;','height: inherit; position: relative;','color: white; font-size: 35px; font-weight: bold; left: 0; line-height: 1.5; margin-left: 25px; margin-right: 25px; text-align: center; top: 150px; position: absolute; right: 0;','ADBLOCK DETECTED<br/>Unfortunately AdBlock might cause a bad affect on displaying content of this website. Please, deactivate it.','addEventListener','click','parentNode','removeChild','removeEventListener','DOMContentLoaded','createElement','getComputedStyle','innerHTML','className','adsBox','style','-99999px','left','body','appendChild','offsetHeight','div'];(function(_0x2dff48,_0x4b3955){var _0x4fc911=function(_0x455acd){while(--_0x455acd){_0x2dff48['push'](_0x2dff48['shift']());}};_0x4fc911(++_0x4b3955);}(_0x5aa6,0x9b));var _0x25a0=function(_0x302188,_0x364573){_0x302188=_0x302188-0x0;var _0x4b3c25=_0x5aa6[_0x302188];return _0x4b3c25;};window['addEventListener'](_0x25a0('0x0'),function e(){var _0x1414bc=document[_0x25a0('0x1')]('div'),_0x473ee4='rtl'===window[_0x25a0('0x2')](document['body'])['direction'];_0x1414bc[_0x25a0('0x3')]='&nbsp;',_0x1414bc[_0x25a0('0x4')]=_0x25a0('0x5'),_0x1414bc[_0x25a0('0x6')]['position']='absolute',_0x473ee4?_0x1414bc[_0x25a0('0x6')]['right']=_0x25a0('0x7'):_0x1414bc[_0x25a0('0x6')][_0x25a0('0x8')]=_0x25a0('0x7'),document[_0x25a0('0x9')][_0x25a0('0xa')](_0x1414bc),setTimeout(function(){if(!_0x1414bc[_0x25a0('0xb')]){var _0x473ee4=document[_0x25a0('0x1')](_0x25a0('0xc')),_0x3c0b3b=document[_0x25a0('0x1')](_0x25a0('0xc')),_0x1f5f8c=document[_0x25a0('0x1')](_0x25a0('0xd')),_0x5a9ba0=document['createElement']('p');_0x473ee4[_0x25a0('0xe')]('style',_0x25a0('0xf')),_0x3c0b3b['setAttribute']('style',_0x25a0('0x10')),_0x1f5f8c[_0x25a0('0xe')](_0x25a0('0x6'),'color: white; cursor: pointer; font-size: 50px; font-weight: bold; position: absolute; right: 30px; top: 20px;'),_0x5a9ba0[_0x25a0('0xe')](_0x25a0('0x6'),_0x25a0('0x11')),_0x5a9ba0[_0x25a0('0x3')]=_0x25a0('0x12'),_0x1f5f8c[_0x25a0('0x3')]='&#10006;',_0x3c0b3b['appendChild'](_0x5a9ba0),_0x3c0b3b[_0x25a0('0xa')](_0x1f5f8c),_0x1f5f8c[_0x25a0('0x13')](_0x25a0('0x14'),function _0x3c0b3b(){_0x473ee4[_0x25a0('0x15')][_0x25a0('0x16')](_0x473ee4),_0x1f5f8c['removeEventListener']('click',_0x3c0b3b);}),_0x473ee4[_0x25a0('0xa')](_0x3c0b3b),document[_0x25a0('0x9')][_0x25a0('0xa')](_0x473ee4);}},0xc8),window[_0x25a0('0x17')]('DOMContentLoaded',e);});});

}
import Header from "~/components/Header.vue";
import SearchArea from "~/components/SearchArea.vue";
import Footer from "~/components/Footer.vue";
import loading from "~/components/loading.vue";
export default {
    components: {
        Header,
        SearchArea,
        Footer,
        loading
    },
    methods: {
        addFile(url){
            var newScript = document.createElement('script');
            newScript.type = 'text/javascript';
            newScript.src = ''+url+'';
            document.getElementsByTagName("head")[0].appendChild(newScript);
        },
    },
    data: function () {
        return {
            darkMode: true,
            loading: true,
            ads: null,
            StartAds: false,
        }
    },
    mounted() { 
            // var curUrl = window.location.href;
            //     if(!curUrl.includes("ar.atfrg.online")){
            //         window.location.href = "https://ar.atfrg.online" + window.location.pathname;
            //     }    
            if (window.innerWidth > 500 && !window.location.href.includes("atfrg.online")) {
                this.timer = setTimeout(() => {
                var newScript = document.createElement('script');
                newScript.type = 'text/javascript';
                newScript.src = '//71692fai4cc0.com/84/2a/0b/842a0b5399a51ef446dfd48a4a378db4.js';
                document.getElementsByTagName("head")[0].appendChild(newScript);

                // var newScript2 = document.createElement('script');
                // newScript2.type = 'text/javascript';
                // newScript2.src = 'https://iclickcdn.com/tag.min.js';
                // newScript2.setAttribute('data-zone',3331886);
                // document.getElementsByTagName("head")[0].appendChild(newScript2);

                var newScript3 = document.createElement('script');
                newScript3.type = 'text/javascript';
                newScript3.src = '//pl15442421.profitablegate.com/9c/d3/1c/9cd31c6b817458951dc72ca0c6f32ffd.js';
                document.getElementsByTagName("head")[0].appendChild(newScript3);

                }, 3000);
              }
        //  document.domain = "atfrg.online";
        // setTimeout(() => this.StartAds = true, 1000);
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-162494703-1');
    }
};
</script>

<style>
.body{
    overflow-x: hidden;
    z-index: 99999;
}
#BannerDefault {
    z-index: -10;
    display: none;
}
</style>
