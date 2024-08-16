<template>
  <div id="app" style="background-color: #303133;">
    <header>
      <app-sidebar></app-sidebar>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppSidebar from './components/AppSidebar.vue';

export default {
  name: 'App',
  components: {
    appSidebar: AppSidebar
  }
}
</script>

<style>
html{
  background-color: #303133;
}
</style>