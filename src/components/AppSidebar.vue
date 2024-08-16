<template>
  <div id="sidebar">
    <div class="header-container">
      <!-- Avatar e nome -->
      <div class="avatar-name-container">
        <el-avatar :size="40" :src="circleUrl"></el-avatar>
      </div>

      <!-- Menu -->
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#303133"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item @click="goToHome">Luca Canali</el-menu-item>
        <el-menu-item @click="goToHome">Home</el-menu-item>
        <el-menu-item>Info</el-menu-item>
        <el-menu-item>Projects</el-menu-item>
        <el-menu-item style="color: grey;">GitHub</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import avatar from '../assets/pictures/avatar.jpg'

export default {
  data() {
    return {
      circleUrl: avatar,
    };
  },
  methods: {
    goToEmpty(){
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
    },
    goToHome(){
      if (this.$route.path !== '/home') {
        this.$router.push('/home');
      }
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
  color: #2c3e50;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Spazio tra avatar+nome e menu */
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
  flex-grow: 1; /* Il menu si espanderà per occupare lo spazio disponibile */
  margin-left: 20px;
}
</style>
