
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css';

import Contacts from "./components/ContactsEjercicio.vue"
import {createRouter, createWebHistory} from "vue-router"
import usuario from "./components/FriendContactView.vue"
import NotFound from './components/NotFound.vue';


import { createApp } from 'vue'
import App from './App.vue'

const routes = [
    {path: "/contactos", component: Contacts},
    {path: "/", component: App},
    {path: "/contactos/:name", component: usuario},
    { path: '/:pathMatch(.*)*', component: NotFound }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
