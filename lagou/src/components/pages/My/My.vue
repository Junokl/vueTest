<template>
    <div class="my">
       
       <router-view></router-view>
    </div>
</template>
<script type="text/javascript">

export default{
    name:'My',
    // props:[],
    data(){
        return{
        }
    },
    methods:{
    },
    mounted(){
      
    },
    created(){// 发起ajax 请求
    }
}
      
</script>

<style lang='less' scoped>
@import url('../../../styles/main.less');
.my{
}
</style>