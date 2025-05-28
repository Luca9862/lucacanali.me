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
                    <v-img src="../assets/pictures/myPet.png" height="200px"></v-img>

                    <v-card-title>
                        My Pet
                    </v-card-title>

                    <v-card-subtitle>
                        Android application
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn class="mx-2" fab dark large color="purple"
                            @click="openLink('https://github.com/Luca9862/MyPet')">
                            <v-icon dark>
                                mdi-github
                            </v-icon>
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="showFirstCard = !showFirstCard">
                            <v-icon>{{ showFirstCard ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="showFirstCard">
                            <v-divider></v-divider>
                            <v-card-text>
                                MyPet is a university project developed at the University of Insubria as part of a
                                mobile development course, utilizing Kotlin. This app allows users to monitor medical
                                visits, keep track of vaccinations and medications, and even includes a built-in
                                pedometer.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>

            <!-- Card 2 -->
            <v-col xs="12" sm="6" md="4" class="pa-2">
                <v-card class="mx-auto" max-width="344">
                    <v-img src="../assets/pictures/pgnManager.png" height="200px"></v-img>

                    <v-card-title>
                        pgn-manager
                    </v-card-title>

                    <v-card-subtitle>
                        Python package
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn class="mx-2" fab dark large color="purple"
                            @click="openLink('https://github.com/Luca9862/pgn_manager_lib')">
                            <v-icon dark>
                                mdi-github
                            </v-icon>
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="showSecondCard = !showSecondCard">
                            <v-icon>{{ showSecondCard ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="showSecondCard">
                            <v-divider></v-divider>
                            <v-card-text>
                                A user-friendly Python library for basic PGN (chess) file handling - PGN stands for
                                Portable Game Notation, a standard plain text format for recording chess games. It
                                includes the moves of the game as well as metadata such as the players, the event, the
                                date, and the result.
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
                        <v-btn class="mx-2" fab dark large color="purple"
                            @click="openLink('https://github.com/Luca9862/ChessEngineStudy_Koivisto')">
                            <v-icon dark>
                                mdi-github
                            </v-icon>
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="showThirdCard = !showThirdCard">
                            <v-icon>{{ showThirdCard ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="showThirdCard">
                            <v-divider></v-divider>
                            <v-card-text>
                                This research aims to explore and analyze in detail the operation of Koivisto, with the
                                goal of understanding its peculiarities, its capabilities, and its impact in the context
                                of modern chess engines. Through this analysis, the aim is to contribute to the
                                understanding of its architecture, its artificial intelligence techniques, and its
                                performance.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import AppCarosello from '@/components/AppCarosello.vue';
import koivisto from '../assets/pictures/koivisto.png'

export default {
    components: {
        appCarosello: AppCarosello
    },
    data() {
        return {
            showFirstCard: false,
            showSecondCard: false,
            showThirdCard: false,
            koivisto: koivisto
        }
    },
    methods: {
        openLink(url) {
            window.open(url, '_blank');
        }
    }
}
</script>

<style>
.body {
    font-family: 'Roboto', sans-serif;
}

.app-info {
    padding-top: 100px;
}

.v-card__subtitle {
    color: rgba(0, 0, 0, 0.6);
    text-align: left;
}
</style>
