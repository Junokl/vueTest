<template>
    <div class="jobtype" v-bind:isshow='isshow'>

       <header class="header">设置定制信息<div class="left" @click='goback'><span class="corner">&lt;</span></div></header>
        <div class="content">
        <div class="info">
            <span class="text">
                <em class="left"></em>
                    想找什么职位？
                <em class="right"></em>
            </span>
        </div>
        <div class="rinputer">
        <div class="rinputer1">
        <input class="inputer" placeholder="输入你想定制的职位"><span class="button">OK</span>
        </div>
        <ul class="predata">
        <li class="item" data-word="" data-index="0"
        v-for='(item,index) in typelist' :key='index'
        @click='gettypename(index)'
        >
        {{item}}
        </li>
        </ul>
        <ul class="suggester"></ul>
        </div>
    </div>
    </div>
</template>
<script type="text/javascript">

export default{
    name:'Jobtype',
    props:['path','isshow'],
    data(){
        return{
            typename:'',
            typelist:['产品经理','Java','运营','Android','PHP','UI','IOS','编辑','BD']
        }
    },
    methods:{
        goPage(path){
            this.$router.push(path);
        },
        goback(){
            this.$router.go(-1);
            this.$store.commit('showbianji');
        },
        gettypename(index){
            let typename = this.typelist[index];
            this.typename = typename;
            console.log(typename);
            // this.$store.commit('huanjobtype',typename);
            this.$store.commit('huantype',typename);
            this.$router.push('/bianji');
            this.$store.commit('showbianji');
            console.log(this.$store.state);
        }
    },
    mounted(){
      // this.goback();
    },
    beforeCreate(){
        this.$store.commit('showcity');
    },
    created(){// 发起ajax 请求
        this.$store.commit('noshow');
        this.$nextTick(function(){
        window.scrollTo(0, 1);
        window.scrollTo(0, 0);
        });
    },
    beforeDestroy(){
        this.$store.commit('huanjobname',[
            {name:this.$store.state.jobtype,path:'/bianji/jobtype'},
            {name:this.$store.state.cityname,path:'/bianji/jobplace'},
            {name:this.$store.state.xinshui,path:'/bianji/xinshui'},
            {name:this.$store.state.conpanysize,path:'/bianji/companysize'}
            ])
    },
    watch:{
        path:function(newVal,oldVal){
            if(this.$route.path=='/bianji'){
                this.$store.commit('showback')
                // comsole.log(this.$store.state.isshow)
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
.jobtype{
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
    .rinputer1 {
        .h(50);
        .lh(50);
        border: 1px solid #e8e8e8;
        position: relative;
        margin-right: 60px;
        padding-right: 45px;
        .inputer {
            display: block;
            margin-left: 23px;
            .fs(20);
            width: 100%;
            height: 100%;
            border: none;
        }
        .button {
            position: absolute;
            top: 0;
            right: -61px;
            width: 60px;
            height: 100%;
            border-left: 1px solid #e8e8e8;
            text-align: center;
            .fs(20);
            color: #c2cfcc;
            border-bottom: 1px solid #e8e8e8;
        }
    }
    .predata {
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
        }
    }
    
    
}
</style>