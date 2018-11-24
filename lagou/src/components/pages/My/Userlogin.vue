<template>
    <div class="userlogin">
       <section class="form_container active">
        <header class="form_header"><h2>登录拉勾</h2><router-link tag='span' class="brother_link" to="/my/reg">注册</router-link></header>
        <form class="form_body form_password" method="post">
            <!-- 密码登录 -->
            <div v-show='pswlogin'>
                <div class="input_label">
                    <input type="text" placeholder="请输入已验证的手机号或邮箱" class="input_text user_input">
                </div>
                <div class="input_label">
                    <input type="password" class="input_text password_input" placeholder="请输入密码">
                </div>
            </div>
            
            <!-- 手机登录 -->
            <div v-show='phonelogin'>
                <div class="input_label phone_wrapper">
                    <input type="text" placeholder="请输入常用手机号" class="input_text phone_input">
                </div>
                <div class="input_label">
                    <input type="text" class="input_text vcode_input" placeholder="请输入收到的验证码">
                    <input type="button" class="input_text vcode_link" value="获取验证码" placeholder="获取验证码">
                </div>
            </div>
            

            <div class="input_label btn_group">
                <span class="submit_btn" @click='login'>登录</span>
            </div>
        </form>
        <footer class="form_footer">
            <span class="signin_type_btn" v-show='pswlogin' @click='phoneway()'>手机号登录</span>
            <span class="signin_type_btn" v-show='phonelogin' @click='pswway()'>密码登录</span>
        </footer>
    </section>
    </div>
</template>
<script type="text/javascript">

export default{
    name:'Userlogin',
    // props:[],
    data(){
        return{
            phonelogin:false,
            pswlogin:true
        }
    },
    methods:{
        phoneway(){
            this.phonelogin=true;
            this.pswlogin=false;
        },
        pswway(){
            this.phonelogin=false;
            this.pswlogin=true;
        },
        login(){
            this.$router.push('/my/haslogin');
            var keyword = document.querySelector(".user_input").value;
            // var keyword = search.name.value;
            this.$store.commit('islogin',keyword);
            console.log(this.$store.state)
            this.$store.commit('haslogintrue');
            this.$store.commit('nologinfalse');
        }
    },
    mounted(){
      
    },
    created(){// 发起ajax 请求
        this.$store.commit('noshow');
    }
}
      
</script>

<style lang='less' scoped>
@import url('../../../styles/main.less');
.userlogin{
    .form_container.active {
        display: block;
        .form_header {
        position: relative;
        .w(312);
        .h(25);
        .lh(25);
        .fs(16);
        .padding(0,31,0,31);
        margin-top: 0.3125rem;
        h2 {
        float:left;
        color: #333;
        font-weight: 400;
        margin: .13rem 0 1.07rem;
        }
        .brother_link {
        float:right;
        .fs(24);
        color: #00b38a;
        }
        }
        .form_body{
            .w(312);
            margin:0 auto;
            .input_text {
                width: 100%;
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                padding: .27rem 0;
                font-size: .45rem;
                color: #333;
                border: 0;
                border-bottom: 1px solid #E8E9EB;
            }
            .vcode_link {
                position: absolute;
                right: 34px;
                top: 150px;
                z-index: 2;
                width: initial;
                height: 1.09rem;
                padding: 0;
                font-size: .37rem;
                color: #666;
                border: 0;
                background: 0 0;
            }
            .btn_group {
                margin-top: 0.4rem;
                .submit_btn {
                    display:block;
                    .w(312);
                    .h(44);
                    .lh(44);
                    border-radius: 3px;
                    background-color: #00b38a;
                    color: #fff;
                    font-size: .45rem;
                    border: 0;
                    text-align: center;
                }
            }
        }
        .form_footer {
            position: absolute;
            bottom: 1.5rem;
            .signin_type_btn {
                margin-left: 25px;
                color: #00b38a;
                .fs(14);
            }
        }
        .vcode_input {
            padding-right: 2.13rem;
        }
}
    
    
}
</style>