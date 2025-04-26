<template>
  <div id="cards">
    <h1 style="color: wheat;">Projects</h1>
    <el-col
        v-for="(project, index) in projects"
        :key="index"
        :xs="24" 
        :sm="12"
        :md="8" 
      >
      <el-card class="card" :body-style="{ padding: '0px' }">
        <img :src="project.image"
          class="image">
        <div style="padding: 14px;">
          <span id="project-name">{{ project.name }}</span>
          <div class="bottom-clearfix">
            <el-button type="primary" class="button" @click="openGithub(project.url)">Github Page</el-button>
          </div>
        </div>
      </el-card>
      <div style="padding-top: 1%;">
        <hr width="40%">
      </div>
    </el-col>
  </div>
</template>


<script>
import '../assets/css/colors.css'
import my_pet_pic from '../assets/pictures/my-pets.png'
import pokedex_picture from '../assets/pictures/pokedex_picture.jpg'
import dice from '../assets/pictures/dice-5.png'
// import coming_soon from '../assets/pictures/coming_soon.jpeg'

export default {
  data() {
    return {
      projects: [
        {
          name: 'My Pets',
          image: my_pet_pic,
          url: 'https://github.com/Luca9862/MyPet'
        },
        {
          name: 'Pokedex',
          image: pokedex_picture,
          url: 'https://github.com/Luca9862/pokedex'
        },
        {
          name: 'Roll Dice',
          image: dice,
          url: 'https://github.com/Luca9862/roll_dice_flutter'
        }
      ]
    }
  },
  methods: {
    openGithub(url) {
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('Nessun repository disponibile per questo progetto.');
    }
  }
  }
}
</script>

<style>
#cards {
  text-align: -webkit-center;

  .bottom-clearfix {
    padding-top: 8px;
  }

  .card {
    cursor: pointer;
    height: 400px;
    width: 200px;
  }

  .image {
    height: 300px; /* Altezza fissa per tutte le immagini */
    max-height: 300px;
    max-width: 180px;
    object-fit: contain; /* Mantiene le proporzioni senza distorcere l'immagine */
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .el-col-offset-2 {
    margin-left: 0%;
  }
}
</style>