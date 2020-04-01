exports.ids=[8],exports.modules={100:function(e,t,n){var content=n(129);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=n(3).default;e.exports.__inject__=function(e){r("fdbebb0e",content,!0,e)}},128:function(e,t,n){"use strict";n.r(t);var r=n(100),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=l.a},129:function(e,t,n){(t=n(2)(!1)).push([e.i,"",""]),e.exports=t},185:function(e,t,n){"use strict";n.r(t);var r=Object.freeze(["\n                      query GetMovies($items: Int , $Filter_languages: [String!], $Filter_years_Start: DateTime!, $Filter_years_End: DateTime!,\n                      $Filter_audiences: [Audience!], $Filter_Qualities:[MovieQuality!], $Filter_genres:[String!]) {\n                      movies(orderBy: createdAt_DESC, first: $items, \n                      where :{ isPublished: true, lang: { name_in:$Filter_languages }, audience_in: $Filter_audiences , movieQuality_in:$Filter_Qualities, genres_some:{name_in:$Filter_genres}\n                       AND: {\n                          releaseDate_gte: $Filter_years_Start\n                          releaseDate_lte: $Filter_years_End\n                        }}) {\n                        id\n                        title\n                        posters {\n                          size\n                          path\n                        }\n                        audience\n                        trailerPath\n                        movieQuality\n                        videoQualities\n                        runtime\n                        genres {\n                        id\n                          name\n                        }\n                        watchCount\n                      }\n                    }\n                    "]),l=n(20),o=n(82),h=n(92),c=(n(76),{head:{title:"افلام مترجمة - اتفرج اون لاين مشاهدة افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online "},data:function(){return{items:12,filtersUpdate:[],Filter_languages:[],Filter_Qualities:[],Filter_audiences:[],Filter_years:[],Filter_years_Start:"1000",Filter_years_End:"5000",Filter_genres:[],genChange:[],LangChange:[],QualityChange:[],AudienceChange:[],YearStartChange:"",YearEndChange:""}},components:{resultNotFound:l.a,TrailerItem:o.a,filters:h.a},methods:{scroll(){window.onscroll=()=>{window.pageYOffset+window.innerHeight+1>=document.documentElement.offsetHeight&&(this.items+=6)}}},mounted(){this.scroll()},watch:{filtersUpdate:function(){this.Filter_genres=this.filtersUpdate.Filter_genres,this.Filter_languages=this.filtersUpdate.Filter_languages,this.Filter_Qualities=this.filtersUpdate.Filter_Qualities,this.Filter_audiences=this.filtersUpdate.Filter_audiences,this.Filter_years=this.filtersUpdate.Filter_years,this.Filter_years_Start=this.filtersUpdate.Filter_years_Start,this.Filter_years_End=this.filtersUpdate.Filter_years_End},genChange:function(){this.Filter_genres=this.genChange},LangChange:function(){this.Filter_languages=this.LangChange},QualityChange:function(){this.Filter_Qualities=this.QualityChange},AudienceChange:function(){this.Filter_audiences=this.AudienceChange},YearStartChange:function(){this.Filter_years_Start=this.YearStartChange},YearEndChange:function(){this.Filter_years_End=this.YearEndChange}}}),d=n(1);var component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"movies-genre"},[e._ssrNode('<div class="container-fluid">',"</div>",[e._ssrNode('<div class="row">',"</div>",[e._ssrNode('<div class="col-12">',"</div>",[l("filters",{attrs:{filtersUpdate:e.filtersUpdate,genChange:e.genChange,LangChange:e.LangChange,QualityChange:e.QualityChange,AudienceChange:e.AudienceChange,YearStartChange:e.YearStartChange,YearEndChange:e.YearEndChange},on:{"update:filtersUpdate":function(t){e.filtersUpdate=t},"update:filters-update":function(t){e.filtersUpdate=t},"update:genChange":function(t){e.genChange=t},"update:gen-change":function(t){e.genChange=t},"update:LangChange":function(t){e.LangChange=t},"update:lang-change":function(t){e.LangChange=t},"update:QualityChange":function(t){e.QualityChange=t},"update:quality-change":function(t){e.QualityChange=t},"update:AudienceChange":function(t){e.AudienceChange=t},"update:audience-change":function(t){e.AudienceChange=t},"update:YearStartChange":function(t){e.YearStartChange=t},"update:year-start-change":function(t){e.YearStartChange=t},"update:YearEndChange":function(t){e.YearEndChange=t},"update:year-end-change":function(t){e.YearEndChange=t}}})],1)]),e._ssrNode(" "),l("ApolloQuery",{attrs:{query:function(e){return e(r)},variables:{items:e.items,Filter_languages:e.Filter_languages,Filter_years_Start:e.Filter_years_Start,Filter_years_End:e.Filter_years_End,Filter_audiences:e.Filter_audiences,Filter_Qualities:e.Filter_Qualities,Filter_genres:e.Filter_genres}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.result,o=r.loading,h=r.error,data=r.data;return[o?l("div",{staticClass:"loading apollo"},[l("img",{staticClass:"svg-load",attrs:{src:n(28),height:"32px",width:"32px"}})]):h?l("div",{staticClass:"error apollo"},[l("resultNotFound")],1):data&&data.movies.length>0?l("div",{staticClass:"row global-items"},e._l(data.movies,(function(e){return l("div",{key:e.id,staticClass:"col-xl-2 col-lg-3 col-md-3 col-6 global-item"},[l("TrailerItem",{attrs:{id:e.id,title:e.title,quality:e.movieQuality,poster:e.posters,trailer:e.trailerPath,genres:e.genres,watchCount:e.watchCount,audience:e.audience,videoQualities:e.videoQualities[0],runtime:e.runtime,run:!1}})],1)})),0):l("div",{staticClass:"no-result apollo"},[l("resultNotFound")],1)]}}])})],2)])}),[],!1,(function(e){var t=n(128);t.__inject__&&t.__inject__(e)}),null,"bfe21506");t.default=component.exports},80:function(e,t,n){var content=n(86);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=n(3).default;e.exports.__inject__=function(e){r("8ff8c428",content,!0,e)}},82:function(e,t,n){"use strict";var r={data:function(){return{isPlay:!1,trailer_path:" ",year:"",films:[]}},computed:{playerOptions:()=>({captions:{active:!1},controls:["play-large"]})},methods:{handleSearch(){this.films=[],fetch("https://www.omdbapi.com/?i="+this.$props.imdbId+"&apikey=527f9c9a").then(e=>e.json()).then(e=>{this.films=e,this.year=this.GetYear(e.Released)})},runTrailer(e){this.isPlay=!0,setTimeout(()=>{this.runTrailerNow(e)},1500)},GetYear(e){var t=new Date(e),n=(("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2),t.getFullYear());return this.movieyear=n,n},runTrailerNow(e){this.isPlay&&this.$refs[e]&&(this.trailer_path=this.$props.trailer,this.$refs[e].player.play(),this.$refs[e+"poster"].style="display:block")},stopTrailer(e){this.isPlay=!1,this.$refs[e]&&(this.$refs[e].player.stop(),this.trailer_path=" ",this.$refs[e+"poster"].style="display:none",clearTimeout(this.timer))},runTimeCalc:e=>function(e){e=Number(60*e);var t=Math.floor(e/3600),n=Math.floor(e%3600/60),s=Math.floor(e%3600%60);return(t>0?t+" ساعة, ":"")+(n>0?n+" دقيقة, ":"")+(s>0?s+" ثانية":"")}(e),GetSlide(e){var i,path="";for(i=0;i<e.length;i++)"THUMBNAIL"==e[i].size&&(path=e[i].path);return path}},mounted(){this.handleSearch()},props:{id:String,title:String,quality:String,poster:Array,trailer:String,genres:Array,watchCount:Number,audience:String,movieQuality:String,runtime:Number,run:Boolean,imdbId:String}},l=n(1);var component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nuxt-link",{staticClass:"item-fade",attrs:{to:"/movie/"+e.title}},[n("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img",loading:"/load.svg"},expression:"{ selector: 'img', loading: '/load.svg' }"}],staticClass:"item-slide",on:{mouseover:function(t){return e.runTrailer(e.id)},mouseleave:function(t){return e.stopTrailer(e.id)}}},[n("div",{staticClass:"poster"},[n("span",{staticClass:"quality"},[e._v(e._s(e.quality))]),e._v(" "),n("span",{staticClass:"views"},[e._v("\n        "+e._s(e.watchCount)+"\n        "),n("i",{staticClass:"far fa-eye"})]),e._v(" "),null!=e.films.imdbRating?n("span",{staticClass:"rate"},[e._v("\n        "+e._s(e.films.imdbRating)+" "),n("i",{staticClass:"far fa-star"})]):e._e(),e._v(" "),n("img",{attrs:{"data-src":e.GetSlide(e.poster),alt:e.title}})]),e._v(" "),n("div",{staticClass:"overlay"},[n("div",{staticClass:"information"},[n("h3",{staticClass:"name"},[e._v(e._s(e.title+" ("+e.year+")"))]),e._v(" "),n("div",{staticClass:"subinfo-block"},[n("span",{staticClass:"runtime"},[e._v("\n            "+e._s(e.runTimeCalc(e.runtime))+"\n          ")]),e._v(" "),n("span",{staticClass:"audience"},[e._v(e._s(e.audience)+" ")]),e._v(" "),n("div",{staticClass:"genres"},e._l(e.genres,(function(t){return n("i",{key:t.id},[e._v(" "+e._s(t.name)+" ")])})),0)])])])])])}),[],!1,(function(e){var t=n(85);t.__inject__&&t.__inject__(e)}),"710d99b3","c1af3228");t.a=component.exports},85:function(e,t,n){"use strict";n.r(t);var r=n(80),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=l.a},86:function(e,t,n){(t=n(2)(!1)).push([e.i,".fade-enter-active[data-v-710d99b3],.fade-leave-active[data-v-710d99b3]{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-enter[data-v-710d99b3],.fade-leave-to[data-v-710d99b3]{opacity:0}",""]),e.exports=t},92:function(e,t,n){"use strict";var r=Object.freeze(["\n                      query getMoviestwo {\n                      movies(orderBy: createdAt_DESC,  where :{ isPublished: true}) {\n                        id\n                        movieQuality\n                        audience\n                        releaseDate\n                      }\n                    }\n                    "]),l=n(76),o=n.n(l),h=n(20),c={apollo:{genres:{query:o.a`query GetGenres {
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
            `}},components:{resultNotFound:h.a},data:function(){return{movies:[],genres:[],languages:[],Qualities:[],audiences:[],years:[],Filter_genres:[],Filter_languages:[],Filter_Qualities:[],Filter_audiences:[],Filter_years:[],Filter_years_Start:"1000",Filter_years_End:"5000",DataChange:1}},methods:{PushMov(e){if(this.movies.length!=e.length)for(var i=0;i<e.length;i++)this.movies.includes(e[i])||this.movies.push(e[i]);this.GenreRest(),this.languagesRest(),this.QualitiesRest(),this.AudienceRest(),this.YearsRest(),this.$emit("update:filtersUpdate",this.$data)},ChangeGenre(e){this.Filter_genres=e.target.value,this.$emit("update:genChange",this.Filter_genres),0==e.target.value&&this.GenreRest()},ChangeLang(e){this.Filter_languages=e.target.value,this.$emit("update:LangChange",this.Filter_languages),0==e.target.value&&this.languagesRest()},ChangeQuality(e){this.Filter_Qualities=e.target.value,this.$emit("update:QualityChange",this.Filter_Qualities),0==e.target.value&&this.QualitiesRest()},ChangeAudience(e){this.Filter_audiences=e.target.value,this.$emit("update:AudienceChange",this.Filter_audiences),0==e.target.value&&this.AudienceRest()},ChangeYear(e){this.Filter_years=e.target.value,1e3==this.Filter_years?(this.Filter_years_Start="1000",this.Filter_years_End="5000"):(this.Filter_years_Start=this.Filter_years+"-01-01T00:00:00.000Z",this.Filter_years_End=this.Filter_years+"-12-31T00:00:00.000Z"),this.$emit("update:YearStartChange",this.Filter_years_Start),this.$emit("update:YearEndChange",this.Filter_years_End)},getReleaseYear:e=>e=new Date(e).getFullYear(),YearsRest(){this.Filter_years=[],this.Filter_years_Start="1000-01-01T00:00:00.000Z",this.Filter_years_End="5000-12-31T00:00:00.000Z";for(var i=0;i<this.movies.length;i++)this.years.includes(this.getReleaseYear(this.movies[i].releaseDate))||this.years.push(this.getReleaseYear(this.movies[i].releaseDate))},QualitiesRest(){this.Filter_Qualities=[];for(var i=0;i<this.movies.length;i++){var e=(""+this.movies[i].movieQuality).replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,"");this.Qualities.includes(e)||(this.Qualities.push(e),this.Filter_Qualities=this.Qualities)}this.$emit("update:QualityChange",this.Qualities)},AudienceRest(){this.Filter_audiences=[];for(var i=0;i<this.movies.length;i++)this.audiences.includes(this.movies[i].audience)||(this.audiences.push(this.movies[i].audience),this.Filter_audiences=this.audiences);this.$emit("update:AudienceChange",this.audiences)},GenreRest(){this.Filter_genres=[];for(var i=0;i<this.genres.length;i++)this.Filter_genres.push(this.genres[i].name);this.$emit("update:genChange",this.Filter_genres)},languagesRest(){this.Filter_languages=[];for(var i=0;i<this.languages.length;i++)this.Filter_languages.push(this.languages[i].name);this.$emit("update:LangChange",this.Filter_languages)}},mounted(){this.GenreRest(),this.languagesRest(),this.QualitiesRest(),this.AudienceRest(),this.YearsRest(),this.$emit("update:filtersUpdate",this.$data)}},d=n(1),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",{staticClass:"filters"},[l("ApolloQuery",{staticStyle:{display:"none"},attrs:{query:function(e){return e(r)}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.result,o=r.loading,h=r.error,data=r.data;return[o?l("div",{staticClass:"loading apollo"},[l("img",{staticClass:"svg-load",attrs:{src:n(28),height:"32px",width:"32px"}})]):h?l("div",{staticClass:"error apollo"},[l("resultNotFound")],1):data&&data.movies.length>0&&e.movies.length!=data.movies.length?l("div",{staticClass:"Slider-block"},[e._v("\r\n                    "+e._s(e.PushMov(data.movies))+"\r\n                  ")]):l("div",{staticClass:"no-result apollo"},[l("resultNotFound")],1)]}}])}),e._ssrNode(" "+(e.genres.length>0?'<li><select class="custom-select"><option value="0" selected="selected">اختر النوع</option> '+e._ssrList(e.genres,(function(t){return"<option"+e._ssrAttr("value",t.name)+">"+e._ssrEscape(e._s(t.name))+"</option>"}))+"</select></li>":"\x3c!----\x3e")+" "+(e.languages.length>0?'<li><select class="custom-select"><option value="0" selected="selected">اختر الغة</option> '+e._ssrList(e.languages,(function(t){return"<option"+e._ssrAttr("value",t.name)+">"+e._ssrEscape(e._s(t.name))+"</option>"}))+"</select></li>":"\x3c!----\x3e")+" "+(e.Qualities.length>0?'<li><select class="custom-select"><option value="0" selected="selected">اختر الجودة</option> '+e._ssrList(e.Qualities,(function(t){return"<option"+e._ssrAttr("value",t)+">"+e._ssrEscape(e._s(t))+"</option>"}))+"</select></li>":"\x3c!----\x3e")+" "+(e.audiences.length>0?'<li><select class="custom-select"><option value="0" selected="selected">اختر الجمهور</option> '+e._ssrList(e.audiences,(function(t){return"<option"+e._ssrAttr("value",t)+">"+e._ssrEscape(e._s(t))+"</option>"}))+"</select></li>":"\x3c!----\x3e")+" "+(e.years.length>0?'<li><select class="custom-select"><option value="1000" selected="selected">اختر السنة</option> '+e._ssrList(e.years,(function(t){return"<option"+e._ssrAttr("value",t)+">"+e._ssrEscape(e._s(t))+"</option>"}))+"</select></li>":"\x3c!----\x3e"))],2)}),[],!1,null,null,"591201da");t.a=component.exports}};