<!-- 양방향 데이터 -->
<!-- 상태관리를 말하는 것 -->

<template>
  <input v-model="inputValue" />

  <p>{{ inputValue }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')
</script>

<style scoped></style>
