<template>
    <div>
        <v-row style="text-align: -webkit-center; padding-top: 40px;">
            <!-- Card 1 -->
            <v-col xs="12" sm="6" md="4" class="pa-2" >
                <v-card class="mx-auto" max-width="344">
                    <v-img src="../assets/pictures/myPet.png" height="200px"></v-img>

                    <v-card-title>
                        My Pet
                    </v-card-title>

                    <v-card-subtitle>
                        Android application
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn class="mx-2" fab dark large color="purple" @click="openLink('https://github.com/Luca9862/MyPet')">
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
                                MyPet is a university project developed at the University of Insubria as part of a mobile development course, utilizing Kotlin. This app allows users to monitor medical visits, keep track of vaccinations and medications, and even includes a built-in pedometer.
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
                        <v-btn class="mx-2" fab dark large color="purple" @click="openLink('https://github.com/Luca9862/pgn_manager_lib')">
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
                                A user-friendly Python library for basic PGN (chess) file handling - PGN stands for Portable Game Notation, a standard plain text format for recording chess games. It includes the moves of the game as well as metadata such as the players, the event, the date, and the result.
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
                        <v-btn class="mx-2" fab dark large color="purple" @click="openLink('https://github.com/Luca9862/ChessEngineStudy_Koivisto')">
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
                                This research aims to explore and analyze in detail the operation of Koivisto, with the goal of understanding its peculiarities, its capabilities, and its impact in the context of modern chess engines. Through this analysis, the aim is to contribute to the understanding of its architecture, its artificial intelligence techniques, and its performance.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>

            <!-- Card 4 -->
            <v-col xs="12" sm="6" md="4" class="pa-2">
                <v-card class="mx-auto" max-width="344">
                    <v-img src="../assets/pictures/centri-vaccinali.png" height="200px"></v-img>

                    <v-card-title>
                        Vaccination Centers
                    </v-card-title>

                    <v-card-subtitle>
                        First University Project - Java
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn class="mx-2" fab dark large color="purple" @click="openLink('https://github.com/Luca9862/CentriVaccinali')">
                            <v-icon dark>
                                mdi-github
                            </v-icon>
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="showFourthCard = !showFourthCard">
                            <v-icon>{{ showFourthCard ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="showFourthCard">
                            <v-divider></v-divider>
                            <v-card-text>
                                This Java-based project is a management system for vaccination centers. It allows the registration and organization of multiple vaccination centers, each identified by details such as city, address, and name. Citizens can register to their assigned center after receiving a vaccination, using a unique ID. Through this system, they can anonymously submit feedback or reports on any adverse events experienced post-vaccination, functioning as a form of anonymous survey.                            
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>

            <!-- Card 5 -->
            <v-col xs="12" sm="6" md="4" class="pa-2">
                <v-card class="mx-auto" max-width="344">
                    <v-img src="../assets/pictures/autoclickerLogo.png" height="200px"></v-img>

                    <v-card-title>
                        Autoclicker
                    </v-card-title>

                    <v-card-subtitle>
                        Simple autoclicker with GUI - Python
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn class="mx-2" fab dark large color="purple" @click="openLink('https://github.com/Luca9862/autoclicker')">
                            <v-icon dark>
                                mdi-github
                            </v-icon>
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="showFifthCard = !showFifthCard">
                            <v-icon>{{ showFifthCard ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="showFifthCard">
                            <v-divider></v-divider>
                            <v-card-text>
                                Autoclicker is a Python application with a graphical user interface. Users can start the autoclicker by providing an interval as input. The development was done using Python 3.10.11 and Visual Studio Code. The application can be executed through VSC or any Python IDE. Inside the 'exec' folder, you will find the executables for different operating systems.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
            <!-- Card 6 -->
            <v-col xs="12" sm="6" md="4" class="pa-2">
                <v-card class="mx-auto" max-width="344">
                    <v-img src="../assets/pictures/dice-5.png" height="200px"></v-img>

                    <v-card-title>
                        RollDice
                    </v-card-title>

                    <v-card-subtitle>
                        Flutter project
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn class="mx-2" fab dark large color="purple" @click="openLink('https://github.com/Luca9862/roll_dice_flutter')">
                            <v-icon dark>
                                mdi-github
                            </v-icon>
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="showSixthCard = !showSixthCard">
                            <v-icon>{{ showSixthCard ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="showSixthCard">
                            <v-divider></v-divider>
                            <v-card-text>
                                Roll_dice is a simple Flutter application that simulates the roll of a six-sided die
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showFirstCard: false,
            showSecondCard: false,
            showThirdCard: false,
            showFourthCard: false,
            showFifthCard: false,
            showSixthCard: false
        }
    },
    methods:{
        openLink(url) {
            window.open(url, '_blank');
        }
    }
}
</script>