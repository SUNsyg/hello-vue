/*
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-06-13 11:05:48
 * @LastEditTime: 2022-06-13 14:33:18
 * @LastEditors: Sun yinge
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

console.log('process', process)
console.log('baseurl', process.env.BASE_URL)

createApp(App).use(store).use(router).mount('#app')
