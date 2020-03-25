<template>
<div class="container">
   <div class="row">
       <div class="col-md-12">
            <div class="no-result">
        <h4>حصل خطأ اثناء معالجة البيانات يرجع اعادة المحاولة لاحقا. <span @click="reloadPage()">افلام كلاب</span></h4>
    </div>
       </div>
   </div>
</div>
</template>
<script>
export default {
    methods: {
  reloadPage(){
    window.location.reload()
  }
}
}
</script>
<style lang="scss" scoped>
@import '~/assets/sass/_vars.scss';
@import '~/assets/sass/_mixins.scss';
.no-result{
    text-align:center;
    background-color: $primary-color;
    color:#fff;
    padding: 0.5rem 4rem;
    border-radius: 2rem;
    margin: 1rem auto;
    span{
        color:$secondary-color;
        text-decoration: none;
        cursor:pointer;
    }
}
</style>