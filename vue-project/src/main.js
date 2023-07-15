
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css';

import Contacts from "./components/ContactsEjercicio.vue"
import {createRouter, createWebHistory} from "vue-router"
import usuario from "./components/FriendContactView.vue"
import NotFound from './components/NotFound.vue';
import Home from "./components/HomeLayout.vue"
import friends from "./components/EjercicioFriendsDos.vue"

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

const routes = [
    {path: "/", component: Home},
    {path: "/contactos", component: Contacts},
    {path: "/contactos/:name", component: usuario},
    { path: '/:pathMatch(.*)*', component: NotFound },
    {path: "/friends", component: friends}
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')
