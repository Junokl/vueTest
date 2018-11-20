import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '../components/pages/Home/Home.vue';
import Search from '../components/pages/Search/Search.vue';
import My from '../components/pages/My/My.vue';
const routes=[
        {  path: '/',redirect:'/home'},//重定向
        {  path:'/home',component:Home,name:'home'},
        {  path:'/search',component:Search,name:'search'},
        {  path:'/my',component:My,name:'my'},
    ]
const router = new VueRouter({
    routes
})


export default router