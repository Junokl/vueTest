<template>
    <div class="bianji" >
    <!-- {{this.$store.state}} -->
        <keep-alive>
        <div v-show='nowshow'  v-if="this.$store.state.isshow" >
            <header class="header">设置定制信息
            <div class="left" @click='goback'><span class="corner">&lt;</span></div>
            </header>
            <ul>
                <li v-for='(item,index) in joblists' :key='index'
                >
                    <span class='dsc'>{{item.type}}</span>
                    <a class='desc' @click='goPage(item.path)'>{{item.name}}</a>
                </li>
            </ul>
           <div class="search"
            @click='searchmore()'
           >
                开始搜索
            </div>
        </div>
       </keep-alive>
        <router-view ></router-view>
    </div>
</template>
<script type="text/javascript">
import Jobtype from './Jobtype.vue';
import Jobplace from './Jobplace.vue';
import Xinshui from './Xinshui.vue';
import Companysize from './Companysize.vue';
export default{
    name:'Bianji',
    props:['path'],
    components:{Jobtype,Jobplace,Xinshui,Companysize},
    data(){
        return{
            nowshow:true,
            joblists:this.$store.state.findlist
            
        }
    },
    methods:{
        goPage(path){
            this.$router.push(path);

        },
        goback(){
            this.$router.push('/home');
        },
        showMsgFromChild:function (data) {
            this.$store.commit(huanname(data));
            console.log(this.$store.state.cityname)
            this.cityname=data;
            console.log(data);
        },
        searchmore(){
            this.$store.commit('huanjianjiname',this.$store.state.jobtype+'/'+this.$store.state.cityname+'/'+this.$store.state.xinshui+'/'+this.$store.state.conpanysize);
            this.$router.push('/home');
        }
    },
    activated(){
        this.$store.commit('showback');
    },
    beforeCreate(){
        console.log(this.$store.state);
    },
    created(){// 发起ajax 请求
        // console.log(this.isshow);
        // this.$store.commit('huanname','北京');
        console.log(this.$store.state)
        // this.$store.commit('noshow');
    },
    updated(){//用修改来结束生命周期实现页面的刷新
        console.log('updated');
        this.joblists=this.$store.state.findlist;
    },
    mounted(){
    },
    beforeDestroy(){
        console.log(111);
    },
    watch:{
        path:function(newVal,oldVal){
            if(this.$route.path=='/bianji'){
                this.$store.state

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
.bianji{
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
    .search {
        .h(45);
        .lh(45);
        color: #fff;
        background-color: #00b38a;
        .fs(16);
        text-align: center;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        // margin-bottom: 25px;
        z-index: 6666;
    }
    ul{
        li{
            .padding(25,0,0,0);
            .w(335);
            .h(89);
            margin:0 auto;
            .dsc{
                display:block;
                color:#ccc;
                .fs(14);
            }
            .desc {
                display: block;
                margin: 10px 0 20px 0;
                text-align: center;
                .h(62.5);
                .lh(62.5);
                .fs(28);
                color: #333;
                background-color: #f0f0f0;
                border-radius: 2px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding: 0 10px;
            }
        }
    }
    
}
</style>