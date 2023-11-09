<!-- 정적인 데이터 표시할 떄 쓰는 것 같음 -->
<!-- react의 useMemo와 같은? 재계산 하지 않는? -->

<template>
  <p>{{ publishedBooksMessage }}</p>
  <button @click="onPop">이거 미친듯이 누르다보면 no로 바뀜</button>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'

const arrayItems = reactive(Array.from({ length: 7 }, (_, index) => index))

const publishedBooksMessage = computed(() => {
  return arrayItems.length > 0 ? 'yes' : 'no'
})

const onPop = () => {
  arrayItems.pop()
}
</script>

<style scoped></style>
