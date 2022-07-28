/*
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-06-13 15:17:58
 * @LastEditTime: 2022-07-27 16:44:45
 * @LastEditors: Sun yinge
 */
import { createStore } from 'vuex'

export default createStore({
  state: {
    author: 'sun',
    postList: []
  },
  mutations: {
    getListData(state, data) {
      state.postList = data
    }
  },
  actions: {
    changePostData({commit}, data) {
      commit('getListData', data)
    }
  },
  modules: {
  }
})
