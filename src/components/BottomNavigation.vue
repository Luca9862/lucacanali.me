<template>
    <div style="padding-top: 100px;">
        <v-footer dark padless>
            <v-card class="flex" flat tile>
                <div style="justify-self: center;">
                    <v-btn color="white" text rounded class="my-2">
                        Home
                    </v-btn>
                    <v-btn color="white" text rounded class="my-2">
                        Projects
                    </v-btn>
                    <v-btn color="white" text rounded class="my-2">
                        info
                    </v-btn>
                </div>

                <v-card-title class="teal">
                    <strong class="subheading">Luca Canali</strong>

                    <v-spacer></v-spacer>

                    <v-btn :href="icons[0].url" class="mx-4" dark icon>
                        <v-img :src="icons[0].svg" max-width="24" alt="icon" class="ml-1"></v-img>
                    </v-btn>
                    <v-btn :href="icons[1].url" class="mx-4" dark icon>
                        <v-icon size="24px">
                            {{ icons[1].svg }}
                        </v-icon>
                    </v-btn>
                    <v-btn :href="icons[2].url" class="mx-4" dark icon>
                        <v-icon size="24px">
                            {{ icons[2].svg }}
                        </v-icon>
                    </v-btn>
                    <v-btn :href="icons[3].url" class="mx-4" dark icon>
                        <v-icon size="24px">
                            {{ icons[3].svg }}
                        </v-icon>
                    </v-btn>
                    <v-btn :href="icons[4].url" class="mx-4" dark icon>
                        <v-img :href="icons[4].url" :src="icons[4].svg" max-width="24" alt="icon" class="ml-1"></v-img>
                    </v-btn>
                </v-card-title>

                <v-card-text class="py-2 white--text text-center">
                    Last update: 28/05/2025
                </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
import linkTreeIcon from '../assets/icons/icons8-linktree.svg'
import mediumPic from '../assets/icons/icons8-medium.svg'

export default {
    data() {
        return {
            icons: [
                { svg: linkTreeIcon, url: 'https://linktr.ee/lucacanali' },
                { svg: 'mdi-linkedin', url: 'https://www.linkedin.com/in/luca-canali-2bb755193/' },
                { svg: 'mdi-instagram', url: 'https://www.instagram.com/_luca.canali/' },
                { svg: 'mdi-gmail', url: 'mailto:canali.luca998@gmail.com' },
                { svg: mediumPic, url: 'https://medium.com/@canali.luca998' },
            ],
            text: 'I am 26 years old and a full-stack developer with experience in back-end, front-end, and databases. I occasionally work as a freelancer, building web applications and providing tailored solutions for various technological needs. I am passionate about technology and continually improving my skills by exploring new technologies and frameworks.'
        }
    }

}
</script>

<style>
.info-home {
    .el-descriptions-row {
        background-color: black;
        color: white;
    }

}

.text-item {
    color: white;
    font-family: sans-serif;
}
</style>