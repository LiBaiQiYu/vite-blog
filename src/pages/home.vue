<script setup lang="ts">
import { ref } from 'vue';
import my from './my.vue';

const active = ref(0)
const menuList = ref([
    { name: '首页' },
    { name: '日志' }, 
    { name: '归档' }, 
    { name: '关于' }
])
</script>

<template>
    <div class="home">
        <div class="top-bar">
            <div :class="{ active: active == index }" v-for="(item,index) in menuList" @click="active = index">{{item.name}}</div>
        </div>

        <div class="content">
            <my v-show="active==3"></my>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home {
    height: 100vh;
    display: flex;
    flex-direction: column;

    .top-bar {
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        div {
            margin: 0 20px;
            color: #333;
            cursor: pointer;
            padding: 5px 10px;
            border-radius: 4px;
            box-shadow: 0px 4px 10px 1px rgb(225, 222, 216);
            transition: all .4s ease-out;
        }

        div:hover {
            color: orange;
            padding: 10px 20px;
        }

        .active {
            padding: 10px 20px;
            color: orange;
        }
    }

    .content {
        flex: 1;
        overflow-y: auto;
    }
}
</style>