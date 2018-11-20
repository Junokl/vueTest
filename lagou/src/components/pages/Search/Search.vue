<template>
    <div class="search">
       <div class="content">
            <div class="linputer">
                <div class="lbutton">
                    <span class="city">北京</span>
                    <span class="cityicon"><i class="fa fa-angle-down" aria-hidden="true"></i></span>
                </div>
                <div class="rinput">
                    <input class="inputer" type="text" placeholder="搜索职位或公司">
                    <span class="search"><i class="fa fa-search" aria-hidden="true" style="width:17px; height:17px;"></i></span>
                </div>
            </div>
            <div class="listcon" v-show='iscon'>
                <ul class="history" style="display:none;"></ul>
                <div class="custominfo none">
                    将搜索地区和关键词设为定制条件
                </div>
                <ul class="list"></ul>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">

export default{
    name:'Banner',
    // props:[],
    data(){
        return{
            iscon:false,
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
.search{
    .content{
        .linputer {
            position: relative;
            border-bottom: 1px solid #e8e8e8;
            .h(45);
            .lbutton {
                float: left;
                .w(88);
                .h(45);
                .lh(45);
                .fs(15);
                text-align: center;
                border-right: 1px solid #e8e8e8;
            }
            .rinput {
                .h(45);
                margin-left: 89px;
                position: relative;
                .inputer {
                    display: block;
                    border: none;
                    .padding(10,0,10,0);
                    .h(25);
                    .lh(25);
                    .fs(12);
                    color: #333333;
                    width: 75%;
                    margin: 0 0 0 5%;
                    float: left;
                }
                .search {
                    display: inline-block;
                    width: 20%;
                    height: 45px;
                    line-height: 45px;
                    float: right;
                    position: relative;
                    i{
                        // display: block;
                        // margin: 14px auto 0 auto;
                        .w(12);
                        .h(12);
                    }
                }
                
            }
        }
    }
}
</style>