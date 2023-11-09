<!-- 책에는 @keyup.enter.prevent라고 나와있는데 그거 안됌 -->
<!-- 기능: input에서 입력하고 enter를 눌러 폼을 제출 하는 것을 막아줌 -->

<template>
  <form @submit="onSubmit" @keydown.enter.prevent>
    <input />
    <button type="submit">제출버튼</button>
  </form>
</template>

<script setup lang="ts">
const onSubmit = () => {
  console.log('onSubmit')
}
</script>

<style scoped></style>
