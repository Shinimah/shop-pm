import { createStore } from 'vuex'

export const MUTATIONS = {
  SET_PRODUCTS: 'SET_PRODUCTS'
}

export const GETTERS = {
  GET_PRODUCTS: 'GET_PRODUCTS'
}

export default createStore({
  state: {
    products: []
  },
  getters: {
    [GETTERS.GET_PRODUCTS]: (state) => state.products
  },
  mutations: {
    [MUTATIONS.SET_PRODUCTS]: (state, payload): void => {
      state.products = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
