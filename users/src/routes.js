//default
import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router);

//Pages
import NotFound from "./Pages/404";
import Home from "./Pages/Home";
import Users from "./Pages/Users";

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
            path: '/users',
            name: 'users',
            component: Users
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        },
    ]
})
