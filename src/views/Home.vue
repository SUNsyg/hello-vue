<!--
 * @Description:  
 * @Author: Sun yinge
 * @Date: 2022-06-13 15:17:58
 * @LastEditTime: 2022-07-27 16:41:23
 * @LastEditors: Sun yinge
-->
<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <header>
      <div @click="goListPage">帖子列表</div>
    </header>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
  created() {
    console.log(this.$store.state.postList)
  },
  methods: {
    goListPage() {
      this.$router.push('/list')
    }
  }
  // components: {
  //   // HelloWorld
  // }
}
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  min-height: 100vh;
}
header {
  width: 100%;
  height: 1.5rem;
}
</style>
