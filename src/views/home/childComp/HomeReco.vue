<template>
   <div class="reco">
       <div v-for="(item,index) in recommend" :key="index" class="reco-item">
            <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
       </div>
   </div>
</template>
<script>
export default {
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    },
}
</script>
<style lang="scss" scoped>
.reco {
    display: flex;
    padding:10px 0 25px;
    border-bottom:10px solid #eee;
    .reco-item {
        a {
             text-decoration:none;
             color:black;
        }
        flex:1;
        text-align: center;
        font-size:12px;
        margin-top:5px;
      
        img {
            width:65px;
            height: 65px;
        }
    }
}
</style>