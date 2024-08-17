<template>
    <div>
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark"><app-carosello></app-carosello></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark"><app-cards></app-cards></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple"><app-info></app-info></div></el-col>
        </el-row>
    </div>
</template>

<script>
import AppCarosello from '@/components/AppCarosello.vue';
import ProjectCards from '@/components/ProjectCards.vue';
import InfoHome from '@/components/InfoHome.vue';

export default{
    components:{
        appCarosello: AppCarosello,
        appCards: ProjectCards,
        appInfo: InfoHome
    }
}
</script>

<style>
.app-info{
    padding-top: 100px;
}

</style>
