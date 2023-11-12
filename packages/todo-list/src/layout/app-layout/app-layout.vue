<template>
  <WrapperBox class="flex min-h-screen min-w-[1440px] bg-white">
    <HeaderBar></HeaderBar>
    <NavigationBar></NavigationBar>

    <main class="pt-header-bar pl-navigation-bar min-w-0 grow-[1] bg-red-100">
      <WrapperBox class="pl-4 pt-4">
        <router-view></router-view>
      </WrapperBox>
    </main>
  </WrapperBox>
</template>

<script setup lang="ts">
import WrapperBox from '@elements/wrapper-box.vue'
import HeaderBar from '../header/header-bar.vue'
import NavigationBar from '../navigation/navigation-bar.vue'
</script>

<style scoped></style>
