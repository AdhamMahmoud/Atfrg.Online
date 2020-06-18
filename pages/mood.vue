<template>
<div class="movies-genre" style="min-height:94vh;">
    <div class="container-fluid">
      

        <div class="row items">
            <div v-for="movie in randoms" :key="movie.id" class="col-xl-3 col-lg-3 col-md-3 col-12 global-item">
                <TrailerItem :releaseDate="movie.releaseDate" :id="movie.id" :title="movie.title" :imdbId="movie.imdbId" :quality="movie.movieQuality" :poster="movie.posters" :trailer="movie.trailerPath" :genres="movie.genres" :watchCount="movie.watchCount" :audience="movie.audience" :videoQualities="movie.videoQualities[0]" :runtime="movie.runtime" :run="false" />
            </div>
        </div>
          <div class="row">
            <div class="col-12">
                <button class="change" @click="Generate()">
                    تغير ؟
                </button>
            </div>
        </div>
        <!-- Container End -->
    </div>
</div>
</template>

<script>
import resultNotFound from "~/components/resultNotFound";
import TrailerItem from "~/components/TrailerItem.vue";
import gql from 'graphql-tag';
export default {
        head: {
     title:"    عجلة الافلام - اتفرج اون لاين مشاهدة افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online ",
     meta:[
        {  name: 'description', content:  "مشاهدة وتحميل مباشر افلام و مسلسلات وانمي بجودة عالية مترجمة - اتفرج اون لاين - بدون اعلانات"},
          {  name: 'keywords', content:  "مشاهدة مسلسل ,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى, فيلم , تحميل افلام , مشاهدة افلام بجودة عالية , مشاهدة انمي اون لاين, تحميل موسم برابط واحد , مشاهدة بدون اعلانات , تحميل مباشر  , افلام جديدة , مسلسل "}
     ]
  },
    data: function () {
        return {
            items: 12,
            movies: [],
            randoms: [],
            loaded: false,
        }
    },
    components: {
        resultNotFound,
        TrailerItem,
    },
    apollo: {
        movies: {
            query: gql `query movies {
                movies(where:{isPublished: true}) {
                    id
                    title
                    posters {
                        size
                        path
                    }
                    audience
                    trailerPath
                    movieQuality
                    releaseDate
                    imdbId
                    videoQualities
                    runtime
                    genres {
                    id
                    name
                    }
                    watchCount
                }
            }
            `,
        },
    },
    methods: {
        Generate() {
            this.randoms = [];
            var nums = [];
            if (this.movies.length > 0) {
                for (var i = 0; i < 4; i++) {
                    var num = this.GetRandom(this.movies.length);
                    if (nums.includes(num)) {
                        this.randoms = [];
                        this.Generate();
                    } else {
                        nums.push(num);
                        var item = this.movies[num];
                        this.randoms.push(item);
                    }
                }
            }
        },
        GetRandom(num) {
            return Math.floor(Math.random() * num);
        }
    },
    mounted() {
        this.timer = setTimeout(() => {
            if (this.loaded == false) {
                this.Generate();
            }
        }, 1500);

    }

};
</script>

<style lang="scss">
@import '~/assets/sass/_vars.scss';
@import '~/assets/sass/_mixins.scss';

.movies-genre {
    .items {
        margin: 2rem;

        .global-item {
            height: 300px;

            .item-slide {
                height: 300px;

                .poster {
                    img {
                        height: 300px !important;
                    }
                }

            }
        }
    }

    .note {
        h1 {
            text-align: center;
            margin: 2rem 1rem;
            align-items: center;
            color: #ff0dec;
        }
    }

    .change {
        text-align: center;
        display: block;
        background-image: radial-gradient(circle farthest-corner at 10% 20%, rgba(120, 50, 255, 1) 0%, rgba(50, 150, 250, 1) 91%);
        color: #fff;
        border: none;
        border-radius: 50%;
        padding: 2rem;
        height: 100px;
        width: 100px;
        outline: none;
        margin: 2rem auto;
    }
}
</style>
