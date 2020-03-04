<template>
<div class="wrapper"  ref="ratingsWrapper">
    <ul>
     
    <h1>种类</h1>
    <h1>种类</h1>
    <h1>种类</h1>
    <h1>种类</h1>
    <h1>种类</h1>
    <h1>种类</h1>
    <h1>种类</h1>
    <h1>种类</h1>
    <h1>种类</h1>
    <h1>种类</h1>
    <h1>种类</h1>
    <h1>种类</h1>
    <h1>种类</h1>
    <h1>种类</h1>
    <h1>种类</h1>
    <h1>种类</h1>
    <h1>种类</h1>
    <h1>种类</h1>
    <h1>种类</h1>
    <h1>种类</h1>
    </ul>
</div>
</template>
<script>
import BScroll from 'better-scroll'; 
export default {
    data(){
        return {
           scroll:null
        }
    },
    mounted(){
       this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.ratingsWrapper, {
        probeType:3,
        pullUpLoad:true
   });
       this.scroll.on("scroll",(position)=>{console.log(position);  })
         //时时监控位置
        this.scroll.on("pullingUp",()=>{console.log("上拉加载更多");  })
        //下拉加载更多
       })
    }
}
</script>
<style lang="scss" scoped>
    .wrapper {
        height: 200px;
        background: red;
        overflow:hidden;
    }
</style>