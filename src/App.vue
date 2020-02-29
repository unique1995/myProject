<template>
  <div id="app">
  <router-view></router-view>
    <Tabbar>
      <TaItem path="/home">
        <img src="./assets/img/tabbar/home.svg" slot="item-icon">
        <img src="./assets/img/tabbar/home_active.svg" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </TaItem>

      <TaItem path="/sort">
        <img src="./assets/img/tabbar/category.svg" slot="item-icon">
        <img src="./assets/img/tabbar/category_active.svg" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </TaItem>

      <TaItem path="/cart">
        <img src="./assets/img/tabbar/shopcart.svg" slot="item-icon">
        <img src="./assets/img/tabbar/shopcart_active.svg" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </TaItem>

      <TaItem path="/profile">
        <img src="./assets/img/tabbar/profile.svg" slot="item-icon">
        <img src="./assets/img/tabbar/profile_active.svg" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </TaItem>

    </Tabbar>
  </div>
</template>

<script>
import  Tabbar from "./components/tabbar/taBbar";
import  TaItem from "./components/tabbar/tabbarItem.vue";
export default {
  components:{
    Tabbar,
    TaItem
  }
}
</script>
<style lang="scss">
 
</style>
