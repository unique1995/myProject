<template>
  <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div> 
      <div :style="isStyleActive"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
    props:{
        path:String
    },
    data(){
        return {
        }
    },
    methods:{
        itemClick(){
            this.$router.push(this.path);
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        },
        isStyleActive() {
            return this.isActive ? {color:this.activeStyle} : {}
        }
    },
}
</script>
<style lang="scss">
  @import "../../assets/css/base.css";
    .tab-bar-item{
      flex:1;
     text-align: center;
      line-height: 26px;
      font-size:14px;
      img{
          width:24px;
          height: 24px;
          vertical-align: middle;
      };
      .active{
          color:palevioletred;
      };
    }
</style>
