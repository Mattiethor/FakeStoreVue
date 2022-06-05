import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: "https://localhost:7135/api/categories",
    product: "https://localhost:7135/api/products/",
    category: undefined,
  },

  getters:{
    getUrl(state) {
      return state.url
    },

    getProduct(state){
      return state.product
    },
    getCategory(state){
      return state.category
    },
    

  },
  mutations: {
    SET_PRODUCT(state, payload){
      state.product = "https://localhost:7135/api/products/" + payload
      console.log(state.product)
    },
    SET_CATEGORY(state, payload){
      state.category =  payload
      
    },
    SET_URL(state, payload){
      state.url = "https://localhost:7135/api/categories/" + payload
      
    },
  },
  actions: {
    setProduct({ commit }, payload) {
      commit("SET_PRODUCT", payload)
    },
    setCategory({ commit }, payload) {
      commit("SET_CATEGORY", payload)
      console.log(payload)
    },
    setUrl({ commit }, payload) {
      commit("SET_URL", payload)
      console.log(payload)
    },

  },
  modules: {
    
  }
})
