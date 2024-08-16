<template>
  <div id="sidebar">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#303133"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item @click="stampa">Luca Canali</el-menu-item>
      <el-menu-item>Home</el-menu-item>
      <el-menu-item>Info</el-menu-item>
      <el-menu-item>Orders</el-menu-item>
    </el-menu>
  </div>
</template>

<script>

export default{
  methods:{
    stampa(){
      console.log("ciao")
    }
  }
}
</script>

<style>
#sidebar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>