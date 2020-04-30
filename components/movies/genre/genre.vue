<template>
<div class="movies-genre">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="genre-title">{{ genre }}</div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <ul class="filters">
                    <li>
                        <ApolloQuery :query="gql => gql`
                    query GetLanguages {
                      languages {
                        id
                        name
                        }
                      }
                      `" >
                            <template v-slot="{ result: { loading, error, data } }">
                                <!-- Loading -->
                                <div v-if="loading" class="loading apollo">
                                    <img src="https://atfrgimages.b-cdn.net/images/load.svg" class="svg-load" height="32px" width="32px" />
                                </div>
                                <!-- Error -->
                                <div v-else-if="error" class="error apollo"><resultNotFound /></div>
                                <!-- Result -->
                                <div v-else-if="data && data.languages.length > 0">
                                    <!-- Container End -->
                                    <select @change="ChangeLang" class="custom-select">
                                        <option value="0" selected>اختر اللغة</option>
                                        <option v-for="lang in data.languages" :key="lang.id" :value="lang.name">{{lang.name}}</option>
                                    </select>
                                    <!-- No result -->
                                </div>
                                <div v-else class="no-result apollo"><resultNotFound /></div>
                            </template>
                        </ApolloQuery>
                    </li>
                          <li>
                        <ApolloQuery :query="gql => gql`
                        query GetQualities {
                        movies(orderBy: createdAt_DESC) {
                          id
                          movieQuality
                        }
                      }

                      `" >
                            <template v-slot="{ result: { loading, error, data } }">
                                <!-- Loading -->
                                <div v-if="loading" class="loading apollo">
                                    <img src="https://atfrgimages.b-cdn.net/images/load.svg" class="svg-load" height="32px" width="32px" />
                                </div>
                                <!-- Error -->
                                <div v-else-if="error" class="error apollo"><resultNotFound /></div>
                                <!-- Result -->
                                <div v-else-if="data && data.movies.length > 0" @mouseenter="GetQualities(data.movies)">
                                    <!-- Container End -->
                                    <select @change="ChangeLang" class="custom-select">
                                        <option value="0" selected>اختر الجودة</option>
                                        <option v-for="quality in ItemQuality" :key="quality" :value="quality">{{ quality }}</option>
                                    </select>
                                    <!-- No result -->
                                </div>
                                <div v-else class="no-result apollo"><resultNotFound /></div>
                            </template>
                        </ApolloQuery>
                    </li>
                    <li>
                        <ApolloQuery :query="gql => gql`
                      query GetYears {
                        movies(orderBy: createdAt_DESC) {
                          id
                          releaseDate
                        }
                      }
                      `">
                            <template v-slot="{ result: { loading, error, data } }">
                                <!-- Loading -->
                                <div v-if="loading" class="loading apollo">
                                    <img src="https://atfrgimages.b-cdn.net/images/load.svg" class="svg-load" height="32px" width="32px" />
                                </div>
                                <!-- Error -->
                                <div v-else-if="error" class="error apollo"><resultNotFound /></div>
                                <!-- Result -->
                                <div v-else-if="data && data.movies.length > 0" @mouseenter="Getyears(data.movies)">
                                    <!-- Container End -->
                                    <select  @change="ChangeYear" class="custom-select">
                                        <option value="1000" selected>اختر السنة</option>
                                        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                                    </select>
                                    <!-- No result -->
                                </div>
                                <div v-else class="no-result apollo"><resultNotFound /></div>
                            </template>
                        </ApolloQuery>
                    </li>
                </ul>
            </div>
        </div>
        <ApolloQuery :query="gql => gql`
                      query GetMovies($genre: String! , $items: Int , $lang: [String!], $ItemYearStart: DateTime!, $ItemYearEnd: DateTime!) {
                      movies(orderBy: createdAt_DESC, first: $items, 
                      where :{ isPublished: true, lang: { name_in:$lang }, genres_some:{ name: $genre }
                       AND: {
                          releaseDate_gte: $ItemYearStart
                          releaseDate_lte: $ItemYearEnd
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
                    `" :variables="{ genre , items , lang, ItemYearStart ,ItemYearEnd }">
            <template v-slot="{ result: { loading, error, data } }">
                <!-- Loading -->
                <div v-if="loading" class="loading apollo">
                    <img src="https://atfrgimages.b-cdn.net/images/load.svg" class="svg-load" height="32px" width="32px" />
                </div>
                <!-- Error -->
                <div v-else-if="error" class="error apollo"><resultNotFound /></div>
                <!-- Result -->
                <div v-else-if="data && data.movies.length > 0" class="row global-items">
                    <!-- Container End -->
                    <div v-for="movie in data.movies" :key="movie.id" class="col-xl-2 col-lg-3 col-md-3 col-6 global-item">
                        <TrailerItem :id="movie.id" :title="movie.title" :quality="movie.movieQuality" :poster="movie.posters" :trailer="movie.trailerPath" :genres="movie.genres" :watchCount="movie.watchCount" :audience="movie.audience" :videoQualities="movie.videoQualities[0]" :runtime="movie.runtime" :run="false" />
                    </div>
                    <!-- No result -->
                </div>
                <div v-else class="no-result apollo"><resultNotFound /></div>
            </template>
        </ApolloQuery>
    </div>
</div>
</template>

<script>
import resultNotFound from "~/components/resultNotFound.vue";
import TrailerItem from "~/components/TrailerItem.vue";
export default {
    head() {
        return {
            title: "مشاهدة وتحميل افلام " + this.$props.genre + " - اتفرج اون لاين Atfrg.Online",
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'description',
                    name: 'description',
                    content: "مشاهدة فيلم " + this.$props.title + " مترجم اون لاين بجودة عالية - اتفرج اون لاين Atfrg.Online" || ""
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: "مشاهدة فيلم,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى, فيلم " + this.$props.title + " , تحميل افلام , مشاهدة افلام بجودة عالية , مشاهدة انمي اون لاين, تحميل موسم برابط واحد , مشاهدة بدون اعلانات , تحميل مباشر  , افلام جديدة" || ""
                },
                {
                    property: "og:title",
                    content: this.gettitle
                },
                {
                    property: "og:description",
                    content: "مشاهدة فيلم " + this.$props.title + " مترجم اون لاين بجودة عالية - اتفرج اون لاين Atfrg.Online" || ""
                },
                {
                    property: "og:image",
                    content: this.GetPoster(this.$props.poster)
                },
            ]
        }
    },
    data: function () {
        return {
            items: 12,
            years: [2019],
            Itemyear: "1000",
            ItemYearStart: "1000",
            ItemYearEnd: "5000",
            lang: ["Arabic", "English"],
            ItemQuality: ["BLURAY"],
            scrolledToBottom: false
        }
    },
    props: {
        genre: String,
    },
    components: {
        TrailerItem,
        resultNotFound
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
        ChangeLang(e) {
            this.lang = e.target.value;
            if (e.target.value == 0) {
                this.lang = ['Arabic', 'English'];
            }
        },
        ChangeYear(e)
        {
              this.Itemyear = e.target.value;
              if(this.Itemyear == 1000){
                 this.ItemYearStart = "1000";
                 this.ItemYearEnd = "5000";
              }
              else{
                this.ItemYearStart = this.Itemyear + "-01-01T00:00:00.000Z";
                this.ItemYearEnd = this.Itemyear + "-12-31T00:00:00.000Z";
              }
        },
        getReleaseYear(date) {
            var currentTime = new Date(date);
            var year = currentTime.getFullYear();
            var date = year;
            return date;
        },
        Getyears(years)
        {
          for(var i = 0; i < years.length; i++)
          {
              
            if(!this.years.includes(this.getReleaseYear(years[i].releaseDate)))
            {
              this.years.push(this.getReleaseYear(years[i].releaseDate));
            }
          }
        },
        GetQualities(movies){
          for(var i = 0; i < movies.length; i++)
          { 
            var qua = ""+ movies[i].movieQuality +"";
            var rep = qua.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "");
            if(!this.ItemQuality.includes(rep))
            {
              this.ItemQuality.push(rep);
            }
          }
        }
    },
    mounted() {
        this.scroll();
    }
};
</script>

<style lang="scss">
@import '~/assets/sass/_vars.scss';
@import '~/assets/sass/_mixins.scss';

</style>
