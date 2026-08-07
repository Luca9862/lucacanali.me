<template>
    <div class="info-page">
        <div class="info-layout">
            <section>
                <div class="section-head">
                    <h2 class="section-title">My journey</h2>
                </div>

                <div class="timeline">
                    <div v-for="step in journey" :key="step.title" class="tl-item">
                        <span class="tl-dot"></span>
                        <div class="tl-card">
                            <p class="tl-period">// {{ step.period }}</p>
                            <h3 class="tl-title">{{ step.title }}</h3>
                            <p v-if="step.place" class="tl-place">{{ step.place }}</p>
                            <p v-if="step.description" class="tl-desc">{{ step.description }}</p>
                            <div v-if="step.tags" class="tl-tags">
                                <span v-for="tag in step.tags" :key="tag" class="tl-tag">{{ tag }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="section-head">
                    <h2 class="section-title">About me</h2>
                </div>

                <div class="about-text">
                    <p>My name is Luca and I'm a full-stack developer with solid experience in back-end,
                        front-end, and database management. Over the years, I've been designing and developing
                        web applications, combining technical expertise with attention to detail to deliver
                        tailor-made and functional solutions.</p>
                    <p>I'm passionate about technology and continuously learning — I enjoy exploring new
                        frameworks, programming languages, and tools that can enhance the quality of my work
                        and make me more versatile and effective. I believe in lifelong learning and knowledge
                        sharing, values that I bring into every project I take on.</p>
                    <p>My goal is to create modern, high-performance, and user-friendly applications that make
                        a real impact in the digital world.</p>
                </div>

                <div class="section-head skills-head">
                    <h2 class="section-title">Tech I love</h2>
                </div>

                <div class="skills">
                    <div v-for="skill in skills" :key="skill.name" class="skill">
                        <img :src="skill.icon" :alt="skill.name" width="44" height="44" />
                        <span class="skill-name">{{ skill.name }}</span>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import vuePic from '../assets/icons/icons8-vue-js.svg'
import javaPic from '../assets/icons/icons8-java.svg'
import cSharpPic from '../assets/icons/icons8-c-sharp-logo.svg'
import flutterPic from '../assets/icons/icons8-flutter.svg'
import pythonPic from '../assets/icons/icons8-python.svg'
import kotlinPic from '../assets/icons/icons8-kotlin.svg'

export default {
    data() {
        return {
            journey: [
                {
                    period: 'Mar 2024 — present',
                    title: 'Full-stack Developer',
                    place: 'Elmec Informatica, Brunello (VA)',
                    description: 'Designing and developing web applications across the whole stack — from APIs and databases to modern front-ends.',
                    tags: ['C#', '.NET', 'JavaScript', 'TypeScript', 'Vue 2/3', 'Flutter', 'SQL']
                },
                {
                    period: 'ongoing',
                    title: 'Freelance Web Developer',
                    place: 'Side projects & collaborations',
                    description: 'I occasionally work as a freelancer, building web applications and providing tailored solutions for various technological needs.'
                },
                {
                    period: 'Sep 2020 — Jul 2024',
                    title: "Bachelor's Degree in Computer Science",
                    place: 'University of Insubria, Varese',
                    description: 'Graduated with a thesis on modern chess engines: "Chess Engine Study — Koivisto".',
                    tags: ['C', 'C++', 'Scala', 'Java', 'SQL', 'Kotlin', 'Data Science']
                },
                {
                    period: 'Jun 2020',
                    title: 'High School Diploma in Business Administration, Finance, and Marketing',
                    description: 'Where it all started — before switching from balance sheets to code.'
                }
            ],
            skills: [
                { name: 'Vue.js', icon: vuePic },
                { name: 'Java', icon: javaPic },
                { name: 'Python', icon: pythonPic },
                { name: 'C#', icon: cSharpPic },
                { name: 'Flutter', icon: flutterPic },
                { name: 'Kotlin', icon: kotlinPic }
            ]
        }
    }
}
</script>

<style scoped>
.info-page {
    max-width: 1100px;
    margin: 0 auto;
    padding: 24px 16px 0;
}

.info-layout {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 48px;
    align-items: start;
}

@media (max-width: 900px) {
    .info-layout {
        grid-template-columns: 1fr;
    }
}

/* ---------- timeline ---------- */
.timeline {
    position: relative;
    padding-left: 30px;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: linear-gradient(to bottom, #B388FF, #9C27B0 60%, transparent);
}

.tl-item {
    position: relative;
    padding-bottom: 26px;
}

.tl-item:last-child {
    padding-bottom: 0;
}

.tl-dot {
    position: absolute;
    left: -30px;
    top: 8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: linear-gradient(135deg, #B388FF, #9C27B0);
    box-shadow: 0 0 12px rgba(124, 77, 255, 0.6);
    border: 3px solid #0A0A0A;
}

.tl-card {
    background: #161616;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    padding: 18px 20px;
    text-align: left;
    transition: border-color 0.25s, box-shadow 0.25s;
}

.tl-card:hover {
    border-color: rgba(124, 77, 255, 0.55);
    box-shadow: 0 10px 30px rgba(124, 77, 255, 0.15);
}

.tl-period {
    font-family: 'Consolas', 'Menlo', monospace;
    font-size: 13px;
    color: #B39DDB;
    margin-bottom: 6px;
}

.tl-title {
    color: white;
    font-size: 18px;
    font-weight: 700;
    word-break: break-word;
}

.tl-place {
    color: rgba(255, 255, 255, 0.55);
    font-size: 14px;
    margin-top: 2px;
}

.tl-desc {
    color: rgba(255, 255, 255, 0.65);
    font-size: 14px;
    line-height: 1.6;
    margin-top: 8px;
}

.tl-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
}

.tl-tag {
    font-family: 'Consolas', 'Menlo', monospace;
    font-size: 12px;
    color: #B388FF;
    background: rgba(124, 77, 255, 0.12);
    border: 1px solid rgba(124, 77, 255, 0.3);
    padding: 3px 10px;
    border-radius: 999px;
}

/* ---------- about ---------- */
.about-text {
    text-align: left;
}

.about-text p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 15px;
    line-height: 1.8;
    margin-bottom: 16px;
}

/* ---------- skills ---------- */
.skills-head {
    margin-top: 12px;
}

.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}

.skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 92px;
    padding: 16px 8px;
    background: #161616;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
}

.skill:hover {
    transform: translateY(-4px);
    border-color: rgba(124, 77, 255, 0.55);
    box-shadow: 0 10px 24px rgba(124, 77, 255, 0.2);
}

.skill-name {
    color: rgba(255, 255, 255, 0.8);
    font-size: 13px;
}
</style>
