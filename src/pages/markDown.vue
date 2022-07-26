<script setup lang="ts">
import {marked} from 'marked'
import { ref } from 'vue';
import md1 from '../achives/test1.md?raw'

const md = ref('');
md.value = marked(md1);
</script>

<template>
<div v-html="md"></div>
</template>