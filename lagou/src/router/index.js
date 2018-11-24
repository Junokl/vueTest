import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '../components/pages/Home/Home.vue';
import Search from '../components/pages/Search/Search.vue';
import My from '../components/pages/My/My.vue';
import Bianji from '../components/pages/Bianji/Bianji.vue';
import Jobtype from '../components/pages/Bianji/Jobtype.vue';
import Jobplace from '../components/pages/Bianji/Jobplace.vue';
import Xinshui from '../components/pages/Bianji/Xinshui.vue';
import Companysize from '../components/pages/Bianji/Companysize.vue';



import Login from '../components/pages/My/Login.vue';
import Reg from '../components/pages/My/Reg.vue';
import Haslogin from '../components/pages/My/Loginuser.vue';
import Userlogin from '../components/pages/My/Userlogin.vue';



const routes=[
        {  path: '/',redirect:'/home'},//重定向
        {  path: '/my',redirect:'/my/login'},//重定向

        {  path:'/home',component:Home,name:'home'},
        { path:'/bianji',component:Bianji, name:'bianji',
            children:[
             { path:'jobtype' , component:Jobtype , name:'jobtype'},
             { path:'jobplace' , component:Jobplace , name:'jobplace'},
             { path:'xinshui' , component:Xinshui , name:'xinshui'},
             { path:'companysize' , component:Companysize , name:'companysize'},
        ]},
        {  path:'/search',component:Search,name:'search'},
        {  path:'/my',component:My,name:'my',children:[
            { path:'login' , component:Login , name:'login'},
            { path:'reg' , component:Reg , name:'reg'},
            { path:'haslogin' , component:Haslogin , name:'haslogin'},
            { path:'userlogin',component:Userlogin,name:'userlogin'}
        ]},
    ]
const router = new VueRouter({
    routes
})
// 1c0973ae69a573c9410e73e2b80fb5870a1d4b66  GitHub  token

export default router