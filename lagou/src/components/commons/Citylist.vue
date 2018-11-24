<template>
  <div class="citylist" v-show='show'>
    <div class="item">
        <div class="cities-header">热门城市</div>
        <ul class="hot">
            <li v-for='(item,index) in hotcity' :key='index'
            @click='checkname(item)'>
                {{item}}
            </li>
        </ul>
    </div>
    <div class="item">
        <div class="cities-header">ABCDEF</div>
        <ul class="list">
            <li v-for='(item,index) in n1' :key='index'
            @click='checkname(item)'
            >
                {{item}}
            </li>
        </ul>
    </div>
    <div class="item">
         <div class="cities-header">GHIJ</div>
        <ul class="list">
            <li v-for='(item,index) in n2' :key='index'
            @click='checkname(item)'
            >
                {{item}}
            </li>
        </ul>
    </div>
    <div class="item">
        <div class="cities-header">klmn</div>
        <ul class="list">
            <li v-for='(item,index) in n3' :key='index'
            @click='checkname(item)'
            >
                {{item}}
            </li>
        </ul>
    </div>
    <div class="item">
        <div class="cities-header">opqr</div>
        <ul class="list">
            <li v-for='(item,index) in n4' :key='index'
            @click='checkname(item)'
            >
                {{item}}
            </li>
        </ul>
    </div>
    <div class="item">
        <div class="cities-header">stuv</div>
        <ul class="list">
            <li v-for='(item,index) in n5' :key='index'
            @click='checkname(item)'
            >
                {{item}}
            </li>
        </ul>
    </div>
    <div class="item">
        <div class="cities-header">wxyz</div>
        <ul class="list">
            <li v-for='(item,index) in n6' :key='index'
            @click='checkname(item)'
            >
                {{item}}
            </li>
        </ul>
    </div>
    
</div>
</template>

<script>
export default {
  name: 'Citylist',
  components: {},
  props:['show',"cityname"],
  data(){
    return{
         hotcity:['北京','上海','广州','深圳','成都','杭州'],
         n1:[],
         n2:[],
         n3:[],
         n4:[],
         n5:[],
         n6:[]

    }
  },
  methods:{
    getcity(){
      this.$axios.post('/getcity/Showtime/HotCitiesByCinema.api',{params:{
        name:'gz',
      }})
      .then((res)=>{
        for(var i=0;i<res.data.p.length;i++){
            let city = res.data.p[i].pinyinShort.slice(0,-1);
            if(city=='a'||city=='b'||city=='c'||city=='d'||city=='e'||city=='f'){
                this.n1 = this.n1.concat(res.data.p[i].n)
                // console.log(this.n1);
            }
            else if(city=='g'||city=='h'||city=='i'||city=='j'){
                this.n2 = this.n2.concat(res.data.p[i].n)
                // console.log(this.n2);
            }
            else if(city=='k'||city=='l'||city=='m'||city=='n'){
                this.n3 = this.n3.concat(res.data.p[i].n)
                // console.log(this.n3);
            }
            else if(city=='o'||city=='p'||city=='q'||city=='r'){
                this.n4 = this.n4.concat(res.data.p[i].n)
                // console.log(this.n4);
            }
            else if(city=='s'||city=='t'||city=='u'||city=='v'){
                this.n5 = this.n5.concat(res.data.p[i].n)
                // console.log(this.n5);
            }
            else if(city=='w'||city=='x'||city=='y'||city=='z'){
                this.n6 = this.n6.concat(res.data.p[i].n)
                // console.log(this.n6);
            }
            
            // console.log(city);
        }
        // console.log(res.data.p);
      })
      .catch((err)=>{
        console.log(err);
      })
    },
    checkname(cityname){
        // console.log(111);
        this.$store.commit('huanname');
        this.$store.commit('showsearch');
        // alert(cityname);
        this.$emit("listenToChildEvent",cityname);
        this.searchshow=true;
        this.cityshow=false;
        if(this.$route.path=='/bianji/jobplace'){
            // this.$store.commit('showcity');
            this.$router.push('/bianji');
            // location.href='http://10.3.136.16:8081/#/bianji';
            this.$store.commit('showbianji');
            this.$store.commit('cityback');
            console.log(this.$store.state);
        }
        console.log(this.$route.path);
        
    }
  },
  created(){
    this.getcity();
  }
}
</script>

<style lang='less' scoped>
@import '../../styles/mixin.less';
@import '../../../static/css/font-awesome.css';
*{margin:0;padding: 0;}
.citylist{
        .cities-header {
            display:inline-block;
            border-bottom: 1px solid #e8e8e8;
            .h(25);
            .lh(25);
            .padding(0,15,0,15);
            .fs(14);
            color: #888;
        }
        .hot{
            // display:flex;
            li{
                // flex:1;
                width:33%;
                float:left;
                text-align: center;
                .fs(16);
                .h(60);
                .lh(60);
            }
        }
        .list{
            display:inline-block;
            li{
                // flex:1;
                width:33%;
                float:left;
                text-align: center;
                .fs(16);
                .h(60);
                .lh(60);
            }
        }
    }
    
</style>
