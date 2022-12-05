import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { MUTATIONS } from './store'

fetch('api/check.json')
    .then(response => response.json())
    .then(data => {
        store.commit(MUTATIONS.SET_CHECK, data)
    })
    .catch(() => {
        alert('Ошибка в check')
    })

fetch('api/footer.json')
    .then(response => response.json())
    .then(data => {
        store.commit(MUTATIONS.SET_FOOTER, data)
    })
    .catch(() => {
        alert('Ошибка в footer')
    })

fetch('api/list.json')
    .then(response => response.json())
    .then(data => {
        store.commit(MUTATIONS.SET_LIST, data)
    })
    .catch(() => {
        alert('Ошибка в list')
    })

fetch('api/menu.json')
    .then(response => response.json())
    .then(data => {
        store.commit(MUTATIONS.SET_MENU, data)
    })
    .catch(() => {
        alert('Ошибка в menu')
    })

fetch('api/products.json')
    .then(response => response.json())
    .then(data => {
        store.commit(MUTATIONS.SET_PRODUCTS, data)
    })
    .catch(() => {
        alert('Ошибка в products')
    })

createApp(App).use(store).use(router).mount('#app')
