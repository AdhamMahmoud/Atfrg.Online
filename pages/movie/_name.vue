<template>
  <div>

    <ApolloQuery
      :query="gql => gql`
                    query getMovies($title: String!) {
                      movies(where :{ title: $title, isPublished: true}) {
                      id
                      title
                      posters {
                        size
                        path
                      }
                      audience
                      trailerPath
                      movieQuality
                      videoQualities
                      lang {
                        name
                      }
                      subtitles {
                        id
                        name
                        path
                        lang{
                        name
                      }
                      }
                      links {
                        id
                        path
                        quality
                      }
                      releaseDate
                      Production
                      runtime
                      genres {
                        name
                      }
                      watchCount
                      overview
                      imdbId
                    }
                    }
                    `"
      :variables="{ title: decodeURIComponent($route.params.name) }"
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
        <div v-else-if="data && data.movies.length > 0">
          <!-- Container End -->
          <SingleMovie
            v-for="movie in data.movies"
            :key="movie.id"
            :id="movie.id"
            :title="movie.title"
            :quality="movie.movieQuality"
            :poster="movie.posters"
            :trailer="movie.trailerPath"
            :genres="movie.genres[1].name"
            :Production="movie.Production"
            :watchCount="movie.watchCount"
            :audience="movie.audience"
            :videoQualities="movie.videoQualities[0]"
            :runtime="movie.runtime"
            :lang="movie.lang.name"
            :releaseDate="movie.releaseDate"
            :overview="movie.overview"
            :movLinks="movie.links"
            :subtitles="movie.subtitles"
            :imdbId="movie.imdbId"
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
import SingleMovie from "~/components/movies/movie/Movie.vue";

export default {
  components: {
    resultNotFound,
    SingleMovie
  },
  mounted(){
    console.log(decodeURIComponent(this.$route.params.name));
  }
};
</script>
