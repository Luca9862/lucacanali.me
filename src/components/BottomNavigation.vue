<template>
    <div id="bottom-nav">
        <v-footer theme="dark" class="pa-0">
            <div class="footer-card">
                <div class="footer-gradient-line"></div>

                <div class="footer-nav">
                    <v-btn @click="goToHome" color="white" variant="text" rounded class="my-2">
                        Home
                    </v-btn>
                    <v-btn @click="goToProjects" color="white" variant="text" rounded class="my-2">
                        Projects
                    </v-btn>
                    <v-btn @click="goToInfo" color="white" variant="text" rounded class="my-2">
                        Info
                    </v-btn>
                </div>

                <div class="footer-socials">
                    <a v-for="item in icons" :key="item.url" :href="item.url" class="social-link"
                        :target="item.url.startsWith('http') ? '_blank' : null" rel="noopener">
                        <v-icon v-if="item.svg.startsWith('mdi-')" size="22">{{ item.svg }}</v-icon>
                        <img v-else :src="item.svg" alt="" width="22" height="22" />
                    </a>
                </div>

                <div class="footer-copy">© 2026 Luca Canali · v2.0.0</div>
            </div>
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
            ]
        }
    },
    methods:{
    goToHome() {
      if (this.$route.path !== '/home') {
        this.$router.push('/home');
      }
    },
    goToProjects() {
      if (this.$route.path !== '/projects') {
        this.$router.push('/projects');
      }
    },
    goToInfo() {
      if (this.$route.path !== '/info') {
        this.$router.push('/info');
      }
    }
    }

}
</script>

<style scoped>
#bottom-nav {
    padding-top: 100px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

.footer-card {
    width: 100%;
    background: #141414;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    text-align: center;
    padding-bottom: 20px;
}

.footer-gradient-line {
    height: 2px;
    background: linear-gradient(90deg, transparent, #7C4DFF, #9C27B0, transparent);
}

.footer-nav {
    padding-top: 12px;
}

.footer-socials {
    display: flex;
    justify-content: center;
    gap: 18px;
    padding: 14px 0 6px;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    transition: transform 0.25s, background 0.25s, border-color 0.25s, box-shadow 0.25s;
}

.social-link:hover {
    transform: translateY(-3px);
    background: rgba(124, 77, 255, 0.25);
    border-color: #7C4DFF;
    color: #B388FF;
    box-shadow: 0 6px 18px rgba(124, 77, 255, 0.35);
}

.footer-copy {
    padding-top: 10px;
    font-size: 12.5px;
    color: rgba(255, 255, 255, 0.45);
}
</style>
