<template>
  <v-app class="d-flex flex-column fill-height">
    <!-- Sidebar o Navbar -->
    <app-sidebar />

    <!-- Contenuto principale -->
    <v-main class="flex-grow-1">
      <router-view />
    </v-main>

    <!-- Footer sempre in fondo -->
    <bottom-navigation />
  </v-app>
</template>

<script>
import AppSidebar from './components/AppSidebar.vue'
import BottomNavigation from './components/BottomNavigation.vue'

export default {
  name: 'App',
  components: {
    AppSidebar,
    BottomNavigation
  }
}
</script>

<style>
/* Assicura che l'app abbia altezza piena */
html, body, #app {
  height: 100%;
  margin: 0;
  background-color: black;
}
</style>
