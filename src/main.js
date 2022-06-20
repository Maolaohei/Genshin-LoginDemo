import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './plugins/axios.js'
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'
import '@layui/icons-vue/lib/index.css'
import '@layui/layer-vue/lib/index.css'
const app = createApp(App)
app.use(router).mount('#app')
app.use(axios)
app.use(Layui)