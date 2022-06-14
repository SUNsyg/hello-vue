<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-06-14 16:25:10
 * @LastEditTime: 2022-06-14 17:20:11
 * @LastEditors: Sun yinge
-->
<template>
    <div id="components-layout-demo-basic">
        <a-layout>
            <a-layout-header>待办事项</a-layout-header>
            <a-layout-content>
                <a-input-search
                v-model:value="todo"
                placeholder="请输入待办事项"
                size="large"
                @search="addTodo"
                >
                <template #enterButton>
                    <a-button>新增</a-button>
                </template>
                </a-input-search>
                <h2>待办事项</h2>
                <a-card>
                    <template #extra>
                        <a-switch />
                    </template>
                </a-card>
                <h2>已办事项</h2>
            </a-layout-content>
        </a-layout>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const todo = ref('')

        const addTodo = (value) => {
            console.log(value)
            todo.value = ''
        }
        return {
            todo,
            addTodo
        }
    }
}
</script>

<style scoped>
#components-layout-demo-basic {
    min-height: 100vh;
    max-width: 40%;
    margin: 0 auto;
    background-color: #ededed;
  }
  #components-layout-demo-basic .ant-layout-header,
  #components-layout-demo-basic .ant-layout-footer {
    background: #7dbcea;
    text-align: center;
    color: #fff;
  }
</style>