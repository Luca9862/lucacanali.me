<template>
  <div id="app">
    <div class="app-wrapper">
      <header class="header-content">
        <app-sidebar></app-sidebar>
      </header>

      <main class="main-content">
        <router-view></router-view>
      </main>

      <footer>
        <bottom-navigation></bottom-navigation>
      </footer>
    </div>
  </div>
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
html, body {
  background: background-color !important; /* o il colore che vuoi fisso */
  color-scheme: light !important;
  -webkit-text-size-adjust: 100%; /* evita scaling strano */
  forced-color-adjust: none;      /* blocca la correzione colori */
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1; /* prende tutto lo spazio disponibile */
  padding: 32px;
}

.header-content{
  height: auto !important;
}
</style>
