<template>
  <div id="footer">
      <router-link tag='span' 
      to="/home" :class="curHight=='/home'?'seleted':''">
      <i class="fa fa-home" aria-hidden="true"></i>职位
      </router-link>
      <router-link tag='span' 
      to="/search" :class="curHight=='/search'?'seleted':''">
      <i class="fa fa-search" aria-hidden="true"></i>搜索
      </router-link>
      <router-link tag='span' 
      to="/my" :class="curHight=='/my'?'seleted':''">
      <i class="fa fa-user-o" aria-hidden="true"></i>我的
      </router-link>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  components: {
    // navlist:[{name:'职位',path:'/home'},{name:'搜索',path:'/search'},{name:'我的',path:'/my'}],
    curHight:'/home'
  }
}
</script>

<style lang='less' scoped>
@import '../../styles/mixin.less';
*{margin:0;padding: 0;}
#footer {
    width:100%; 
    .h(45);
    .lh(45);
    .fs(20);
    border-top: 1px solid #e8e8e8;
    background-color: #f6f6f6;
    color: #000;
    position: fixed;
    bottom: 0;
    left: 0;
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
