<template>
    <div>
        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item fill-dot>
                <v-card dark>
                    <v-card-title class="text-h6">
                        Full-stack developer - Elmec Informatica, Brunello(VA)
                    </v-card-title>
                    <v-card-text class="white text--primary">
                        <p>C#, .NET, Java, Javascript, Vue2, Vue3, Quasar, Flutter, SQL, Data <br><br>march 2024 -
                            present</p>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
            <v-timeline-item fill-dot>
                <v-card dark>
                    <v-card-title class="text-h6">
                        University of Insubria - Bachelor's Degree in Computer Science
                    </v-card-title>
                    <v-card-text class="white text--primary">
                        <p>C, C++, Scala, Java, SQL, Kotlin, Data Science <br><br>september 2020 - july 2024</p>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
            <v-timeline-item fill-dot>
                <v-card dark>
                    <v-card-title class="text-h6">
                        High School Diploma in Business Administration, Finance, and Marketing
                    </v-card-title>
                    <v-card-text class="white text--primary">
                        <p>june 2020</p>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
        <p style="text-align: center; padding-top: 100px ;color: white;">My name is Luca, I’m 26 years old and a
            full-stack developer with
            solid experience in back-end, front-end, and database management. Over the years, I’ve been designing and
            developing web applications, combining technical expertise with attention to detail to deliver tailor-made
            and functional solutions.<br><br>
            I have worked in both structured teams and independently, collaborating with companies and private clients
            on projects of various kinds. I also occasionally work as a freelancer, offering personalized consulting and
            developing digital products that meet specific client needs.<br><br>
            I’m passionate about technology and continuously learning — I enjoy exploring new frameworks, programming
            languages, and tools that can enhance the quality of my work and make me more versatile and effective. I
            believe in lifelong learning and knowledge sharing, values that I bring into every project I take
            on.<br><br>
            My goal is to create modern, high-performance, and user-friendly applications that make a real impact in the
            digital world.
        </p>
        <div class="grid-content bg-purple-dark" style="padding-top: 100px; text-align: center;">
            <el-avatar :size="80" :src="vueIcon" style="background-color: black;"></el-avatar>
            <el-avatar :size="80" :src="javaIcon" style="background-color: black;"></el-avatar>
            <el-avatar :size="80" :src="pythonIcon" style="background-color: black;"></el-avatar>
            <el-avatar :size="80" :src="cSharpIcon" style="background-color: black;"></el-avatar>
            <el-avatar :size="80" :src="flutterIcon" style="background-color: black;"></el-avatar>
            <el-avatar :size="80" :src="kotlinIcon" style="background-color: black;"></el-avatar>


        </div>
    </div>

</template>

<script>
import vuePic from '../assets/icons/icons8-vue-js.svg'
import javaPic from '../assets/icons/icons8-java.svg'
import cSharpPic from '../assets/icons/icons8-c-sharp-logo.svg'
import flutterPic from '../assets/icons/icons8-flutter.svg'
import linkedingPic from '../assets/icons/icons8-linkedin.svg'
import pythonPic from '../assets/icons/icons8-python.svg'
import kotlinPic from '../assets/icons/icons8-kotlin.svg'

export default {
    data() {
        return {
            items: [
                {
                    color: 'red lighten-2',
                    icon: 'mdi-star',
                },
                {
                    color: 'purple darken-1',
                    icon: 'mdi-book-variant',
                },
                {
                    color: 'green lighten-1',
                    icon: 'mdi-airballoon',
                },
                {
                    color: 'indigo',
                    icon: 'mdi-buffer',
                },
            ],
            vueIcon: vuePic,
            javaIcon: javaPic,
            cSharpIcon: cSharpPic,
            flutterIcon: flutterPic,
            linkedinIcon: linkedingPic,
            pythonIcon: pythonPic,
            kotlinIcon: kotlinPic
        }
    },
    components: {
    }
}
</script>

<style>
.v-timeline::before {
    background-color: white !important;
    width: 1px !important;
    justify-self: anchor-center;
    /* aumenta lo spessore */
}
</style>
