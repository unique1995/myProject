<template>
    <div class="good-list">
     
    <GoodsListItem v-for="(item,index) in goods" :key=index :goodsItem="item"></GoodsListItem>
    </div>
</template>

<script>
import GoodsListItem from "./GoodListItem";
  export default {
    name: "GoodsList",
    props:{
      goods:{
        type:Array,
        default(){
          return []
         }
      } 
    },
    components:{
      GoodsListItem
    }
  }
</script>

<style scoped>
    .good-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* background-color: var(--color-background); */

    padding: 2px;
  }
</style>
