import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

const app = createApp(App)

const store = createStore({
    state () {
        return {
            count: 1
        }
    }
})

app.mount('#app')
app.use(store)
