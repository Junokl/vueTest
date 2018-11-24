<template>
    <div class="xinshui" v-bind:isshow='isshow'>
{{cityname}}
       <header class="header">设置定制信息<div class="left" @click='goback'><span class="corner">&lt;</span></div></header>
        <div class="content">
        <div class="info">
            <span class="text">
                <em class="left"></em>
                    告诉我你期望的工作地点？
                <em class="right"></em>
            </span>
        </div>
        <Citylist v-show='!this.$store.state.cityshow' @listenToChildEvent="showMsgFromChild"></Citylist>
        </div>
        
    </div>
</template>
<script type="text/javascript">
import Citylist from '../../commons/Citylist.vue';
import bus from './Bianji.vue';
export default{
    name:'Xinshui',
    props:['path','isshow'],
    components:{Citylist},
    data(){
        return{
           cityname:''
        }
    },
    methods:{
        goPage(path){
            this.$router.push(path);
        },
        goback(){
            this.$router.push({path:'/bianji',query:{a:111}});
            this.$store.commit('showbianji');
        },
        showMsgFromChild:function (data) {
            // console.log(this.$store.state.cityname)
            this.cityname=data;
            this.$store.commit('huanname',this.cityname);
            console.log(data);
        }
    },
    mounted(){
      var self = this;
      self.cityname = this.cityname;
    },
    created(){// 发起ajax 请求
        this.$store.commit('noshow');
    },
    beforeDestroy(){
        this.$store.commit('huanjobname',[
            {name:this.$store.state.jobtype,path:'/bianji/jobtype'},
            {name:this.cityname,path:'/bianji/jobplace'},
            {name:this.$store.state.xinshui,path:'/bianji/xinshui'},
            {name:this.$store.state.conpanysize,path:'/bianji/companysize'}
            ])
    },
    watch:{
        path:function(newVal,oldVal){
            if(this.$route.path=='/bianji'){
                this.isshow=true;

            }

            console.log('new:'+newVal);
            console.log('old:'+oldVal);
        }
        
    }
}
      
</script>

<style lang='less' scoped>
@import url('../../../styles/main.less');
@import '../../../../static/css/font-awesome.css';
.xinshui{
    .header {
        .h(45);
        .lh(45);
        background-color: #00b38a;
        color: #fff;
        .fs(16);
        text-align: center;
        position: relative;
        .left:active {
            background-color: #f0f0f0;
        }
        .left {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 40px;
        }
    }
    .info {
        background-color: #ccc;
        // background-size: 320px 125px;
        .h(125);
        .fs(20);
        color: #00b38a;
        text-align: center;
        border-bottom: 1px solid #e8e8e8;
        .text {
            display: inline-block;
            position: relative;
            height: 25px;
            top: 50px;
        }
        .left {
            display:inline-block;
            .w(16);
            .h(16);
            left: -20px;
            top: -2px;
            background: url('../../../assets/icon.png') no-repeat -102.5px -4px;
            background-size: 250px 250px;
        }
        .right {
            display:inline-block;
            .w(16);
            .h(16);
            right: -14px;
            top: 15px;
            background: url('../../../assets/icon.png') no-repeat -119.5px -4px;
            background-size: 250px 250px;
        }
    }

    .list {
        margin-left: 15px;
        .item {
            .h(44);
            .lh(44);
            .fs(20);
            .padding(0,15,0,10);
            color: #666;
            border-bottom: 1px solid #e8e8e8;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .desc {
                font-style: normal;
                color: #cbcbcb;
            }
        }
    }

    
}
</style>xinshui