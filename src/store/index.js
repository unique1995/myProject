import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    counter:0,
    num: 1,
    name:"wang"
  },
  mutations: {
      add(state,count){
        state.counter += count
      },
      del(state){
        state.counter--
      },
      update(state){
        state.name="wch"
      }
  },
  getters:{
    allPrice (state){
      return state.counter*state.num
    }
  },
  actions: {
    aupDate(context,payload){
      return new Promise((resolve)=> {
        setTimeout(()=> {
          context.commit("update");
          console.log(payload);
          resolve("111");
        },1000)
      })
    }
  },
  modules: {
  }
})
