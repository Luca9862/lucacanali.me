<template>
    <div>
        <el-row style="padding-top: 80px;">
            <el-col :span="24" style="padding-right: 20px; padding-left: 10px;">
                <div class="grid-content bg-purple">
                    <div class="block">
                        <el-timeline>
                            <el-timeline-item timestamp="present" placement="top">
                                <el-card>
                                    <h4>Full-stack developer - Elmec Informatica, Brunello(VA)</h4>
                                    <p>C#, .NET, Java, Javascript, Vue2, Vue3, Quasar, Flutter, SQL</p>
                                    <p>Start: march 2024</p>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item timestamp="11/07/2024" placement="top">
                                <el-card>
                                    <h4>University of Insubria - Bachelor's Degree in Computer Science</h4>
                                    <p>C, C++, Scala, Java, SQL, Kotlin</p>
                                    <p>Start: september 2020</p>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item timestamp="30/06/2020" placement="top">
                                <el-card>
                                    <h4>High School Diploma in Business Administration, Finance, and Marketing (AFM)</h4>
                                </el-card>
                            </el-timeline-item>
                        </el-timeline>
                    </div>
                </div>
            </el-col>
            <el-col :span="24" style="padding-left: 20px; padding-right: 10px;">
                <div class="grid-content bg-purple-light">
                    <span style="color: white;">I am 26 years old and a full-stack developer with experience in back-end, front-end, and databases. I occasionally work as a freelancer, building web applications and providing tailored solutions for various technological needs. I am passionate about technology and continually improving my skills by exploring new technologies and frameworks.</span>
                </div>
            </el-col>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark" style="text-align: center;">
                    <el-avatar :size="80" :src="vueIcon" style="background-color: black;"></el-avatar>
                    <el-avatar :size="80" :src="javaIcon" style="background-color: black;"></el-avatar>
                    <el-avatar :size="80" :src="cSharpIcon" style="background-color: black;"></el-avatar>
                    <el-avatar :size="80" :src="flutterIcon" style="background-color: black;"></el-avatar>
                </div>
        </el-col>

        </el-row>
    </div>
</template>

<script>
import vuePic from '../assets/icons/icons8-vue-js.svg'
import javaPic from '../assets/icons/icons8-java.svg'
import cSharpPic from '../assets/icons/icons8-c-sharp-logo.svg'
import flutterPic from '../assets/icons/icons8-flutter.svg'
import linkedingPic from '../assets/icons/icons8-linkedin.svg'



export default{
    data(){
        return{
            vueIcon: vuePic,
            javaIcon: javaPic,
            cSharpIcon: cSharpPic,
            flutterIcon: flutterPic,
            linkedinIcon: linkedingPic
        }
    },
    components:{
    }
}
</script>

<style>

</style>
