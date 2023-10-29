<!-- 반복문 사용 v-for -->

<!-- 배열이나 객체는 ref가 아니라 reactive라는 함수를 해야 상태를 가진다 -->
<!-- reactive는 이미 객체화된 변수를 프록시 객체로 변환하는 것으로 상태를 가진다 -->
<!-- ref는 대상 변수를 프록시 객체에 넣는 것으로 상태를 가진다 -->

<!-- 객체를 반복문으로 돌릴 수도 있는데 책을 이해 못하겠음 -->

<template>
    
    <!-- 일차원 배열 -->
    <button type="button" @click="onUnShift">뒤에서부터 하나씩 없어질거임</button>

    <p v-for="item in arrayItems1">{{ `이건 일차원 반복문 ${item}` }}</p>
    
    <!-- 이차원 배열 -->
    <p v-for="(item, name) in arrayItems2">{{ `이건 이차원 ${name}` }}</p>

</template>
    
<style scoped>
    
</style>
    
<script setup>
import { reactive } from 'vue';

const arrayItems1 = reactive(Array.from({length: 7}, (_, index) => index))

const arrayItems2 = reactive([
    {
        id: "1",
        name: "abc",
    },
    {
        id: "2",
        name: "123",
    }
])

const onUnShift = () => {
    if (arrayItems1.length === 0) {
        console.log("없앨게 아무것도 없음")
        return
    }

    arrayItems1.pop()
}
    
</script>