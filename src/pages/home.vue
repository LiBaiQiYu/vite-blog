<script setup lang="ts">
import { ref } from 'vue';
import my from './menu/my.vue';
import mainPage from './menu/main.vue'
import blog from './menu/blog.vue'
import viewBlog from './markDown.vue'

const active = ref(0)
const view = ref(true)
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
            <my v-show="active===3"></my>
            <blog v-show="active===1 && view ===false"></blog>
            <main-page v-show="active===0"></main-page>
            <view-blog v-show="active===1 && view===true"></view-blog>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #EEE;

    .top-bar {
        height: 60px;
        width: 800px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFF;

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
        max-width: 800px;
        width: 800px;
        margin: 0 auto;
        background-color: #FFF;
        padding: 10px;
        box-sizing: border-box;
    }
}
</style>