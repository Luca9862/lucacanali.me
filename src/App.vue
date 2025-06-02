<template>
  <div id="app">
    <header>
      <app-sidebar></app-sidebar>
    </header>
    <router-view></router-view>
    <footer>
      <bottom-navigation></bottom-navigation>
    </footer>
  </div>
</template>

<script>
import './assets/css/colors.css'
import AppSidebar from './components/AppSidebar.vue';
import BottomNavigation from './components/BottomNavigation.vue'

export default {
  name: 'App',
  components: {
    appSidebar: AppSidebar,
    bottomNavigation: BottomNavigation
  }
}
</script>

<style>
html,
#app {
  background-color: background-color;
  font-family: sans-serif;
}
</style>