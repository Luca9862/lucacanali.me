<template>
    <div>
        <section class="hero">
            <div class="hero-text">
                <p class="hero-hello">Hi, I'm</p>
                <h1 class="hero-name">Luca Canali</h1>
                <h2 class="hero-role">Full-stack Developer</h2>
                <p class="hero-tagline">
                    I build modern, high-performance web applications —
                    back-end, front-end and databases.
                </p>
                <div class="hero-actions">
                    <v-btn color="purple" size="large" rounded to="/projects">
                        View projects
                    </v-btn>
                    <v-btn variant="outlined" color="white" size="large" rounded
                        href="https://github.com/Luca9862" target="_blank">
                        <v-icon start>mdi-github</v-icon>
                        GitHub
                    </v-btn>
                </div>
            </div>

            <div class="hero-code" aria-hidden="true">
                <div class="hero-code-bar">
                    <span class="dot dot-red"></span>
                    <span class="dot dot-yellow"></span>
                    <span class="dot dot-green"></span>
                    <span class="hero-code-file">luca.js</span>
                </div>
                <div class="hero-code-body">
                    <div class="code-line"><span class="tk-kw">const</span> <span class="tk-var">luca</span> = {</div>
                    <div class="code-line indent"><span class="tk-prop">role</span>: <span class="tk-str">'Full-stack Developer'</span>,</div>
                    <div class="code-line indent"><span class="tk-prop">stack</span>: [<span class="tk-str">'C#'</span>, <span class="tk-str">'.NET'</span>, <span class="tk-str">'Vue'</span>, <span class="tk-str">'Flutter'</span>, <span class="tk-str">'SQL'</span>],</div>
                    <div class="code-line indent"><span class="tk-prop">passion</span>: <span class="tk-str">'clean code &amp; new tech'</span>,</div>
                    <div class="code-line indent"><span class="tk-prop">openToWork</span>: <span class="tk-kw">true</span></div>
                    <div class="code-line">};<span class="hero-cursor"></span></div>
                </div>
            </div>
        </section>

        <section class="projects-section">
            <div class="section-head">
                <h2 class="section-title">Featured projects</h2>
                <router-link class="section-link" to="/projects">All projects →</router-link>
            </div>
            <div class="projects-grid">
                <project-tile v-for="p in featured" :key="p.id" :project="p"></project-tile>
            </div>
        </section>
    </div>
</template>

<script>
import ProjectTile from '../components/ProjectTile.vue'
import { projects } from '../data/projects'

export default {
    components: {
        ProjectTile
    },
    computed: {
        featured() {
            return projects.filter(p => p.featured);
        }
    }
}
</script>

<style>
/* ---------- hero ---------- */
.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
    flex-wrap: wrap;
    position: relative;
    padding: 64px 16px 48px;
    max-width: 1100px;
    margin: 0 auto;
}

/* alone viola dietro l'hero: senza, testo e finestra si perdono sul nero pieno */
.hero::before {
    content: '';
    position: absolute;
    inset: -40px 0;
    background: radial-gradient(ellipse 60% 70% at 30% 40%, rgba(124, 77, 255, 0.18), transparent 70%);
    pointer-events: none;
}

.hero-text {
    flex: 1 1 380px;
    min-width: 300px;
    color: white;
    animation: hero-fade-up 0.7s ease both;
}

.hero-hello {
    font-size: 18px;
    color: #B39DDB;
    margin-bottom: 4px;
}

.hero-name {
    font-size: clamp(40px, 6vw, 64px);
    line-height: 1.1;
    font-weight: 800;
    background: linear-gradient(90deg, #B388FF, #7C4DFF 45%, #9C27B0);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.hero-role {
    font-size: clamp(20px, 3vw, 28px);
    font-weight: 500;
    color: white;
    margin-top: 8px;
}

.hero-tagline {
    margin-top: 16px;
    max-width: 440px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    line-height: 1.6;
}

.hero-actions {
    display: flex;
    gap: 16px;
    margin-top: 28px;
    flex-wrap: wrap;
}

.hero-code {
    flex: 0 1 460px;
    min-width: 300px;
    background: #1E1E1E;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(124, 77, 255, 0.25);
    overflow: hidden;
    animation: hero-fade-up 0.7s 0.15s ease both;
}

.hero-code-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    background: #2A2A2A;
}

.hero-code-bar .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.dot-red { background: #FF5F57; }
.dot-yellow { background: #FEBC2E; }
.dot-green { background: #28C840; }

.hero-code-file {
    margin-left: 8px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
    font-family: 'Consolas', 'Menlo', monospace;
}

.hero-code-body {
    padding: 20px;
    font-family: 'Consolas', 'Menlo', monospace;
    font-size: 14px;
    line-height: 1.7;
    color: #D4D4D4;
    text-align: left;
    overflow-x: auto;
}

.code-line {
    white-space: nowrap;
}

/* indentazione resa via padding (2ch = 2 colonne monospace), non con spazi nel markup */
.code-line.indent {
    padding-left: 2ch;
}

.tk-kw { color: #C586C0; }
.tk-var { color: #9CDCFE; }
.tk-prop { color: #4FC1FF; }
.tk-str { color: #CE9178; }

.hero-cursor {
    display: inline-block;
    width: 8px;
    height: 16px;
    margin-left: 4px;
    vertical-align: text-bottom;
    background: #7C4DFF;
    animation: hero-blink 1.1s steps(1) infinite;
}

@keyframes hero-blink {
    50% { opacity: 0; }
}

@keyframes hero-fade-up {
    from {
        opacity: 0;
        transform: translateY(16px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
