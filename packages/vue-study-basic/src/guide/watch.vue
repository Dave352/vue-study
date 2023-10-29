<!-- 값을 감시한다는 뜻의 watch -->

<!-- 감시하고 있는 대상의 값이 변경되면, watch의 두번째 인수인 콜백함수가 실행된다. -->

<!-- example1 변경된 단일 값을 감시 (x만) -->
<!-- example2 변경된 복수의 값을 감시 (x와 y모두) -->
<!-- example3 변경된 객체의 특정 키의 값을 감시 -->
<!-- example4 객체안에 객체가 있는 경우 깊은 비교를 하기위해 deep 옵션을 사용 -->

<!-- https://ko.vuejs.org/api/reactivity-core.html#watch -->

<template>
 
    <!-- example 1 -->
   <button @click="onIncreaseX">example1</button>
   
   <!-- example 2 -->
   <button @click="onIncreaseXY">example2</button>
   
   <!-- example 3 -->
   <input v-model="userInfo.username" @change="onChangeUserInfo" />
   
   <!-- example4 -->
   <input v-model="infoInInfo.user.username" @change="onChangeUsername" />
   
   </template>
       
   <style scoped>
       
   </style>
       
   <script setup>
   import { watch, ref, reactive } from 'vue'
   
   // example 1, 2
   const xCount = ref(0)
   const yCount = ref(0)
   
   // example 3
   const userInfo = reactive({ id: "1", username: "example3" })
   
   // example 4
   const infoInInfo = reactive({ user: { id: "2", username: 'example4' } })
   
   // example 1
   const onIncreaseX = () => {
       xCount.value++
   }
   
   // example 2
   const onIncreaseXY = () => {
       xCount.value++
       yCount.value++
   }
   
   // example 3
   const onChangeUserInfo = (event) => {
       return {
           ...userInfo,
           username: event.target.value,
       }
   }
   
   // example 4
   const onChangeUsername = (event) => {
       infoInInfo.user = {username: event.target.value}
   }
   
   
   // example 1
   watch(xCount, (newXCount) => {
       console.log(`xCount is ${newXCount}`)
   })
   
   // example 2
   watch([xCount, yCount], ([newXCount, newYCount]) => {
       console.log(`xCount is ${newXCount}, yCount is ${newYCount}`)
   })
   
   // example 3
   watch(() => userInfo.username, (newUsername) => {
       console.log(`username is ${newUsername}`)
   })
   
   // example 4
   watch(() => infoInInfo.user, (user) => {
       console.log(`user.username is ${user.username}`)
   }, {deep: true})
   
   </script>