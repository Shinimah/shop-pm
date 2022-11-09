import { createStore } from 'vuex'

export const MUTATIONS = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  SET_LIST: 'SET_LIST',
  SET_CHECK: 'SET_CHECK',
}

export const GETTERS = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  GET_LIST: 'GET_LIST',
  GET_CHECK: 'GET_CHECK',
}

export interface Product {
  img: string,
  imgAlt: string,
  desc: string,
  price: string,
  note: string,
}

export interface ListLeft {
  element: string,
  under?: string,
}

interface FiltItem {
  element: string
}

export interface Check {
  element: string,
  filt: FiltItem[]
}

interface State {
  products: Product[],
  list: ListLeft[],
  check: Check[],
}

export default createStore<State>({
  state: {
    products: [],
    list: [],
    check: [],
  },
  getters: {
    [GETTERS.GET_PRODUCTS]: (state) => state.products,
    [GETTERS.GET_LIST]: (state) => state.list,
    [GETTERS.GET_CHECK]: (state) => state.check,
  },
  mutations: {
    [MUTATIONS.SET_PRODUCTS]: (state, payload): void => {
      state.products = payload
    },
    [MUTATIONS.SET_LIST]: (state, payload): void => {
      state.list = payload
    },
    [MUTATIONS.SET_CHECK]: (state, payload): void => {
      state.check = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
