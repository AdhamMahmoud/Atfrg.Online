(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{272:function(e,t,n){"use strict";(function(e){n(13),n(30),n(31),n(3),n(14),n(57),n(58);t.a={data:function(){return{isPlay:!1,trailer_path:" ",year:"",films:[]}},computed:{playerOptions:function(){return{captions:{active:!1},controls:["play-large"]}}},methods:{handleSearch:function(){var e=this;this.films=[],fetch("https://www.omdbapi.com/?i="+this.$props.imdbId+"&apikey=bf7293bf").then((function(e){return e.json()})).then((function(t){e.films=t,e.year=e.GetYear(t.Released),null==t.Released&&(e.year="")}))},runTrailer:function(e){var t=this;this.isPlay=!0,setTimeout((function(){t.runTrailerNow(e)}),1500)},GetYear:function(e){var t=new Date(e),n=(("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2),t.getFullYear());return this.movieyear=n,n},runTrailerNow:function(e){this.isPlay&&this.$refs[e]&&(this.trailer_path=this.$props.trailer,this.$refs[e].player.play(),this.$refs[e+"poster"].style="display:block")},stopTrailer:function(e){this.isPlay=!1,this.$refs[e]&&(this.$refs[e].player.stop(),this.trailer_path=" ",this.$refs[e+"poster"].style="display:none",clearTimeout(this.timer))},getaudience:function(e){return e+" - "+("G"==e?"للمشاهدة العامة, مناسب لجميع الاعمار.":"PG"==e?"ينصح بإرشاد الآباء, بعض المشاهد ربما لا تناسب الاطفال.":"PG13"==e?"يجب إرشاد الآباء, لا يناسب الأطفال أقل من 13 سنة.":"R"==e?"للكبار فقط , يحتوى على مشاهد فاضحة او عنيفة.":"NC17"==e?" لا يصلح لمن هما اقل من 17 عاما , يحتوى على مشاهد فاضحة او عنيفة":"غير مصنف")},runTimeCalc:function(e){return function(e){e=Number(60*e);var t=Math.floor(e/3600),n=Math.floor(e%3600/60),s=Math.floor(e%3600%60);return(t>0?t+" ساعة, ":"")+(n>0?n+" دقيقة, ":"")+(s>0?s+" ثانية":"")}(e)},GetSlide:function(e){var i,path="";for(i=0;i<e.length;i++)"THUMBNAIL"==e[i].size&&(path=e[i].path);return path.includes("cdn.atfrg")&&(path=this.LinkToken(path)),path},LinkToken:function(path){path=path.replace(/^\s+/g,"");var t=n(274),r=path.substring(24,path.length),l=Math.round(Date.now()/1e3)+43200,o="6ecb7c25-9744-498a-a49b-ae4c7980c861"+r+l,c=t.createHash("md5").update(o).digest("binary"),h=new e(c,"binary").toString("base64");return"https://Atfrgimages.b-cdn.net"+r+"?token="+(h=h.replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,""))+"&expires="+l}},mounted:function(){this.handleSearch()},props:{id:String,title:String,quality:String,poster:Array,trailer:String,genres:Array,watchCount:Number,audience:String,movieQuality:String,runtime:Number,run:Boolean,imdbId:String}}}).call(this,n(275).Buffer)},273:function(e,t,n){var content=n(281);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(29).default)("151f47ab",content,!0,{sourceMap:!1})},279:function(e,t,n){"use strict";var r=n(272).a,l=(n(280),n(16)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nuxt-link",{staticClass:"item-fade",attrs:{to:"/movie/"+e.title}},[n("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img",loading:"/load.svg"},expression:"{ selector: 'img', loading: '/load.svg' }"}],staticClass:"item-slide",on:{mouseover:function(t){return e.runTrailer(e.id)},mouseleave:function(t){return e.stopTrailer(e.id)}}},[n("div",{staticClass:"poster"},[n("span",{staticClass:"quality"},[e._v(e._s(e.quality))]),e._v(" "),n("span",{staticClass:"views"},[e._v("\n        "+e._s(e.watchCount)+"\n        "),n("i",{staticClass:"far fa-eye"})]),e._v(" "),null!=e.films.imdbRating?n("span",{staticClass:"rate"},[e._v("\n        "+e._s(e.films.imdbRating)+" "),n("i",{staticClass:"far fa-star"})]):e._e(),e._v(" "),n("img",{attrs:{"data-src":e.GetSlide(e.poster),alt:e.title}})]),e._v(" "),n("div",{staticClass:"overlay"},[n("div",{staticClass:"information"},[""!=e.year?n("h3",{staticClass:"name"},[e._v(e._s(e.title+" ("+e.year+")"))]):n("h3",{staticClass:"name"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"subinfo-block"},[""!=e.year?n("span",{staticClass:"runtime"},[e._v("\n            "+e._s(e.runTimeCalc(e.runtime))+"\n          ")]):e._e(),e._v(" "),n("span",{staticClass:"audience"},[e._v(e._s(e.getaudience(e.audience))+" ")]),e._v(" "),n("div",{staticClass:"genres"},e._l(e.genres,(function(t){return n("i",{key:t.id},[e._v(" "+e._s(t.name)+" ")])})),0)])])])])])}),[],!1,null,"17e517ea",null);t.a=component.exports},280:function(e,t,n){"use strict";var r=n(273);n.n(r).a},281:function(e,t,n){(t=n(28)(!1)).push([e.i,".fade-enter-active[data-v-17e517ea],.fade-leave-active[data-v-17e517ea]{transition:opacity .5s}.fade-enter[data-v-17e517ea],.fade-leave-to[data-v-17e517ea]{opacity:0}",""]),e.exports=t},283:function(e,t){},284:function(e,t){},285:function(e,t){},286:function(e,t){},297:function(e,t,n){"use strict";var r=Object.freeze(["\n                      query getMoviestwo {\n                      movies(orderBy: createdAt_DESC,  where :{ isPublished: true}) {\n                        id\n                        movieQuality\n                        audience\n                        releaseDate\n                      }\n                    }\n                    "]),l=(n(15),n(14),n(57),n(58),n(98)),o=n(46),c=n.n(o),h=n(121);function d(){var data=Object(l.a)(["query GetLang {\n                languages {\n                    id\n                    name\n                }\n            }\n            "]);return d=function(){return data},data}function _(){var data=Object(l.a)(["query GetGenres {\n                genres {\n                    id\n                    name\n                }\n            }\n            "]);return _=function(){return data},data}var f={apollo:{genres:{query:c()(_())},languages:{query:c()(d())}},components:{resultNotFound:h.a},data:function(){return{movies:[],genres:[],languages:[],Qualities:[],audiences:[],years:[],Filter_genres:[],Filter_languages:[],Filter_Qualities:[],Filter_audiences:[],Filter_years:[],Filter_years_Start:"1000",Filter_years_End:"5000",DataChange:1}},methods:{PushMov:function(e){if(this.movies.length!=e.length)for(var i=0;i<e.length;i++)this.movies.includes(e[i])||this.movies.push(e[i]);this.GenreRest(),this.languagesRest(),this.QualitiesRest(),this.AudienceRest(),this.YearsRest(),this.$emit("update:filtersUpdate",this.$data)},ChangeGenre:function(e){this.Filter_genres=e.target.value,this.$emit("update:genChange",this.Filter_genres),0==e.target.value&&this.GenreRest()},ChangeLang:function(e){this.Filter_languages=e.target.value,this.$emit("update:LangChange",this.Filter_languages),0==e.target.value&&this.languagesRest()},ChangeQuality:function(e){this.Filter_Qualities=e.target.value,this.$emit("update:QualityChange",this.Filter_Qualities),0==e.target.value&&this.QualitiesRest()},ChangeAudience:function(e){this.Filter_audiences=e.target.value,this.$emit("update:AudienceChange",this.Filter_audiences),0==e.target.value&&this.AudienceRest()},ChangeYear:function(e){this.Filter_years=e.target.value,1e3==this.Filter_years?(this.Filter_years_Start="1000",this.Filter_years_End="5000"):(this.Filter_years_Start=this.Filter_years+"-01-01T00:00:00.000Z",this.Filter_years_End=this.Filter_years+"-12-31T00:00:00.000Z"),this.$emit("update:YearStartChange",this.Filter_years_Start),this.$emit("update:YearEndChange",this.Filter_years_End)},getReleaseYear:function(e){return e=new Date(e).getFullYear()},YearsRest:function(){this.Filter_years=[],this.Filter_years_Start="1000-01-01T00:00:00.000Z",this.Filter_years_End="5000-12-31T00:00:00.000Z";for(var i=0;i<this.movies.length;i++)this.years.includes(this.getReleaseYear(this.movies[i].releaseDate))||this.years.push(this.getReleaseYear(this.movies[i].releaseDate))},QualitiesRest:function(){this.Filter_Qualities=[];for(var i=0;i<this.movies.length;i++){var e=(""+this.movies[i].movieQuality).replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,"");this.Qualities.includes(e)||(this.Qualities.push(e),this.Filter_Qualities=this.Qualities)}this.$emit("update:QualityChange",this.Qualities)},AudienceRest:function(){this.Filter_audiences=[];for(var i=0;i<this.movies.length;i++)this.audiences.includes(this.movies[i].audience)||(this.audiences.push(this.movies[i].audience),this.Filter_audiences=this.audiences);this.$emit("update:AudienceChange",this.audiences)},GenreRest:function(){this.Filter_genres=[];for(var i=0;i<this.genres.length;i++)this.Filter_genres.push(this.genres[i].name);this.$emit("update:genChange",this.Filter_genres)},languagesRest:function(){this.Filter_languages=[];for(var i=0;i<this.languages.length;i++)this.Filter_languages.push(this.languages[i].name);this.$emit("update:LangChange",this.Filter_languages)}},mounted:function(){this.GenreRest(),this.languagesRest(),this.QualitiesRest(),this.AudienceRest(),this.YearsRest(),this.$emit("update:filtersUpdate",this.$data)}},v=n(16),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",{staticClass:"filters"},[l("ApolloQuery",{staticStyle:{display:"none"},attrs:{query:function(e){return e(r)}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.result,o=r.loading,c=r.error,data=r.data;return[o?l("div",{staticClass:"loading apollo"},[l("img",{staticClass:"svg-load",attrs:{src:n(168),height:"32px",width:"32px"}})]):c?l("div",{staticClass:"error apollo"},[l("resultNotFound")],1):data&&data.movies.length>0&&e.movies.length!=data.movies.length?l("div",{staticClass:"Slider-block"},[e._v("\n                    "+e._s(e.PushMov(data.movies))+"\n                  ")]):l("div",{staticClass:"no-result apollo"},[l("resultNotFound")],1)]}}])}),e._v(" "),e.genres.length>0?l("li",[l("select",{staticClass:"custom-select",on:{change:e.ChangeGenre}},[l("option",{attrs:{value:"0",selected:""}},[e._v("اختر النوع")]),e._v(" "),e._l(e.genres,(function(t){return l("option",{key:t.id,domProps:{value:t.name}},[e._v(e._s(t.name))])}))],2)]):e._e(),e._v(" "),e.languages.length>0?l("li",[l("select",{staticClass:"custom-select",on:{change:e.ChangeLang}},[l("option",{attrs:{value:"0",selected:""}},[e._v("اختر اللغة")]),e._v(" "),e._l(e.languages,(function(t){return l("option",{key:t.id,domProps:{value:t.name}},[e._v(e._s(t.name))])}))],2)]):e._e(),e._v(" "),e.Qualities.length>0?l("li",[l("select",{staticClass:"custom-select",on:{change:e.ChangeQuality}},[l("option",{attrs:{value:"0",selected:""}},[e._v("اختر الجودة")]),e._v(" "),e._l(e.Qualities,(function(t){return l("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2)]):e._e(),e._v(" "),e.audiences.length>0?l("li",[l("select",{staticClass:"custom-select",on:{change:e.ChangeAudience}},[l("option",{attrs:{value:"0",selected:""}},[e._v("اختر الجمهور")]),e._v(" "),e._l(e.audiences,(function(t){return l("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2)]):e._e(),e._v(" "),e.years.length>0?l("li",[l("select",{staticClass:"custom-select",on:{change:e.ChangeYear}},[l("option",{attrs:{value:"1000",selected:""}},[e._v("اختر السنة")]),e._v(" "),e._l(e.years,(function(t){return l("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2)]):e._e()],1)}),[],!1,null,null,null);t.a=component.exports},357:function(e,t,n){var content=n(522);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(29).default)("04b3c994",content,!0,{sourceMap:!1})},521:function(e,t,n){"use strict";var r=n(357);n.n(r).a},522:function(e,t,n){(t=n(28)(!1)).push([e.i,"",""]),e.exports=t},590:function(e,t,n){"use strict";n.r(t);var r=Object.freeze(["\n                      query GetMovies($items: Int , $Filter_languages: [String!], $Filter_years_Start: DateTime!, $Filter_years_End: DateTime!,\n                      $Filter_audiences: [Audience!], $Filter_Qualities:[MovieQuality!], $Filter_genres:[String!]) {\n                      movies(orderBy: createdAt_DESC, first: $items, \n                      where :{ isPublished: true, Production:NETFLIX, lang: { name_in:$Filter_languages }, audience_in: $Filter_audiences , movieQuality_in:$Filter_Qualities, genres_some:{name_in:$Filter_genres}\n                       AND: {\n                          releaseDate_gte: $Filter_years_Start\n                          releaseDate_lte: $Filter_years_End\n                        }}) {\n                        id\n                        title\n                        posters {\n                          size\n                          path\n                        }\n                        audience\n                        trailerPath\n                        movieQuality\n                        releaseDate\n                        imdbId\n                        videoQualities\n                        runtime\n                        genres {\n                        id\n                          name\n                        }\n                        watchCount\n                      }\n                    }\n                    "]),l=n(121),o=n(279),c=n(297),h=(n(46),{head:function(){return{title:"افلام NetFlix -  اتفرج اون لاين Atfrg.Online",meta:[{hid:"description",name:"description",content:"مشاهدة وتحميل افلام NetFlix  مترجم اون لاين بجودة عالية - اتفرج اون لاين Atfrg.Online"},{hid:"keywords",name:"keywords",content:"مشاهدة فيلم,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى, افلام NetFlix  , تحميل افلام , مشاهدة افلام بجودة عالية , مشاهدة انمي اون لاين, تحميل موسم برابط واحد , مشاهدة بدون اعلانات , تحميل مباشر  , افلام جديدة"},{property:"og:title",content:"افلام NetFlix -  اتفرج اون لاين Atfrg.Online"},{property:"og:description",content:"مشاهدة افلام NetFlix مترجم اون لاين بجودة عالية - اتفرج اون لاين Atfrg.Online"},{property:"og:image",content:"https://d1qmdf3vop2l07.cloudfront.net/vital-slipper.cloudvent.net/compressed/_min_/4ce4e6669edb5602a6b38f77eca90b8b.svg"}]}},data:function(){return{items:12,filtersUpdate:[],Filter_languages:[],Filter_Qualities:[],Filter_audiences:[],Filter_years:[],Filter_years_Start:"1000",Filter_years_End:"5000",Filter_genres:[],genChange:[],LangChange:[],QualityChange:[],AudienceChange:[],YearStartChange:"",YearEndChange:""}},components:{resultNotFound:l.a,TrailerItem:o.a,filters:c.a},methods:{scroll:function(){var e=this;window.onscroll=function(){window.pageYOffset+window.innerHeight+1>=document.documentElement.offsetHeight&&(e.items+=6)}}},mounted:function(){this.scroll()},watch:{filtersUpdate:function(){this.Filter_genres=this.filtersUpdate.Filter_genres,this.Filter_languages=this.filtersUpdate.Filter_languages,this.Filter_Qualities=this.filtersUpdate.Filter_Qualities,this.Filter_audiences=this.filtersUpdate.Filter_audiences,this.Filter_years=this.filtersUpdate.Filter_years,this.Filter_years_Start=this.filtersUpdate.Filter_years_Start,this.Filter_years_End=this.filtersUpdate.Filter_years_End},genChange:function(){this.Filter_genres=this.genChange},LangChange:function(){this.Filter_languages=this.LangChange},QualityChange:function(){this.Filter_Qualities=this.QualityChange},AudienceChange:function(){this.Filter_audiences=this.AudienceChange},YearStartChange:function(){this.Filter_years_Start=this.YearStartChange},YearEndChange:function(){this.Filter_years_End=this.YearEndChange}}}),d=(n(521),n(16)),component=Object(d.a)(h,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"movies-genre"},[l("div",{staticClass:"container-fluid"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("filters",{attrs:{filtersUpdate:e.filtersUpdate,genChange:e.genChange,LangChange:e.LangChange,QualityChange:e.QualityChange,AudienceChange:e.AudienceChange,YearStartChange:e.YearStartChange,YearEndChange:e.YearEndChange},on:{"update:filtersUpdate":function(t){e.filtersUpdate=t},"update:filters-update":function(t){e.filtersUpdate=t},"update:genChange":function(t){e.genChange=t},"update:gen-change":function(t){e.genChange=t},"update:LangChange":function(t){e.LangChange=t},"update:lang-change":function(t){e.LangChange=t},"update:QualityChange":function(t){e.QualityChange=t},"update:quality-change":function(t){e.QualityChange=t},"update:AudienceChange":function(t){e.AudienceChange=t},"update:audience-change":function(t){e.AudienceChange=t},"update:YearStartChange":function(t){e.YearStartChange=t},"update:year-start-change":function(t){e.YearStartChange=t},"update:YearEndChange":function(t){e.YearEndChange=t},"update:year-end-change":function(t){e.YearEndChange=t}}})],1)]),e._v(" "),l("ApolloQuery",{attrs:{query:function(e){return e(r)},variables:{items:e.items,Filter_languages:e.Filter_languages,Filter_years_Start:e.Filter_years_Start,Filter_years_End:e.Filter_years_End,Filter_audiences:e.Filter_audiences,Filter_Qualities:e.Filter_Qualities,Filter_genres:e.Filter_genres}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.result,o=r.loading,c=r.error,data=r.data;return[o?l("div",{staticClass:"loading apollo"},[l("img",{staticClass:"svg-load",attrs:{src:n(168),height:"32px",width:"32px"}})]):c?l("div",{staticClass:"error apollo"},[l("resultNotFound")],1):data&&data.movies.length>0?l("div",{staticClass:"row global-items"},e._l(data.movies,(function(e){return l("div",{key:e.id,staticClass:"col-xl-2 col-lg-3 col-md-3 col-6 global-item"},[l("TrailerItem",{attrs:{id:e.id,title:e.title,quality:e.movieQuality,poster:e.posters,imdbId:e.imdbId,trailer:e.trailerPath,genres:e.genres,watchCount:e.watchCount,audience:e.audience,videoQualities:e.videoQualities[0],runtime:e.runtime,run:!1}})],1)})),0):l("div",{staticClass:"no-result apollo"},[l("resultNotFound")],1)]}}])})],1)])}),[],!1,null,null,null);t.default=component.exports}}]);