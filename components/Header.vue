<template>
<div :class="['Headers', {'fixed' : scrolled}]" id="head">
    
    <!-- Top Nav -->
    <!-- <div class="small-nav">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 col-12">
                    <ul class="contact-us mobile-hidden">
                        <li class="mobile-hidden"><a style="color:#00CF91" href="#">طلبات الاضافة</a></li>
                        <li class="mobile-hidden"><nuxt-link style="color:#FE634E" to="/copyright">حقوق الملكية</nuxt-link></li>
                        <li class="mobile-hidden"><a style="color:#FFDC00" href="#">اتصل بنا</a></li>  
                    </ul>
                    <div v-if="Size" class="toggle toggle--daynight top-swtich pc-hidden" id="darkss">
                        <input @change="DarkMode()" type="checkbox" id="toggle--daynight" class="toggle--checkbox"/>
                        <label class="toggle--btn" for="toggle--daynight"><span class="toggle--feature"></span></label>
                    </div>
                   <nuxt-link class="pc-hidden" to="/mood" style="padding: 7px;  float: right;color: #fc0 !important;font-size: 17px;">اختارلي ! </nuxt-link>
                </div>
                <div class="col-md-6 col-12 mobile-hidden">
                    <ul class="social">
                        <li><a href="https://www.facebook.com/atfrg.online0/" target="_black"> <i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"> <i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"> <i class="fab fa-twitter"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div> -->
    <!-- Start Header -->
    <div class="header">
        <Menu :showSide="showSide" />
        <!-- Header Container -->
        <div class="container-fluid">
            <!-- Header Nav -->
            <nav class="navbar navbar-expand-lg">
                <!--  @click="showSide = !showSide" -->
                <button class="navbar-toggler" type="button" @click="toggleMobile" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars fa-lg"></i>
                </button>
                <!-- Header Logo -->
                <nuxt-link to="/" exact class="navbar-brand" title="logo">
                <img class="atfrg-logo" src="https://atfrgimages.b-cdn.net/images/logo.svg" alt="logo" title="logo">
                </nuxt-link>
                <!-- Header List -->
                <div :class="['collapse navbar-collapse', {'show scale-in-center' : mobMenu}]" id="navbarSupportedContent">
                    <div class="container">
                        <div class="row" style="width: 100%;">
                            <div class="col-md-6 mobile-hidden">
                                <SearchArea />
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <ul class="navbar-nav">
                                    <!-- Item .1 -->
                                    <!-- Item .2 -->
                                    <li class="nav-item" @click="mobMenu = false">
                                        <nuxt-link class="nav-link" to="/movies">

<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
<g>
	<g>
		<path d="M443.86,196.919L141.46,10.514C119.582-2.955,93.131-3.515,70.702,9.016c-22.429,12.529-35.819,35.35-35.819,61.041
			v371.112c0,38.846,31.3,70.619,69.77,70.829c0.105,0,0.21,0.001,0.313,0.001c12.022-0.001,24.55-3.769,36.251-10.909
			c9.413-5.743,12.388-18.029,6.645-27.441c-5.743-9.414-18.031-12.388-27.441-6.645c-5.473,3.338-10.818,5.065-15.553,5.064
			c-14.515-0.079-30.056-12.513-30.056-30.898V70.058c0-11.021,5.744-20.808,15.364-26.183c9.621-5.375,20.966-5.135,30.339,0.636
			l302.401,186.405c9.089,5.596,14.29,14.927,14.268,25.601c-0.022,10.673-5.261,19.983-14.4,25.56L204.147,415.945
			c-9.404,5.758-12.36,18.049-6.602,27.452c5.757,9.404,18.048,12.36,27.452,6.602l218.611-133.852
			c20.931-12.769,33.457-35.029,33.507-59.55C477.165,232.079,464.729,209.767,443.86,196.919z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

                                            الافلام
                                        </nuxt-link>
                                    </li>
                                    <!-- Item .3 -->
                                    <li class="nav-item" @click="mobMenu = false">
                                        <nuxt-link class="nav-link" to="/serieses">
                                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 383.563 383.563" style="enable-background:new 0 0 383.563 383.563;" xml:space="preserve">
