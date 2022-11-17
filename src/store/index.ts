import { createStore } from 'vuex'

export const MUTATIONS = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  SET_LIST: 'SET_LIST',
  SET_CHECK: 'SET_CHECK',
  SET_MENU: 'SET_MENU',
  SET_FOOTER: 'SET_FOOTER',
}

export const GETTERS = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  GET_LIST: 'GET_LIST',
  GET_CHECK: 'GET_CHECK',
  GET_MENU: 'GET_MENU',
  GET_FOOTER: 'GET_FOOTER',
}

export interface Product {
  img: string,
  imgAlt: string,
  desc: string,
  price: string,
  note: string,
  rating: string,
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
  sub3: SubCat3[],
}

interface SubCat3 {
  element: string,
}

interface FiltItem {
  element: string,
}

export interface Check {
  element: string,
  filt: FiltItem[],
}

export interface Menu {
  icon: string,
  alt: string,
  element: string,
}

export interface Footer {
  img: string,
  alt: string,
  title: string,
  message: string,
}

interface State {
  products: Product[],
  list: ListLeft[],
  check: Check[],
  menu: Menu[],
  footer: Footer[],
}

export default createStore<State>({
  state: {
    products: [],
    list: [],
    check: [],
    menu: [],
    footer: [],
  },
  getters: {
    [GETTERS.GET_PRODUCTS]: (state) => state.products,
    [GETTERS.GET_LIST]: (state) => state.list,
    [GETTERS.GET_CHECK]: (state) => state.check,
    [GETTERS.GET_MENU]: (state) => state.menu,
    [GETTERS.GET_FOOTER]: (state) => state.footer,
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
    [MUTATIONS.SET_FOOTER]: (state, payload): void => {
      state.footer = payload
      },
  },
  actions: {
  },
  modules: {
  }
})
