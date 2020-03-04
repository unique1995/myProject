<template>
    <div id="title1">
        <p v-for="(item,index) in title" :key="index" 
        id="title_1" :class="{active: index === currentIndex}" @click="ItemClick(index)">
            <span>{{item}}</span>
        </p>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:Array,
            dafault(){
                return []
            }
        }
    },
    data(){
        return {
            currentIndex : 0,
        }
    },
    methods:{
        ItemClick(index){
            this.currentIndex = index;
            this.$emit("tabClick",index);
        }
    }
}
</script>
<style lang="scss"  scoped>
#title1 {
     display: flex;
}
#title_1 {
   flex:1;
   display: inline;
 text-align: center;
}
.active {
    color: red;
    
    span {
        border-bottom: 1px solid red; 
        padding:5px;
    }
}
</style>