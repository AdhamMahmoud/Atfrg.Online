exports.ids=[5],exports.modules={126:function(t,e,r){"use strict";r.r(e);var n=r(99),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,(function(){return n[t]}))}(l);e.default=o.a},127:function(t,e,r){(e=r(2)(!1)).push([t.i,".movies-genre .items{margin:2rem}.movies-genre .items .global-item,.movies-genre .items .global-item .item-slide{height:400px}.movies-genre .items .global-item .item-slide .poster img{height:400px!important}.movies-genre .note h1{text-align:center;margin:2rem 1rem;-webkit-box-align:center;align-items:center;color:#ff0dec}.movies-genre .change{text-align:center;display:block;background-image:radial-gradient(circle farthest-corner at 10%,at 20%,#7832ff 0,#3296fa 91%);background-image:radial-gradient(circle farthest-corner at 10% 20%,#7832ff 0,#3296fa 91%);color:#fff;border:none;border-radius:50%;padding:2rem;height:100px;width:100px;outline:none;margin:2rem auto}",""]),t.exports=e},185:function(t,e,r){"use strict";r.r(e);var n=r(20),o=r(82),l=r(76),c=r.n(l),d={head:{title:"اتفرج اونلاين مشاهدة افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online "},data:function(){return{items:12,movies:[],randoms:[],loaded:!1}},components:{resultNotFound:n.a,TrailerItem:o.a},apollo:{movies:{query:c.a`query movies {
                movies(where:{isPublished: true}) {
                    id
                    title
                    posters {
                        size
                        path
                    }
                    audience
                    trailerPath
                    movieQuality
                    videoQualities
                    runtime
                    genres {
                    id
                    name
                    }
                    watchCount
                }
            }
            `}},methods:{Generate(){this.randoms=[];var t=[];if(this.movies.length>0)for(var i=0;i<4;i++){var e=this.GetRandom(this.movies.length);if(t.includes(e))this.randoms=[],this.Generate();else{t.push(e);var r=this.movies[e];this.randoms.push(r)}}},GetRandom:t=>Math.floor(Math.random()*t)},mounted(){0==this.loaded&&this.Generate()}},m=r(1);var component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"movies-genre"},[t._ssrNode('<div class="container-fluid">',"</div>",[t._ssrNode('<div class="row"><div class="col-12"><button class="change">\r\n                 تغير ؟\r\n                </button></div></div> '),t._ssrNode('<div class="row items">',"</div>",t._l(t.randoms,(function(e){return t._ssrNode('<div class="col-xl-3 col-lg-3 col-md-3 col-6 global-item">',"</div>",[r("TrailerItem",{attrs:{id:e.id,title:e.title,quality:e.movieQuality,poster:e.posters,trailer:e.trailerPath,genres:e.genres,watchCount:e.watchCount,audience:e.audience,videoQualities:e.videoQualities[0],runtime:e.runtime,run:!1}})],1)})),0)],2)])}),[],!1,(function(t){var e=r(126);e.__inject__&&e.__inject__(t)}),null,"7cd2427b");e.default=component.exports},80:function(t,e,r){var content=r(86);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(3).default;t.exports.__inject__=function(t){n("79f6d1da",content,!0,t)}},82:function(t,e,r){"use strict";var n={data:function(){return{isPlay:!1,trailer_path:" ",films:[]}},computed:{playerOptions:()=>({captions:{active:!1},controls:["play-large"]})},methods:{handleSearch(){this.films=[],fetch("https://www.omdbapi.com/?i="+this.$props.imdbId+"&apikey=527f9c9a").then(t=>t.json()).then(t=>{this.films=t})},runTrailer(t){this.isPlay=!0,setTimeout(()=>{this.runTrailerNow(t)},1500)},runTrailerNow(t){this.isPlay&&this.$refs[t]&&(this.trailer_path=this.$props.trailer,this.$refs[t].player.play(),this.$refs[t+"poster"].style="display:block")},stopTrailer(t){this.isPlay=!1,this.$refs[t]&&(this.$refs[t].player.stop(),this.trailer_path=" ",this.$refs[t+"poster"].style="display:none",clearTimeout(this.timer))},runTimeCalc:t=>function(t){t=Number(60*t);var e=Math.floor(t/3600),r=Math.floor(t%3600/60),s=Math.floor(t%3600%60);return(e>0?e+" ساعة, ":"")+(r>0?r+" دقيقة, ":"")+(s>0?s+" ثانية":"")}(t),GetSlide(t){var i,path="";for(i=0;i<t.length;i++)"THUMBNAIL"==t[i].size&&(path=t[i].path);return path}},mounted(){this.handleSearch()},props:{id:String,title:String,quality:String,poster:Array,trailer:String,genres:Array,watchCount:Number,audience:String,movieQuality:String,runtime:Number,run:Boolean,imdbId:String}},o=r(1);var component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{staticClass:"item-fade",attrs:{to:"/movie/"+t.title}},[r("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img",loading:"/load.svg"},expression:"{ selector: 'img', loading: '/load.svg' }"}],staticClass:"item-slide",on:{mouseover:function(e){return t.runTrailer(t.id)},mouseleave:function(e){return t.stopTrailer(t.id)}}},[r("div",{staticClass:"poster"},[r("span",{staticClass:"quality"},[t._v(t._s(t.quality))]),t._v(" "),r("span",{staticClass:"views"},[t._v("\n        "+t._s(t.watchCount)+"\n        "),r("i",{staticClass:"far fa-eye"})]),t._v(" "),null!=t.films.imdbRating?r("span",{staticClass:"rate"},[t._v("\n        "+t._s(t.films.imdbRating)+" "),r("i",{staticClass:"far fa-star"})]):t._e(),t._v(" "),r("img",{attrs:{"data-src":t.GetSlide(t.poster),alt:t.title}})]),t._v(" "),r("div",{staticClass:"overlay"},[r("div",{staticClass:"information"},[r("h3",{staticClass:"name"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"subinfo-block"},[r("span",{staticClass:"runtime"},[t._v("\n            "+t._s(t.runTimeCalc(t.runtime))+"\n          ")]),t._v(" "),r("span",{staticClass:"audience"},[t._v(t._s(t.audience)+" ")]),t._v(" "),r("div",{staticClass:"genres"},t._l(t.genres,(function(e){return r("i",{key:e.id},[t._v(" "+t._s(e.name)+" ")])})),0)])])])])])}),[],!1,(function(t){var e=r(85);e.__inject__&&e.__inject__(t)}),"09f8b543","c1af3228");e.a=component.exports},85:function(t,e,r){"use strict";r.r(e);var n=r(80),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,(function(){return n[t]}))}(l);e.default=o.a},86:function(t,e,r){(e=r(2)(!1)).push([t.i,".fade-enter-active[data-v-09f8b543],.fade-leave-active[data-v-09f8b543]{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-enter[data-v-09f8b543],.fade-leave-to[data-v-09f8b543]{opacity:0}",""]),t.exports=e},99:function(t,e,r){var content=r(127);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(3).default;t.exports.__inject__=function(t){n("74cbd718",content,!0,t)}}};