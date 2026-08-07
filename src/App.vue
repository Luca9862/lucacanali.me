<template>
  <v-app>
    <app-sidebar></app-sidebar>

    <v-main>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </v-main>

    <bottom-navigation></bottom-navigation>
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
html, body {
  color-scheme: light !important;
  -webkit-text-size-adjust: 100%; /* evita scaling strano */
  forced-color-adjust: none;      /* blocca la correzione colori */
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.main-content {
  padding: 32px;
}

/* ---------- sezioni progetti (condivise da Home e Projects) ---------- */
.projects-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 16px 0;
}

.projects-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 16px 0;
}

.section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 24px;
}

.section-title {
  position: relative;
  padding-bottom: 10px;
  color: white;
  font-size: 26px;
  font-weight: 700;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 56px;
  height: 3px;
  border-radius: 2px;
  background: linear-gradient(90deg, #B388FF, #9C27B0);
}

.section-link {
  color: #B388FF;
  font-size: 14px;
  text-decoration: none;
}

.section-link:hover {
  color: #D1C4E9;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}
</style>
