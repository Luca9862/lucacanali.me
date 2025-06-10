<template>
  <div>
    <div v-if="$vuetify.breakpoint.width < 700">
      <v-app-bar color="deep-purple" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title class="title-mobile">Luca Canali</v-toolbar-title> 
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary class="dark-drawer">
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
      <!---->
      <v-app-bar
        color="#1E1E1E"
        dark
      >

        <template v-slot:extension>
          <span class="title-desktop">Luca Canali</span>
          <v-tabs
            v-model="activeTab"
            background-color="#1E1E1E"
            dark
          >
            <v-tab value="/home" to="/home">Home</v-tab>
            <v-tab value="/projects" to="/projects">Projects</v-tab>
            <v-tab value="/info" to="/info">Info</v-tab>
          </v-tabs>
          <v-btn icon :href="'https://linktr.ee/lucacanali'" target="_blank">
              <img :src="linkTreeIcon" alt="LinkTree" style="width: 24px; height: 24px;" />
          </v-btn>

          <v-btn icon @click="goToGithub">
              <v-icon>mdi-github</v-icon>
          </v-btn>

          <v-btn icon :href="'https://www.linkedin.com/in/luca-canali-2bb755193/'">
              <v-icon>mdi-linkedin</v-icon>
          </v-btn>
        </template>
      </v-app-bar>
    </div>
  </div>

</template>

<script>
import avatar from '../assets/pictures/avatar.jpg'
import gitPic from '../assets/icons/github-mark-white.svg'
import '../assets/css/colors.css'
import linkTreeIcon from '../assets/icons/icons8-linktree.svg'

export default {
  data() {
    return {
      circleUrl: avatar,
      githubProfile: "https://github.com/Luca9862",
      githubPicture: gitPic,
      drawer: false,
      linkTreeIcon: linkTreeIcon,
      activeTab: this.$route.path

    };
  },
  watch: {
    '$route.path'(newPath) {
      this.activeTab = newPath;
    }
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
.v-list-item{
  .v-list-item__title{
      color: white;
  }
}
.v-icon.v-icon {
  color: white;
}


.v-navigation-drawer__content {
  background: #1E1E1E;
}

.v-app-bar-title__content {
    position: absolute;
}

@media (min-width: 696px) {
  .v-toolbar__content {
      display: none;
  }

  .v-app-bar {
    height: auto !important;
    padding-left: 30px;
    padding-right: 30px;
  }
  .v-tabs-slider {
    display: none;
  }
}

.title-desktop{
    white-space: nowrap;
    width: auto;
    /* padding-right: 10px; */
    font-size: 22px;
    padding-right: 22px;
    font-weight: bold;
}

.title-mobile{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
}
</style>
