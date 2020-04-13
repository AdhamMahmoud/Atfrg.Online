<template>
<!-- Search Area -->
<div class="search-area" @mouseleave="EndSearch(false)">
    <!-- Search Area Container -->
    <div class="search-form-area">
        <div class="input-div">
            <button type="button">
                <i class="fas fa-search"></i>
            </button>
            <input v-model="Searchtitle" @focus="StartSearch" @input="StartSearch" @mouseover="StartSearch" class="form-control" type="text" placeholder="ابحث بأسم الفيلم او المسلسل" />
        </div>
        <div class="Fast-Search" v-if="SearchVal == true">
            <ul class="search-result">
                <li v-for="(item,index) in Search" :key="item.id" @click="EndSearch(true,types[index],item.title)">
                    <nuxt-link v-if="types[index] == 1" :to="'/movie/' +  item.title">
                        <span class="title">{{ item.title + " (" + GetYear(item.releaseDate) + ")" }}</span>
                        <img :src="GetPoster(item.posters)" :alt="item.title">
                    </nuxt-link>
                    <nuxt-link v-if="types[index] == 2" :to="'/series/' + item.title">
                        <span class="title">{{ item.title + " (" + GetYear(item.releaseDate) + ")" }}</span>
                        <img :src="GetPoster(item.posters)" :alt="item.title">
                    </nuxt-link>
                </li>
                <li v-if="Search.length <= 0">
                    <p> حاول البحث بكلمات اخري.</p>
                </li>
            </ul>
        </div>
    </div>

</div>
</template>

<script>
import gql from 'graphql-tag';
export default {
    data: function () {
        return {
            Searchtitle: "",
            SearchVal: false,
            tvSerieses: [],
            movies: [],
            types: [],
        };
    },
    apollo: {
        movies: {
            query: gql `query GetMovies {
              movies(orderBy: releaseDate_DESC, where :{ isPublished: true,watchCount_lte:9999999}) {
                id
                title
                posters{
                    id
                    path
                    size
                }
                releaseDate
                isPublished
                createdAt
              }
            }

              `,
        },
        tvSerieses: {
            query: gql `query GetMovies {
              tvSerieses(orderBy: releaseDate_DESC,  where :{ isPublished: true}) {
                id
                title
                posters{
                    id
                    path
                    size
                }
                releaseDate
                isPublished
                createdAt
              }
            }

              `,
        },
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
        EndSearch(clean = false, type=1,  path = null) {
            this.SearchVal = false;
            if (clean == true) {
                this.Searchtitle = "";
            }
            if(path != null){
                if(type == 1){
                    this.$router.push('/movie/' + path);
                }
                else{
                     this.$router.push('/series/' + path);
                }
                 
            }
          
        }
    },
    computed: {
        Search() {
            var search = [];
            this.types = [];
            var movies = this.movies;
            if (movies.length > 0) {
                for (var i = 0; i < movies.length; i++) {
                    if (movies[i].title.toLowerCase().replace(/\s/g, '').includes(this.Searchtitle.toLowerCase().replace(/\s/g, ''))) {
                        if (search.length < 10) {
                            search.push(movies[i]);
                            this.types.push(1);
                        } else {
                            break;
                        }
                    }
                }
            }
            var tvSerieses = this.tvSerieses;
            if (tvSerieses.length > 0) {
                for (var i = 0; i < tvSerieses.length; i++) {
                    if (tvSerieses[i].title.toLowerCase().replace(/\s/g, '').includes(this.Searchtitle.toLowerCase().replace(/\s/g, ''))) {
                        if (search.length < 10) {
                            search.push(tvSerieses[i]);
                            this.types.push(2);
                        } else {
                            break;
                        }
                    }
                }
            }
            return search;
        },
    }
};
</script>
