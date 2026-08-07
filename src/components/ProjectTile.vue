<template>
    <article class="project-tile">
        <div class="tile-media">
            <img :src="project.image" :alt="project.title" />
        </div>

        <div class="tile-body">
            <h3 class="tile-title">{{ project.title }}</h3>
            <p class="tile-type">// {{ project.type }}</p>

            <p class="tile-desc" :class="{ clamped: !expanded }">{{ project.description }}</p>
            <button v-if="isLong" type="button" class="tile-more" @click="expanded = !expanded">
                {{ expanded ? 'Show less' : 'Read more' }}
            </button>

            <div class="tile-actions">
                <a v-for="link in links" :key="link.url" class="tile-link" :href="link.url"
                    :target="link.url.startsWith('http') ? '_blank' : null" rel="noopener">
                    <v-icon size="16">{{ link.icon }}</v-icon>
                    {{ link.label }}
                </a>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: 'ProjectTile',
    props: {
        project: { type: Object, required: true }
    },
    data() {
        return {
            expanded: false
        };
    },
    computed: {
        isLong() {
            return this.project.description.length > 160;
        },
        links() {
            return [
                { label: 'Code', icon: 'mdi-github', url: this.project.github },
                ...(this.project.links || [])
            ];
        }
    }
};
</script>

<style scoped>
.project-tile {
    display: flex;
    flex-direction: column;
    background: #161616;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    overflow: hidden;
    transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
}

.project-tile:hover {
    transform: translateY(-6px);
    border-color: rgba(124, 77, 255, 0.55);
    box-shadow: 0 16px 40px rgba(124, 77, 255, 0.18);
}

.tile-media {
    position: relative;
    height: 180px;
    overflow: hidden;
}

.tile-media img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s;
}

.project-tile:hover .tile-media img {
    transform: scale(1.05);
}

/* sfuma la foto nel corpo scuro della tile */
.tile-media::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 55%, #161616);
}

.tile-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 18px 20px 20px;
    text-align: left;
}

.tile-title {
    color: white;
    font-size: 19px;
    font-weight: 700;
}

.tile-type {
    margin: 2px 0 10px;
    font-family: 'Consolas', 'Menlo', monospace;
    font-size: 13px;
    color: #B39DDB;
}

.tile-desc {
    color: rgba(255, 255, 255, 0.65);
    font-size: 14px;
    line-height: 1.6;
}

.tile-desc.clamped {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.tile-more {
    align-self: flex-start;
    margin-top: 6px;
    padding: 0;
    background: none;
    border: none;
    color: #B388FF;
    font-size: 13px;
    cursor: pointer;
}

.tile-more:hover {
    color: #D1C4E9;
}

.tile-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: auto;
    padding-top: 16px;
}

.tile-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.85);
    font-size: 13px;
    text-decoration: none;
    transition: border-color 0.25s, color 0.25s, background 0.25s;
}

.tile-link:hover {
    border-color: #7C4DFF;
    color: #B388FF;
    background: rgba(124, 77, 255, 0.12);
}
</style>
