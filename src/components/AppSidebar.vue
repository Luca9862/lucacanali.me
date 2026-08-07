<template>
  <div>
    <div v-if="$vuetify.display.width < 700">
      <v-app-bar color="transparent" theme="dark" flat class="glass-bar">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-app-bar-title class="title-mobile">
          <span class="brand-name">Luca Canali</span>
        </v-app-bar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" temporary theme="dark" color="#1E1E1E">
        <v-list nav density="compact">
          <v-list-item @click="goToHome">
            <template v-slot:prepend>
              <v-icon>mdi-home</v-icon>
            </template>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item @click="goToProjects">
            <template v-slot:prepend>
              <v-icon>mdi-folder-outline</v-icon>
            </template>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item>

          <v-list-item @click="goToInfo">
            <template v-slot:prepend>
              <v-icon>mdi-information-outline</v-icon>
            </template>
            <v-list-item-title>Info</v-list-item-title>
          </v-list-item>

          <v-list-item @click="goToGithub">
            <template v-slot:prepend>
              <v-icon>mdi-github</v-icon>
            </template>
            <v-list-item-title>GitHub</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>

    <div v-else id="sidebar">
      <v-app-bar color="transparent" theme="dark" flat class="glass-bar">
        <span class="title-desktop">
          <v-icon class="brand-icon" size="20">mdi-code-tags</v-icon>
          <span class="brand-name">Luca Canali</span>
        </span>
        <v-tabs v-model="activeTab" color="#B388FF">
          <v-tab value="/home" to="/home">Home</v-tab>
          <v-tab value="/projects" to="/projects">Projects</v-tab>
          <v-tab value="/info" to="/info">Info</v-tab>
        </v-tabs>
      </v-app-bar>
    </div>
  </div>

</template>

<script>
import '../assets/css/colors.css'

export default {
  data() {
    return {
      githubProfile: "https://github.com/Luca9862",
      drawer: false,
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
}

/* barra "a vetro": lo sfondo scuro semitrasparente + blur lascia intravedere
   il contenuto che scorre sotto, in continuità con l'estetica dell'hero.
   Il doppio selettore serve a vincere sulle utility di sfondo di Vuetify */
.glass-bar.v-toolbar {
  background: rgba(18, 18, 18, 0.72) !important;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
}

.brand-name {
  background: linear-gradient(90deg, #B388FF, #7C4DFF 45%, #9C27B0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 800;
}

.brand-icon {
  color: #B388FF;
  margin-right: 8px;
}

@media (min-width: 700px) {
  .v-toolbar__content {
    padding-left: 30px;
    padding-right: 30px;
  }
}

.v-tabs .v-tab__slider {
  height: 3px;
  border-radius: 2px;
  background: linear-gradient(90deg, #B388FF, #9C27B0);
}

.title-desktop{
    white-space: nowrap;
    width: auto;
    font-size: 22px;
    padding-right: 30px;
    font-weight: bold;
}

.title-mobile{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
}
</style>
