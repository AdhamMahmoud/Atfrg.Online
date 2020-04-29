<template>
<ul class="filters">
         <ApolloQuery style="display:none"
                    :query='gql => gql`
                      query getMoviestwo {
                      movies(orderBy: createdAt_DESC,  where :{ isPublished: true}) {
                        id
                        movieQuality
                        audience
                        releaseDate
                      }
                    }
                    `'>
                    <template v-slot="{ result: { loading, error, data } }">
                    <!-- Loading -->
                    <div v-if="loading" class="loading apollo">
                    <img src="~/assets/images/load.svg" class="svg-load" height="32px" width="32px">
                    </div>
                    <!-- Error -->
                    <div v-else-if="error" class="error apollo"><resultNotFound /></div>
                    <!-- Result -->
                    <div v-else-if="data && data.movies.length > 0 && movies.length != data.movies.length" class="Slider-block">
                    <!-- Container End -->
                    {{ PushMov(data.movies) }}
                  <!-- No result -->
                  </div>
                  <div v-else class="no-result apollo"><resultNotFound /></div>
                  </template>
                  </ApolloQuery>
    <!-- Genres -->
    <li v-if="genres.length > 0">
        <select @change="ChangeGenre" class="custom-select">
            <option value="0" selected>اختر النوع</option>
            <option v-for="genre in genres" :key="genre.id" :value="genre.name">{{genre.name}}</option>
        </select>
    </li>
    <!-- Languages -->
     <li v-if="languages.length > 0">
        <select @change="ChangeLang" class="custom-select">
            <option value="0" selected>اختر اللغة</option>
            <option v-for="lang in languages" :key="lang.id" :value="lang.name">{{lang.name}}</option>
        </select>
    </li>
    <!-- Quality -->
      <li v-if="Qualities.length > 0">
         <select @change="ChangeQuality" class="custom-select">
            <option value="0" selected>اختر الجودة</option>
            <option v-for="quality in Qualities" :key="quality" :value="quality">{{ quality }}</option>
         </select>
    </li>
    <!-- Audience -->
    <li v-if="audiences.length > 0">
        <select @change="ChangeAudience" class="custom-select">
            <option value="0" selected>اختر الجمهور</option>
            <option v-for="audience in audiences" :key="audience" :value="audience">{{ audience }}</option>
        </select>
    </li>
    <!-- Year -->
    <li  v-if="years.length > 0">
        <select @change="ChangeYear" class="custom-select">
            <option value="1000" selected>اختر السنة</option>
            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
        </select>
    </li>
</ul>

</template>

<script>
import gql from 'graphql-tag';
import resultNotFound from "~/components/resultNotFound.vue";
export default {
    apollo: {
        genres: {
            query: gql`query GetGenres {
                genres {
                    id
                    name
                }
            }
            `,
        },
        languages: {
            query: gql`query GetLang {
                languages {
                    id
                    name
                }
            }
            `,
        },
    },
    components: {
        resultNotFound,
    },
    data:function(){
        return{
           movies:[],
           genres:[],
           languages:[],
           Qualities:[],
           audiences:[],
           years:[],

           Filter_genres:[],
           Filter_languages:[],
           Filter_Qualities:[],
           Filter_audiences:[],
           Filter_years:[],
           Filter_years_Start:'1000',
           Filter_years_End:'5000',

           DataChange:1
        }
    },
    methods:{
        PushMov(mov){
            if(this.movies.length !=  mov.length)
            {
                for (var i = 0; i < mov.length; i++)
                 {
                    if (!this.movies.includes(mov[i]))
                    {
                        this.movies.push(mov[i]);
                    }
                }
            }
        this.GenreRest();
        this.languagesRest();
        this.QualitiesRest();
        this.AudienceRest();
        this.YearsRest();
        this.$emit('update:filtersUpdate', this.$data);
        },
        ChangeGenre(e) {
            this.Filter_genres = e.target.value;
            this.$emit('update:genChange', this.Filter_genres);
            if (e.target.value == 0) {
                this.GenreRest();
            }
        },
        ChangeLang(e) {
            this.Filter_languages = e.target.value;
            this.$emit('update:LangChange',this.Filter_languages);
            if (e.target.value == 0) {
                 this.languagesRest();
            }        },
        ChangeQuality(e) {
            this.Filter_Qualities = e.target.value;
            this.$emit('update:QualityChange',this.Filter_Qualities);
            if (e.target.value == 0) {
                this.QualitiesRest();
            }
           
        },
        ChangeAudience(e) {
            this.Filter_audiences = e.target.value;
            this.$emit('update:AudienceChange',this.Filter_audiences);
            if (e.target.value == 0) {
                this.AudienceRest();
            }
        },
        ChangeYear(e) {
            this.Filter_years = e.target.value;
            if (this.Filter_years == 1000) {
                this.Filter_years_Start = "1000";
                this.Filter_years_End = "5000";
            } else {
                this.Filter_years_Start = this.Filter_years + "-01-01T00:00:00.000Z";
                this.Filter_years_End = this.Filter_years + "-12-31T00:00:00.000Z";
            }
            this.$emit('update:YearStartChange',this.Filter_years_Start);
            this.$emit('update:YearEndChange',this.Filter_years_End);
        },
        getReleaseYear(date) {
            var currentTime = new Date(date);
            var year = currentTime.getFullYear();
            var date = year;
            return date;
        },
        YearsRest() {
            this.Filter_years = [];
            this.Filter_years_Start = "1000" + "-01-01T00:00:00.000Z";
            this.Filter_years_End = "5000" + "-12-31T00:00:00.000Z";
            for (var i = 0; i < this.movies.length; i++) {

                if (!this.years.includes(this.getReleaseYear(this.movies[i].releaseDate))) {
                    this.years.push(this.getReleaseYear(this.movies[i].releaseDate));
                }
            }
        },
        QualitiesRest() {
            this.Filter_Qualities = [];
            for (var i = 0; i < this.movies.length; i++) {
                var qua = "" + this.movies[i].movieQuality + "";
                var rep = qua.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "");
                if (!this.Qualities.includes(rep)) {
                    this.Qualities.push(rep);
                    this.Filter_Qualities = this.Qualities;
                }
            }
            this.$emit('update:QualityChange',this.Qualities);
        },
        AudienceRest() {
            this.Filter_audiences = [];
            for (var i = 0; i < this.movies.length; i++) {
                if (!this.audiences.includes(this.movies[i].audience)) {
                    this.audiences.push(this.movies[i].audience);
                     this.Filter_audiences = this.audiences;
                }
            }
            this.$emit('update:AudienceChange',this.audiences);
        },
        GenreRest(){
            this.Filter_genres = [];
            for (var i = 0; i < this.genres.length; i++) {
                this.Filter_genres.push(this.genres[i].name); 
            }
            this.$emit('update:genChange', this.Filter_genres);
        },
        languagesRest(){
            this.Filter_languages = [];
            for (var i = 0; i < this.languages.length; i++) {
                this.Filter_languages.push(this.languages[i].name);
            }
            this.$emit('update:LangChange',this.Filter_languages);
        },
    },
     mounted() {
        this.GenreRest();
        this.languagesRest();
        this.QualitiesRest();
        this.AudienceRest();
        this.YearsRest();
        this.$emit('update:filtersUpdate', this.$data);
    },
}
</script>