exports.ids=[20],exports.modules={100:function(e,t,r){"use strict";r.r(t);var n=r(90),o=r.n(n);for(var l in n)"default"!==l&&function(e){r.d(t,e,(function(){return n[e]}))}(l);t.default=o.a},101:function(e,t,r){(t=r(2)(!1)).push([e.i,"",""]),e.exports=t},120:function(e,t,r){var content=r(173);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var n=r(3).default;e.exports.__inject__=function(e){n("730ca598",content,!0,e)}},172:function(e,t,r){"use strict";r.r(t);var n=r(120),o=r.n(n);for(var l in n)"default"!==l&&function(e){r.d(t,e,(function(){return n[e]}))}(l);t.default=o.a},173:function(e,t,r){(t=r(2)(!1)).push([e.i,":focus{outline:none;box-shadow:none}.episode{text-align:right;direction:rtl;margin:20px 0 40px}.episode .plyr__volume input{width:60px}.episode .plyr video{width:100%;border-radius:20px;-o-object-fit:contain;object-fit:contain}",""]),e.exports=t},211:function(e,t,r){"use strict";r.r(t);var n=Object.freeze(["\n                   query getepisode($id: ID) {\n                     tvSerieses(where: { seasons_some:{episodes_some:{id:$id}}, isPublished: true }) {\n                        id\n                        title\n                        posters {\n                        size\n                        path\n                        }\n                        audience\n                        releaseDate\n                        trailerPath\n                        genres {\n                        name\n                        }\n                        lang {\n                        id\n                        name\n                        }\n                        keywords\n                        overview\n                       seasons(orderBy:order_DESC, where:{episodes_some:{id:$id}}){\n                          id\n                          title\n                          slug\n                          trailerPath\n                          releaseDate\n                          imdbId\n                          posters {\n                            size\n                            path\n                          }\n                          episodes(where:{isPublished: true, id:$id}) {\n                            id\n                            title\n                            runtime\n                            isPublished\n                            order\n                            posters {\n                              id\n                              size\n                              path\n                            }\n                            videoQualities\n                            subtitles {\n                              id\n                              path\n                              name\n                              lang {\n                                id\n                                name\n                              }\n                            }\n                            links {\n                              id\n                              path\n                              quality\n                            }\n                            slug\n                        }\n                      }\n                    }\n                  }\n                    "]),o=r(20),l=Object.freeze(["\n                  query gettvSeries($id:ID!) {\n                       tvSerieses(where: { seasons_some:{episodes_some:{id:$id}}, isPublished: true }) {\n                        seasons(orderBy:order_DESC){\n                          id\n                          title\n                          slug\n                          trailerPath\n                          releaseDate\n                          imdbId\n                          posters {\n                            size\n                            path\n                          }\n                          episodes{\n                              id\n                              title\n                          }\n                         }\n                       }\n                    }\n                    "]),d=Object.freeze(["\n                  query gettvSeries($id:ID!) {\n                      seasons(orderBy:order_DESC, where: {episodes_some:{id:$id}}){\n                       episodes(orderBy:order_DESC, where: {isPublished: true}) {\n                          id\n                          title\n                          order\n                          runtime\n                          isPublished\n                          posters {\n                            size\n                            path\n                          }\n                          videoQualities\n                          subtitles {\n                            id\n                            path\n                            name\n                            lang{\n                              id\n                              name\n                            }\n                          }\n                          links {\n                            id\n                            path\n                            quality\n                          }\n                          slug\n                        }\n                    }\n                  }\n                    "]),c=r(14),v=r.n(c),h=r(83),f=r(97),m=r(98),_=r(99),y={data:function(){return{ShowIntroBtn:!1,firstNote:!1,secondNote:!1,notesdone:!1,films:[],tvSerieses:[],active:"movie",overId:0,episode:[],e3lan:[],timer:null,swiperOption:{slidesPerView:4,spaceBetween:40,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1024:{slidesPerView:4,spaceBetween:40},768:{slidesPerView:3,spaceBetween:40},640:{slidesPerView:2,spaceBetween:40},320:{slidesPerView:1,spaceBetween:40}}}}},props:{id:String,title:String,season:Array,poster:Array,runtime:Number,subtitles:Array,epLinks:Array,order:Number,Series:Object,imdbId:String,videoQualities:String},apollo:{tvSerieses:{query:v.a`query gettvSeries($id: [ID!]) {
  tvSerieses(
    where: {
      isPublished: true
      AND: { seasons_some: { episodes_some: { id_in: $id } } }
    }
  ) {
    id
    title
    audience
    genres {
      id
      name
    }
    lang {
      id
      name
    }
    overview
    releaseDate
    seasons(orderBy:order_DESC) {
      id
      title
      imdbId
      slug
      trailerPath
      releaseDate
      posters {
        size
        path
      }
      episodes(orderBy:order_DESC) {
        id
        title
        runtime
        isPublished
        posters {
          id
          size
          path
        }
        videoQualities
      }
    }
  }
} `,variables(){return{id:this.$props.id}}}},components:{SeriesItem:h.a,resultNotFound:o.a,Epsitem:f.a,MoviePlayer:_.a,bugs:m.a},head(){return{title:"مشاهدة وتحميل "+this.$props.title+" مسلسل  "+this.$props.season[0].title+" - Atfrg.Online  اتفرج اون لاين",meta:[{hid:"description",name:"description",content:"مشاهدة وتحميل "+this.$props.title+" مسلسل  "+this.$props.season[0].title+" - Atfrg.Online  اتفرج اون لاين"||!1},{hid:"keywords",name:"keywords",content:"مشاهدة فيلم,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى"},{property:"og:title",content:"مشاهدة وتحميل "+this.$props.title+" مسلسل  "+this.$props.season[0].title+" - Atfrg.Online  اتفرج اون لاين"},{property:"og:description",content:"مشاهدة وتحميل "+this.$props.title+" مسلسل  "+this.$props.season[0].title+" - Atfrg.Online  اتفرج اون لاين"||!1},{property:"og:image",content:this.GetPoster(this.$props.poster)}]}},computed:{playerOptions:()=>({captions:{active:!1},controls:["play-large","restart","rewind","play","fast-forward","progress","current-time","duration","mute","volume","captions","settings","pip","airplay","fullscreen"]}),topTitle(){if(this.tvSerieses.length>0)return this.season.title}},mounted(){this.handleSearch(this.$props.imdbId)},methods:{GetNext(e){var t=e.episodes.findIndex(e=>e.id===this.$props.id);return t+1<e.episodes.length?e.episodes[t+1].id:"#"},GetPerv(e){var t=e.episodes.findIndex(e=>e.id===this.$props.id);return t-1>=0?e.episodes[t-1].id:"#"},validLink(path){var e=path.slice(-3).toLowerCase();return path=path.substring(0,path.length-3)+e},LinkToken(path){var e=r(76),t=path.substring(24,path.length),n=Math.round(Date.now()/1e3)+21600,o="6ecb7c25-9744-498a-a49b-ae4c7980c861"+t+n,l=e.createHash("md5").update(o).digest("binary"),d=new Buffer(l,"binary").toString("base64");return"https://atfrgonline.b-cdn.net"+t+"?token="+(d=d.replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,""))+"&expires="+n},Download(path){var e=r(76),t=path.substring(24,path.length),n=Math.round(Date.now()/1e3)+21600,o="27ab3ad5-9fbb-4713-9671-5d4cb7a1a31e"+t+n,l=e.createHash("md5").update(o).digest("binary"),d=new Buffer(l,"binary").toString("base64");return"https://atfrgdownload.b-cdn.net"+t+"?token="+(d=d.replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,""))+"&expires="+n},GetPoster(e){var i,path="";for(i=0;i<e.length;i++)"THUMBNAIL"==e[i].size&&(path=e[i].path);return path.includes("cdn.atfrg")&&(path=this.LinkToken2(path)),path},LinkToken2:path=>"https://Atfrgimages.b-cdn.net"+path.substring(24,path.length),activeCol(e){this.active=e,this.VideoClose()},itemOver(e){0==this.overId&&(this.overId=1,this.timer=setTimeout(()=>{1==this.overId&&(this.overId=e)},1500))},itemNotOver(){this.overId=0,clearTimeout(this.timer)},handleSearch(e){this.films=[],fetch("https://www.omdbapi.com/?i="+e+"&apikey=bf7293bf").then(e=>e.json()).then(e=>{this.films=e})},VideoClose(){},CloseNote(e){this.firstNote=!1,2==e&&(this.secondNote=!1,this.notesdone=!0)},nowPlaying(){this.$refs.episode.player.currentTrack=1,this.$refs.episode.player.toggleCaptions(!0),this.$refs.episode.currentTime>this.$props.runtime/2*60&&1!=this.notesdone&&(this.secondNote,this.secondNote=!0),this.timer=setTimeout(()=>{this.ShowIntroBtn=!1},12e4),0!=this.$refs.episode.player.currentTime&&this.createCookie(this.$props.id,this.$refs.episode.player.currentTime,10)},skip(){this.$refs.episode.currentTime=120,this.ShowIntroBtn=!1},getReleaseDate(e){var t=new Date(e),r=("0"+(t.getMonth()+1)).slice(-2);return e=("0"+t.getDate()).slice(-2)+"/"+r+"/"+t.getFullYear()},createCookie(e,t,r){if(r){var n=new Date;n.setTime(n.getTime()+24*r*60*60*1e3);var o="; expires="+n.toGMTString()}else o="";document.cookie=e+"="+t+o+"; path=/"},readCookie(e){for(var t=e+"=",r=document.cookie.split(";"),i=0;i<r.length;i++){for(var n=r[i];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return null},getaudience:e=>e+" - "+("G"==e?"للمشاهدة العامة, مناسب لجميع الاعمار.":"PG"==e?"ينصح بإرشاد الآباء, بعض المشاهد ربما لا تناسب الاطفال.":"PG13"==e?"يجب إرشاد الآباء, لا يناسب الأطفال أقل من 13 سنة.":"R"==e?"للكبار فقط , يحتوى على مشاهد فاضحة او عنيفة.":"NC17"==e?" لا يصلح لمن هما اقل من 17 عاما , يحتوى على مشاهد فاضحة او عنيفة":"غير مصنف"),getRunTime(e){var t=Number(e),r=Math.floor(t/3600),n=Math.floor(t%3600/60),s=Math.floor(t%3600%60);return(r>0?r+" ساعة, ":"")+(n>0?n+" دقيقة, ":"")+(s>0?s+" ثانية":"")}}},w=r(1);var x=Object(w.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"episode"},[e._ssrNode('<div class="container"><div class="row"><div class="col-md-3"><div class="poster"><img'+e._ssrAttr("src",e.GetPoster(e.poster))+e._ssrAttr("alt",e.title)+'></div> <div class="descrption"><div class="title">القصة</div> <span class="story">'+e._ssrEscape(e._s(e.Series.overview))+'</span></div></div> <div class="col-md-9"><div class="movie-information"><div class="movie-title">'+e._ssrEscape("\r\n                        "+e._s(e.title)+"\r\n                    ")+'</div> <ul class="information-list"><li><span>اللغة</span> <i class="fas fa-angle-double-left"></i> <span>'+e._ssrEscape(e._s(e.Series.lang.name))+'</span></li> <li><span>تاريخ الاصدار</span><i class="fas fa-angle-double-left"></i> <span>'+e._ssrEscape(e._s(e.getReleaseDate(e.Series.releaseDate)))+'</span></li> <li><span>الجمهور</span><i class="fas fa-angle-double-left"></i> <span>'+e._ssrEscape(e._s(e.getaudience(e.Series.audience)))+'</span></li> <li><span>الجودة</span><i class="fas fa-angle-double-lefft"></i> <span>'+e._ssrEscape(e._s(e.videoQualities))+"</span></li> "+("Arabic"!=e.Series.lang.name?'<li><span>التقيم</span><i class="fas fa-angle-double-left"></i> <span>'+e._ssrEscape(" 10 / "+e._s(e.films.imdbRating)+" ( "+e._s(e.films.imdbVotes)+" شخص)")+"</span></li>":"\x3c!----\x3e")+" "+(e.subtitles.length>0&&null!=e.subtitles[0].path&&e.subtitles[0].path.length>0?'<li><span>الترجمة</span><i class="fas fa-angle-double-left"></i>\r\n                            شكر خاص لـ\r\n                            <span>'+e._ssrList(e.subtitles,(function(t){return"<i>"+e._ssrEscape("\r\n                                    "+e._s(t.name)+"\r\n                                ")+"</i>"}))+"</span></li>":'<li><span>الترجمة</span><i class="fas fa-angle-double-left"></i> لا يوجد</li>')+"</ul></div></div></div></div> "),e._ssrNode('<div class="container">',"</div>",[e._ssrNode('<div class="row"><div class="col-md-12"><div class="watch-list"><button'+e._ssrClass(null,{active:"trailer"==e.active})+">\r\n                        الاعلان\r\n                    </button> <button"+e._ssrClass(null,{active:"movie"==e.active})+">"+e._ssrEscape("\r\n\r\n                        "+e._s(e.title))+"</button> <button"+e._ssrClass(null,{active:"download"==e.active})+">\r\n                        التحميل</button></div></div></div> "),e._ssrNode('<div class="row">',"</div>",[e._ssrNode('<div class="col-md-12">',"</div>",[e._ssrNode('<div id="trailer"'+e._ssrClass(null,{col_show:"trailer"==e.active,col_hide:"trailer"!=e.active})+">"+("trailer"==e.active?"<iframe"+e._ssrAttr("src","https://www.youtube.com/embed/"+e.season.trailerPath)+' class="player-mov player-trailer"></iframe>':"\x3c!----\x3e")+"</div> "),e._ssrNode('<div id="movie"'+e._ssrClass(null,{col_show:"movie"==e.active,col_hide:"movie"!=e.active})+">","</div>",[r("MoviePlayer",{attrs:{id:e.id,title:e.title,poster:e.GetPoster(e.poster),links:e.epLinks,subtitles:e.subtitles}}),e._ssrNode(" "),r("ApolloQuery",{attrs:{query:function(e){return e(d)},variables:{id:e.$route.params.id}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.result,o=n.loading,l=n.error,data=n.data;return[o?r("div",{staticClass:"loading apollo"},[e._v("Loading...")]):l?r("div",{staticClass:"error apollo"},[r("resultNotFound")],1):data&&data.seasons[0].episodes.length>0?r("div",[r("div",{staticClass:"others"},["#"!=e.GetNext(data.seasons[0])?r("nuxt-link",{attrs:{to:e.GetNext(data.seasons[0])}},[e._v("الحلقة السابقة")]):e._e(),e._v(" "),"#"!=e.GetPerv(data.seasons[0])?r("nuxt-link",{attrs:{to:e.GetPerv(data.seasons[0])}},[e._v(" الحلقة التالية")]):e._e()],1)]):r("div",{staticClass:"no-result apollo"},[r("resultNotFound")],1)]}}])})],2),e._ssrNode(" "),e._ssrNode('<div id="download"'+e._ssrClass(null,{col_show:"download"==e.active,col_hide:"download"!=e.active})+">","</div>",[e._ssrNode('<div class="note">',"</div>",[e._ssrNode("\r\n                        للتحميل يرجي تحميل <span>الحلقة + الترجمة. </span>\r\n                        يتم وضعهم في مكان <span>واحد</span> بنفس الاسم لتعمل الترجمة.\r\n                        ننصح بأستخدام برنامج "),r("nuxt-link",{attrs:{to:"https://www.videolan.org/vlc/download-windows.html"}},[e._v("VLC")]),e._ssrNode(" .\r\n                        يمكنك تحميل <span>الموسم كامل</span> فقط ادخل للصفحة الخاصة بالموسم في قسم التحميل.\r\n                    ")],2),e._ssrNode(' <table class="table"><thead><tr><th scope="col">#</th> <th scope="col">الجودة</th> <th scope="col">التحمل</th></tr></thead> <tbody>'+e._ssrList(e.epLinks,(function(video){return'<tr><th scope="row">1</th> <td>'+e._ssrEscape(e._s(video.quality.replace("Q","")))+"</td> <td><a"+e._ssrAttr("href",e.Download(e.validLink(video.path)))+">تحميل</a></td></tr>"}))+'</tbody></table> <table class="table"><thead><tr><th scope="col">اللغة</th> <th scope="col">المترجم</th> <th scope="col">التحمل</th></tr></thead> <tbody>'+e._ssrList(e.subtitles,(function(t){return'<tr><th scope="row">'+e._ssrEscape(e._s(t.lang.name))+"</th> <td>"+e._ssrEscape(e._s(t.name))+"</td> "+(t.path.length>0?"<td><a"+e._ssrAttr("href",e.Download(e.validLink(t.path)))+">تحميل</a></td>":"\x3c!----\x3e")+"</tr>"}))+"</tbody></table>")],2),e._ssrNode(" "),r("bugs",{attrs:{title:e.$props.title+" "+e.$props.season[0].title}})],2)])],2),e._ssrNode(" "),e._ssrNode('<div class="container" style="padding: 0;\\r\\n    border-radius: 20px;">',"</div>",[e._ssrNode('<div class="row"><div class="col-md-12"><div class="other-title">\r\n                    الحلقات المتاحة\r\n                </div></div></div> '),e._ssrNode('<div class="row">',"</div>",[e._ssrNode('<div class="col-md-12">',"</div>",[r("ApolloQuery",{attrs:{query:function(e){return e(d)},variables:{id:e.$route.params.id}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.result,o=n.loading,l=n.error,data=n.data;return[o?r("div",{staticClass:"loading apollo"},[e._v("Loading...")]):l?r("div",{staticClass:"error apollo"},[r("resultNotFound")],1):data&&data.seasons[0].episodes.length>0?r("div",{staticClass:"same-movies Slider-block row"},e._l(data.seasons[0].episodes,(function(t){return r("div",{key:t.id,class:[{poster_over:e.overId==t.id},"swiper-slide col-md-3 col-12"],on:{mouseover:function(r){return e.itemOver(t.id)},mouseleave:e.itemNotOver}},[r("Epsitem",{attrs:{id:t.id,title:t.title,order:t.order,poster:e.GetPoster(e.poster),genres:e.Series.genres,audience:e.Series.audience,path:"/series/episode/"}})],1)})),0):r("div",{staticClass:"no-result apollo"},[r("resultNotFound")],1)]}}])})],1)])],2),e._ssrNode(" "),e._ssrNode('<div class="container">',"</div>",[e._ssrNode('<div class="row"><div class="col-md-12"><div class="other-title">\r\n                    الأجزاء المتاحة\r\n                </div></div></div> '),e._ssrNode('<div class="row">',"</div>",[e._ssrNode('<div class="col-md-12">',"</div>",[r("ApolloQuery",{attrs:{query:function(e){return e(l)},variables:{id:e.$route.params.id}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.result,o=n.loading,l=n.error,data=n.data;return[o?r("div",{staticClass:"loading apollo"},[e._v("Loading...")]):l?r("div",{staticClass:"error apollo"},[r("resultNotFound")],1):data&&data.tvSerieses.length>0?r("div",{staticClass:"same-movies Slider-block"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiperOnw2",value:e.swiperOption,expression:"swiperOption",arg:"mySwiperOnw2"}],staticClass:"my-swiper"},[r("div",{staticClass:"swiper-wrapper"},e._l(data.tvSerieses[0].seasons,(function(t){return r("div",{key:t.id,class:[{poster_over:e.overId==t.id},"swiper-slide"],on:{mouseover:function(r){return e.itemOver(t.id)},mouseleave:e.itemNotOver}},[r("SeriesItem",{attrs:{id:t.id,title:t.title,poster:e.GetPoster(t.posters),genres:e.Series.genres,audience:e.Series.audience,seasons:t.episodes,path:"/series/season/"}})],1)})),0),e._v(" "),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[r("i",{staticClass:"fas fa-chevron-right"})]),e._v(" "),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[r("i",{staticClass:"fas fa-chevron-left"})])])]):r("div",{staticClass:"no-result apollo"},[r("resultNotFound")],1)]}}])})],1)])],2)],2)}),[],!1,(function(e){var t=r(172);t.__inject__&&t.__inject__(e)}),null,"40690093").exports,k={components:{resultNotFound:o.a,Singleepisode:x,Epsitem:f.a}},N=Object(w.a)(k,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ApolloQuery",{attrs:{query:function(e){return e(n)},variables:{id:e.$route.params.id}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.result,o=n.loading,l=n.error,data=n.data;return[o?r("div",{staticClass:"loading apollo"},[e._v("Loading...")]):l?r("div",{staticClass:"error apollo"},[r("resultNotFound")],1):data&&data.tvSerieses.length>0&&data.tvSerieses[0].seasons.length>0?r("div",e._l(data.tvSerieses[0].seasons[0].episodes,(function(e){return r("Singleepisode",{key:e.id,attrs:{imdbId:data.tvSerieses[0].seasons[0].imdbId,id:e.id,order:e.order,title:e.title,season:data.tvSerieses[0].seasons,Series:data.tvSerieses[0],poster:data.tvSerieses[0].seasons[0].posters,videoQualities:e.videoQualities[0],runtime:e.runtime,epLinks:e.links,subtitles:e.subtitles}})})),1):r("div",{staticClass:"no-result apollo"},[r("resultNotFound")],1)]}}])})],1)}),[],!1,null,null,"4d2dd278");t.default=N.exports},81:function(e,t,r){var content=r(87);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var n=r(3).default;e.exports.__inject__=function(e){n("71c6165e",content,!0,e)}},83:function(e,t,r){"use strict";var n={data:function(){return{seasonCount:1,films:[]}},methods:{handleSearch(){this.films=[],fetch("https://www.omdbapi.com/?i="+this.$props.seasons[0].imdbId+"&apikey=bf7293bf").then(e=>e.json()).then(e=>{this.films=e})},GetSlide(e){var t=e;return t.includes("cdn.atfrg")&&(t=this.LinkToken(t)),t},LinkToken(path){path=path.replace(/^\s+/g,"");var e=r(76),t=path.substring(24,path.length),n=Math.round(Date.now()/1e3)+43200,o="6ecb7c25-9744-498a-a49b-ae4c7980c861"+t+n,l=e.createHash("md5").update(o).digest("binary"),d=new Buffer(l,"binary").toString("base64");return"https://Atfrgimages.b-cdn.net"+t+"?token="+(d=d.replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,""))+"&expires="+n},getaudience:e=>e+" - "+("G"==e?"للمشاهدة العامة, مناسب لجميع الاعمار.":"PG"==e?"ينصح بإرشاد الآباء, بعض المشاهد ربما لا تناسب الاطفال.":"PG13"==e?"يجب إرشاد الآباء, لا يناسب الأطفال أقل من 13 سنة.":"R"==e?"للكبار فقط , يحتوى على مشاهد فاضحة او عنيفة.":"NC17"==e?" لا يصلح لمن هما اقل من 17 عاما , يحتوى على مشاهد فاضحة او عنيفة":"غير مصنف"),runTimeCalc:e=>function(e){e=Number(e);var t=Math.floor(e/3600),r=Math.floor(e%3600/60),s=Math.floor(e%3600%60);return(t>0?t+" ساعة, ":"")+(r>0?r+" دقيقة, ":"")+(s>0?s+" ثانية":"")}(e),seassonCount(e){var t=1;if(null!=e)for(var i=1;i<e.length;i++)t++;return t}},props:{id:String,title:String,quality:String,poster:String,genres:Array,seasons:Array,audience:String,path:String},mounted(){this.handleSearch()}},o=r(1);var component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nuxt-link",{attrs:{to:e.path+e.title}},[r("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img",loading:"/load.svg"},expression:"{ selector: 'img', loading: '/load.svg' }"}],staticClass:"item-slide"},[r("div",{staticClass:"poster"},[r("span",{staticClass:"views"},[e._v("\r\n                "+e._s(e.seassonCount(e.seasons))+"\r\n                "),r("i",{staticClass:"fas fa-video"})]),e._v(" "),r("img",{attrs:{"data-src":e.GetSlide(e.poster),alt:e.title}})]),e._v(" "),r("div",{staticClass:"overlay"},[r("div",{staticClass:"information"},[r("h3",{staticClass:"name"},[e._v(e._s(e.title))]),e._v(" "),r("div",{staticClass:"subinfo-block"},[r("span",{staticClass:"audience"},[e._v(e._s(e.getaudience(e.audience))+"\r\n                            ")]),e._v(" "),r("div",{staticClass:"genres"},e._l(e.genres,(function(t){return r("i",{key:t.id},[e._v(" "+e._s(t.name)+" ")])})),0)])])])])])}),[],!1,(function(e){var t=r(86);t.__inject__&&t.__inject__(e)}),"26e331ae","ee4f84d8");t.a=component.exports},86:function(e,t,r){"use strict";r.r(t);var n=r(81),o=r.n(n);for(var l in n)"default"!==l&&function(e){r.d(t,e,(function(){return n[e]}))}(l);t.default=o.a},87:function(e,t,r){(t=r(2)(!1)).push([e.i,"",""]),e.exports=t},88:function(e,t,r){var content=r(93);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var n=r(3).default;e.exports.__inject__=function(e){n("0980f5de",content,!0,e)}},89:function(e,t,r){var content=r(95);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var n=r(3).default;e.exports.__inject__=function(e){n("f3d6247c",content,!0,e)}},90:function(e,t,r){var content=r(101);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var n=r(3).default;e.exports.__inject__=function(e){n("47ebd33e",content,!0,e)}},92:function(e,t,r){"use strict";r.r(t);var n=r(88),o=r.n(n);for(var l in n)"default"!==l&&function(e){r.d(t,e,(function(){return n[e]}))}(l);t.default=o.a},93:function(e,t,r){(t=r(2)(!1)).push([e.i,".bug[data-v-5f94ce5e]{text-align:center;width:50%;margin:0 auto;padding:2rem}.bug h4[data-v-5f94ce5e]{color:#fff702;margin-bottom:20px}.bug .form-control[data-v-5f94ce5e]{outline:none;box-shadow:none;border-radius:20px}.bug svg[data-v-5f94ce5e]{height:30px;margin:1rem auto;background-color:transparent}.bug button[data-v-5f94ce5e]{background-color:#5f4cff;color:#fff;padding:8px 2rem;border:none;border-radius:20px}@media (min-width:225px) and (max-width:576px){.bug[data-v-5f94ce5e]{width:100%}}",""]),e.exports=t},94:function(e,t,r){"use strict";r.r(t);var n=r(89),o=r.n(n);for(var l in n)"default"!==l&&function(e){r.d(t,e,(function(){return n[e]}))}(l);t.default=o.a},95:function(e,t,r){(t=r(2)(!1)).push([e.i,".note2{text-align:center;margin:1rem 0}.note2 span{color:gold;cursor:pointer}.plyr--full-ui input[type=range]{color:gold}.plyr__control--overlaid{background:rgba(255,215,0,.67)}.plyr--video .plyr__control.plyr__tab-focus,.plyr--video .plyr__control:hover,.plyr--video .plyr__control[aria-expanded=true]{background:gold}.plyr__control.plyr__tab-focus{box-shadow:0 0 0 5px rgba(255,215,0,.67)}.plyr--audio .plyr__control.plyr__tab-focus,.plyr--audio .plyr__control:hover,.plyr--audio .plyr__control[aria-expanded=true],.plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]:before{background:gold}.plyr--video .plyr__progress__buffer{color:rgba(8,108,248,.55)}.plyr--video.plyr--loading .plyr__progress__buffer{background-color:rgba(8,108,248,.55)}.plyr__volume input{width:60px}.plyr{height:600px}.plyr video{width:100%;-o-object-fit:contain;object-fit:contain;height:100%}.plyr__video-wrapper{height:100%}.video-loader{border:0;border-radius:100%;display:none;left:50%;padding:15px;top:50%;transform:translate(-50%,-50%)}.video-loader,.video-logo{color:#fff;position:absolute;z-index:2;background-color:transparent!important}.video-logo{border:0;height:auto;width:110px;z-index:9999;top:5%;left:5%}.plyr--loading .video-loader{display:block}@media (min-width:225px) and (max-width:576px){.plyr{height:400px}.plyr video{-o-object-fit:contain!important;object-fit:contain!important}}.chat-video{bottom:7rem;right:2.2rem}.chat-video .mine .message.last:after{background:#000}.chat-video .mine .message,.chat-video .mine .message.last:before{background-image:none;background-color:#393939}.chat .message{background-color:#232323}@media (min-width:1200px){.plyr__captions{font-size:26px!important;bottom:2rem!important}.plyr:-webkit-full-screen .plyr__captions{font-size:30px!important;bottom:4rem!important}}@media (min-width:992px) and (max-width:1200px){.plyr__captions{font-size:24px!important;bottom:2rem!important}.plyr:-webkit-full-screen .plyr__captions{font-size:26px!important;bottom:4rem!important}}",""]),e.exports=t},97:function(e,t,r){"use strict";var n={methods:{runTimeCalc:e=>function(e){e=Number(e);var t=Math.floor(e/3600),r=Math.floor(e%3600/60),s=Math.floor(e%3600%60);return(t>0?t+" ساعة, ":"")+(r>0?r+" دقيقة, ":"")+(s>0?s+" ثانية":"")}(e),seassonCount(e){var t=1;if(null!=e)for(var i=1;i<e.length;i++)t++;return t}},data:function(){return{seasonCount:1}},props:{id:String,title:String,quality:String,poster:String,genres:Array,order:Number,audience:String,path:String}},o=r(1);var component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nuxt-link",{attrs:{to:e.path+e.id}},[r("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img",loading:"/load.svg"},expression:"{ selector: 'img', loading: '/load.svg' }"}],staticClass:"item-slide"},[r("div",{staticClass:"poster"},[r("span",{staticClass:"views"},[e._v("\r\n                الحلقة\r\n                "+e._s(e.order)+"\r\n             \r\n            ")]),e._v(" "),r("img",{attrs:{"data-src":e.poster,alt:e.title}})]),e._v(" "),r("div",{staticClass:"overlay"},[r("div",{staticClass:"information"},[r("h3",{staticClass:"name"},[e._v(e._s(e.title))]),e._v(" "),r("div",{staticClass:"subinfo-block"},[r("span",{staticClass:"audience"},[e._v(e._s(e.audience)+"\r\n                            ")]),e._v(" "),r("div",{staticClass:"genres"},e._l(e.genres,(function(t){return r("i",{key:t.id},[e._v(" "+e._s(t.name)+" ")])})),0)])])])])])}),[],!1,(function(e){var t=r(100);t.__inject__&&t.__inject__(e)}),"d1126864","be52ce7e");t.a=component.exports},98:function(e,t,r){"use strict";var n=r(14);const o=r.n(n).a`
  mutation($title:String!,$bug:String!){
  createBugs(data:{
    ItemTitle:$title,
    bug:$bug
  }){
    id
  }
}
 `;var l={data:()=>({load:!1,done:!1,form:!0,bug:""}),props:{title:String},methods:{send(){this.load=!0,this.form=!1,this.$apollo.mutate({mutation:o,variables:{title:this.$props.title,bug:this.bug}}).then(data=>{this.load=!1,this.done=!0}).catch(e=>{console.log(e)})},finish(){this.loading=!1}}},d=r(1);var component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bug"},[e._ssrNode("<p data-v-5f94ce5e>نعتذر عن اي اخطاء .. ساعدنا بتحسين الخدمة 😍</p> <br data-v-5f94ce5e> <h4 data-v-5f94ce5e>التبيلغ عن الأخطاء</h4> "+(1==e.form?'<div data-v-5f94ce5e><div class="form-group" data-v-5f94ce5e><textarea id="exampleFormControlTextarea1" rows="3" class="form-control" data-v-5f94ce5e>'+e._ssrEscape(e._s(e.bug))+"</textarea></div> <button data-v-5f94ce5e>ارسال</button></div>":"\x3c!----\x3e")+" "),e.load?e._ssrNode("<i data-v-5f94ce5e>","</i>",[e._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style=" display: block; shape-rendering: auto;" data-v-5f94ce5e>',"</svg>",[e._ssrNode('<circle cx="50" cy="50" fill="none" stroke="#93dbe9" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(53.2159 50 50)" data-v-5f94ce5e>',"</circle>",[r("animateTransform",{attrs:{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"}})],1)])]):e._e(),e._ssrNode(" "+(e.done?'<div role="alert" class="alert alert-success" data-v-5f94ce5e>\n       شكرا لك 😍 ! سيتم حل تلك المشكلة في اقرب وقت.\n        </div>':"\x3c!----\x3e"))],2)}),[],!1,(function(e){var t=r(92);t.__inject__&&t.__inject__(e)}),"5f94ce5e","59253a6e");t.a=component.exports},99:function(e,t,r){"use strict";var n={data:()=>({Show:!1,load:!1,loader:null,film:null,secondNote:!1,notesdone:!1,firstNote:null,SecoNote:null,logo:null}),props:{title:String,poster:String,id:String,links:Array,subtitles:Array},computed:{playerOptions:()=>({toggleInvert:!0,clickToPlay:!0,captions:{active:!0},fullscreen:{enabled:!0,fallback:!0,iosNative:"force"},debug:!0,controls:["play-large","rewind","play","fast-forward","progress","current-time","duration","mute","volume","captions","settings","fullscreen"]}),subtitleNew(){var sub=this.$props.subtitles;return sub.length>0?sub[0].path.length>5?sub:null:sub}},beforeDestroy(){this.$refs["film"+this.$props.id].player.destroy()},mounted(){this.film=this.$refs["film"+this.$props.id].player;var e=document.getElementsByClassName("plyr__control--overlaid")[0];this.loader=document.createElement("i"),this.loader.classList.add("video-loader"),this.loader.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style=" display: block; shape-rendering: auto;" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" fill="none" stroke="#fff" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(53.2159 50 50)"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>  </circle></svg>',e.parentNode.insertBefore(this.loader,e.nextSibling),this.FirstNote=document.createElement("div"),this.FirstNote.classList.add("chat"),this.FirstNote.classList.add("chatb"),this.FirstNote.classList.add("chat-video"),e.parentNode.insertBefore(this.FirstNote,e.nextSibling);var t=document.createElement("div");t.classList.add("mine"),t.classList.add("messages"),this.FirstNote.appendChild(t);var r=document.createElement("div");r.classList.add("message"),r.classList.add("last"),this.FirstNote.appendChild(r);var text=document.createElement("p");text.innerHTML="💙💙 صلي علي محمد",r.appendChild(text),this.FirstNote.style.display="none",this.SecoNote=document.createElement("div"),this.SecoNote.classList.add("chat"),this.SecoNote.classList.add("chatb"),this.SecoNote.classList.add("chat-video"),e.parentNode.insertBefore(this.SecoNote,e.nextSibling);var n=document.createElement("div");n.classList.add("mine"),n.classList.add("messages"),this.SecoNote.appendChild(n);var o=document.createElement("div");o.classList.add("message"),o.classList.add("last"),this.SecoNote.appendChild(o);var l=document.createElement("p");l.innerHTML="✌️❤️ خد بريك كدا وقوم صلي",o.appendChild(l),this.SecoNote.style.display="none",this.$props.subtitles.length>0&&this.$props.subtitles[0].path.length>5&&(this.logo=document.createElement("img"),this.logo.classList.add("video-logo"),this.logo.src="/logo.svg",e.parentNode.insertBefore(this.logo,e.nextSibling)),0!=this.$props.subtitles.length&&null!=this.$props.subtitles||(this.logo=document.createElement("img"),this.logo.classList.add("video-logo"),this.logo.src="/logo.svg",e.parentNode.insertBefore(this.logo,e.nextSibling))},methods:{validLink(path){var e=path.slice(-3).toLowerCase();return path=path.substring(0,path.length-3)+e},LinkToken(path){path=path.replace(/^\s+/g,"");var e=r(76),t=path.substring(24,path.length),n=Math.round(Date.now()/1e3)+43200,o="6ecb7c25-9744-498a-a49b-ae4c7980c861"+t+n,l=e.createHash("md5").update(o).digest("binary"),d=new Buffer(l,"binary").toString("base64");return"https://atfrgonline.b-cdn.net"+t+"?token="+(d=d.replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,""))+"&expires="+n},CloseNote(e){this.firstNote=!1,2==e&&(this.secondNote=!1,this.notesdone=!0)},enterfullscreenFull(){window.innerWidth<800&&(screen.orientation.lock("landscape"),screen.msLockOrientation.lock("landscape"),screen.mozLockOrientation.lock("landscape"))},loadeddata(){if(this.FirstNote.style.display="block",0!=this.readCookie(this.$props.id)){var time=parseInt(this.readCookie(this.$props.id));0!=time&&(this.timer=setTimeout(()=>{this.film.currentTime=time},1200))}},nowPlaying(){null!=this.film&&(this.$props.subtitles.length>0&&(this.film.currentTrack=1),this.timer=setTimeout(()=>{this.FirstNote.style.display="none"},1e4),this.$props.subtitles.length>0&&this.$props.subtitles[0].path.length>1&&this.film.toggleCaptions(!0),this.film.currentTime>this.$props.runtime/2*60&&(this.SecoNote.style.display="block",this.timer=setTimeout(()=>{this.SecoNote.style.display="none"},5e3)),this.timer=setTimeout(()=>{this.ShowIntroBtn=!1},12e4),this.film.currentTime>120&&this.createCookie(this.$props.id,this.film.currentTime,10))},createCookie(e,t,r){if(r){var n=new Date;n.setTime(n.getTime()+24*r*60*60*1e3);var o="; expires="+n.toGMTString()}else o="";document.cookie=e+"="+t+o+"; path=/"},reloadPage(){window.location.reload()},readCookie(e){for(var t=e+"=",r=document.cookie.split(";"),i=0;i<r.length;i++){for(var n=r[i];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return null}}},o=r(1);var component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._ssrNode('<div class="note2"><p>مشاهدة ممتعة يا صحبي 😘💙</p> <p>نظراً لسؤء خدمة الأنترنت الخاصة بشركة 🐢🐢 we في مصر قد تواجة مشكلة في تشغيل المحتوي </p> <span>تحديث المحتوي</span></div> '),null!=e.links?r("vue-plyr",{ref:"film"+e.id,staticClass:"player-mov",attrs:{clickToPlay:"true",seektime:"10",title:e.title,id:e.id,options:e.playerOptions,emit:["playing","loadeddata","enterfullscreen"]},on:{playing:e.nowPlaying,enterfullscreen:e.enterfullscreenFull,loadeddata:e.loadeddata}},[r("video",{attrs:{crossorigin:"anonymous",id:"vid"+e.id,playsinline:"",poster:e.poster}},[e._l(e.links,(function(video){return r("source",{key:video.id,attrs:{src:e.LinkToken(e.validLink(video.path)),type:"video/mp4",size:video.quality.replace("Q","")}})})),e._v(" "),e._l(e.subtitleNew,(function(t,n){return r("track",{key:t.id,attrs:{kind:"captions",label:t.name,srclang:t.lang.name,src:e.LinkToken(t.path.substring(0,t.path.length-4)+".vtt"),default:{default:n==e.subtitleNew.length-2}}})}))],2)]):e._e()],2)}),[],!1,(function(e){var t=r(94);t.__inject__&&t.__inject__(e)}),null,"454eb8b7");t.a=component.exports}};