<g>
	<path d="M359.399,62.563H239.697c-0.929-5.959-2.956-11.555-5.852-16.592l99.926-31.312c3.953-1.238,6.153-5.447,4.915-9.399
		c-1.239-3.953-5.446-6.156-9.399-4.914L223.562,33.475c-8.519-7.41-19.632-11.912-31.783-11.912
		c-12.151,0-23.263,4.502-31.782,11.912L54.271,0.346c-3.954-1.239-8.161,0.962-9.399,4.914c-1.239,3.953,0.961,8.161,4.914,9.399
		l99.926,31.312c-2.896,5.037-4.923,10.633-5.852,16.592H24.164c-12.445,0-22.57,10.125-22.57,22.569v253.861
		c0,12.445,10.125,22.57,22.57,22.57h3.617v14.5c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-14.5h298v14.5
		c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-14.5h3.617c12.444,0,22.569-10.125,22.569-22.57V85.132
		C381.969,72.688,371.844,62.563,359.399,62.563z M191.779,36.563c15.893,0,29.227,11.128,32.644,26h-65.287
		C162.552,47.692,175.885,36.563,191.779,36.563z M366.969,338.993c0,4.174-3.396,7.57-7.569,7.57H24.164
		c-4.174,0-7.57-3.396-7.57-7.57V85.132c0-4.174,3.396-7.569,7.57-7.569h335.235c4.174,0,7.569,3.396,7.569,7.569V338.993z"/>
	<path d="M346.972,103.687c-0.577-3.369-3.358-5.922-6.764-6.208c-98.491-8.285-198.365-8.285-296.854,0
		c-3.406,0.287-6.187,2.839-6.764,6.208c-11.912,69.591-11.912,140.162,0,209.752c0.577,3.369,3.358,5.921,6.764,6.208
		c49.244,4.143,98.835,6.214,148.427,6.214c49.591,0,99.182-2.071,148.427-6.214c3.405-0.287,6.187-2.839,6.764-6.208
		C358.884,243.848,358.884,173.278,346.972,103.687z M333.14,305.179c-93.832,7.576-188.886,7.576-282.716,0
		c-10.354-64.139-10.354-129.093,0-193.232c93.831-7.576,188.884-7.576,282.716,0C343.493,176.086,343.493,241.04,333.14,305.179z"
		/>
	<path d="M321.094,168.689c-4.136,0.229-7.303,3.768-7.073,7.904c1.457,26.309,1.103,52.978-1.054,79.266
		c-0.339,4.128,2.733,7.75,6.861,8.088c0.209,0.017,0.416,0.025,0.621,0.025c3.864,0,7.146-2.968,7.467-6.887
		c2.213-26.97,2.577-54.331,1.081-81.323C328.768,171.627,325.247,168.466,321.094,168.689z"/>
	<path d="M319.672,159.642c0.241,0,0.485-0.012,0.73-0.035c4.123-0.399,7.143-4.064,6.743-8.188
		c-0.743-7.689-1.651-15.482-2.698-23.165c-0.56-4.105-4.355-6.977-8.444-6.418c-4.104,0.56-6.979,4.34-6.419,8.444
		c1.021,7.489,1.906,15.087,2.632,22.583C312.591,156.741,315.854,159.642,319.672,159.642z"/>
	<path d="M357.635,325.832c-5.754-3.788-13.351,1.804-11.339,8.411c0.913,2.997,3.672,5.151,6.801,5.309
		c3.269,0.165,6.321-1.891,7.431-4.962C361.675,331.414,360.459,327.691,357.635,325.832z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
                                            المسلسلات
                                        </nuxt-link>
                                    </li>
                                    <!-- Item .4 -->
                                    <li class="nav-item" @click="mobMenu = false">
                                        <nuxt-link class="nav-link" to="/anime">
                                           <svg id="Layer_1" enable-background="new 0 0 256 256"  viewBox="0 0 256 256"><path d="m233.295 40.2-5.639-2.513c-3.787-1.688-5.489-6.126-3.801-9.913l.474-1.064c1.688-3.787 6.126-5.489 9.913-3.801l5.639 2.513c3.787 1.688 5.489 6.126 3.801 9.913l-.474 1.064c-1.688 3.786-6.126 5.488-9.913 3.801z" fill="#e0ebfc"/><circle cx="126.882" cy="107.158" fill="#6bdddd" r="82.218"/><path d="m127.749 162.275c-13.783 0-24.997-9.619-24.997-21.443 0-1.657 1.343-3 3-3s3 1.343 3 3c0 8.515 8.522 15.443 18.997 15.443s18.997-6.928 18.997-15.443c0-1.657 1.343-3 3-3s3 1.343 3 3c0 11.824-11.214 21.443-24.997 21.443z" fill="#3762cc"/><circle cx="126.882" cy="87.944" fill="#e0ebfc" r="43.552"/><circle cx="126.882" cy="87.944" fill="#a4c9ff" r="29.78"/><circle cx="126.882" cy="87.882" fill="#4671c6" r="15.538"/><circle cx="135.292" cy="76.461" fill="#e0ebfc" r="7.769"/><path d="m126.882 133.496c-25.117 0-45.552-20.435-45.552-45.552s20.435-45.552 45.552-45.552c25.118 0 45.552 20.435 45.552 45.552 0 25.118-20.434 45.552-45.552 45.552zm0-87.104c-22.912 0-41.552 18.64-41.552 41.552s18.64 41.552 41.552 41.552 41.552-18.64 41.552-41.552-18.64-41.552-41.552-41.552z" fill="#3762cc"/><path d="m126.882 191.376c-46.438 0-84.217-37.78-84.217-84.218s37.78-84.217 84.217-84.217c46.438 0 84.218 37.78 84.218 84.217 0 46.438-37.78 84.218-84.218 84.218zm0-164.435c-44.232 0-80.217 35.985-80.217 80.217s35.985 80.218 80.217 80.218 80.218-35.985 80.218-80.218c0-44.232-35.986-80.217-80.218-80.217z" fill="#3762cc"/><path d="m57.678 151.523c-.01-.008-.018-.017-.028-.025l-23.542-19.106c-1.317-1.069-1.09-3.141.427-3.9l11.614-5.807c-.962-5.03-1.484-10.216-1.484-15.526 0-.565.031-1.123.043-1.686l-28.949 16.676c-5.495 3.166-5.445 11.113.09 14.209l33.344 18.65v7.586c0 2.686 2.177 4.863 4.863 4.863h1.459c2.095 0 3.793-1.698 3.793-3.793v-8.687c0-.437-.07-.864-.192-1.274-.494-.718-.968-1.448-1.438-2.18z" fill="#e0ebfc"/><path d="m233.295 40.2-5.639-2.513c-.67-.298-1.27-.686-1.802-1.138l-22.738 39.816c3.216 7.953 5.223 16.519 5.795 25.48l25.831-61.168c-.489-.108-.973-.266-1.447-.477z" fill="#e0ebfc"/><g fill="#3762cc"><path d="m236.336 42.85c-1.291 0-2.602-.265-3.855-.823l-5.639-2.513c-4.788-2.134-6.948-7.766-4.814-12.554l.474-1.064c1.033-2.319 2.909-4.098 5.28-5.007 2.372-.91 4.955-.841 7.274.193l5.639 2.513c4.788 2.133 6.948 7.765 4.814 12.553l-.474 1.064c-1.576 3.535-5.058 5.638-8.699 5.638zm-2.228-4.477c2.772 1.235 6.036-.016 7.272-2.789l.474-1.063c.599-1.344.638-2.84.111-4.213s-1.557-2.459-2.9-3.059l-5.639-2.513c-1.344-.599-2.841-.638-4.213-.111-1.374.527-2.459 1.557-3.059 2.9l-.474 1.064c-1.236 2.773.015 6.036 2.789 7.272z"/><path d="m55.514 169.456h-1.459c-3.784 0-6.863-3.079-6.863-6.863v-6.413l-32.32-18.077c-3.236-1.81-5.182-5.104-5.206-8.812-.023-3.707 1.881-7.025 5.094-8.875l28.948-16.676c.625-.36 1.396-.355 2.017.011.621.367.996 1.041.981 1.762l-.02.685c-.011.319-.022.639-.022.96 0 5.025.487 10.123 1.448 15.15.168.879-.269 1.764-1.07 2.165l-11.614 5.807c-.108.054-.169.142-.183.262s.028.219.122.295l23.542 19.107c.028.022.062.052.092.079.138.122.259.263.358.418.458.715.92 1.427 1.401 2.125.119.173.21.364.27.565.182.614.274 1.234.274 1.843v8.688c.003 3.195-2.596 5.794-5.79 5.794zm-12.83-60.51-25.927 14.935c-1.949 1.123-3.104 3.136-3.09 5.385s1.195 4.248 3.158 5.346l33.343 18.65c.632.354 1.024 1.021 1.024 1.746v7.586c0 1.579 1.284 2.863 2.863 2.863h1.459c.989 0 1.793-.804 1.793-1.793v-8.688c0-.142-.015-.289-.044-.439-.374-.55-.737-1.108-1.097-1.668l-23.318-18.924c-1.148-.932-1.738-2.366-1.578-3.837.161-1.471 1.047-2.743 2.371-3.405l10.271-5.136c-.725-4.193-1.137-8.425-1.228-12.621z"/><path d="m208.911 103.844c-.111 0-.223-.009-.335-.028-.915-.155-1.603-.918-1.662-1.844-.547-8.571-2.449-16.935-5.653-24.857-.23-.568-.187-1.21.117-1.742l22.738-39.816c.295-.517.805-.875 1.39-.978.587-.105 1.187.061 1.641.445.406.344.851.625 1.322.836l5.638 2.513c.344.153.702.271 1.063.351.58.127 1.074.506 1.347 1.034s.297 1.149.066 1.697l-25.831 61.168c-.316.749-1.048 1.221-1.841 1.221zm-3.581-27.323c2.206 5.642 3.787 11.491 4.726 17.471l22.021-52.146-5.234-2.333c-.101-.044-.2-.091-.298-.139z"/></g><path d="m91.252 181.275 2.328 38.135c.033.542-.307 1.037-.824 1.2l-13.409 4.238c-1.894.598-3.181 2.355-3.181 4.341 0 2.514 2.038 4.553 4.553 4.553h19.148c3.349 0 6.099-2.646 6.229-5.993l1.568-40.656c-5.725-1.37-11.224-3.319-16.412-5.818z" fill="#6bdddd"/><path d="m174.418 224.849-13.409-4.238c-.518-.164-.858-.659-.825-1.2l2.328-38.135c-5.188 2.499-10.687 4.448-16.411 5.819l1.568 40.656c.129 3.346 2.88 5.993 6.228 5.993h19.148c2.514 0 4.553-2.038 4.553-4.553.001-1.987-1.286-3.744-3.18-4.342z" fill="#6bdddd"/><path d="m99.866 235.743h-19.148c-3.613 0-6.553-2.94-6.553-6.553 0-2.872 1.84-5.383 4.578-6.248l12.801-4.046-2.289-37.499c-.043-.708.292-1.387.881-1.782s1.343-.45 1.983-.142c5.047 2.43 10.434 4.34 16.009 5.676.928.222 1.569 1.069 1.533 2.022l-1.569 40.656c-.17 4.439-3.784 7.916-8.226 7.916zm-6.415-51.267 2.125 34.813c.09 1.46-.822 2.789-2.218 3.23l-13.409 4.238c-1.066.337-1.783 1.315-1.783 2.434 0 1.408 1.145 2.553 2.553 2.553h19.147c2.284 0 4.142-1.788 4.23-4.07l1.506-39.033c-4.178-1.087-8.248-2.482-12.151-4.165zm-1.868 35.056h.01z" fill="#3762cc"/><path d="m173.046 235.743h-19.148c-4.442 0-8.055-3.477-8.227-7.916l-1.568-40.656c-.037-.953.605-1.8 1.533-2.022 5.576-1.336 10.962-3.246 16.009-5.676.64-.308 1.393-.255 1.983.142.589.396.924 1.074.881 1.782l-2.289 37.499 12.801 4.046c2.738.865 4.578 3.376 4.578 6.248 0 3.613-2.94 6.553-6.553 6.553zm-24.884-47.103 1.506 39.033c.088 2.282 1.946 4.07 4.23 4.07h19.148c1.408 0 2.553-1.146 2.553-2.553 0-1.119-.717-2.097-1.783-2.434l-13.409-4.238c-1.396-.441-2.308-1.77-2.218-3.23l2.125-34.813c-3.904 1.684-7.974 3.079-12.152 4.165z" fill="#3762cc"/><ellipse cx="186.539" cy="120.232" fill="#f9a7a7" rx="13.643" ry="8.19"/><ellipse cx="67.039" cy="120.232" fill="#f9a7a7" rx="13.643" ry="8.19"/></svg>
                                            الانمي
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Night Mode Switch -->
                
                <div class="toggle toggle--daynight mobile-hidden" id="darkss" style="display:none">
                    <input @change="DarkMode()" type="checkbox" id="toggle--daynight" class="toggle--checkbox">
                    <label class="toggle--btn" for="toggle--daynight"><span class="toggle--feature"></span></label>
                </div>
                   
                <!-- <div class="custom-control custom-switch">
                    <input @change="DarkMode()" type="checkbox" class="custom-control-input" id="customSwitch1">
                    <label class="custom-control-label" for="customSwitch1"></label>
                </div> -->
            </nav>
          
        </div> <!-- End Container -->
            <div class="sub-head-mob">
        <SearchArea />
    </div>
    </div>
    
    <div class="chat" v-if="$store.getters.RemberChoose == false">
        <div class="mine messages">
            <div class="message last">
                <p>انا ممكن اساعدك واختارلك فيلم رايق !</p>
                <button @click="choose(0)">لا تسلم</button>
                  <button @click="choose(1)">يلا بينا</button>
            </div>
        </div>
    </div>
    <!-- Mobile SubHeader -->
  
    <!-- End Header -->
