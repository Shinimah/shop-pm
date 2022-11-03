import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { MUTATIONS } from './store'
import {products} from './products'

store.commit(MUTATIONS.SET_PRODUCTS, products)

createApp(App).use(store).use(router).mount('#app')
