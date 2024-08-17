<template>
    <div id="home">
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark"><app-carosello></app-carosello></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark"><app-cards></app-cards></div></el-col>
        </el-row>
    </div>
</template>

<script>
import AppCarosello from '@/components/AppCarosello.vue';
import ProjectCards from '@/components/ProjectCards.vue';

export default{
    components:{
        appCarosello: AppCarosello,
        appCards: ProjectCards
    }
}
</script>

<style>


</style>
