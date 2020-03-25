<template>
<div class="Headers" id="head">
    <!-- Top Nav -->
    <div class="small-nav">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 col-12">
                    <ul class="contact-us">
                        <li><a style="color:#00CF91" href="#">طلبات الاضافة</a></li>
                        <li><a style="color:#FE634E" href="#">سياسة الموقع</a></li>
                        <li><a style="color:#FFDC00" href="#">اتصل بنا</a></li>
                    </ul>
                </div>
                <div class="col-md-6 col-12">
                    <ul class="social">
                        <li><a href="#"> <i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"> <i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"> <i class="fab fa-twitter"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
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
                <nuxt-link to="/" exact class="navbar-brand">
                    Aflam.Club</nuxt-link>
                <!-- Header List -->
                <div :class="['collapse navbar-collapse', {'show scale-in-center' : mobMenu}]" id="navbarSupportedContent">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 mobile-hidden">
                                <SearchArea />
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <ul class="navbar-nav">
                                    <!-- Item .1 -->
                                    <!-- Item .2 -->
                                    <li class="nav-item" @click="mobMenu = false">
                                        <nuxt-link class="nav-link" to="/movies">
                                            <i class="im im-video"></i>
                                            الافلام
                                        </nuxt-link>
                                    </li>
                                    <!-- Item .3 -->
                                    <li class="nav-item" @click="mobMenu = false">
                                        <nuxt-link class="nav-link" to="/serieses">
                                            <i class="im im-monitor-o"></i>
                                            المسلسلات
                                        </nuxt-link>
                                    </li>
                                    <!-- Item .4 -->
                                    <li class="nav-item" @click="mobMenu = false">
                                        <nuxt-link class="nav-link" to="/anime">
                                            <i class="fas fa-paw fa-lg"></i>
                                            الانمي
                                        </nuxt-link>
                                    </li>
                                    <li class="nav-item pc-hidden" v-if="mobMenu">
                                        <!-- Night Mode Switch -->
                                        <div class="toggle toggle--daynight pc-hidden">
                                            <input @change="DarkMode()" type="checkbox" id="toggle--daynight" class="toggle--checkbox">
                                            <label class="toggle--btn" for="toggle--daynight"><span class="toggle--feature"></span></label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Night Mode Switch -->
                <div class="toggle toggle--daynight mobile-hidden">
                    <input @change="DarkMode()" type="checkbox" id="toggle--daynight" class="toggle--checkbox">
                    <label class="toggle--btn" for="toggle--daynight"><span class="toggle--feature"></span></label>
                </div>
                <!-- <div class="custom-control custom-switch">
                    <input @change="DarkMode()" type="checkbox" class="custom-control-input" id="customSwitch1">
                    <label class="custom-control-label" for="customSwitch1"></label>
                </div> -->
            </nav>
        </div> <!-- End Container -->
    </div>
  
    <div class="chat" v-if="$store.getters.RemberChoose == false">
        <div class="mine messages">
            <div class="message last">
                <p> عارف هتتفرج علي اي ولا تسبلي انا الموضوع دا ؟</p>
                <button @click="choose(0)">لا شكرا</button>
                  <button @click="choose(1)">يلا بينا</button>
            </div>
        </div>
    </div>
    <!-- Mobile SubHeader -->
    <div class="sub-head-mob">
        <SearchArea />
    </div>
    <!-- End Header -->
</div>
</template>

<script>
import SearchArea from "~/components/SearchArea.vue";
import Menu from "~/components/Menu.vue";
export default {
    data: function () {
        return {
            showSide: false,
            darkModeD: false,
            mobMenu: false,
        };
    },
    components: {
        SearchArea,
        Menu
    },
    methods: {
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
    mounted() {
        if (
            this.readCookie("darkModeD") == "true" &&
            this.readCookie("darkModeD") != null
        ) {
            this.$emit("update:darkMode", true);
            this.darkModeD = true;
        } else {
            this.$emit("update:darkMode", false);
            this.darkModeD = false;
        }
          if (this.readCookie("RemberChoose") == 0 &&  this.readCookie("RemberChoose") != null)
            {
              this.$store.commit('RemberChooseUpdate', true);
            }
            else{
              this.$store.commit('RemberChooseUpdate', false);
            }
        window.onscroll = function () {
            myFunction()
        };

        // Get the header
        var header = document.getElementById("head");

        // Get the offset position of the navbar
        var sticky = header.offsetTop;

        // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("fixed");
            } else {
                header.classList.remove("fixed");
            }
        }
    }
};
</script>
