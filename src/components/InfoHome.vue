<template>
    <div class="info-home">
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <el-card class="box-card" style="background-color: black;">
                        <div slot="header" class="clearfix">
                            <span style="font-family: Arial, Helvetica, sans-serif;">Luca Canali</span>
                            <div style="padding-left: 5%;">
                                <el-button style="float: right;" type="primary">Contact me</el-button>
                            </div>
                            
                        </div>
                        <div class="text item">
                            <span>{{ text }}</span>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>
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

}
</style>