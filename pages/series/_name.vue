<template>
  <div>
    <ApolloQuery
      :query="gql => gql`
                    query gettvSeries($title: String!) {
                    tvSerieses(where: { title: $title, isPublished: true }) {
                        id
                        title
                        posters {
                        size
                        path
                        }
                        audience
                        releaseDate
                        trailerPath
                        genres {
                        name
                        }
                        lang {
                        id
                        name
                        }
                        keywords
                        overview
                       seasons(orderBy:order_DESC){
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
                          episodes(orderBy:order_ASC) {
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
                    `"
      :variables="{ title: $route.params.name }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div
          v-if="loading"
          class="loading apollo"
        >Loading...</div>
        <!-- Error -->
        <div
          v-else-if="error"
          class="error apollo"
        >
          <resultNotFound />
        </div>
        <!-- Result -->
        <div v-else-if="data && data.tvSerieses.length > 0">
          <!-- Container End -->
          <SingleSeries
            v-for="
          series
          in
          data.tvSerieses"
            :key="series.id"
            :id="series.id"
            :title="series.title"
            :posters="series.posters"
            :genres="series.genres"
            :audience="series.audience"
            :lang="series.lang.name"
            :releaseDate="series.releaseDate"
            :overview="series.overview"
            :keywords="series.keywords"
            :seasons="series.seasons"
            :episodes="series.seasons[0].episodes"
            :trailerPath="series.trailerPath"
          />
          <!-- No result -->
        </div>
        <div
          v-else
          class="no-result apollo"
        >
          <resultNotFound />
        </div>
      </template>
</ApolloQuery>
</div>
</template>

<script>
import resultNotFound from "~/components/resultNotFound.vue";
import SingleSeries from "~/components/serieses/series/series.vue";
export default {
  components: {
    resultNotFound,
    SingleSeries
  },
   head(){
    return{
       title: "مشاهدة و تحميل مسلسل "+this.$route.params.name+" مترجم - اتفرج اون لاين Atfrg.Online" ,
        meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content:  "مشاهدة وتحميل مسلسل "+this.$route.params.name+" مترجم اون لاين بجودة عالية - اتفرج اون لاين Atfrg.Online" || ""},
        { hid: 'keywords', name: 'keywords', content:  "مشاهدة مسلسل ,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى, فيلم "+this.$route.params.name+" , تحميل افلام , مشاهدة افلام بجودة عالية , مشاهدة انمي اون لاين, تحميل موسم برابط واحد , مشاهدة بدون اعلانات , تحميل مباشر  , افلام جديدة , مسلسل "+this.$route.params.name+"" || ""}

      ]
    }
  },
};
</script>
