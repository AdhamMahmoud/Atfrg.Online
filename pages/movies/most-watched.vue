<template>
<div class="movies-genre">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <filters :filtersUpdate.sync="filtersUpdate" :genChange.sync="genChange" :LangChange.sync="LangChange" :QualityChange.sync="QualityChange" :AudienceChange.sync="AudienceChange" :YearStartChange.sync="YearStartChange" :YearEndChange.sync="YearEndChange" />
            </div>
        </div>
        <ApolloQuery :query="gql => gql`
                    query GetMovies($items: Int , $Filter_languages: [String!], $Filter_years_Start: DateTime!, $Filter_years_End: DateTime!,
                    $Filter_audiences: [Audience!], $Filter_Qualities:[MovieQuality!], $Filter_genres:[String!]) {
                    movies(orderBy: watchCount_DESC, first: $items, 
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
                        releaseDate
                        imdbId
                        trailerPath
                        movieQuality
                        videoQualities
                        runtime
                        releaseDate
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
                    <img src="load.svg" class="svg-load" height="32px" width="32px" />
                </div>
                <!-- Error -->
                <div v-else-if="error" class="error apollo">
                    <resultNotFound />
                </div>
                <!-- Result -->
                <div v-else-if="data && data.movies.length > 0" class="row global-items">
                    <!-- Container End -->
                    <div v-for="movie in data.movies" :key="movie.id" class="col-xl-2 col-lg-3 col-md-3 col-6 global-item">
                        <TrailerItem :releaseDate="movie.releaseDate" :id="movie.id" :title="movie.title" :imdbId="movie.imdbId" :quality="movie.movieQuality" :poster="movie.posters" :trailer="movie.trailerPath" :genres="movie.genres" :watchCount="movie.watchCount" :audience="movie.audience" :videoQualities="movie.videoQualities[0]" :runtime="movie.runtime" :run="false" />
                    </div>
                    <!-- No result -->
                </div>
                <div v-else class="no-result apollo">
                    <resultNotFound />
                </div>
            </template>
        </ApolloQuery>
        <svg class="loadi" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style=" display: block; shape-rendering: auto; margin:1rem auto;" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" fill="none" stroke="#fff" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(53.2159 50 50)"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>  </circle></svg>
        <br>
    </div>
</div>
</template>

<script>
import resultNotFound from "~/components/resultNotFound.vue";
import TrailerItem from "~/components/TrailerItem.vue";
import filters from "~/components/movies/genre/filters";
export default {
        head: {
     title:"مشاهدة وتحميل افلام مشهورة مترجمة مجانا - اتفرج اون لاين مشاهدة افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online ",
        meta: [{
                hid: 'description',
                name: 'description',
                content: "مشاهدة وتحميل مسلسلات انمي مترجمة مجانا بدون اعلانات علي اتفرج اون لاين Atfrg.Online"
            },
            {
                hid: 'keywords',
                name: 'keywords',
                content: "مشاهدة مسلسل ,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى, فيلم , تحميل افلام , مشاهدة افلام بجودة عالية , مشاهدة انمي اون لاين, تحميل موسم برابط واحد , مشاهدة بدون اعلانات , تحميل مباشر  , افلام جديدة , مسلسل " || ""
            },
            {
                property: "image",
                content: "https://atfrgimages.b-cdn.net/og2.png"
            },
            {
                property: "og:image",
                content: "https://atfrgimages.b-cdn.net/og2.png"
            },
            {

                property: "og:title",
                content: "مشاهدة انمي اون لاين - اتفرج اون لاين Atfrg.Online"
            },
            {
                property: "og:description",
                content: "مشاهدة وتحميل مسلسلات انمي مترجمة مجانا بدون اعلانات علي اتفرج اون لاين Atfrg.Online"
            },
            {
                property: "og:keywords",
                content: "مشاهدة مسلسل ,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى, فيلم , تحميل افلام , مشاهدة افلام بجودة عالية , مشاهدة انمي اون لاين, تحميل موسم برابط واحد , مشاهدة بدون اعلانات , تحميل مباشر  , افلام جديدة , مسلسل "
            },

        ]
    },
    data: function () {
        return {
            movies: [],
            items: 12,
            filtersUpdate: [],
            Filter_languages: [],
            Filter_Qualities: [],
            Filter_audiences: [],
            Filter_years: [],
            Filter_years_Start: "1000",
            Filter_years_End: "5000",
            Filter_genres: [],

            genChange: [],
            LangChange: [],
            QualityChange: [],
            AudienceChange: [],
            YearStartChange: '',
            YearEndChange: '',
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
    watch: {
        filtersUpdate: function () {
            this.Filter_genres = this.filtersUpdate.Filter_genres;
            this.Filter_languages = this.filtersUpdate.Filter_languages;
            this.Filter_Qualities = this.filtersUpdate.Filter_Qualities;
            this.Filter_audiences = this.filtersUpdate.Filter_audiences;
            this.Filter_years = this.filtersUpdate.Filter_years;
            this.Filter_years_Start = this.filtersUpdate.Filter_years_Start;
            this.Filter_years_End = this.filtersUpdate.Filter_years_End;
        },
        genChange: function () {
            this.Filter_genres = this.genChange;
        },
        LangChange: function () {
            this.Filter_languages = this.LangChange;
        },
        QualityChange: function () {
            this.Filter_Qualities = this.QualityChange;
        },
        AudienceChange: function () {
            this.Filter_audiences = this.AudienceChange;
        },
        YearStartChange: function () {
            this.Filter_years_Start = this.YearStartChange;
        },
        YearEndChange: function () {
            this.Filter_years_End = this.YearEndChange;
        },
    }
};
</script>

<style lang="scss">
@import '~/assets/sass/_vars.scss';
@import '~/assets/sass/_mixins.scss';

</style>
