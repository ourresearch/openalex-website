import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import goTo from 'vuetify/es5/services/goto'


import DataDump from "@/views/DataDump";
import RestApi from "@/views/RestApi";
import Schema from "@/views/Schema";
import MagMigrationGuide from "@/views/MagMigrationGuide";

import Faq from "@/views/Faq";
import Coverage from "@/views/Coverage";
import Roadmap from "@/views/Roadmap";
import License from "@/views/License";
import Pricing from "@/views/Pricing";

import Contact from "@/views/Contact";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {path: '/data-dump', component: DataDump},
    {path: '/rest-api', component: RestApi},
    {path: '/schema', component: Schema},
    {path: '/mag-migration-guide', component: MagMigrationGuide},

    {path: '/faq', component: Faq},
    {path: '/coverage', component: Coverage},
    {path: '/roadmap', component: Roadmap},
    {path: '/license', component: License},
    {path: '/pricing', component: Pricing},

    {path: '/contact', component: Contact},
]

const router = new VueRouter({
    routes,
    mode: "history",
    scrollBehavior: (to, from, savedPosition) => {
        if (to.hash) {
            return goTo(to.hash, {
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
