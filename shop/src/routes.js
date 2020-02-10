//default
import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router);

//Pages
import NotFound from "./Pages/404";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";

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
            path: '/shop',
            name: 'shop',
            component: Shop
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        },
        {
            path: '/shop/:id',
            name: 'product',
            component: Product
        }
    ]
})
