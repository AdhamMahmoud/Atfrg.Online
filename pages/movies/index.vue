<template>
<div class="movies-genre">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <filters :filtersUpdate.sync="filtersUpdate" :genChange.sync="genChange" :LangChange.sync="LangChange" :QualityChange.sync="QualityChange" 
                :AudienceChange.sync="AudienceChange" :YearStartChange.sync="YearStartChange" :YearEndChange.sync="YearEndChange"/>
            </div>
        </div>
          <ApolloQuery :query="gql => gql`
                      query GetMovies($items: Int , $Filter_languages: [String!], $Filter_years_Start: DateTime!, $Filter_years_End: DateTime!,
                      $Filter_audiences: [Audience!], $Filter_Qualities:[MovieQuality!], $Filter_genres:[String!]) {
                      movies(orderBy: createdAt_DESC, first: $items, 
                      where :{ isPublished: true, lang: { name_in:$Filter_languages }, audience_in: $Filter_audiences , movieQuality_in:$Filter_Qualities, genres_some:{name_in:$Filter_genres}
                       AND: {
                          releaseDate_gte: $Filter_years_Start
                          releaseDate_lte: $Filter_years_End
                        }}) {
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
                        runtime
                        genres {
                        id
                          name
                        }
                        watchCount
                      }
                    }
                    `" :variables="{ items, Filter_languages, Filter_years_Start, Filter_years_End, Filter_audiences, Filter_Qualities, Filter_genres }">
            <template v-slot="{ result: { loading, error, data } }">
                <!-- Loading -->
                <div v-if="loading" class="loading apollo">
                    <img src="~/assets/images/load.svg" class="svg-load" height="32px" width="32px" />
                </div>
                <!-- Error -->
                <div v-else-if="error" class="error apollo">
                     <resultNotFound />
                </div>
                <!-- Result -->
                <div v-else-if="data && data.movies.length > 0" class="row global-items">
                    <!-- Container End -->
                    <div v-for="movie in data.movies" :key="movie.id" class="col-xl-2 col-lg-3 col-md-3 col-6 global-item">
                        <TrailerItem :id="movie.id" :title="movie.title" :quality="movie.movieQuality" :poster="movie.posters" :trailer="movie.trailerPath" :genres="movie.genres" :watchCount="movie.watchCount" :audience="movie.audience" :videoQualities="movie.videoQualities[0]" :runtime="movie.runtime" :run="false" />
                    </div>
                    <!-- No result -->
                </div>
                <div v-else class="no-result apollo">
                    <resultNotFound />
                </div>
            </template>
        </ApolloQuery>
    </div>
</div>
</template>

<script>
import resultNotFound from "~/components/resultNotFound";
import TrailerItem from "~/components/TrailerItem.vue";
import filters from "~/components/movies/genre/filters";
import gql from 'graphql-tag';
export default {
     head: {
     title:"افلام مترجمة - اتفرج اونلاين مشاهدة افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online ",
  },
    data: function () {
        return {
            items: 12,
            filtersUpdate: [],
            Filter_languages: [],
            Filter_Qualities: [],
            Filter_audiences: [],
            Filter_years: [],
            Filter_years_Start: "1000",
            Filter_years_End: "5000",
            Filter_genres: [],


            genChange:[],
            LangChange:[],
            QualityChange:[],
            AudienceChange:[],
            YearStartChange:'',
            YearEndChange:'',
        }
    },
    components: {
        resultNotFound,
        TrailerItem,
        filters
    },
    methods: {
        scroll() {
            window.onscroll = () => {
                let bottomOfWindow = window.pageYOffset + window.innerHeight + 1;
                if (bottomOfWindow >= document.documentElement.offsetHeight) {
                    this.items += 6;
                }
            };
        },
    },
    mounted() {
        this.scroll();
    },
    watch:{
        filtersUpdate:function(){
            this.Filter_genres = this.filtersUpdate.Filter_genres;
            this.Filter_languages = this.filtersUpdate.Filter_languages;
            this.Filter_Qualities = this.filtersUpdate.Filter_Qualities;
            this.Filter_audiences = this.filtersUpdate.Filter_audiences;
            this.Filter_years = this.filtersUpdate.Filter_years;
            this.Filter_years_Start = this.filtersUpdate.Filter_years_Start;
            this.Filter_years_End = this.filtersUpdate.Filter_years_End;
        },
        genChange:function(){
             this.Filter_genres = this.genChange;
        },
        LangChange:function(){
             this.Filter_languages = this.LangChange;
        },
        QualityChange:function(){
         this.Filter_Qualities = this.QualityChange;
        },
        AudienceChange:function(){
            this.Filter_audiences = this.AudienceChange;
        },
        YearStartChange:function(){
             this.Filter_years_Start = this.YearStartChange;
        },
        YearEndChange:function(){
             this.Filter_years_End = this.YearEndChange;
        },
    }
};
</script>

<style lang="scss">
@import '~/assets/sass/_vars.scss';
@import '~/assets/sass/_mixins.scss';

</style>
