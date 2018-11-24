import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store =new Vuex.Store({
    state:{
        findlist:[
            {name:'职位类型',type:'职位类型',path:'/bianji/jobtype'},
            {name:'工作地点',type:'工作地点',path:'/bianji/jobplace'},
            {name:'期望薪资',type:'期望薪资',path:'/bianji/xinshui'},
            {name:'公司规模',type:'公司规模',path:'/bianji/companysize'}
            ],
        cityname:'广州',
        conpanysize:'',
        jobtype:'',
        xinshui:'',
        bianjilist:'10秒钟定制职位',
        isshow:true,
        cityshow:false,
        searchshow:true,
        islogin:'',
    },
    mutations:{
        huanjobname(state,value){
            state.findlist=value
        },
        
        huanname(state,value){//编辑搜索地区
            state.cityname=value
        },
        huansize(state,value){//编辑公司规模
            state.conpanysize=value
        },
        huantype(state,value){//编辑职位类型
            state.jobtype=value
        },
        huanmoney(state,value){//编辑职位薪水
            state.xinshui=value
        },
        huanjianjiname(state,value){//更换首页的编辑状态
            state.bianjilist=value
        },
        noshow(state,isshow){
            state.isshow = false;
        },
        showbianji(state,isshow){
            state.isshow = true;
        },
        showback(state,isshow){
            state.isshow = true;
        },
        showcity(state,cityshow){
            state.cityshow = true;
            state.searchshow = false;
        },
        cityback(state,cityshow){
            state.cityshow = false;
        },
        showsearch(state,searchshow){
            state.cityshow = false;
            state.searchshow = true;
        },
        //登录状态
        haslogintrue(state,haslogin){
            state.haslogin = true;
        },
        hasloginfalse(state,haslogin){
            state.haslogin = false;
        },
        nologinfalse(state,haslogin){
            state.nologin = false;
        },
        nologintrue(state,haslogin){
            state.nologin = true;
        },

        islogin(state,value){
            state.islogin=value;
            localStorage.setItem('islogin',value);
        },
        removauser(state,value){
            state.islogin=value;
            localStorage.setItem('islogin',value);
        },
    }
})

export default store