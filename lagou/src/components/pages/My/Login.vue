<template>
    <div class="my">
       <div class="content">
           <div class="logininfo">
                    <!-- 未登录 -->
                <div class="nologin center" v-show='nologin'>
                <router-link tag='a' class="loginbut" to="/my/userlogin">登录 / 注册</router-link>
                    <!-- <a class="loginbut" href="/frontLogin.do" target="_self">登录 / 注册</a> -->
                </div>
            
               
            </div>
            <div class="buttons">
                <a class="button deliver" href="#">
                <span>投递</span></a>
                <a class="button interview" href="#">面试</a>
                <a class="button invitation" href="#">
                    <span>邀约</span></a>
                <a class="button collect" href="#">收藏</a>
            </div>

            
       </div>
       <router-view></router-view>
    </div>
</template>
<script type="text/javascript">

export default{
    name:'My',
    // props:[],
    data(){
        return{
            nologin:true,
            haslogin:true
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
    .content{
        margin-bottom: 45px;
        .padding(0,15,0,15);

        .logininfo {
            margin: 10px 0;
            .loginbut {
                .fs(14);
                color: #fff;
                display: block;
                .w(125);
                .h(45);
                .lh(45);
                .top(33);
                text-align: center;
                margin: 0 auto;
                background-color: #1fc8a1;
                position: relative;
            }
            .nologin {
            height: 111px;
            }
            
        }
        .buttons {
            margin-bottom: 10px;
        }
        .button {
            display: inline-block;
            width: 48%;
            .h(86);
            .lh(86);
            background-color: #1fc8a1;
            text-align: center;
            color: #fff;
            .fs(14);
            margin-top: 10px;
            position: relative;
        }
        .deliver {
            float: left;
        }
        .interview {
            float: right;
        }
        .collect {
            float: right;
        }
        
        
        
    }
}
</style>