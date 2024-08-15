import HomePage from "@/pages/HomePage.vue"

export const routes = [
        {path: '/', component: HomePage},
        {path: '*', component: {template: '<h1>Page not found</h1>'}}
]