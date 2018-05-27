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
import CategoryCreate from '@/components/panel/category/create/CategoryCreate.vue'
import CategoryEdit from '@/components/panel/category/edit/CategoryEdit.vue'
// Theaters
import TheaterComponent from '@/components/panel/theater/TheaterComponent.vue'
import TheaterCreate from '@/components/panel/theater/create/TheaterCreate.vue'
import TheaterEdit from '@/components/panel/theater/edit/TheaterEdit.vue'
// Projections
import ProjectionComponent from '@/components/panel/projection/ProjectionComponent.vue'
import ProjectionCreate from '@/components/panel/projection/create/ProjectionCreate.vue'
import ProjectionEdit from '@/components/panel/projection/edit/ProjectionEdit.vue'

import Billboard from '../components/billboard/Billboard.vue'
import Reservation from '../components/reservation/Reservation.vue'
import Payment from '../components/payment/Payment.vue'
import Seats from '../components/seats/Seats.vue'
import Reservations from '../components/reservations/Reservations.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'HomeComponent', component: HomeComponent },
    // ACOUNT
    { path: '/login', name: 'LoginComponent', component: LoginComponent },
    { path: '/register', name: 'RegisterComponent', component: RegisterComponent },
    // CLIENT
    { path: '/cartellera', name: 'Billboard', component: Billboard },
    { path: '/reserva/:id', name: 'Reservation', component: Reservation },
    { path: '/pagament', name: 'Payment', component: Payment },
    { path: '/seients/:id', name: 'Seats', component: Seats },
    { path: '/reserves', name: 'Reservations', component: Reservations },
    // PANEL
    { path: '/panel/movies', name: 'MovieComponent', component: MovieComponent },
    { path: '/panel/movies/create', name: 'MovieCreate', component: MovieCreate },
    { path: '/panel/movies/edit/:id', name: 'MovieEdit', component: MovieEdit },
    { path: '/panel/billboards', name: 'BillboardComponent', component: BillboardComponent },
    { path: '/panel/billboards/create', name: 'BillboardCreate', component: BillboardCreate },
    { path: '/panel/billboards/edit/:id', name: 'BillboardEdit', component: BillboardEdit },
    { path: '/panel/categories', name: 'CategoryComponent', component: CategoryComponent },
    { path: '/panel/categories/create', name: 'CategoryCreate', component: CategoryCreate },
    { path: '/panel/categories/edit/:id', name: 'CategoryEdit', component: CategoryEdit },
    { path: '/panel/theaters', name: 'TheaterComponent', component: TheaterComponent },
    { path: '/panel/theaters/create', name: 'TheaterCreate', component: TheaterCreate },
    { path: '/panel/theaters/edit/:id', name: 'TheaterEdit', component: TheaterEdit },
    { path: '/panel/projections', name: 'ProjectionComponent', component: ProjectionComponent },
    { path: '/panel/projections/create', name: 'ProjectionCreate', component: ProjectionCreate },
    { path: '/panel/projections/edit/:id', name: 'ProjectionEdit', component: ProjectionEdit },
  ]
})
