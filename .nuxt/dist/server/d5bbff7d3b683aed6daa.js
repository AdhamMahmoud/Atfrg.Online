exports.ids=[6],exports.modules={104:function(e,t,r){var content=r(141);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var n=r(3).default;e.exports.__inject__=function(e){n("bc1da690",content,!0,e)}},140:function(e,t,r){"use strict";r.r(t);var n=r(104),l=r.n(n);for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t.default=l.a},141:function(e,t,r){(t=r(2)(!1)).push([e.i,".movies-genre .items{margin:2rem}.movies-genre .items .global-item,.movies-genre .items .global-item .item-slide{height:400px}.movies-genre .items .global-item .item-slide .poster img{height:400px!important}.movies-genre .note{text-align:center;margin-top:2rem}.movies-genre .note h1{text-align:center;margin:2rem 1rem;align-items:center;color:#ff0dec}.movies-genre .change{text-align:center;display:block;background-image:radial-gradient(circle farthest-corner at 10%,at 20%,#7832ff 0,#3296fa 91%);background-image:radial-gradient(circle farthest-corner at 10% 20%,#7832ff 0,#3296fa 91%);color:#fff;border:none;border-radius:50%;padding:2rem;height:100px;width:100px;outline:none;margin:2rem auto}",""]),e.exports=t},218:function(e,t,r){"use strict";r.r(t);r(20),r(82),r(14);var n={head:{title:"    عجلة الافلام - اتفرج اون لاين مشاهدة افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online ",meta:[{name:"description",content:"مشاهدة وتحميل مباشر افلام و مسلسلات وانمي بجودة عالية مترجمة - اتفرج اون لاين - بدون اعلانات"},{name:"keywords",content:"مشاهدة مسلسل ,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى, فيلم , تحميل افلام , مشاهدة افلام بجودة عالية , مشاهدة انمي اون لاين, تحميل موسم برابط واحد , مشاهدة بدون اعلانات , تحميل مباشر  , افلام جديدة , مسلسل "}]}},l=r(1);var component=Object(l.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"movies-genre",staticStyle:{"min-height":"94vh"}},[this._ssrNode('<div class="container-fluid"><div class="row"><div class="col-12"><div class="note"><h2>حقوق الملكية الفكرية</h2>\r\nإخلاء مسؤوليه <br>\r\nنود أن نوضح أن جميع مايطرح  <br>\r\nفي الموقع من آراء أو برامج أو مواضيع إنما يعبر عن رأي كاتبه فقط  ولا يعبر عن  إدارة موقع  <br>\r\nوإدارة الموقع تخلي مسؤوليتها عما تحتويه من انتهاك لحقوق الملكية الفكرية أو النشر أو الطبع في حالة نشر مادة خاضعة لحقوق الطبع و النشر والملكية الخاصة بكم على موقع  اتفرج اون لاين أو أُعيد عرضها من خلال محرك البحث الخاص بنا وترغب في حذفها، نرجو موافاتنا بإرسال إيميل يحتوى على معلومات مفصلة بهذا الصدد على الإيميل وسيتم مسحها فورا\r\n                </div> <div class="note">adham.m11000@gmail.com</div></div></div></div>')])}),[],!1,(function(e){var t=r(140);t.__inject__&&t.__inject__(e)}),null,"8e92b41a");t.default=component.exports},80:function(e,t,r){var content=r(85);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var n=r(3).default;e.exports.__inject__=function(e){n("151f47ab",content,!0,e)}},82:function(e,t,r){"use strict";var n={data:function(){return{isPlay:!1,trailer_path:" ",year:"",films:[]}},computed:{playerOptions:()=>({captions:{active:!1},controls:["play-large"]})},methods:{handleSearch(){this.films=[],fetch("https://www.omdbapi.com/?i="+this.$props.imdbId+"&apikey=bf7293bf").then(e=>e.json()).then(e=>{this.films=e,this.year=this.GetYear(e.Released),null==e.Released&&(this.year="")})},runTrailer(e){this.isPlay=!0,setTimeout(()=>{this.runTrailerNow(e)},1500)},GetYear(e){var t=new Date(e),r=(("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2),t.getFullYear());return this.movieyear=r,r},runTrailerNow(e){this.isPlay&&this.$refs[e]&&(this.trailer_path=this.$props.trailer,this.$refs[e].player.play(),this.$refs[e+"poster"].style="display:block")},stopTrailer(e){this.isPlay=!1,this.$refs[e]&&(this.$refs[e].player.stop(),this.trailer_path=" ",this.$refs[e+"poster"].style="display:none",clearTimeout(this.timer))},getaudience:e=>e+" - "+("G"==e?"للمشاهدة العامة, مناسب لجميع الاعمار.":"PG"==e?"ينصح بإرشاد الآباء, بعض المشاهد ربما لا تناسب الاطفال.":"PG13"==e?"يجب إرشاد الآباء, لا يناسب الأطفال أقل من 13 سنة.":"R"==e?"للكبار فقط , يحتوى على مشاهد فاضحة او عنيفة.":"NC17"==e?" لا يصلح لمن هما اقل من 17 عاما , يحتوى على مشاهد فاضحة او عنيفة":"غير مصنف"),runTimeCalc:e=>function(e){e=Number(60*e);var t=Math.floor(e/3600),r=Math.floor(e%3600/60),s=Math.floor(e%3600%60);return(t>0?t+" ساعة, ":"")+(r>0?r+" دقيقة, ":"")+(s>0?s+" ثانية":"")}(e),GetSlide(e){var i,path="";for(i=0;i<e.length;i++)"THUMBNAIL"==e[i].size&&(path=e[i].path);return path.includes("cdn.atfrg")&&(path=this.LinkToken(path)),path},LinkToken(path){path=path.replace(/^\s+/g,"");var e=r(76),t=path.substring(24,path.length),n=Math.round(Date.now()/1e3)+43200,l="6ecb7c25-9744-498a-a49b-ae4c7980c861"+t+n,o=e.createHash("md5").update(l).digest("binary"),c=new Buffer(o,"binary").toString("base64");return"https://Atfrgimages.b-cdn.net"+t+"?token="+(c=c.replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,""))+"&expires="+n}},mounted(){this.handleSearch()},props:{id:String,title:String,quality:String,poster:Array,trailer:String,genres:Array,watchCount:Number,audience:String,movieQuality:String,runtime:Number,run:Boolean,imdbId:String}},l=r(1);var component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nuxt-link",{staticClass:"item-fade",attrs:{to:"/movie/"+e.title}},[r("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img",loading:"/load.svg"},expression:"{ selector: 'img', loading: '/load.svg' }"}],staticClass:"item-slide",on:{mouseover:function(t){return e.runTrailer(e.id)},mouseleave:function(t){return e.stopTrailer(e.id)}}},[r("div",{staticClass:"poster"},[r("span",{staticClass:"quality"},[e._v(e._s(e.quality))]),e._v(" "),r("span",{staticClass:"views"},[e._v("\n        "+e._s(e.watchCount)+"\n        "),r("i",{staticClass:"far fa-eye"})]),e._v(" "),null!=e.films.imdbRating?r("span",{staticClass:"rate"},[e._v("\n        "+e._s(e.films.imdbRating)+" "),r("i",{staticClass:"far fa-star"})]):e._e(),e._v(" "),r("img",{attrs:{"data-src":e.GetSlide(e.poster),alt:e.title}})]),e._v(" "),r("div",{staticClass:"overlay"},[r("div",{staticClass:"information"},[""!=e.year?r("h3",{staticClass:"name"},[e._v(e._s(e.title+" ("+e.year+")"))]):r("h3",{staticClass:"name"},[e._v(e._s(e.title))]),e._v(" "),r("div",{staticClass:"subinfo-block"},[""!=e.year?r("span",{staticClass:"runtime"},[e._v("\n            "+e._s(e.runTimeCalc(e.runtime))+"\n          ")]):e._e(),e._v(" "),r("span",{staticClass:"audience"},[e._v(e._s(e.getaudience(e.audience))+" ")]),e._v(" "),r("div",{staticClass:"genres"},e._l(e.genres,(function(t){return r("i",{key:t.id},[e._v(" "+e._s(t.name)+" ")])})),0)])])])])])}),[],!1,(function(e){var t=r(84);t.__inject__&&t.__inject__(e)}),"17e517ea","c1af3228");t.a=component.exports},84:function(e,t,r){"use strict";r.r(t);var n=r(80),l=r.n(n);for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t.default=l.a},85:function(e,t,r){(t=r(2)(!1)).push([e.i,".fade-enter-active[data-v-17e517ea],.fade-leave-active[data-v-17e517ea]{transition:opacity .5s}.fade-enter[data-v-17e517ea],.fade-leave-to[data-v-17e517ea]{opacity:0}",""]),e.exports=t}};