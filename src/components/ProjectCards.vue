<template>
    <div>
        <h1 style="color: wheat;">Projects</h1>
    <el-col :span="8" v-for="(project, index) in projects" :key="project" :offset="index > 0 ? 2 : 0">
      <el-card id="card" :body-style="{ padding: '0px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span id="project-name">{{project.name}}</span>
          <div class="bottom-clearfix">
            <el-button type="primary" class="button">Github Page</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
</div>
</template>   


<script>
export default{
    data(){
        return{
            projects: [
                {
                    name: 'My Pets'
                }
            ]
        }
    }
}
</script>

<style>

.grid-content {
  height: 100%;
  text-align: center;
}

.bottom-clearfix{
    padding-top: 8px;
}
#card{
  cursor: pointer;
  width: fit-content;
}
.el-col, .el-col-8, .el-col-offset-0{
  width: 100% !important;
  text-align: -webkit-center;
}

</style>

width: 100%;
      text-align: -webkit-center;