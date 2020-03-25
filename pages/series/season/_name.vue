<template>
  <div>

      <ApolloQuery
                    :query='gql => gql`
                  query gettvSeries($title:String) {
                   tvSerieses(where: {isPublished: true , seasons_some:{title_contains:$title}}) {
                        id
                        title
                        posters {
                        size
                        path
                        }
                        audience
                        releaseDate
                        genres {
                        name
                        }
                        lang {
                        id
                        name
                        }
                        keywords
                        overview
                        seasons(where:{title:$title} ){
                          id
                          title
                          slug
                          trailerPath
                          releaseDate
                          imdbId
                          posters {
                            size
                            path
                          }
                          episodes {
                          id
                          title
                          runtime
                          isPublished
                          posters {
                            size
                            path
                          }
                          videoQualities
                          subtitles {
                            id
                            path
                            name
                            lang{
                              id
                              name
                            }
                          }
                          links {
                            id
                            path
                            quality
                          }
                          slug
                        }
                      }
                    }
                    }
                    `'
                    :variables="{ title: $route.params.name }">
                    <template v-slot="{ result: { loading, error, data } }">
                    <!-- Loading -->
                    <div v-if="loading" class="loading apollo">Loading...</div>
                    <!-- Error -->
                    <div v-else-if="error" class="error apollo"><resultNotFound /></div>
                    <!-- Result -->
                    <div v-else-if="data && data.tvSerieses.length > 0">
                    <!-- Container End -->
                    <seasson
                    v-for="season in data.tvSerieses[0].seasons"
                    :key="season.id"
                    :id="season.id"
                    :title="season.title"
                    :posters="season.posters"
                    :genres="data.tvSerieses[0].genres"
                    :audience="data.tvSerieses[0].audience"
                    :lang="data.tvSerieses[0].lang.name"
                    :releaseDate="season.releaseDate"
                    :overview="data.tvSerieses[0].overview"
                    :keywords="data.tvSerieses[0].keywords"
                    :seasons="data.tvSerieses[0].seasons"
                    :episodes="season.episodes"
                    :imdbId="season.imdbId"
                    />
                    <!-- No result -->
                    </div>
                    <div v-else class="no-result apollo"><resultNotFound /></div>
                    </template>
                    </ApolloQuery>
  </div>
</template>

<script>
import resultNotFound from "~/components/resultNotFound.vue";
import seasson from '~/components/serieses/series/seasson.vue';
export default {
  components:{
    resultNotFound,
    seasson
  },
  methods:{
    getSeason(arr){
      for (var i = 0; i < arr.length; i++) {
       
        if(arr[i].title == this.$route.params.name){
          this.currentSeasson = arr[i];
        }
      }
      return this.currentSeasson;
    }
  },
  head(){
    return{
       title: "مشاهدة مسلسل "+this.$route.params.name+" مترجم - افلام كلاب Aflam.Club" ,
        meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content:  "مشاهدة مسلسل "+this.$route.params.name+" مترجم اونلاين بجودة عالية - افلام كلاب Aflam.Club" || ""},
        { hid: 'keywords', name: 'keywords', content:  "مشاهدة فيلم,افلام كلاب , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى" || ""}
      ]
    }
  },
}
</script>
