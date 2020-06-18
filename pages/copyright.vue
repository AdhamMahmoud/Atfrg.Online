<template>
<div class="movies-genre" style="min-height:94vh;">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
              
                <div class="note">
                      <h2>حقوق الملكية الفكرية</h2>
إخلاء مسؤوليه <br>
نود أن نوضح أن جميع مايطرح  <br>
في الموقع من آراء أو برامج أو مواضيع إنما يعبر عن رأي كاتبه فقط  ولا يعبر عن  إدارة موقع  <br>
وإدارة الموقع تخلي مسؤوليتها عما تحتويه من انتهاك لحقوق الملكية الفكرية أو النشر أو الطبع في حالة نشر مادة خاضعة لحقوق الطبع و النشر والملكية الخاصة بكم على موقع  اتفرج اون لاين أو أُعيد عرضها من خلال محرك البحث الخاص بنا وترغب في حذفها، نرجو موافاتنا بإرسال إيميل يحتوى على معلومات مفصلة بهذا الصدد على الإيميل وسيتم مسحها فورا
                </div>
                <div class="note">adham.m11000@gmail.com</div>
            </div>
        </div>
        <!-- Container End -->
    </div>
</div>
</template>

<script>
import resultNotFound from "~/components/resultNotFound";
import gql from 'graphql-tag';
export default {
        head: {
     title:"    عجلة الافلام - اتفرج اون لاين مشاهدة افلام ومسلسلات وانمي مترجمة مجانا وبجودة عالية Atfrg.Online ",
     meta:[
        {  name: 'description', content:  "مشاهدة وتحميل مباشر افلام و مسلسلات وانمي بجودة عالية مترجمة - اتفرج اون لاين - بدون اعلانات"},
          {  name: 'keywords', content:  "مشاهدة مسلسل ,اتفرج اون لاين , مشاهدة مسلسل, مترجم, افلام اون لاين, افلام اجنبى, فيلم , تحميل افلام , مشاهدة افلام بجودة عالية , مشاهدة انمي اون لاين, تحميل موسم برابط واحد , مشاهدة بدون اعلانات , تحميل مباشر  , افلام جديدة , مسلسل "}
     ]
  },
   

};
</script>

<style lang="scss">
@import '~/assets/sass/_vars.scss';
@import '~/assets/sass/_mixins.scss';

    .note {
        text-align: center;
        margin-top:2rem;
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

</style>
