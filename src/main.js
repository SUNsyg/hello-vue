/*
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-06-13 11:05:48
 * @LastEditTime: 2022-06-14 16:12:09
 * @LastEditors: Sun yinge
 */
import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'

console.log('process', process)
console.log('baseurl', process.env.BASE_URL)

createApp(App).use(store).use(router).use(Antd).mount('#app')
