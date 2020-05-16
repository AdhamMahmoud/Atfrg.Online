<template lang="html">
 <div class="bug">
   <p>نعتذر عن اي اخطاء .. ساعدنا بتحسين الخدمة 😍</p>
   <br>
     <h4>التبيلغ عن الأخطاء</h4>
     <div v-if="form == true">
    <div class="form-group">
        <textarea v-model="bug" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
         <button @click="send">ارسال</button>
     </div>
        <i v-if="load"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style=" display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<circle cx="50" cy="50" fill="none" stroke="#93dbe9" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(53.2159 50 50)">
  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
</circle></svg></i>
        <div v-if="done"  class="alert alert-success" role="alert">
       شكرا لك 😍 ! سيتم حل تلك المشكلة في اقرب وقت.
        </div>
 </div>
</template>

<script>
import gql from "graphql-tag";
const AddBug = gql `
  mutation($title:String!,$bug:String!){
  createBugs(data:{
    ItemTitle:$title,
    bug:$bug
  }){
    id
  }
}
 `;
export default {
  data: () => ({
    load: false,
    done:false,
    form:true,
    bug:"",
  }),
  props:{
      title:String
  },
  methods: {
    send () {
      if(this.bug.length < 1){
        return;
      }
     this.load = true;
     this.form = false;
       this.$apollo.mutate({
        mutation: AddBug,
            variables: {
                title: this.$props.title,
                bug: this.bug
            },
        }).then((data) => {
             this.load = false;
             this.done = true;
        }).catch((error) => {
            console.log(error);
        });
    },
    finish () {
      this.loading = false
    }
  },
}
</script>

<style lang="scss" scoped="">
@import '~/assets/sass/_vars.scss';
@import '~/assets/sass/_mixins.scss';

.bug{
        text-align: center;
    width: 50%;
    margin: 0 auto;
    // box-shadow: 0px 0px 2px 0px #949494;
    padding: 2rem;
    h4{
        color: #fff702;
        margin-bottom:20px;
    }
    .form-control{
        outline:none;
        box-shadow:none;
         border-radius: 20px;
    }
     svg{
        height: 30px;
        margin: 1rem auto;
        background-color: transparent;
    }
    button{
      background-color: #5f4cff;
    color: #fff;
    padding: 8px 2rem;
    border: none;
    border-radius: 20px;
    }
}
@include sm{
    .bug{
        width:100%
    }
}
</style>