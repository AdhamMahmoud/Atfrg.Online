exports.ids=[5],exports.modules={121:function(e,t,n){var content=n(164);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=n(3).default;e.exports.__inject__=function(e){r("31d3b6ca",content,!0,e)}},163:function(e,t,n){"use strict";n.r(t);var r=n(121),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=l.a},164:function(e,t,n){(t=n(2)(!1)).push([e.i,"",""]),e.exports=t},235:function(e,t,n){"use strict";n.r(t);var r=Object.freeze(["\n                      query GettvSerieses($items: Int , $Filter_languages: [String!], $Filter_years_Start: DateTime!, $Filter_years_End: DateTime!,\n                      $Filter_audiences: [Audience!], $Filter_genres:[String!]) {\n                      tvSerieses(orderBy: releaseDate_DESC, first: $items, \n                      where :{ isPublished: true, seriesType:ANIME, lang: { name_in:$Filter_languages }, audience_in: $Filter_audiences , genres_some:{name_in:$Filter_genres}\n                       AND: {\n                          releaseDate_gte: $Filter_years_Start\n                          releaseDate_lte: $Filter_years_End\n                        }}) {\n                        id\n                        title\n                        releaseDate\n                        posters {\n                          size\n                          path\n                        }\n                        audience\n                        genres {\n                        id\n                        name\n                        }\n                        seasons {\n                          id\n                        }\n                      }\n                    }\n                    "]),l=n(21),o=n(86),c=n(95),d=(n(15),{head:{title:"مشاهدة وتحميل انمي مترجمة مجانا - اتفرج اون لاين مشاهدة افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online ",meta:[{name:"description",content:"مشاهدة وتحميل مباشر افلام و مسلسلات وانمي بجودة عالية مترجمة - اتفرج اون لاين - بدون اعلانات"},{name:"keywords",content:"مشاهدة مسلسل ,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى, فيلم , تحميل افلام , مشاهدة افلام بجودة عالية , مشاهدة انمي اون لاين, تحميل موسم برابط واحد , مشاهدة بدون اعلانات , تحميل مباشر  , افلام جديدة , مسلسل "}]},data:function(){return{items:12,filtersUpdate:[],Filter_languages:[],Filter_audiences:[],Filter_years:[],Filter_years_Start:"1000",Filter_years_End:"5000",Filter_genres:[],genChange:[],LangChange:[],AudienceChange:[],YearStartChange:"",YearEndChange:""}},components:{resultNotFound:l.a,SeriesItem:o.a,filters:c.a},methods:{scroll(){window.onscroll=()=>{window.pageYOffset+window.innerHeight+1>=document.documentElement.offsetHeight&&(this.items+=6)}},GetPoster(e){var i,path="";for(i=0;i<e.length;i++)"THUMBNAIL"==e[i].size&&(path=e[i].path);return path}},mounted(){this.scroll()},watch:{filtersUpdate:function(){this.Filter_genres=this.filtersUpdate.Filter_genres,this.Filter_languages=this.filtersUpdate.Filter_languages,this.Filter_audiences=this.filtersUpdate.Filter_audiences,this.Filter_years=this.filtersUpdate.Filter_years,this.Filter_years_Start=this.filtersUpdate.Filter_years_Start,this.Filter_years_End=this.filtersUpdate.Filter_years_End},genChange:function(){this.Filter_genres=this.genChange},LangChange:function(){this.Filter_languages=this.LangChange},AudienceChange:function(){this.Filter_audiences=this.AudienceChange},YearStartChange:function(){this.Filter_years_Start=this.YearStartChange},YearEndChange:function(){this.Filter_years_End=this.YearEndChange}}}),h=n(1);var component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"movies-genre"},[e._ssrNode('<div class="container-fluid">',"</div>",[e._ssrNode('<div class="row">',"</div>",[e._ssrNode('<div class="col-12">',"</div>",[l("filters",{attrs:{filtersUpdate:e.filtersUpdate,genChange:e.genChange,LangChange:e.LangChange,AudienceChange:e.AudienceChange,YearStartChange:e.YearStartChange,YearEndChange:e.YearEndChange},on:{"update:filtersUpdate":function(t){e.filtersUpdate=t},"update:filters-update":function(t){e.filtersUpdate=t},"update:genChange":function(t){e.genChange=t},"update:gen-change":function(t){e.genChange=t},"update:LangChange":function(t){e.LangChange=t},"update:lang-change":function(t){e.LangChange=t},"update:AudienceChange":function(t){e.AudienceChange=t},"update:audience-change":function(t){e.AudienceChange=t},"update:YearStartChange":function(t){e.YearStartChange=t},"update:year-start-change":function(t){e.YearStartChange=t},"update:YearEndChange":function(t){e.YearEndChange=t},"update:year-end-change":function(t){e.YearEndChange=t}}})],1)]),e._ssrNode(" "),l("ApolloQuery",{attrs:{query:function(e){return e(r)},variables:{items:e.items,Filter_languages:e.Filter_languages,Filter_years_Start:e.Filter_years_Start,Filter_years_End:e.Filter_years_End,Filter_audiences:e.Filter_audiences,Filter_genres:e.Filter_genres}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.result,o=r.loading,c=r.error,data=r.data;return[o?l("div",{staticClass:"loading apollo"},[l("img",{staticClass:"svg-load",attrs:{src:n(29),height:"32px",width:"32px"}})]):c?l("div",{staticClass:"error apollo"},[l("resultNotFound")],1):data&&data.tvSerieses.length>0?l("div",{staticClass:"row global-items"},e._l(data.tvSerieses,(function(t){return l("div",{key:t.id,staticClass:"col-xl-2 col-lg-3 col-md-3 col-6 global-item"},[l("SeriesItem",{attrs:{id:t.id,title:t.title,poster:e.GetPoster(t.posters),genres:t.genres,audience:t.audience,seasons:t.seasons,path:"/series/"}})],1)})),0):l("div",{staticClass:"no-result apollo"},[l("resultNotFound")],1)]}}])})],2)])}),[],!1,(function(e){var t=n(163);t.__inject__&&t.__inject__(e)}),null,"1e75f3c4");t.default=component.exports},84:function(e,t,n){var content=n(90);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=n(3).default;e.exports.__inject__=function(e){r("71c6165e",content,!0,e)}},86:function(e,t,n){"use strict";var r={data:function(){return{seasonCount:1,films:[]}},methods:{handleSearch(){this.films=[],fetch("https://www.omdbapi.com/?i="+this.$props.seasons[0].imdbId+"&apikey=bf7293bf").then(e=>e.json()).then(e=>{this.films=e})},GetSlide(e){var t=e;return t.includes("cdn.atfrg")&&(t=this.LinkToken(t)),t},LinkToken(path){path=path.replace(/^\s+/g,"");var e=n(79),t=path.substring(24,path.length),r=Math.round(Date.now()/1e3)+43200,l="6ecb7c25-9744-498a-a49b-ae4c7980c861"+t+r,o=e.createHash("md5").update(l).digest("binary"),c=new Buffer(o,"binary").toString("base64");return"https://Atfrgimages.b-cdn.net"+t+"?token="+(c=c.replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,""))+"&expires="+r},getaudience:e=>e+" - "+("G"==e?"للمشاهدة العامة, مناسب لجميع الاعمار.":"PG"==e?"ينصح بإرشاد الآباء, بعض المشاهد ربما لا تناسب الاطفال.":"PG13"==e?"يجب إرشاد الآباء, لا يناسب الأطفال أقل من 13 سنة.":"R"==e?"للكبار فقط , يحتوى على مشاهد فاضحة او عنيفة.":"NC17"==e?" لا يصلح لمن هما اقل من 17 عاما , يحتوى على مشاهد فاضحة او عنيفة":"غير مصنف"),runTimeCalc:e=>function(e){e=Number(e);var t=Math.floor(e/3600),n=Math.floor(e%3600/60),s=Math.floor(e%3600%60);return(t>0?t+" ساعة, ":"")+(n>0?n+" دقيقة, ":"")+(s>0?s+" ثانية":"")}(e),seassonCount(e){var t=1;if(null!=e)for(var i=1;i<e.length;i++)t++;return t}},props:{id:String,title:String,quality:String,poster:String,genres:Array,seasons:Array,audience:String,path:String},mounted(){this.handleSearch()}},l=n(1);var component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nuxt-link",{attrs:{to:e.path+e.title}},[n("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img",loading:"/load.svg"},expression:"{ selector: 'img', loading: '/load.svg' }"}],staticClass:"item-slide"},[n("div",{staticClass:"poster"},[n("span",{staticClass:"views"},[e._v("\r\n                "+e._s(e.seassonCount(e.seasons))+"\r\n                "),n("i",{staticClass:"fas fa-video"})]),e._v(" "),n("img",{attrs:{"data-src":e.GetSlide(e.poster),alt:e.title}})]),e._v(" "),n("div",{staticClass:"overlay"},[n("div",{staticClass:"information"},[n("h3",{staticClass:"name"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"subinfo-block"},[n("span",{staticClass:"audience"},[e._v(e._s(e.getaudience(e.audience))+"\r\n                            ")]),e._v(" "),n("div",{staticClass:"genres"},e._l(e.genres,(function(t){return n("i",{key:t.id},[e._v(" "+e._s(t.name)+" ")])})),0)])])])])])}),[],!1,(function(e){var t=n(89);t.__inject__&&t.__inject__(e)}),"26e331ae","ee4f84d8");t.a=component.exports},89:function(e,t,n){"use strict";n.r(t);var r=n(84),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=l.a},90:function(e,t,n){(t=n(2)(!1)).push([e.i,"",""]),e.exports=t},95:function(e,t,n){"use strict";var r=Object.freeze(["\n                      query gettvSerieses {\n                      tvSerieses(orderBy: createdAt_DESC,  where :{ isPublished: true}) {\n                        id\n                        audience\n                        releaseDate\n                      }\n                    }\n                    "]),l=n(15),o=n.n(l),c=n(21),d={apollo:{genres:{query:o.a`query GetGenres {
                genres {
                    id
                    name
                }
            }
            `},languages:{query:o.a`query GetLang {
                languages {
                    id
                    name
                }
            }
            `}},components:{resultNotFound:c.a},data:function(){return{serieses:[],genres:[],languages:[],audiences:[],years:[],Filter_genres:[],Filter_languages:[],Filter_audiences:[],Filter_years:[],Filter_years_Start:"1000",Filter_years_End:"5000",DataChange:1}},methods:{PushSer(e){if(this.serieses.length!=e.length)for(var i=0;i<e.length;i++)this.serieses.includes(e[i])||this.serieses.push(e[i]);this.GenreRest(),this.languagesRest(),this.AudienceRest(),this.YearsRest(),this.$emit("update:filtersUpdate",this.$data)},ChangeGenre(e){this.Filter_genres=e.target.value,this.$emit("update:genChange",this.Filter_genres),0==e.target.value&&this.GenreRest()},ChangeLang(e){this.Filter_languages=e.target.value,this.$emit("update:LangChange",this.Filter_languages),0==e.target.value&&this.languagesRest()},ChangeAudience(e){this.Filter_audiences=e.target.value,this.$emit("update:AudienceChange",this.Filter_audiences),0==e.target.value&&this.AudienceRest()},ChangeYear(e){this.Filter_years=e.target.value,1e3==this.Filter_years?(this.Filter_years_Start="1000",this.Filter_years_End="5000"):(this.Filter_years_Start=this.Filter_years+"-01-01T00:00:00.000Z",this.Filter_years_End=this.Filter_years+"-12-31T00:00:00.000Z"),this.$emit("update:YearStartChange",this.Filter_years_Start),this.$emit("update:YearEndChange",this.Filter_years_End)},getReleaseYear:e=>e=new Date(e).getFullYear(),YearsRest(){this.Filter_years=[],this.Filter_years_Start="1000-01-01T00:00:00.000Z",this.Filter_years_End="5000-12-31T00:00:00.000Z";for(var i=0;i<this.serieses.length;i++)this.years.includes(this.getReleaseYear(this.serieses[i].releaseDate))||this.years.push(this.getReleaseYear(this.serieses[i].releaseDate))},AudienceRest(){this.Filter_audiences=[];for(var i=0;i<this.serieses.length;i++)this.audiences.includes(this.serieses[i].audience)||(this.audiences.push(this.serieses[i].audience),this.Filter_audiences=this.audiences);this.$emit("update:AudienceChange",this.audiences)},GenreRest(){this.Filter_genres=[];for(var i=0;i<this.genres.length;i++)this.Filter_genres.push(this.genres[i].name);this.$emit("update:genChange",this.Filter_genres)},languagesRest(){this.Filter_languages=[];for(var i=0;i<this.languages.length;i++)this.Filter_languages.push(this.languages[i].name);this.$emit("update:LangChange",this.Filter_languages)}},mounted(){this.GenreRest(),this.languagesRest(),this.AudienceRest(),this.YearsRest(),this.$emit("update:filtersUpdate",this.$data)}},h=n(1),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",{staticClass:"filters"},[l("ApolloQuery",{staticStyle:{display:"none"},attrs:{query:function(e){return e(r)}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.result,o=r.loading,c=r.error,data=r.data;return[o?l("div",{staticClass:"loading apollo"},[l("img",{staticClass:"svg-load",attrs:{src:n(29),height:"32px",width:"32px"}})]):c?l("div",{staticClass:"error apollo"},[l("resultNotFound")],1):data&&data.tvSerieses.length>0&&e.serieses.length!=data.tvSerieses.length?l("div",{staticClass:"Slider-block"},[e._v("\r\n                    "+e._s(e.PushSer(data.tvSerieses))+"\r\n                  ")]):l("div",{staticClass:"no-result apollo"},[l("resultNotFound")],1)]}}])}),e._ssrNode(" "+(e.genres.length>0?'<li><select class="custom-select"><option value="0" selected="selected">اختر النوع</option> '+e._ssrList(e.genres,(function(t){return"<option"+e._ssrAttr("value",t.name)+">"+e._ssrEscape(e._s(t.name))+"</option>"}))+"</select></li>":"\x3c!----\x3e")+" "+(e.languages.length>0?'<li><select class="custom-select"><option value="0" selected="selected">اختر اللغة</option> '+e._ssrList(e.languages,(function(t){return"<option"+e._ssrAttr("value",t.name)+">"+e._ssrEscape(e._s(t.name))+"</option>"}))+"</select></li>":"\x3c!----\x3e")+" "+(e.audiences.length>0?'<li><select class="custom-select"><option value="0" selected="selected">اختر الجمهور</option> '+e._ssrList(e.audiences,(function(t){return"<option"+e._ssrAttr("value",t)+">"+e._ssrEscape(e._s(t))+"</option>"}))+"</select></li>":"\x3c!----\x3e")+" "+(e.years.length>0?'<li><select class="custom-select"><option value="1000" selected="selected">اختر السنة</option> '+e._ssrList(e.years,(function(t){return"<option"+e._ssrAttr("value",t)+">"+e._ssrEscape(e._s(t))+"</option>"}))+"</select></li>":"\x3c!----\x3e"))],2)}),[],!1,null,null,"3dde254e");t.a=component.exports}};