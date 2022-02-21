<template>
    <div :class="[ 'side-menu' , {'show-side' : showSide , 'hide-side': !showSide}]">
        <h4><button @click="movielist = !movielist" class="side-btn">الافلام <i class="fas fa-chevron-left"></i></button></h4>
               <ApolloQuery :query="gql => gql`
               query GetGenres {
                genres{
                    id
                    name
                    }
                }
                `" >
                    <template v-slot="{ result: { loading, error, data } }">
                        <!-- Loading -->
                        <div v-if="loading" class="loading apollo">
                            <img src="load.svg" class="svg-load" height="32px" width="32px" />
                        </div>
                        <!-- Error -->
                        <div v-else-if="error" class="error apollo"> <resultNotFound /></div>
                        <!-- Result -->
                        <div v-else-if="data && data.genres.length > 0">
                             <ul :class="['side-list' , {'hide-list' : !movielist}]" v-bind="GetGeners(data.genres)">
                             <!-- Container End -->
                             <li v-for="genre in Geners" :key="genre"> <nuxt-link :to="'/movie/genre/' + genre">{{ genre }}</nuxt-link></li>
                             </ul>
                            <!-- No result -->
                        </div>
                       <resultNotFound />
                    </template>
                </ApolloQuery>
    </div>
</template>
<script>
import resultNotFound from "~/components/resultNotFound";
export default {
   components: {
        resultNotFound,
    },
    data:function(){
        return{
            Geners: ['Action'],
            movielist:false
        }
    },
    props:{
        showSide:Boolean
    },
    methods:{
          GetGeners(generes){
          for(var i = 0; i < generes.length; i++)
          { 
            if(!this.Geners.includes(generes[i].name))
            {
              this.Geners.push(generes[i].name);
            }
          }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/sass/_vars.scss';
@import '~/assets/sass/_mixins.scss';
.side-menu{
    padding:2rem 0;
    position: fixed;
    top: 7rem;
    right: -100%;
    background-color: $primary-color;
    color: #fff;
    height: 100%;
    width: 20rem;
    z-index: 999;
    text-align: right;
    @include transition(1s);
    h4{
        padding:0 20px;
    }
    .side-btn{
        border:none;
        padding:1rem 0;
        background-color: transparent;
        display: block;
        width:100%;
        color:#fff;
        text-align: right;
        outline: none;
        i{
            font-size: 1.2rem;
            float: left;
            margin-top: 4px;
        }
    }
    .hide-list{
        display: none;
         @include transition(1s);
         -webkit-animation: fade-in-right 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
         animation: fade-in-right 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
    .side-list{
         @include transition(1s);
         background:#0a3a7d;
         list-style: none;
         margin:0;
         -webkit-animation: fade-in-right 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        animation: fade-in-right 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        li{
            line-height: normal;
            border-bottom: 1px solid $primary-color;
            padding: 0.5rem 1rem;
            a{
              color:#fff;
              @include transition(0.3s);
              text-decoration: none;
              display: block;
              &:hover{
                color:$secondary-color;
                @include transition(0.3s);
              }
            }
        }
    }
}
.show-side{
    right: 0;
    -webkit-animation: fade-in-right 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: fade-in-right 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
.hide-side{
    right: -100%;
    -webkit-animation: fade-out-right 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: fade-out-right 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@-webkit-keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(50px);
            transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(50px);
            transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@-webkit-keyframes fade-in-right {
  0% {
    -webkit-transform: translateX(50px);
            transform: translateX(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fade-in-right {
  0% {
    -webkit-transform: translateX(50px);
            transform: translateX(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@-webkit-keyframes fade-out-right {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(50px);
            transform: translateX(50px);
    opacity: 0;
  }
}
@keyframes fade-out-right {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(50px);
            transform: translateX(50px);
    opacity: 0;
  }
}

</style>