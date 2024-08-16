import HomePage from "@/pages/HomePage.vue"
import InfoPage from "@/pages/InfoPage.vue"
import ProjectsPage from "@/pages/ProjectsPage.vue"

export const routes = [
        {path: '/', component: HomePage},
        {path: '/home', component: HomePage},
        {path: '/info', component: InfoPage},
        {path: '/projects', component: ProjectsPage},
        {path: '*', component: {template: '<h1>Page not found</h1>'}}
]