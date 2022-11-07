import { createStore } from 'vuex'

export const MUTATIONS = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  SET_LIST: 'SET_LIST'
}

export const GETTERS = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  GET_LIST: 'GET_LIST'
}

export default createStore({
  state: {
    products: [],
    list: []
  },
  getters: {
    [GETTERS.GET_PRODUCTS]: (state) => state.products,
    [GETTERS.GET_LIST]: (state) => state.list
  },
  mutations: {
    [MUTATIONS.SET_PRODUCTS]: (state, payload): void => {
      state.products = payload
    },
    [MUTATIONS.SET_LIST]: (state, payload): void => {
      state.list = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
