<!-- 조건문 사용 v-show -->

<!-- 조건이 자주 변경되면 v-if보다 유리 -->
<!-- 조건이 변경되면 모든 조건의 DOM 엘리먼트를 그린 후 조건에 맞지 않는 엘리먼트를 hide 처리 -->

<!-- 적절한 예제를 작성하지 못했음 -->

<template>

    <p>{{ count }}</p>

    <p v-if="count === 0">없음</p>
    <p v-else>있음</p>

    <button @click="onIncrease">증감</button>
    <button @click="onDecrease">감소</button>

</template>
    
<style scoped>
    
</style>
    
<script setup>
import { ref } from 'vue';

 
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