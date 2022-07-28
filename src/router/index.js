/*
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-06-13 15:17:58
 * @LastEditTime: 2022-07-27 10:41:44
 * @LastEditors: Sun yinge
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/todo',
    component: () => import('../views/todo.vue')
  },
  {
    path: '/list',
    component: () => import('../views/list.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
