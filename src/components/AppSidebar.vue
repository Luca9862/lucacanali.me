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
        background-color="black"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item @click="goToHome" style="font-size: x-large;">Luca Canali</el-menu-item>
        <el-menu-item @click="goToHome" style="font-size: large;">Home</el-menu-item>
        <el-menu-item @click="goToProjects" style="font-size: large;">Projects</el-menu-item>
        <el-menu-item @click="goToInfo" style="font-size: large;">Info</el-menu-item>
        <el-menu-item @click="goToGithub" style="color: grey;"><span style="padding-right: 8%;">GitHub</span><el-avatar :size="25" :src="githubPicture"></el-avatar></el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import avatar from '../assets/pictures/avatar.jpg'
import gitPic from '../assets/pictures/github-mark-white.png'
import '../assets/css/colors.css'

export default {
  data() {
    return {
      circleUrl: avatar,
      githubProfile: "https://github.com/Luca9862",
      githubPicture: gitPic
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
    },
    goToInfo(){
      if (this.$route.path !== '/info') {
        this.$router.push('/info');
      }
    },
    goToProjects(){
      if (this.$route.path !== '/projects') {
        this.$router.push('/projects');
      }
    },
    goToGithub(){
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
