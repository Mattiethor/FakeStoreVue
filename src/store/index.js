import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: "https://localhost:7135/api/products",
    product: "https://localhost:7135/api/products/",
    category: undefined,
  },

  getters:{
    getUrl(state) {
      return state.url
    },

    getProduct(state){
      return state.product
    }
  },
  mutations: {
    SET_PRODUCT(state, payload){
      state.product = "https://localhost:7135/api/products/" + payload
      console.log(state.product)
    }
  },
  actions: {
    setProduct({ commit }, payload) {
      commit("SET_PRODUCT", payload)
    },
  },
  modules: {
    
  }
})
