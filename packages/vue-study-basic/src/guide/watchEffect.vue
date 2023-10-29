<!-- watch와 동일하게 값을 감시하는 건 같지만 초기 값부터 감시한다. -->
<!-- 이놈이 진짜 useEffect 같은 놈인가보다 -->

<!-- https://ko.vuejs.org/api/reactivity-core.html#watcheffect -->

<template>
 
<button @click="onIncreaseX">example1</button>

</template>
    
<style scoped>
    
</style>
    
<script setup>
import { watchEffect, ref, reactive } from 'vue'

const xCount = ref(0)

const onIncreaseX = () => {
    xCount.value++
}

const stop = watchEffect(() => {
    console.log(`xCount is ${xCount.value}`)
})
p
// stop()

</script>