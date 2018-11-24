<template>
    <div class="home">
        <HomeList></HomeList>
        <router-view></router-view>
    </div>
</template>

<script>
// import Banner from './Banner.vue'
import HomeList from './HomeList.vue'
    export default{
        name:'home',
        components:{HomeList},
        data(){
            return{
            }
        }
    }
</script>
<style lang="less" scoped>
@color:skyblue;
.w(@px){
    width:unit(@px/37.5,rem);
}
.home{
    .w(375);
}
</style>