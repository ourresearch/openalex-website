import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import goTo from 'vuetify/es5/services/goto'


import DataDump from "@/views/DataDump";
import RestApi from "@/views/RestApi";
import Schema from "@/views/Schema";
import MagMigrationGuide from "@/views/MagMigrationGuide";

import Faq from "@/views/Faq";
import About from "@/views/About";

import Contact from "@/views/Contact";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {path: '/data-dump', beforeEnter() {window.location.href = "https://docs.openalex.org/download-snapshot" }},
    {path: '/rest-api', beforeEnter() {window.location.href = "https://docs.openalex.org/api" }},
    {path: '/schema', beforeEnter() {window.location.href = "https://docs.openalex.org/download-snapshot" }},
    {path: '/mag-migration-guide', beforeEnter() {window.location.href = "https://docs.openalex.org/download-snapshot/mag-format" }},



    {path: '/faq', component: Faq},
    {path: '/about', component: About},

    {path: '/contact', component: Contact},
]

const router = new VueRouter({
    routes,
    mode: "history",
    scrollBehavior: (to, from, savedPosition) => {
        if (to.hash) {
            console.log("there's a hash, we should go there", to.hash)
            // return {
            //     selector: to.hash
            // }

            goTo(to.hash, {
                offset: 75,
            })
        } else if (savedPosition) {
            return savedPosition
        }
        else {
            return {x: 0, y: 0}
        }

    },
})


export default router
