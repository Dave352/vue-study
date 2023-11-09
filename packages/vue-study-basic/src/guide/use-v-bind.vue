<!-- 단방향 데이터 -->
<!-- 그냥 데이터를 바인딩하겠다는 뜻 -->

<template>
  <input :value="inputValue" />
  <p>{{ inputValue }}</p>
</template>

<script setup lang="ts">
const inputValue = '123'
</script>

<style scoped></style>
