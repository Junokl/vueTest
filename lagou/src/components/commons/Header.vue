<template>
  <div id="header">
      拉勾网
  </div>
</template>

<script>

export default {
  name: 'Header',
  components: {
  }
}
</script>

<style lang='less' scoped>
@import '../../styles/mixin.less';
*{margin:0;padding: 0;}
#header {
    .w(375);
    .h(45);
    .lh(45);
    .fs(20);
    background-color: #00b38a;
    color: #fff;
    text-align: center;
    position: relative;
}
</style>
