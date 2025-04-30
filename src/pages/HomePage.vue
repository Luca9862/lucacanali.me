<template id="home">
    <div>
        <v-row>
            <v-col cols="12">
                <div class="grid-content bg-purple-dark"><app-carosello></app-carosello></div>
            </v-col>
        </v-row>
        <v-row class="cards-home" justify="center">
            <v-col cols="12" md="4">
                <v-card class="mx-auto" max-width="344">
                <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

                <v-card-title>
                    My Pet
                </v-card-title>

                <v-card-subtitle>
                    Android application
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn class="mx-2" fab dark large color="purple">
                    <v-icon dark>
                        mdi-github
                    </v-icon>
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon @click="toggle(card1)">
                    <v-icon>{{ show[index] ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show.card1">
                    <v-divider></v-divider>
                    <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver...
                    </v-card-text>
                    </div>
                </v-expand-transition>
                </v-card>
            </v-col>

            <v-col cols="12" md="4">
                <v-card class="mx-auto" max-width="344">
                <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

                <v-card-title>
                    My Pet
                </v-card-title>

                <v-card-subtitle>
                    Android application
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn class="mx-2" fab dark large color="purple">
                    <v-icon dark>
                        mdi-github
                    </v-icon>
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon @click="toggle(card2)">
                    <v-icon>{{ show[index] ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show.card2">
                    <v-divider></v-divider>
                    <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver...
                    </v-card-text>
                    </div>
                </v-expand-transition>
                </v-card>
            </v-col>

            <v-col cols="12" md="4">
                <v-card class="mx-auto" max-width="344">
                <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

                <v-card-title>
                    My Pet
                </v-card-title>

                <v-card-subtitle>
                    Android application
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn class="mx-2" fab dark large color="purple">
                    <v-icon dark>
                        mdi-github
                    </v-icon>
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon @click="toggle(card3)">
                    <v-icon>{{ show[index] ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show.card3">
                    <v-divider></v-divider>
                    <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver...
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

export default {
    components: {
        appCarosello: AppCarosello,
        appInfo: InfoHome
    },
    data() {
        return {
            card1: false,
            card2: false,
            card3: false
        }
    },
    methods: {
        toggle(cardKey) {
            this.show[cardKey] = !this.show[cardKey];
        }
    }
}
</script>

<style scoped>
.row + .row {
        margin-top: 12px;
        justify-self: anchor-center;
    }

.app-info {
    padding-top: 100px;
}
</style>
