<template>
  <div id="app">
    <header>
      <app-sidebar></app-sidebar>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/css/colors.css'
import AppSidebar from './components/AppSidebar.vue';

export default {
  name: 'App',
  components: {
    appSidebar: AppSidebar
  }
}
</script>

<style>
html, #app{
  background-color: background-color;
  font-family: sans-serif;
}
</style>