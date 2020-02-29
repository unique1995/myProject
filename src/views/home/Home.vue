<template>
<div id="home">
  <Nav class="home-bar">
      <div slot="center">购物街</div>
  </Nav>
  <HomeSwiper :banner="banner"></HomeSwiper>
  <HomeRec :recommend="recommend"></HomeRec>
</div>
</template>
<script>
import Nav from "../../components/common/navbar/nav";
import { getHomeMultiData} from "../../components/network/home";
import HomeSwiper from "./childComp/HomeSwiper";
import HomeRec from "./childComp/HomeReco";
export default {
   components:{
       Nav,
       HomeSwiper,
       HomeRec
   },
   data(){
       return {
        banner:[],
       recommend:[]
       }
   },
   mounted(){
      getHomeMultiData().then(res =>{
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
       })
   }
}
</script>
<style  scoped>
    .home-bar {
        background-color:#FFAEB9;
    }
</style>