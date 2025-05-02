<template>
    <div>
        <v-row>
            <v-col cols="12">
                <div class="grid-content bg-purple-dark"><app-carosello></app-carosello></div>
            </v-col>
        </v-row>

        <v-row style="text-align: -webkit-center;">
            <!-- Card 1 -->
            <v-col xs="12" sm="6" md="4" class="pa-2">
                <v-card class="mx-auto" max-width="344">
                    <v-img src="../assets/pictures/my-pets.png" height="200px"></v-img>

                    <v-card-title>
                        My Pet
                    </v-card-title>

                    <v-card-subtitle>
                        Android application
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn class="mx-2" fab dark large color="purple">
                            <v-icon dark @click="openLink('https://github.com/Luca9862/MyPet')">
                                mdi-github
                            </v-icon>
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="show = !show">
                            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>
                            <v-card-text>
                                I'm a thing. But, like most politicians, he promised more than he could deliver. You
                                won't have time for sleeping, soldier, not with all the bed making you'll be doing.
                                Then we'll go with that data file! Hey, you add a one and two zeros to that or we
                                walk! You're going to do his laundry? I've got to find a way to escape.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>

            <!-- Card 2 -->
            <v-col xs="12" sm="6" md="4" class="pa-2">
                <v-card class="mx-auto" max-width="344">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

                    <v-card-title>
                        pgn-manager
                    </v-card-title>

                    <v-card-subtitle>
                        Python package
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn class="mx-2" fab dark large color="purple">
                            <v-icon dark @click="openLink('https://github.com/Luca9862/pgn_manager_lib')">
                                mdi-github
                            </v-icon>
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="show = !show">
                            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>
                            <v-card-text>
                                I'm a thing. But, like most politicians, he promised more than he could deliver. You
                                won't have time for sleeping, soldier, not with all the bed making you'll be doing.
                                Then we'll go with that data file! Hey, you add a one and two zeros to that or we
                                walk! You're going to do his laundry? I've got to find a way to escape.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>

            <!-- Card 3 -->
            <v-col xs="12" sm="6" md="4" class="pa-2">
                <v-card class="mx-auto" max-width="344">
                    <v-img src="../assets/pictures/koivisto.png" height="200px"></v-img>

                    <v-card-title>
                        Chess Engine Study - Koivisto
                    </v-card-title>

                    <v-card-subtitle>
                        Degree thesis
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn class="mx-2" fab dark large color="purple">
                            <v-icon dark @click="openLink('https://github.com/Luca9862/ChessEngineStudy_Koivisto')">
                                mdi-github
                            </v-icon>
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="show = !show">
                            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>
                            <v-card-text>
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <div class="app-info"><app-info></app-info></div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import AppCarosello from '@/components/AppCarosello.vue';
import InfoHome from '@/components/InfoHome.vue';
import koivisto from '../assets/pictures/koivisto.png'

export default {
    components: {
        appCarosello: AppCarosello,
        appInfo: InfoHome
    },
    data() {
        return {
            show: false,
            koivisto: koivisto
        }
    },
    methods:{
        openLink(url) {
            window.open(url, '_blank');
    }
    }
}
</script>

<style>
.app-info {
    padding-top: 100px;
}
</style>
