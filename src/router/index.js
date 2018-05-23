import Vue from 'vue'
import Router from 'vue-router'

import HomeComponent from '@/components/home/HomeComponent.vue'
// Login i Registre
import LoginComponent from '@/components/login/LoginComponent.vue'
import RegisterComponent from '@/components/register/RegisterComponent.vue'
// Películes
import MovieComponent from '@/components/panel/movie/MovieComponent.vue'
import MovieCreate from '@/components/panel/movie/create/MovieCreate.vue'
import MovieEdit from '@/components/panel/movie/edit/MovieEdit.vue'
// Cartelleres
import BillboardComponent from '@/components/panel/billboard/BillboardComponent.vue'
import BillboardCreate from '@/components/panel/billboard/create/BillboardCreate.vue'
import BillboardEdit from '@/components/panel/billboard/edit/BillboardEdit.vue'
// Categories
import CategoryComponent from '@/components/panel/category/CategoryComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'HomeComponent', component: HomeComponent },
    { path: '/login', name: 'LoginComponent', component: LoginComponent },
    { path: '/register', name: 'RegisterComponent', component: RegisterComponent },
    { path: '/panel/movies', name: 'MovieComponent', component: MovieComponent },
    { path: '/panel/movies/create', name: 'MovieCreate', component: MovieCreate },
    { path: '/panel/movies/edit/:id', name: 'MovieEdit', component: MovieEdit },
    { path: '/panel/billboards', name: 'BillboardComponent', component: BillboardComponent },
    { path: '/panel/billboards/create', name: 'BillboardCreate', component: BillboardCreate },
    { path: '/panel/billboards/edit/:id', name: 'BillboardEdit', component: BillboardEdit },
    { path: '/panel/categories/', name: 'CategoryComponent', component: CategoryComponent },
  ]
})
