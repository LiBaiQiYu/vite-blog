<script setup lang="ts">
import { ref } from 'vue';

const blogList = ref([
    {title: '测试日志1'}
]);

</script>

<template>
<div>
    <div v-for="item in blogList" :key="item.title">{{item.title}}</div>
</div>
</template>