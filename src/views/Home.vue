<!--
 * @Description:  
 * @Author: Sun yinge
 * @Date: 2022-06-13 15:17:58
 * @LastEditTime: 2022-07-26 16:50:44
 * @LastEditors: Sun yinge
-->
<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    111
    <button @click="getList">请求</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {
  getListApi
} from '../api/index';
export default {
  name: 'Home',
  data() {
    return {
      listData: []
    }
  },
  methods: {
    async getList() {
      const res = await getListApi();
      if (res) {
        this.listData = res;
      }
    }
  }
  // components: {
  //   // HelloWorld
  // }
}
</script>
