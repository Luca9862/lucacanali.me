<template>
    <div class="info-home">
        <el-descriptions title="User Info">
            <el-descriptions-item label="Name">Luca Canali</el-descriptions-item>
            <el-descriptions-item label="Email">canali.luca998@gmail.com</el-descriptions-item>
            <el-descriptions-item label="Place">Varese (ITA)</el-descriptions-item>
            <el-descriptions-item label="University">
            <el-tag size="small">University of Insubria</el-tag>
            </el-descriptions-item>
        </el-descriptions>
    </div>
</template>

<script>
export default {
    data(){
        return{
            text: 'I am 26 years old and a full-stack developer with experience in back-end, front-end, and databases. I occasionally work as a freelancer, building web applications and providing tailored solutions for various technological needs. I am passionate about technology and continually improving my skills by exploring new technologies and frameworks.'
        }
    }

}
</script>

<style>
.info-home{
    .el-descriptions-row{
    background-color: black;
    color: white;
}

}
.text-item{
    color: white;   
    font-family: Arial, Helvetica, sans-serif;   
}


</style>