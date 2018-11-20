<template>
    <div class="homelist">
        <div class="top">
            <span>10秒钟定制职位</span>
            <a href="" class="change">
                <i class="fa fa-pencil" aria-hidden="true"></i>
                <span>编辑</span>
            </a>
        </div>

        <ul class="jobitems">
            <li class="jobitem" v-for="(item,index) in joblist" :key='index'> 
                <img :src="'//www.lgstatic.com/'+item.companyLogo" /> 
                <div class="conten">
                    <h2 class="title">{{item.companyName}}</h2>
                    <p class="dsc">
                        <span class='zhiwei'>{{item.positionName}}</span>
                        <span class='xinshui'>{{item.salary}}</span>
                    </p>
                    <p class="jobtime">{{item.createTime}}</p>
                </div>
            </li>
            
        </ul>
        <p class="more">
                加载更多
        </p>
    </div>
</template>
<script type="text/javascript">

export default{
    name:'Banner',
    // props:[],
    data(){
        return{
            joblist:[],
            current:0,

        }
    },
    methods:{
        getJoblist(){
            this.$axios.get('/api/listmore.json',{params:{
                    pageNo:this.current+1,
                    pageSize:15
                    }
                }
                )//?pageNo=1&pageSize=15
            .then((res)=>{
                // console.log(res.data.content.data.page.result);
                for(var i=0;i<res.data.content.data.page.result.length;i++){
                    // this.dateitem=res.data.data.films[i].premiereAt;
                    this.joblist = this.joblist.concat(res.data.content.data.page.result[i]);
                    // console.log(this.joblist);
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    },
    mounted(){
      
    },
    created(){// 发起ajax 请求
        this.getJoblist();
    }
}
      
</script>

<style lang='less' scoped>
@import url('../../../styles/main.less');
.homelist{
    .top{
        display:flex;
        justify-content:space-between;
        .h(43);
        .lh(43);
        .fs(14);
        .padding(0,15,0,15);
        color:#555;
        border-bottom: 1px solid #e8e8e8;
        .change{
            .h(30);
            .lh(30);
            .right(15);
            top:0;
            display:block;
            background-color:#f5f5f5;
            color:#00b38a;
            .padding(0,20,0,20);
            margin-top:0.15625rem;
            border-radius: 15px;

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
</style>