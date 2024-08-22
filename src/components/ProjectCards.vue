<template>
  <div id="cards">
    <h1 style="color: wheat;">Projects</h1>
    <el-col :span="8" v-for="(project, index) in projects" :key="index" :offset="index > 0 ? 2 : 0">
      <el-card class="card" :body-style="{ padding: '0px' }">
        <img :src="project.image"
          class="image">
        <div style="padding: 14px;">
          <span id="project-name">{{ project.name }}</span>
          <div class="bottom-clearfix">
            <el-button type="primary" class="button">Github Page</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </div>
</template>


<script>
import '../assets/css/colors.css'
import my_pet_pic from '../assets/pictures/my-pets.png'

export default {
  data() {
    return {
      projects: [
        {
          name: 'My Pets',
          image: my_pet_pic
        },
        {
          name: 'Chess Study',
          image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
        },
        {
          name: 'Ciao',
          image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'

        }
      ]
    }
  }
}
</script>

<style>
#cards {
  text-align: -webkit-center;

  .bottom-clearfix {
    padding-top: 8px;
  }

  .card {
    cursor: pointer;
    width: fit-content;
    height: fit-content;
  }

  .image{

  }
  .el-col-offset-2 {
    margin-left: 0%;
  }
}
</style>