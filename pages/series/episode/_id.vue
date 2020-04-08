<template>
<div>

    <ApolloQuery :query="gql => gql`
                   query getepisode($id: ID) {
                     tvSerieses(where: { seasons_some:{episodes_some:{id:$id}}, isPublished: true }) {
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
                       seasons(orderBy:order_DESC, where:{episodes_some:{id:$id}}){
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
                          episodes(where:{isPublished: true, id:$id}) {
                            id
                            title
                            runtime
                            isPublished
                            order
                            posters {
                              id
                              size
                              path
                            }
                            videoQualities
                            subtitles {
                              id
                              path
                              name
                              lang {
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
                    `" :variables="{ id: $route.params.id }">
        <template v-slot="{ result: { loading, error, data } }">
            <!-- Loading -->
            <div v-if="loading" class="loading apollo">Loading...</div>
            <!-- Error -->
            <div v-else-if="error" class="error apollo">
                <resultNotFound />
            </div>
            <!-- Result -->
            <div v-else-if="data && data.tvSerieses.length > 0 && data.tvSerieses[0].seasons.length > 0">
                <!-- Container End -->
                <Singleepisode v-for="episode in data.tvSerieses[0].seasons[0].episodes" :key="episode.id" :imdbId="data.tvSerieses[0].seasons[0].imdbId" :id="episode.id" :order="episode.order" :title="episode.title" :season="data.tvSerieses[0].seasons" :Series="data.tvSerieses[0]" :poster="data.tvSerieses[0].seasons[0].posters" :videoQualities="episode.videoQualities[0]" :runtime="episode.runtime" :epLinks="episode.links" :subtitles="episode.subtitles" />
                <!-- No result -->
            </div>
            <div v-else class="no-result apollo">
                <resultNotFound />
            </div>
        </template>
    </ApolloQuery>
</div>
</template>

<script>
import resultNotFound from "~/components/resultNotFound.vue";
import Singleepisode from '~/components/serieses/series/episode.vue';
import Epsitem from '~/components/Epsitem.vue';
export default {
    components: {
        resultNotFound,
        Singleepisode,
        Epsitem
    },
}
</script>
