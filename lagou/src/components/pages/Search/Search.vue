<template>
    <div class="search">
       <div class="content" v-if="this.$store.state.searchshow">
            <div class="linputer">
                <div class="lbutton" @click='check'>
                    <span class="city" v-model="cityname">{{cityname}}</span>
                    <span class="cityicon"><i class="fa fa-angle-down" aria-hidden="true"></i></span>
                </div>
                <div class="rinput">
                    <input class="inputer" type="text" placeholder="搜索职位或公司" v-model='search'>
                    <span class="search" @click='getdata()'><i class="fa fa-search" aria-hidden="true" style="width:17px; height:17px;"></i></span>
                </div>
            </div>
            <div class="listcon" v-show='iscon'>
                <ul class="history" style="display:none;"></ul>
                <div class="custominfo none">
                    将搜索地区和关键词设为定制条件
                </div>
                <ul class="list"></ul>
            </div>
            <ul class="jobitems">
                <li class="jobitem"  
                v-for="(item,index) in joblist" :key='index' 
                :data-positionid='item.positionId'
                @click='toDetail()'
                > 
                <a :href ="'https://m.lagou.com/jobs/'+item.positionId+'.html'">

                    <img :src="'//www.lgstatic.com/'+item.companyLogo" /> 
                    <div class="conten">
                        <h2 class="title">{{item.companyName}}</h2>
                        <p class="dsc">
                            <span class='zhiwei'>{{item.positionName}} [ {{item.city}} ]</span>
                            <span class='xinshui'>{{item.salary}}</span>
                        </p>
                        <p class="jobtime">{{item.createTime}}</p>
                    </div>
                </a>
                    
                </li>
                
            </ul>
            <p class="more" @click='getdata()' v-show='moreshow'>
                加载更多
            </p>
        </div>
        <Citylist :show='check' v-if="this.$store.state.cityshow" @listenToChildEvent="showMsgFromChild"></Citylist>
    </div>
    
</template>
<script type="text/javascript">
import Citylist from '../../commons/Citylist.vue';
export default{
    name:'Banner',
    // props:[],
    components:{Citylist},
    data(){
        return{
            iscon:false,
            moreshow:false,
            // searchshow:true,
            cityname:'广州',
            search:'',
            joblist:[],
            currentpage:0,

        }
    },
    methods:{
        check(){
            this.$store.commit('showcity');
            // this.cityshow=true;
            // this.searchshow = false;
        },
        getname(value){
            this.cityname=value;
        },
        showMsgFromChild:function (data) {
            // this.$store.commit('huanname');
            // console.log(this.$store.state.cityname)
            this.cityname=data;
            console.log(data);
            return this.cityname;
        },
        getdata(){//获取数据
            this.$axios.get('/api/search.json?',{
                params:{ 
                    city:this.cityname,
                    positionName:this.search,
                    pageNo:this.currentpage+1,
                    pageSize:15
                }
            })
            .then((res)=>{
                this.currentpage++;
                this.moreshow = true;
                for(var i=0;i<res.data.content.data.page.result.length;i++){
                    this.joblist = this.joblist.concat(res.data.content.data.page.result[i]);
                }
                console.log(res.data.content.data.page.result);
            })
            .catch((err)=>{
                console.log(err);
            })
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
@import '../../../../static/css/font-awesome.css';
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
                    .fs(16);
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
        .jobitems{
        hight:120%;
        margin: 0;
        list-style: none;
        -webkit-padding-start: 0;
        .jobitem{
            padding: 14px;
            border-bottom: 1px solid #e8e8e8;
            img{
                display:inline-block;
                float:left;
                .w(60);
                .h(60);
            }
            .conten{
                margin-left: 70px;
                .h(62px);
                color:#333;
                .title{
                    .fs(16);
                    margin-bottom: 0.09375rem;
                    width:80%;
                    // overflow:hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .dsc{
                    margin-bottom: 0.09375rem;
                    width:100%;
                    .h(15);
                    .lh(15);

                    .zhiwei{
                        .fs(12);
                        float:left;
                        width:60%;
                        display:inline-block;
                        // overflow:hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .xinshui{
                        .fs(14);
                        color:#00b38a;
                        float:right;
                    }
                }
                .jobtime{
                    .fs(10);
                    color:#888;
                }
            }
        }
    }
    .more{
        margin-bottom: 50px;
        .h(50);
        .lh(50);
        .fs(16);
        text-align: center;
        background-color: #fafafa;

    }
    }
}
</style>