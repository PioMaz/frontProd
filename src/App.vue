<template>
  <v-app>
    <div v-if="account == false">
      <LoginForm @login="signIn()"></LoginForm>
    </div>
    <div id="mainContent" v-if="account == true">
      <div id="content-div">
        <div id="navbar">
          <v-toolbar density="compact" style="background-color: transparent">
            <v-toolbar-title>
              <p style="color: #fff;">Placeholder</p>
            </v-toolbar-title>

            <!-- Desktop navigation -->
            <div class="d-none d-md-flex align-center flex-grow-1">
              <RouterLink to="/"><v-list-item class="item-hover menuItem">Warehouse </v-list-item></RouterLink>
              <RouterLink to="/production"><v-list-item class="item-hover menuItem">Production </v-list-item>
              </RouterLink>
              <RouterLink to="/planning"><v-list-item class="item-hover menuItem">Planning </v-list-item></RouterLink>
              <v-spacer></v-spacer>
              <v-divider vertical color="#fff" class="me-2"></v-divider>
              <div class="d-flex">
                <v-icon icon="mdi-account" class="me-2" color="#fff"></v-icon>
                <h4 class="me-4" style="color: #fff; font-weight: 100;">Jan Kowalski</h4>
              </div>
              <v-divider vertical color="#fff"></v-divider>
              <v-btn @click="signOut()" prepend-icon="mdi-logout" class="ms-5" color="#fff">Log Out</v-btn>
            </div>

            <!-- Mobile navigation -->
            <div class="d-flex d-md-none">
              <v-menu offset-y>
                <template #activator="{ props }">
                  <v-btn icon v-bind="props">
                    <v-icon icon="mdi-menu" color="#fff"></v-icon>
                  </v-btn>
                </template>
                <v-list style="width: 60vw!important;">
                   <v-list-item>
                    <v-icon icon="mdi-account" class="me-2" color="#000"></v-icon>
                    <span style="color: #000; font-weight: 100;">Jan Kowalski</span>
                  </v-list-item>
                  <v-divider></v-divider>
                  <RouterLink to="/">
                    <v-list-item class="item-hover menuItem">Warehouse</v-list-item>
                  </RouterLink>
                  <RouterLink to="/production">
                    <v-list-item class="item-hover menuItem">Production</v-list-item>
                  </RouterLink>
                  <RouterLink to="/planning">
                    <v-list-item class="item-hover menuItem">Planning</v-list-item>
                  </RouterLink>
                  <v-divider></v-divider>
                  <v-list-item>
                    <v-btn @click="signOut()" prepend-icon="mdi-logout" color="primary" variant="text" block>Log Out</v-btn>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-toolbar>
        </div>
        <div id="subcontent" v-if="account == true">
          <v-btn icon="mdi-arrow-up" variant="elevated" color="#000" @click="scrollToTop" id="myButton" class="d-none"
            style="position: fixed; bottom: 130px; right: 80px; z-index: 1000"></v-btn>
          <MainContent></MainContent>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import MainContent from "./components/MainContent.vue";
import LoginForm from "./LoginForm.vue";
export default {
  name: "App",
  data() {
    return {
      account: true,
    };
  },
  created() {
    window.addEventListener("scroll", this.actionScroll);
  },

  methods: {
    actionScroll() {
      const scroll = window.scrollY;

      const buttonToTop = document.getElementById("myButton");
      if (scroll > 250) {
        buttonToTop.classList.remove("d-none");
      } else {
        buttonToTop.classList.add("d-none");
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    signIn() {
      this.account = true
    },
    signOut() {
      this.account = false;
      this.$router.push("/");
    }
  },
  components: {
    MainContent,
    LoginForm,

  },
};
</script>

<style>
html,
body {
  overflow: auto !important;
}

.v-application__wrap {
  background-color: #fff;
}

#content-div {
  width: 100% !important;
  overflow: auto !important;
}

#subcontent {
  height: 100% !important;
  overflow: auto !important;
  margin-top: 80px;
  /* padding: 15px 15px 2500px; */
  /* padding: 15px; */
  font-size: 30px;
}

.router-link-active .v-list-item__content {
  color: #fff !important;
  font-weight: bold !important;
  border-bottom: 10px solid #fff !important;
  margin-bottom: -8px;
}

/* .router-link-active>.v-list-item {
  text-decoration: underline !important;
  color: #fff !important;
  text-underline-offset: 0.3em;
} */

.item-hover {
  font-size: 18px;
  margin-top: 5px !important;
  margin-bottom: 0 !important;
}

.item-hover.v-list-item>.v-list-item__content {
  color: #fff;
  text-decoration: none !important;
}

a {
  text-decoration: none !important;
  letter-spacing: 3px;
}

#navbar {
  background-color: #339cff;
  /* padding: 10px; */
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  box-shadow: 1px 1px 1px -1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 1px 1px 1px -1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 1px 1px 1px -1px rgba(0, 0, 0, 0.2);
}

.menuItem{
  text-transform: uppercase;
}

@media (max-width: 959px) {
  .item-hover.v-list-item>.v-list-item__content {
    color: #000;
    text-decoration: none !important;
  }

  .router-link-active .v-list-item__content {
    color: #339cff !important;
    font-weight: bold !important;
    /* border-bottom: 8px solid #fff !important; */
    /* margin-bottom: -5px; */
  }

  .item-hover {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
