<template>
<div id="home">
  <Nav class="home-bar">
      <div slot="center">购物街</div>
  </Nav>
  <Scroller class="content" ref="scroll" :probeType="3" 
  @scroll="conScroll" 
  :pullUpLoad="true" 
  @pullingUp="loadmore">
        <HomeSwiper :banner="banner"></HomeSwiper>
        <HomeRec :recommend="recommend"></HomeRec>
        <Feature></Feature>
        <TabControll :title="['流行','精选','新款']" class="tab-item" @tabClick="tabClick"></TabControll>
        <GoodList :goods="showGoods"></GoodList>
  </Scroller>
    <BackTop @click.native="backClick" v-show="bool"></BackTop>
  <div></div>
</div>
</template>
<script>
import Nav from "../../components/common/navbar/nav";
import { getHomeMultiData,getGoodsData} from "../../components/network/home";
import HomeSwiper from "./childComp/HomeSwiper";
import HomeRec from "./childComp/HomeReco";
import Feature from "./childComp/feature";
import TabControll from "../../components/content/tabcntroll/TabContoll";
import GoodList from "../../components/content/good/GoodsList";
import Scroller from "../../components/common/scroller/Scroller";
import BackTop from "../../components/content/backTop/BackTop";
export default {
   components:{
       Nav,
       HomeSwiper,
       HomeRec,
       Feature,
       TabControll,
       GoodList,
       Scroller,
       BackTop
   },
   data(){
       return {
        banner:[],
        recommend:[],
        goods:{
           "pop":{page:0,list:[]},
           "new":{page:0,list:[]},
           "sell":{page:0,list:[]},
        },
        currentType:"pop",
        bool:false
       }
   },
   created(){
       this. getHomeMultiData();
       this.getGoodsData("pop");
       this.getGoodsData("new");
       this.getGoodsData("sell");      
   },
   computed:{
       showGoods(){
           return this.goods[this.currentType].list
       }
   },
   methods:{
       tabClick(index){
           switch(index){
               case 0 : this.currentType="pop";
               break;
               case 1 : this.currentType="new";
               break;
               case 2 : this.currentType="sell";
           } 
           console.log(index);
           
           //点击切换按钮 通过index来转换
       },
       loadmore(){
            this.getGoodsData(this.currentType)
       },
       backClick(){
           this.$refs.scroll.scrollTo(0,0,500);
       },//单击返回按钮
    conScroll(position){
        // console.log(position);
        this.bool = (-position.y) > 1000;
    },
    // 网络请求
        getHomeMultiData(){
            getHomeMultiData().then(res =>{
                this.banner = res.data.banner.list;
                this.recommend = res.data.recommend.list;
       })},
        getGoodsData(type) {
            const page = this.goods[type].page + 1;
           getGoodsData(type,page).then(res => {
               const result = res.data.list;
               this.goods[type].list.push(...result);
            //    console.log(res.data);
               this.goods[type].page += 1;
            //    console.log(page);
          }) 
        }
   }
}
</script>
<style  scoped>
#home{
    padding-top:44px;
    height: 100vh;
    position: relative;
}
    .home-bar {
        background-color:#FFAEB9;
        position: fixed;
        left:0 ;
        top:0;
        right: 0;
        z-index: 99;
    }
    .tab-item {
        position:sticky;
        top:44px;
        background:white;
         z-index: 99;
    }
    .content{
        /* height: calc(100% - 93px); */
        /* background: red; */
        overflow: hidden;
        /* margin-top:148px; */
        position: absolute;
        top:44px;
        bottom:49px;

    }
</style>