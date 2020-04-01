<template>
  <div>

      <ApolloQuery
                    :query="gql => gql`
                   query getepisode($id: ID) {
                    episodes(where: { id_contains: $id, isPublished: true }) {
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
                    `"
                    :variables="{ id: $route.params.id }">
                    <template v-slot="{ result: { loading, error, data } }">
                    <!-- Loading -->
                    <div v-if="loading" class="loading apollo">Loading...</div>
                    <!-- Error -->
                    <div v-else-if="error" class="error apollo"><resultNotFound /></div>
                    <!-- Result -->
                    <div v-else-if="data && data.episodes.length > 0">
                    <!-- Container End -->
                    <Singleepisode
                    v-for="episode in data.episodes"
                    :key="episode.id"
                    :id="episode.id"
                    :title="episode.title"
                    :poster="episode.posters"
                    :videoQualities="episode.videoQualities[0]"
                    :runtime="episode.runtime"
                    :epLinks="episode.links"
                    :subtitles="episode.subtitles"
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
import Singleepisode from '~/components/serieses/series/episode.vue';
import epitem from '~/components/epitem.vue';
export default {
  components:{
    resultNotFound,
    Singleepisode,
    epitem
  },
}
</script>
