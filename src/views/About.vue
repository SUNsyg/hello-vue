<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-06-13 15:17:58
 * @LastEditTime: 2022-06-15 14:36:21
 * @LastEditors: Sun yinge
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-button @click="add" type="primary">
      点我加{{ count }}
    </a-button>
    <a-button @click="add2('a')" type="primary">
      点我加a{{ state.a }}
    </a-button>
    <a-button @click="add2('b')" type="primary">
      点我加b{{ state.b }}
    </a-button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  setup() {
    const count = ref(0)
    const state = reactive({
      a: 0,
      b: 0,
    })

    const add = () => {
      count.value += 1
    }
    const add2 = (type) => {
      state[type]+=2
    }

    return {
      state,
      count,
      add,
      add2
    }
  },
}
</script>

