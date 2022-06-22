import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './plugins/axios.js'
import { Swipe, SwipeItem } from 'vant';
const app = createApp(App)
app.use(router).mount('#app')
app.use(axios)
app.use(Swipe);
app.use(SwipeItem);