<template>
    <div class="reg">
       <section class="form_container active">
        <header class="form_header"><h2>注册拉勾</h2><router-link tag='span' class="brother_link" to="/my/userlogin">登录</router-link></header>
        <form class="form_body form_password" method="post">
            
            
            <!-- 手机注册 -->
                <div class="input_label phone_wrapper">
                    <input type="text" placeholder="请输入常用手机号" class="input_text phone_input">
                </div>
                <div class="input_label">
                    <input type="text" class="input_text vcode_input" placeholder="请输入收到的验证码">
                    <input type="button" class="input_text vcode_link" value="获取验证码" placeholder="获取验证码">
                </div>
            

            <div class="input_label btn_group">
                <input type="submit" class="submit_btn" value="注册">
            </div>
        </form>
    </section>
    </div>
</template>
<script type="text/javascript">

export default{
    name:'Reg',
    // props:[],
    data(){
        return{
        }
    },
    methods:{
        tologin(){
            this.$router.push('/my/userlogin')
        }
    },
    mounted(){
      
    },
    created(){// 发起ajax 请求
    }
}
      
</script>

<style lang='less' scoped>
@import url('../../../styles/main.less');
.reg{
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
            .input_label.btn_group {
                margin-top: 0.4rem;
                .submit_btn {
                    width: 100%;
                    height: 1.17rem;
                    border-radius: 3px;
                    background-color: #00b38a;
                    color: #fff;
                    font-size: .45rem;
                    border: 0;
                }
            }
        }
        
}
    
    
}
</style>