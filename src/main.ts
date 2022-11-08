import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { MUTATIONS } from './store'
import {products} from './products'
import {list} from './list'
import {check} from './check'

store.commit(MUTATIONS.SET_PRODUCTS, products)
store.commit(MUTATIONS.SET_LIST, list)
store.commit(MUTATIONS.SET_CHECK, check)

createApp(App).use(store).use(router).mount('#app')
