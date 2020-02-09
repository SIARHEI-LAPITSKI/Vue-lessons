//default
import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router)

//Pages
import Home from "./Pages/Home";
import Example from "./Pages/Example";

//Routering
export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/example',
            name: 'example',
            component: Example
        }
    ]
})
