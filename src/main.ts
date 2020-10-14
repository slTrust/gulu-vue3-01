import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory,createRouter } from 'vue-router'
import Aaa from './components/Aaa.vue'
import Bbb from './components/Bbb.vue'

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Aaa},
        {path:'/xxx',component:Bbb}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
