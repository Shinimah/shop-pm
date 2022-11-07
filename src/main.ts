import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { MUTATIONS } from './store'
import {products} from './products'
import {list} from './list'

store.commit(MUTATIONS.SET_PRODUCTS, products)
store.commit(MUTATIONS.SET_LIST, list)

createApp(App).use(store).use(router).mount('#app')
