//default
import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router);

//Pages
import NotFound from "./Pages/404";
import Home from "./Pages/Home";
import NotifyPage from "./Pages/NotifyPage";

//Routering
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/notifyPage',
            name: 'notifyPage',
            component: NotifyPage
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        },
    ]
})
