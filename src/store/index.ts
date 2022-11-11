import { createStore } from 'vuex'

export const MUTATIONS = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  SET_LIST: 'SET_LIST',
  SET_CHECK: 'SET_CHECK',
  SET_MENU: 'SET_MENU',
}

export const GETTERS = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  GET_LIST: 'GET_LIST',
  GET_CHECK: 'GET_CHECK',
  GET_MENU: 'GET_MENU',
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
  sub: SubCat[],
}

export interface SubCat {
  element: string,
  sub2: SubCat2[],
}

export interface SubCat2 {
  element: string,
  sub3: SubCat3[]
}

interface SubCat3 {
  element: string,
}

interface FiltItem {
  element: string
}

export interface Check {
  element: string,
  filt: FiltItem[]
}

export interface Menu {
  icon: string
  alt: string
  element: string
}

interface State {
  products: Product[],
  list: ListLeft[],
  check: Check[],
  menu: Menu[],
}

export default createStore<State>({
  state: {
    products: [],
    list: [],
    check: [],
    menu: [],
  },
  getters: {
    [GETTERS.GET_PRODUCTS]: (state) => state.products,
    [GETTERS.GET_LIST]: (state) => state.list,
    [GETTERS.GET_CHECK]: (state) => state.check,
    [GETTERS.GET_MENU]: (state) => state.menu,
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
    [MUTATIONS.SET_MENU]: (state, payload): void => {
      state.menu = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
