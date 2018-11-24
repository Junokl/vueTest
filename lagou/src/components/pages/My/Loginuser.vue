<template>
    <div class="my">
       <div class="content">
           <div class="logininfo">
                
            
               <div class="haslogin center">
                    <a class="jianli" href="http://www.lagou.com/center/preview.html" target="_self"> 简历&gt; </a>
                    <div class="headcon">
                        <img class="headpic" src="//www.lgstatic.com/images/myresume/default_headpic.png">
                    </div>
                    <div class="name">{{this.$store.state.islogin}}</div>
                </div>
            </div>
            <div class="buttons">
                <a class="button deliver" href="/user/deliverlist.html">
                <span>投递</span></a>
                <a class="button interview" href="/minterview/interviewlist.html">面试</a>
                <a class="button invitation" href="/minvite/invitation.html">
                    <span>邀约</span></a>
                <a class="button collect" href="/user/collectlist.html">收藏</a>
            </div>

            <a class="logout" @click='loginout'>退出登录</a>
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
            nologin:false,
            haslogin:true
        }
    },
    methods:{
        loginout(){
            this.$router.push('/home');
            this.$store.commit('hasloginfalse');
            this.$store.commit('nologintrue');
            this.$store.commit('showback');
            this.isShow=false;
            this.$store.commit('removauser','');
        }
    },
    mounted(){
      
    },
    created(){// 发起ajax 请求
        this.$store.commit('showback')
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
            
            .haslogin{
                position:relative;
                width:100%;
                .top(10);
                .h(111);
                .jianli{
                    position:absolute;
                    color:#00b38a;
                    .fs(12);
                    .right(0);
                }
                .headcon {
                    .w(72);
                    .h(72);
                    margin: 0 auto;
                    -webkit-border-radius: 40.5px;
                    -moz-border-radius: 40.5px;
                    border-radius: 40.5px;
                    -moz-background-clip: padding;
                    -webkit-background-clip: padding-box;
                    background-clip: padding-box;
                    overflow: hidden;
                    background-color: #f6f6f6;
                }
                .headpic {
                    .w(72);
                    .h(72);
                    margin: 4px 0 0 1px;
                    -webkit-border-radius: 36px;
                    -moz-border-radius: 36px;
                    border-radius: 36px;
                    -moz-background-clip: padding;
                    -webkit-background-clip: padding-box;
                    background-clip: padding-box;
                }
                .name {
                    .fs(12);
                    .h(22);
                    .lh(22);
                    color: #333;
                    text-align: center;
                }
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
        .logout {
            display: block;
            width: 100%;
            .h(40);
            .lh(40);
            text-align: center;
            background-color: #1fc8a1;
            color: #fff;
            .fs(14);
            margin-bottom: 10px;
        }
        
        
    }
}
</style>