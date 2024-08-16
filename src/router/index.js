import HomePage from "@/pages/HomePage.vue"
import InfoPage from "@/pages/InfoPage.vue"

export const routes = [
        {path: '/', component: HomePage},
        {path: '/home', component: HomePage},
        {path: '/info', component: InfoPage},
        {path: '*', component: {template: '<h1>Page not found</h1>'}}
]