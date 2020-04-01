<template>
<!-- Search Area -->
<div class="search-area" @mouseleave="EndSearch(false)">
    <!-- Search Area Container -->
    <form class="search-form-area">
        <div class="input-div">
            <button>
                <i class="fas fa-search"></i>
            </button>
            <input v-model="Searchtitle" @focus="StartSearch" @input="StartSearch" @mouseover="StartSearch" class="form-control" type="text" placeholder="ابحث بأسم الفيلم او المسلسل" />
        </div>

        <ApolloQuery v-if="SearchVal == true" :query="gql => gql`
                query SearchMovies ($Searchtitle: String!) {
                movies (orderBy: createdAt_DESC, first: 5, where: { isPublished:true, title_contains: $Searchtitle}){
                        id
                        title
                        releaseDate
                        posters {
                        path
                        size
                        }
                }
                }
            `" :variables="{ Searchtitle }">
            <template v-slot="{ result: { loading, error, data } }">
                <!-- Loading -->
                <div v-if="loading" class="loading apollo">Loading...</div>

                <!-- Error -->
                <div v-else-if="error" class="error apollo">
                    <div class="Fast-Search">
                        <ul class="search-result">
                            <li>
                                <p> حاول البحث بكلمات اخري ..</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Result -->
                <div v-else-if="data != null" class="result apollo">
                    <div class="Fast-Search">
                        <ul class="search-result">
                            <li v-for="movie in data.movies" :key="movie.id" @click="EndSearch(true)">
                                <nuxt-link :to="'/movie/' + movie.title">
                                    <span class="title">{{ movie.title + " (" + GetYear(movie.releaseDate) + ")" }}</span>
                                    <img :src="GetPoster(movie.posters)" :alt="movie.title">
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- No result -->
                <div v-else class="no-result apollo">
                    <div class="Fast-Search">
                        <p> حاول البحث بكلمات اخري ..</p>
                    </div>
                </div>
            </template>
        </ApolloQuery>
        <ApolloQuery v-if="SearchVal == true" :query="gql => gql`
                query SearchSerieses ($Searchtitle: String!) {
                tvSerieses (orderBy: createdAt_DESC, first: 5, where: { isPublished:true, title_contains: $Searchtitle}){
                        id
                        title
                        releaseDate
                        posters {
                        path
                        size
                        }
                }
                }

            `" :variables="{ Searchtitle }">
            <template v-slot="{ result: { loading, error, data } }">
                <!-- Loading -->
                <div v-if="loading" class="loading apollo">Loading...</div>

                <!-- Error -->
                <div v-else-if="error" class="error apollo">
                    <div class="Fast-Search">
                        <ul class="search-result">
                            <li>
                                <p> حاول البحث بكلمات اخري ..</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Result -->
                <div v-else-if="data != null" class="result apollo">
                    <div class="Fast-Search">
                        <ul class="search-result">
                            <li v-for="series in data.tvSerieses" :key="series.id" @click="EndSearch(true)">
                                <nuxt-link :to="'/series/' + series.title">
                                    <span class="title">{{ series.title + " (" + GetYear(series.releaseDate) + ")"  }}</span>
                                    <img :src="GetPoster(series.posters)" :alt="series.title">
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- No result -->
                <div v-else class="no-result apollo">
                    <div class="Fast-Search">
                        <ul class="search-result">
                            <li>
                                <p> حاول البحث بكلمات اخري ..</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </template>
        </ApolloQuery>
    </form>

</div>
</template>

<script>
export default {
    data: function () {
        return {
            Searchtitle: "",
            SearchVal: false
        };
    },
    methods: {
               GetYear(date) {
            var currentTime = new Date(date);
            var month = ("0" + (currentTime.getMonth() + 1)).slice(-2);
            var day = ("0" + currentTime.getDate()).slice(-2);
            var year = currentTime.getFullYear();
            this.movieyear = year;
            return year;
        },
        GetPoster(posters) {
            var path = "";
            var i;
            for (i = 0; i < posters.length; i++) {
                if (posters[i].size == "THUMBNAIL") {
                    path = posters[i].path;
                }
            }
            return path;
        },
        StartSearch() {
            this.SearchVal = true;
            if (this.Searchtitle == "") {
                this.SearchVal = false;
            }
        },
        EndSearch(clean = false) {
            this.SearchVal = false;
            if (clean == true) {
                this.Searchtitle = "";
            }
        }
    }
};
</script>
