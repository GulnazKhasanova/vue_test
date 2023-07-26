import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faPhone);

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
    .component("font-awesome-icon", FontAwesomeIcon)