</div>
</template>

<script>
// if (process.client) {

//         window.onscroll = function () {
//                     var header = document.getElementById("head");

//         // Get the offset position of the navbar
//         var sticky = header.offsetTop;
           
//                        if (window.pageYOffset > sticky) {
//                 header.classList.add("fixed");
//             } else {
//                 header.classList.remove("fixed");
//             }
//         };
// }
import SearchArea from "~/components/SearchArea.vue";
import Menu from "~/components/Menu.vue";
export default {
    data: function () {
        return {
            showSide: false,
            darkModeD: false,
            mobMenu: false,
            scrolled: false
        };
    },
    components: {
        SearchArea,
        Menu,
    },
    methods: {
         handleScroll () {
                this.scrolled = window.scrollY > 0;
            },
        toggleMobile() {
            if (this.mobMenu == true) {
                this.mobMenu = false;
            } else {
                this.mobMenu = true;
            }
        },
        choose(type){
          if(type == 1){
           this.$router.push("/mood");
          }
            this.createCookie("RemberChoose", 0, 2);
            this.$store.commit('RemberChooseUpdate', true)
        },
        DarkMode() {
            if (this.darkModeD == false) {
                this.darkModeD = true;
                this.$emit("update:darkMode", true);
            } else {
                this.darkModeD = false;
                this.$emit("update:darkMode", false);
            }
            this.createCookie("darkModeD", "", -1);
            this.createCookie("darkModeD", this.darkModeD, 2);
        },
        createCookie(name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
                var expires = "; expires=" + date.toGMTString();
            } else var expires = "";
            document.cookie = name + "=" + value + expires + "; path=/";
        },
        readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(";");
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == " ") c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }
    },
    beforeMount  () {
    window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy  () {
    window.removeEventListener('scroll', this.handleScroll);
    },
    mounted() {
          if (process.client) {
            if(window.innerWidth > 800){
        if (this.readCookie("darkModeD") == "true" || this.readCookie("darkModeD") == null) {
                 document.getElementById("toggle--daynight").click(); 
   
        } else {
            this.$emit("update:darkMode", false);
            this.darkModeD = false;
        }
            }
          }
          if (this.readCookie("RemberChoose") == 0 &&  this.readCookie("RemberChoose") != null)
            {
              this.$store.commit('RemberChooseUpdate', true);
            }
            else{
              this.$store.commit('RemberChooseUpdate', false);
            }

    },
    computed:{
        Size(){
            if (process.client) {
            if(window.innerWidth < 800){
                   this.timer = setTimeout(() => {
                    if (this.readCookie("darkModeD") == "true" || this.readCookie("darkModeD") == null) {
                 document.getElementById("toggle--daynight").click(); 
   
                } else {
                    this.$emit("update:darkMode", false);
                    this.darkModeD = false;
                }
                }, 500);
                               
                return true;
            }}
            return false;
        }
    }
};
</script>
