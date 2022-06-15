<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-06-14 16:25:10
 * @LastEditTime: 2022-06-15 14:50:47
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
                <a-card :title="`${index + 1}、${item.time}`" v-for="(item, index) in todos" :key="item.id">
                    <template #extra>
                        <a-switch v-model:checked="item.done" />
                    </template>
                    {{item.content}}
                </a-card>
                <h2>已办事项</h2>
                <a-card :title="`${index + 1}、${item.time}`" v-for="(item, index) in dones" :key="item.id">
                    <template #extra>
                        <a-switch v-model:checked="item.done" />
                    </template>
                    {{item.content}}
                </a-card>
            </a-layout-content>
        </a-layout>
    </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
export default {
    setup() {
        const todo = ref('')
        const time = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`

        const state = reactive({
            todoList: [
                {
                    id: 1,
                    done: false,
                    time: time,
                    content: '前往老八食堂，共进午餐'
                },
                {
                    id: 2,
                    done: true,
                    time: time,
                    content: '哈哈哈哈哈'
                },
                {
                    id: 3,
                    done: false,
                    time: time,
                    content: '做点阳间的需求'
                }
            ]
        })

        const addTodo = (value) => {
            console.log(value)
            const obj = {
                id: Date.now(),
                done: false,
                time: time,
                content: value
            }
            state.todoList.push(obj)
            todo.value = ''
        }

        const todos = computed(() => {
            return state.todoList.filter(item => !item.done)
        })
        const dones = computed(() => {
            return state.todoList.filter(item => item.done)
        })

        return {
            todo,
            state,
            todos,
            dones,
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
   .title {
    margin: 0;
    padding: 10px;
  }
</style>