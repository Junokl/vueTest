<template>
  <div id="app">
    <Header  v-if="this.$store.state.isshow"></Header>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <!-- <router-view></router-view> -->
    <Footer  v-if="this.$store.state.isshow"></Footer>
  </div>
</template>

<script>
import Header from './components/commons/Header.vue'
import Footer from './components/commons/Footer.vue'

export default {
  name: 'App',
  components: {Header,Footer},
  data(){
    return{
        // headershow:true,
        // footershow:true,
    }
  },
  methods:{
    
  },
  created(){
    console.log(this.$store.state)
    this.$store.commit('showback');
  },
  watch:{
    path:function(newVal,oldVal){
        // if(this.$route.path=='/bianji'){
        //     this.headershow=false;
        //     this.footershow=false;
        // }
        // if(this.$route.path=='/bianji/jobtype'){
        //     this.$store.commit('showcity');
        // }
        // if(this.$route.path=='/bianji/jobplace'){
        //     this.headershow=false;
        //     this.footershow=false;
        // }
        // if(this.$route.path=='/bianji/xinshui'){
        //     this.headershow=false;
        //     this.footershow=false;
        // }
        // if(this.$route.path=='/bianji/companysize'){
        //     this.headershow=false;
        //     this.footershow=false;
        // }
        console.log(this.$route.path)

    }
    
  }

}
</script>

<style>

</style>
