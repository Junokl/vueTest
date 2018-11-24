// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'//引入vue
import App from './App'//引入一个组件

import './styles/reset.less'//引入全局匹配样式
Vue.config.productionTip = false

import Axios from 'axios'
Vue.prototype.$axios= Axios;// axios 挂载到vue的实例上 这样他的拓展实例  组件也有$axios
/* eslint-disable no-new */

import router from './router/index.js'//引入路由
import store from './store/index.js'
//引入mint-ui
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  created(){//设置登录缓存
    if(localStorage.getItem('islogin')===null){
        localStorage.setItem('islogin','');
    }
    if(localStorage.getItem('islogin')){
        this.$store.commit('haslogintrue');
        this.$store.commit('nologinfalse');
        // this.$router.push({path:'/my/haslogin'})
    }
    this.$store.state.islogin = localStorage.getItem('islogin');
  },
  template: '<App/>'
})
