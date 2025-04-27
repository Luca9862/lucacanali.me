<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark"><app-carosello></app-carosello></div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
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
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="app-info"><app-info></app-info></div>
            </el-col>
        </el-row>
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
            show: false
        }
    }
}
</script>

<style>
.app-info {
    padding-top: 100px;
}
</style>
