<template>
    <div class="projects-page">
        <div class="section-head">
            <h2 class="section-title">Projects</h2>
        </div>
        <div class="projects-grid">
            <project-tile v-for="p in projects" :key="p.id" :project="p"></project-tile>
        </div>
    </div>
</template>

<script>
import ProjectTile from '../components/ProjectTile.vue'
import { projects } from '../data/projects'

export default {
    components: {
        ProjectTile
    },
    data() {
        return {
            projects: projects
        }
    }
}
</script>
