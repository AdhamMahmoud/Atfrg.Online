(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{272:function(t,e,n){"use strict";(function(t){n(13),n(30),n(31),n(3),n(14),n(57),n(58);e.a={data:function(){return{isPlay:!1,trailer_path:" ",year:"",films:[]}},computed:{playerOptions:function(){return{captions:{active:!1},controls:["play-large"]}}},methods:{handleSearch:function(){var t=this;this.films=[],fetch("https://www.omdbapi.com/?i="+this.$props.imdbId+"&apikey=bf7293bf").then((function(t){return t.json()})).then((function(e){t.films=e,t.year=t.GetYear(e.Released),null==e.Released&&(t.year="")}))},runTrailer:function(t){var e=this;this.isPlay=!0,setTimeout((function(){e.runTrailerNow(t)}),1500)},GetYear:function(t){var e=new Date(t),n=(("0"+(e.getMonth()+1)).slice(-2),("0"+e.getDate()).slice(-2),e.getFullYear());return this.movieyear=n,n},runTrailerNow:function(t){this.isPlay&&this.$refs[t]&&(this.trailer_path=this.$props.trailer,this.$refs[t].player.play(),this.$refs[t+"poster"].style="display:block")},stopTrailer:function(t){this.isPlay=!1,this.$refs[t]&&(this.$refs[t].player.stop(),this.trailer_path=" ",this.$refs[t+"poster"].style="display:none",clearTimeout(this.timer))},getaudience:function(t){return t+" - "+("G"==t?"للمشاهدة العامة, مناسب لجميع الاعمار.":"PG"==t?"ينصح بإرشاد الآباء, بعض المشاهد ربما لا تناسب الاطفال.":"PG13"==t?"يجب إرشاد الآباء, لا يناسب الأطفال أقل من 13 سنة.":"R"==t?"للكبار فقط , يحتوى على مشاهد فاضحة او عنيفة.":"NC17"==t?" لا يصلح لمن هما اقل من 17 عاما , يحتوى على مشاهد فاضحة او عنيفة":"غير مصنف")},runTimeCalc:function(t){return function(t){t=Number(60*t);var e=Math.floor(t/3600),n=Math.floor(t%3600/60),s=Math.floor(t%3600%60);return(e>0?e+" ساعة, ":"")+(n>0?n+" دقيقة, ":"")+(s>0?s+" ثانية":"")}(t)},GetSlide:function(t){var i,path="";for(i=0;i<t.length;i++)"THUMBNAIL"==t[i].size&&(path=t[i].path);return path.includes("cdn.atfrg")&&(path=this.LinkToken(path)),path},LinkToken:function(path){path=path.replace(/^\s+/g,"");var e=n(274),r=path.substring(24,path.length),o=Math.round(Date.now()/1e3)+43200,l="6ecb7c25-9744-498a-a49b-ae4c7980c861"+r+o,c=e.createHash("md5").update(l).digest("binary"),f=new t(c,"binary").toString("base64");return"https://Atfrgimages.b-cdn.net"+r+"?token="+(f=f.replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,""))+"&expires="+o}},mounted:function(){this.handleSearch()},props:{id:String,title:String,quality:String,poster:Array,trailer:String,genres:Array,watchCount:Number,audience:String,movieQuality:String,runtime:Number,run:Boolean,imdbId:String}}}).call(this,n(275).Buffer)},273:function(t,e,n){var content=n(281);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("151f47ab",content,!0,{sourceMap:!1})},279:function(t,e,n){"use strict";var r=n(272).a,o=(n(280),n(16)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"item-fade",attrs:{to:"/movie/"+t.title}},[n("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img",loading:"/load.svg"},expression:"{ selector: 'img', loading: '/load.svg' }"}],staticClass:"item-slide",on:{mouseover:function(e){return t.runTrailer(t.id)},mouseleave:function(e){return t.stopTrailer(t.id)}}},[n("div",{staticClass:"poster"},[n("span",{staticClass:"quality"},[t._v(t._s(t.quality))]),t._v(" "),n("span",{staticClass:"views"},[t._v("\n        "+t._s(t.watchCount)+"\n        "),n("i",{staticClass:"far fa-eye"})]),t._v(" "),null!=t.films.imdbRating?n("span",{staticClass:"rate"},[t._v("\n        "+t._s(t.films.imdbRating)+" "),n("i",{staticClass:"far fa-star"})]):t._e(),t._v(" "),n("img",{attrs:{"data-src":t.GetSlide(t.poster),alt:t.title}})]),t._v(" "),n("div",{staticClass:"overlay"},[n("div",{staticClass:"information"},[""!=t.year?n("h3",{staticClass:"name"},[t._v(t._s(t.title+" ("+t.year+")"))]):n("h3",{staticClass:"name"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"subinfo-block"},[""!=t.year?n("span",{staticClass:"runtime"},[t._v("\n            "+t._s(t.runTimeCalc(t.runtime))+"\n          ")]):t._e(),t._v(" "),n("span",{staticClass:"audience"},[t._v(t._s(t.getaudience(t.audience))+" ")]),t._v(" "),n("div",{staticClass:"genres"},t._l(t.genres,(function(e){return n("i",{key:e.id},[t._v(" "+t._s(e.name)+" ")])})),0)])])])])])}),[],!1,null,"17e517ea",null);e.a=component.exports},280:function(t,e,n){"use strict";var r=n(273);n.n(r).a},281:function(t,e,n){(e=n(28)(!1)).push([t.i,".fade-enter-active[data-v-17e517ea],.fade-leave-active[data-v-17e517ea]{transition:opacity .5s}.fade-enter[data-v-17e517ea],.fade-leave-to[data-v-17e517ea]{opacity:0}",""]),t.exports=e},283:function(t,e){},284:function(t,e){},285:function(t,e){},286:function(t,e){},346:function(t,e,n){var content=n(500);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("bc1da690",content,!0,{sourceMap:!1})},499:function(t,e,n){"use strict";var r=n(346);n.n(r).a},500:function(t,e,n){(e=n(28)(!1)).push([t.i,".movies-genre .items{margin:2rem}.movies-genre .items .global-item,.movies-genre .items .global-item .item-slide{height:400px}.movies-genre .items .global-item .item-slide .poster img{height:400px!important}.movies-genre .note{text-align:center;margin-top:2rem}.movies-genre .note h1{text-align:center;margin:2rem 1rem;align-items:center;color:#ff0dec}.movies-genre .change{text-align:center;display:block;background-image:radial-gradient(circle farthest-corner at 10%,at 20%,#7832ff 0,#3296fa 91%);background-image:radial-gradient(circle farthest-corner at 10% 20%,#7832ff 0,#3296fa 91%);color:#fff;border:none;border-radius:50%;padding:2rem;height:100px;width:100px;outline:none;margin:2rem auto}",""]),t.exports=e},579:function(t,e,n){"use strict";n.r(e);n(121),n(279),n(46);var r={head:{title:"    عجلة الافلام - اتفرج اون لاين مشاهدة افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online ",meta:[{name:"description",content:"مشاهدة وتحميل مباشر افلام و مسلسلات وانمي بجودة عالية مترجمة - اتفرج اون لاين - بدون اعلانات"},{name:"keywords",content:"مشاهدة مسلسل ,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى, فيلم , تحميل افلام , مشاهدة افلام بجودة عالية , مشاهدة انمي اون لاين, تحميل موسم برابط واحد , مشاهدة بدون اعلانات , تحميل مباشر  , افلام جديدة , مسلسل "}]}},o=(n(499),n(16)),component=Object(o.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"movies-genre",staticStyle:{"min-height":"94vh"}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"note"},[e("h2",[this._v("حقوق الملكية الفكرية")]),this._v("\nإخلاء مسؤوليه "),e("br"),this._v("\nنود أن نوضح أن جميع مايطرح  "),e("br"),this._v("\nفي الموقع من آراء أو برامج أو مواضيع إنما يعبر عن رأي كاتبه فقط  ولا يعبر عن  إدارة موقع  "),e("br"),this._v("\nوإدارة الموقع تخلي مسؤوليتها عما تحتويه من انتهاك لحقوق الملكية الفكرية أو النشر أو الطبع في حالة نشر مادة خاضعة لحقوق الطبع و النشر والملكية الخاصة بكم على موقع  اتفرج اون لاين أو أُعيد عرضها من خلال محرك البحث الخاص بنا وترغب في حذفها، نرجو موافاتنا بإرسال إيميل يحتوى على معلومات مفصلة بهذا الصدد على الإيميل وسيتم مسحها فورا\n                ")]),this._v(" "),e("div",{staticClass:"note"},[this._v("adham.m11000@gmail.com")])])])])])}],!1,null,null,null);e.default=component.exports}}]);