<!-- 조건문 사용 v-if -->

<!-- 조건이 자주 변경되지 않으면 v-show보다 유리 -->
<!-- 조건이 변경되면 조건 내 DOM 엘리먼트를 처음부터 다시 그린다 -->

<template>
  <p>{{ count }}</p>

  <p v-if="count === 0">없음</p>
  <p v-else>있음</p>

  <button @click="onIncrease">증감</button>
  <button @click="onDecrease">감소</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const onIncrease = () => {
  count.value++
}

const onDecrease = () => {
  if (count.value === 0) {
    return
  }

  count.value--
}
</script>

<style scoped></style>
