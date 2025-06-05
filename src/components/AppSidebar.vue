<template>
  <div>
    <div v-if="$vuetify.breakpoint.width < 700">
      <v-app-bar color="deep-purple" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title style="font-weight: bold;">Luca Canali</v-toolbar-title> 
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group active-class="deep-purple--text text--accent-4">

            <v-list-item @click="goToHome">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item @click="goToProjects">
              <v-list-item-icon>
                <v-icon>mdi-folder-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Projects</v-list-item-title>
            </v-list-item>

            <v-list-item @click="goToInfo">
              <v-list-item-icon>
                <v-icon>mdi-information-outline</v-icon> <!-- icona per Info, opzionale -->
              </v-list-item-icon>
              <v-list-item-title>Info</v-list-item-title>
            </v-list-item>

            <v-list-item @click="goToGithub">
              <v-list-item-icon>
                <v-icon>mdi-github</v-icon>
              </v-list-item-icon>
              <v-list-item-title>GitHub</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>

    <div v-else id="sidebar">
      <div class="header-container">
        <!-- Avatar e nome -->
        <div class="avatar-name-container">
          <el-avatar :size="40" :src="circleUrl"></el-avatar>
        </div>

        <!-- Menu -->
        <el-menu class="el-menu-demo" mode="horizontal" background-color="black" text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item @click="goToHome" style="font-size: x-large;">Luca Canali</el-menu-item>
          <el-menu-item @click="goToHome" style="font-size: large;">Home</el-menu-item>
          <el-menu-item @click="goToProjects" style="font-size: large;">Projects</el-menu-item>
          <el-menu-item @click="goToInfo" style="font-size: large;">Info</el-menu-item>
          <el-menu-item @click="goToGithub" style="color: grey;"><span style="padding-right: 8%;">GitHub</span><i
              class="fa-solid fa-arrow-up-right-from-square"></i></el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>

</template>

<script>
import avatar from '../assets/pictures/avatar.jpg'
import gitPic from '../assets/icons/github-mark-white.svg'
import '../assets/css/colors.css'

export default {
  data() {
    return {
      circleUrl: avatar,
      githubProfile: "https://github.com/Luca9862",
      githubPicture: gitPic,
      drawer: false
    };
  },
  methods: {
    goToEmpty() {
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
    },
    goToHome() {
      if (this.$route.path !== '/home') {
        this.$router.push('/home');
      }
    },
    goToProjects() {
      if (this.$route.path !== '/projects') {
        this.$router.push('/projects');
      }
    },
    goToInfo() {
      if (this.$route.path !== '/info') {
        this.$router.push('/info');
      }
    },
    goToGithub() {
      window.open(this.githubProfile, "_blank");
    }
  }
};
</script>

<style>
#sidebar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: background-color;

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* Spazio tra avatar+nome e menu */
  }

  .avatar-name-container {
    display: flex;
    align-items: center;
  }

  .username {
    margin-left: 10px;
    color: #fff;
    font-size: 18px;
  }

  .el-menu-demo {
    flex-grow: 1;
    /* Il menu si espanderà per occupare lo spazio disponibile */
    margin-left: 20px;
    font-weight: bold;
  }


}

.v-navigation-drawer__content {
  background: #f2f2f2;
}
</style>
