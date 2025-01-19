<template>
    <div class="info-home">
        <hr style="opacity: 50%;">
        <el-row style="width: 100%; text-align: left; padding-left: 12%;">
            <el-col :span="12">
                <div class="grid-content bg-purple" style="color: white;">
                    <span style="opacity: 60%;">Home</span><br>
                    <span style="opacity: 60%;">Projects</span><br>
                    <span style="opacity: 60%;">Info</span><br>
                    <span style="opacity: 60%;">GitHub</span>
                </div>
            </el-col>
            <el-col :span="12" style="text-align: right; padding-right: 12%;">
                <div class="grid-content bg-purple" style="color: white;">
                    <el-avatar :size="30" class="social-icon" :src="linkedinIcon" style="background-color: black;"></el-avatar>
                    <el-avatar :size="30" class="social-icon" :src="mediumIcon" style="background-color: white;"></el-avatar>
                    <el-avatar :size="30" class="social-icon" :src="instagramIcon" style="background-color: black;"></el-avatar>
                    <el-avatar :size="30" class="social-icon" :src="linktreeIcon" style="background-color: black;"></el-avatar>        
                    <el-avatar :size="30" class="social-icon" :src="gmailIcon" style="background-color: black;"></el-avatar>        
                </div>
            </el-col>        
        </el-row>
        <el-row style="width: 100%; text-align: center; color: white;">
            <el-col :span="24" style="opacity: 40%; font-size: 13px;">
                <span >Icon by </span><a target="_blank" href="https://icons8.com" style="color: white;">Icons8</a>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import linkedingPic from '../assets/icons/icons8-linkedin.svg'
import instagramPic from '../assets/icons/icons8-instagram.svg'
import linktreePic from '../assets/icons/icons8-linktree.svg'
import mediumPic from '../assets/icons/icons8-medium.svg'
import gmailPic from '../assets/icons/icons8-gmail.svg'

export default {
    data(){
        return{
            linkedinIcon: linkedingPic,
            instagramIcon: instagramPic,
            linktreeIcon: linktreePic,
            mediumIcon: mediumPic,
            gmailIcon: gmailPic,
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

.el-card{
    background-color: darkgray !important;
}

.social-icon{
    cursor: pointer;
    margin: 3px;
}

</style>