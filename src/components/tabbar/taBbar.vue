<template>
  <div>
    <div id="tabbar">
     <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  @import "../../assets/css/base.css";
  #tabbar{
    display: flex;
     position:fixed;
     left:0;
      right:0;
      bottom:0;
      background:#f6f6f6;
      box-shadow: 0px -3px 1px rgba(100,100,100,0.1);
   
  }

</style>
