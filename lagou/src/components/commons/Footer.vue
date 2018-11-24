<template>
  <div id="footer" >
      <router-link tag='span' 
      to="/home" :class="this.$route.path=='/home'?'seleted':''">
      <i class="fa fa-home" aria-hidden="true" ></i>职位
      </router-link>
      <router-link tag='span' 
      to="/search" :class="this.$route.path=='/search'?'seleted':''">
      <i class="fa fa-search" aria-hidden="true" ></i>搜索
      </router-link>
      <span tag='span'  @click='tologin()'
      to="/my" :class="this.$route.path=='/my/login'?'seleted':''">
      <i class="fa fa-user-o" aria-hidden="true" ></i>我的
      </span>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  components: {},
  data(){
    return{
      // navlist:[{name:'1',path:'/home'},{name:'2',path:'/search'},{name:'3',path:'/my'}],
      // curHight:'/home'
    }
  },
  methods:{
    tologin(){
      if(localStorage.getItem('islogin')===''){//没登录跳转到登录页面
        this.$router.push({path:'/my/login'});
        console.log(localStorage);
      }
      else if(localStorage.getItem('islogin')){//登录跳转到个人信息页面
          this.$router.push({path:'/my/haslogin'});
          console.log(localStorage);
      }
      
    }
  },
  created(){
    
  },
  updated(){
    
  }
}
</script>

<style lang='less' scoped>
@import '../../styles/mixin.less';
@import '../../../static/css/font-awesome.css';
*{margin:0;padding: 0;}
#footer {
    // width:100%;
    .w(375);
    .h(45);
    .lh(45);
    .fs(20);
    border-top: 1px solid #e8e8e8;
    background-color: #f6f6f6;
    color: #000;
    position: fixed;
    bottom: 0;
    left: 0;
    right:0;
    z-index: 999;
    display:flex;

    // justify-content:space-between;
    span{
      flex:1;
      float: left;
      text-align: center;
      color:#c2cfcc;;
      i{
        .w(18);
        .h(17);
      }

    }
    .seleted{
      color: #00b38a;
    }
}
</style>
