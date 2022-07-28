<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-07-27 10:41:16
 * @LastEditTime: 2022-07-28 11:18:58
 * @LastEditors: Sun yinge
-->
<template>
    <div v-for="(item, index) in listData" :key="index" class="postItem">
        <div class="title">{{item.title}}</div>
        <div class="details">{{item.body}}</div>
    </div>
</template>

<script>
import {
    getListApi
} from '../api/index'
export default {
    name: 'list',
    data() {
        return {
            listData: [],
            params: {
                page: 1,
                pageSize: 10,
            }
        }
    },
    created() {
        this.getList()
    },
    methods: {
        async getList() {
            const res = await getListApi(this.params);
            if (res) {
                this.listData = res;
                // this.$store.commit('getListData', res);
                this.$store.dispatch('changePostData', res)
            }
        }
    }
}
</script>

<style scoped lang="scss">
.postItem {
    width: 90%;
    min-height: 2rem;
    margin: 0.5rem auto;
    box-shadow: 0.02rem 0.01rem 0.05rem rgba(0,0,0, 0.2);
    text-align: center;
    .title {
        font-weight: bold;
    }
}
</style>