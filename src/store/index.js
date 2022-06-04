import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: "https://localhost:7135/api/products",
    productId: undefined,
  },

  getters:{
    getUrl(state) {
      return state.url
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
