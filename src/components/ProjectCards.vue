<template>
    <div>
      <div style="padding-bottom: 2%;">
        <span style="color: wheat; font-size: xx-large;">Some of my Projects</span>
        <hr width="40%">
      </div>
    <el-col :span="8" v-for="(project, index) in projects" :key="project" :offset="index > 0 ? 2 : 0">
      <el-card id="card" :body-style="{ padding: '0px' }">
        <img :src="project.image" class="image" width="150">
        <div style="padding: 14px;">
          <span id="project-name">{{project.name}}</span>
          <div class="bottom-clearfix">
            <el-button type="primary" class="button">Github Page</el-button>
          </div>
        </div>
      </el-card>
      <div style="padding-top: 4%;">
        <hr width="40%">
      </div>
    </el-col>
</div>
</template>   


<script>
import myPetLogo from '../assets/pictures/mypet_logo.jpg'
export default{
    data(){
        return{
            projects: [
                {
                    name: 'My Pets',
                    image: myPetLogo
                },
                {
                    name: 'My Pets',
                    image: myPetLogo
                },
                {
                    name: 'My Pets',
                    image: myPetLogo
                }
            ]
        }
    }
}
</script>

<style>
.bottom-clearfix{
    padding-top: 8px;
}
#card{
  cursor: pointer;
  width: 300px;
}
.el-col, .el-col-8, .el-col-offset-0{
  text-align: -webkit-center;
}

.el-col-offset-2 {
    margin-left: 0% !important;
}
</style>