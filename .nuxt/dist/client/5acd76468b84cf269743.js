(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{273:function(e,t,n){"use strict";(function(e){n(13),n(28),n(29),n(3),n(14),n(57),n(58);t.a={data:function(){return{seasonCount:1,films:[]}},methods:{handleSearch:function(){var e=this;this.films=[],fetch("https://www.omdbapi.com/?i="+this.$props.seasons[0].imdbId+"&apikey=bf7293bf").then((function(e){return e.json()})).then((function(t){e.films=t}))},GetSlide:function(e){var t=e;return t.includes("cdn.atfrg")&&(t=this.LinkToken(t)),t},LinkToken:function(path){path=path.replace(/^\s+/g,"");var t=n(272),r=path.substring(24,path.length),l=Math.round(Date.now()/1e3)+43200,o="6ecb7c25-9744-498a-a49b-ae4c7980c861"+r+l,c=t.createHash("md5").update(o).digest("binary"),h=new e(c,"binary").toString("base64");return"https://Atfrgimages.b-cdn.net"+r+"?token="+(h=h.replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,""))+"&expires="+l},getaudience:function(e){return e+" - "+("G"==e?"للمشاهدة العامة, مناسب لجميع الاعمار.":"PG"==e?"ينصح بإرشاد الآباء, بعض المشاهد ربما لا تناسب الاطفال.":"PG13"==e?"يجب إرشاد الآباء, لا يناسب الأطفال أقل من 13 سنة.":"R"==e?"للكبار فقط , يحتوى على مشاهد فاضحة او عنيفة.":"NC17"==e?" لا يصلح لمن هما اقل من 17 عاما , يحتوى على مشاهد فاضحة او عنيفة":"غير مصنف")},runTimeCalc:function(e){return function(e){e=Number(e);var t=Math.floor(e/3600),n=Math.floor(e%3600/60),s=Math.floor(e%3600%60);return(t>0?t+" ساعة, ":"")+(n>0?n+" دقيقة, ":"")+(s>0?s+" ثانية":"")}(e)},seassonCount:function(e){var t=1;if(null!=e)for(var i=1;i<e.length;i++)t++;return t}},props:{id:String,title:String,quality:String,poster:String,genres:Array,seasons:Array,audience:String,path:String},mounted:function(){this.handleSearch()}}}).call(this,n(271).Buffer)},274:function(e,t,n){var content=n(286);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("71c6165e",content,!0,{sourceMap:!1})},279:function(e,t,n){"use strict";var r=n(273).a,l=(n(285),n(21)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nuxt-link",{attrs:{to:e.path+e.title}},[n("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img",loading:"/load.svg"},expression:"{ selector: 'img', loading: '/load.svg' }"}],staticClass:"item-slide"},[n("div",{staticClass:"poster"},[n("span",{staticClass:"views"},[e._v("\r\n                "+e._s(e.seassonCount(e.seasons))+"\r\n                "),n("i",{staticClass:"fas fa-video"})]),e._v(" "),n("img",{attrs:{"data-src":e.GetSlide(e.poster),alt:e.title}})]),e._v(" "),n("div",{staticClass:"overlay"},[n("div",{staticClass:"information"},[n("h3",{staticClass:"name"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"subinfo-block"},[n("span",{staticClass:"audience"},[e._v(e._s(e.getaudience(e.audience))+"\r\n                            ")]),e._v(" "),n("div",{staticClass:"genres"},e._l(e.genres,(function(t){return n("i",{key:t.id},[e._v(" "+e._s(t.name)+" ")])})),0)])])])])])}),[],!1,null,"26e331ae",null);t.a=component.exports},280:function(e,t){},281:function(e,t){},282:function(e,t){},283:function(e,t){},285:function(e,t,n){"use strict";var r=n(274);n.n(r).a},286:function(e,t,n){(t=n(31)(!1)).push([e.i,"",""]),e.exports=t},287:function(e,t,n){"use strict";var r=Object.freeze(["\n                      query gettvSerieses {\n                      tvSerieses(orderBy: createdAt_DESC,  where :{ isPublished: true}) {\n                        id\n                        audience\n                        releaseDate\n                      }\n                    }\n                    "]),l=(n(15),n(57),n(58),n(97)),o=n(46),c=n.n(o),h=n(120);function d(){var data=Object(l.a)(["query GetLang {\n                languages {\n                    id\n                    name\n                }\n            }\n            "]);return d=function(){return data},data}function _(){var data=Object(l.a)(["query GetGenres {\n                genres {\n                    id\n                    name\n                }\n            }\n            "]);return _=function(){return data},data}var f={apollo:{genres:{query:c()(_())},languages:{query:c()(d())}},components:{resultNotFound:h.a},data:function(){return{serieses:[],genres:[],languages:[],audiences:[],years:[],Filter_genres:[],Filter_languages:[],Filter_audiences:[],Filter_years:[],Filter_years_Start:"1000",Filter_years_End:"5000",DataChange:1}},methods:{PushSer:function(e){if(this.serieses.length!=e.length)for(var i=0;i<e.length;i++)this.serieses.includes(e[i])||this.serieses.push(e[i]);this.GenreRest(),this.languagesRest(),this.AudienceRest(),this.YearsRest(),this.$emit("update:filtersUpdate",this.$data)},ChangeGenre:function(e){this.Filter_genres=e.target.value,this.$emit("update:genChange",this.Filter_genres),0==e.target.value&&this.GenreRest()},ChangeLang:function(e){this.Filter_languages=e.target.value,this.$emit("update:LangChange",this.Filter_languages),0==e.target.value&&this.languagesRest()},ChangeAudience:function(e){this.Filter_audiences=e.target.value,this.$emit("update:AudienceChange",this.Filter_audiences),0==e.target.value&&this.AudienceRest()},ChangeYear:function(e){this.Filter_years=e.target.value,1e3==this.Filter_years?(this.Filter_years_Start="1000",this.Filter_years_End="5000"):(this.Filter_years_Start=this.Filter_years+"-01-01T00:00:00.000Z",this.Filter_years_End=this.Filter_years+"-12-31T00:00:00.000Z"),this.$emit("update:YearStartChange",this.Filter_years_Start),this.$emit("update:YearEndChange",this.Filter_years_End)},getReleaseYear:function(e){return e=new Date(e).getFullYear()},YearsRest:function(){this.Filter_years=[],this.Filter_years_Start="1000-01-01T00:00:00.000Z",this.Filter_years_End="5000-12-31T00:00:00.000Z";for(var i=0;i<this.serieses.length;i++)this.years.includes(this.getReleaseYear(this.serieses[i].releaseDate))||this.years.push(this.getReleaseYear(this.serieses[i].releaseDate))},AudienceRest:function(){this.Filter_audiences=[];for(var i=0;i<this.serieses.length;i++)this.audiences.includes(this.serieses[i].audience)||(this.audiences.push(this.serieses[i].audience),this.Filter_audiences=this.audiences);this.$emit("update:AudienceChange",this.audiences)},GenreRest:function(){this.Filter_genres=[];for(var i=0;i<this.genres.length;i++)this.Filter_genres.push(this.genres[i].name);this.$emit("update:genChange",this.Filter_genres)},languagesRest:function(){this.Filter_languages=[];for(var i=0;i<this.languages.length;i++)this.Filter_languages.push(this.languages[i].name);this.$emit("update:LangChange",this.Filter_languages)}},mounted:function(){this.GenreRest(),this.languagesRest(),this.AudienceRest(),this.YearsRest(),this.$emit("update:filtersUpdate",this.$data)}},v=n(21),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",{staticClass:"filters"},[l("ApolloQuery",{staticStyle:{display:"none"},attrs:{query:function(e){return e(r)}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.result,o=r.loading,c=r.error,data=r.data;return[o?l("div",{staticClass:"loading apollo"},[l("img",{staticClass:"svg-load",attrs:{src:n(167),height:"32px",width:"32px"}})]):c?l("div",{staticClass:"error apollo"},[l("resultNotFound")],1):data&&data.tvSerieses.length>0&&e.serieses.length!=data.tvSerieses.length?l("div",{staticClass:"Slider-block"},[e._v("\r\n                    "+e._s(e.PushSer(data.tvSerieses))+"\r\n                  ")]):l("div",{staticClass:"no-result apollo"},[l("resultNotFound")],1)]}}])}),e._v(" "),e.genres.length>0?l("li",[l("select",{staticClass:"custom-select",on:{change:e.ChangeGenre}},[l("option",{attrs:{value:"0",selected:""}},[e._v("اختر النوع")]),e._v(" "),e._l(e.genres,(function(t){return l("option",{key:t.id,domProps:{value:t.name}},[e._v(e._s(t.name))])}))],2)]):e._e(),e._v(" "),e.languages.length>0?l("li",[l("select",{staticClass:"custom-select",on:{change:e.ChangeLang}},[l("option",{attrs:{value:"0",selected:""}},[e._v("اختر اللغة")]),e._v(" "),e._l(e.languages,(function(t){return l("option",{key:t.id,domProps:{value:t.name}},[e._v(e._s(t.name))])}))],2)]):e._e(),e._v(" "),e.audiences.length>0?l("li",[l("select",{staticClass:"custom-select",on:{change:e.ChangeAudience}},[l("option",{attrs:{value:"0",selected:""}},[e._v("اختر الجمهور")]),e._v(" "),e._l(e.audiences,(function(t){return l("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2)]):e._e(),e._v(" "),e.years.length>0?l("li",[l("select",{staticClass:"custom-select",on:{change:e.ChangeYear}},[l("option",{attrs:{value:"1000",selected:""}},[e._v("اختر السنة")]),e._v(" "),e._l(e.years,(function(t){return l("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2)]):e._e()],1)}),[],!1,null,null,null);t.a=component.exports},348:function(e,t,n){var content=n(515);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("2f056029",content,!0,{sourceMap:!1})},514:function(e,t,n){"use strict";var r=n(348);n.n(r).a},515:function(e,t,n){(t=n(31)(!1)).push([e.i,"",""]),e.exports=t},581:function(e,t,n){"use strict";n.r(t);var r=Object.freeze(["\n                      query GettvSerieses($items: Int , $Filter_languages: [String!], $Filter_years_Start: DateTime!, $Filter_years_End: DateTime!,\n                      $Filter_audiences: [Audience!], $Filter_genres:[String!]) {\n                      tvSerieses(orderBy: updatedAt_DESC, first: $items, \n                      where :{ isPublished: true, seriesType:TV, lang: { name_in:$Filter_languages }, audience_in: $Filter_audiences , genres_some:{name_in:$Filter_genres}\n                       AND: {\n                          releaseDate_gte: $Filter_years_Start\n                          releaseDate_lte: $Filter_years_End\n                        }}) {\n                        id\n                        title\n                        releaseDate\n                        posters {\n                          size\n                          path\n                        }\n                        audience\n                        genres {\n                        id\n                        name\n                        }\n                        seasons {\n                          id\n                        }\n                      }\n                    }\n                    "]),l=n(120),o=n(279),c=n(287),h=(n(46),{head:{title:"مشاهدة وتحميل افلام مترجمة مجانا - اتفرج اون لاين مشاهدة افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online ",meta:[{name:"description",content:"مشاهدة وتحميل مباشر افلام و مسلسلات وانمي بجودة عالية مترجمة - اتفرج اون لاين - بدون اعلانات"},{name:"keywords",content:"مشاهدة مسلسل ,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى, فيلم , تحميل افلام , مشاهدة افلام بجودة عالية , مشاهدة انمي اون لاين, تحميل موسم برابط واحد , مشاهدة بدون اعلانات , تحميل مباشر  , افلام جديدة , مسلسل "}]},data:function(){return{items:12,filtersUpdate:[],Filter_languages:[],Filter_audiences:[],Filter_years:[],Filter_years_Start:"1000",Filter_years_End:"5000",Filter_genres:[],genChange:[],LangChange:[],AudienceChange:[],YearStartChange:"",YearEndChange:""}},components:{resultNotFound:l.a,SeriesItem:o.a,filters:c.a},methods:{scroll:function(){var e=this;window.onscroll=function(){window.pageYOffset+window.innerHeight+1>=document.documentElement.offsetHeight&&(e.items+=6)}},GetPoster:function(e){var i,path="";for(i=0;i<e.length;i++)"THUMBNAIL"==e[i].size&&(path=e[i].path);return path}},mounted:function(){this.scroll()},watch:{filtersUpdate:function(){this.Filter_genres=this.filtersUpdate.Filter_genres,this.Filter_languages=this.filtersUpdate.Filter_languages,this.Filter_audiences=this.filtersUpdate.Filter_audiences,this.Filter_years=this.filtersUpdate.Filter_years,this.Filter_years_Start=this.filtersUpdate.Filter_years_Start,this.Filter_years_End=this.filtersUpdate.Filter_years_End},genChange:function(){this.Filter_genres=this.genChange},LangChange:function(){this.Filter_languages=this.LangChange},AudienceChange:function(){this.Filter_audiences=this.AudienceChange},YearStartChange:function(){this.Filter_years_Start=this.YearStartChange},YearEndChange:function(){this.Filter_years_End=this.YearEndChange}}}),d=(n(514),n(21)),component=Object(d.a)(h,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"movies-genre"},[l("div",{staticClass:"container-fluid"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("filters",{attrs:{filtersUpdate:e.filtersUpdate,genChange:e.genChange,LangChange:e.LangChange,AudienceChange:e.AudienceChange,YearStartChange:e.YearStartChange,YearEndChange:e.YearEndChange},on:{"update:filtersUpdate":function(t){e.filtersUpdate=t},"update:filters-update":function(t){e.filtersUpdate=t},"update:genChange":function(t){e.genChange=t},"update:gen-change":function(t){e.genChange=t},"update:LangChange":function(t){e.LangChange=t},"update:lang-change":function(t){e.LangChange=t},"update:AudienceChange":function(t){e.AudienceChange=t},"update:audience-change":function(t){e.AudienceChange=t},"update:YearStartChange":function(t){e.YearStartChange=t},"update:year-start-change":function(t){e.YearStartChange=t},"update:YearEndChange":function(t){e.YearEndChange=t},"update:year-end-change":function(t){e.YearEndChange=t}}})],1)]),e._v(" "),l("ApolloQuery",{attrs:{query:function(e){return e(r)},variables:{items:e.items,Filter_languages:e.Filter_languages,Filter_years_Start:e.Filter_years_Start,Filter_years_End:e.Filter_years_End,Filter_audiences:e.Filter_audiences,Filter_genres:e.Filter_genres}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.result,o=r.loading,c=r.error,data=r.data;return[o?l("div",{staticClass:"loading apollo"},[l("img",{staticClass:"svg-load",attrs:{src:n(167),height:"32px",width:"32px"}})]):c?l("div",{staticClass:"error apollo"},[l("resultNotFound")],1):data&&data.tvSerieses.length>0?l("div",{staticClass:"row global-items"},e._l(data.tvSerieses,(function(t){return l("div",{key:t.id,staticClass:"col-xl-2 col-lg-3 col-md-3 col-6 global-item"},[l("SeriesItem",{attrs:{id:t.id,title:t.title,poster:e.GetPoster(t.posters),genres:t.genres,audience:t.audience,seasons:t.seasons,path:"/series/"}})],1)})),0):l("div",{staticClass:"no-result apollo"},[l("resultNotFound")],1)]}}])})],1)])}),[],!1,null,null,null);t.default=component.exports}}]);