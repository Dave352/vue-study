<template>
  <nav
    class="w-navigation-bar fixed bottom-0 left-0 top-12 z-40 box-border h-[calc(100%-header-bar)] overflow-auto border-[1px] border-t-gray-200 bg-white p-4 shadow-md"
  >
    <RouterLink
      v-for="item in navigationMenus"
      v-slot="{ isExactActive }"
      :key="item.to"
      :to="item.to"
      class="my-2 block min-w-[174px] select-none"
    >
      <WrapperBox
        :class="
          twJoin(
            'flex h-10 items-center rounded-md transition-all bg-transparent text-black hover:bg-red-100 hover:text-red-300 pl-6 pr-2',
            isExactActive && 'text-red-300 bg-red-100',
          )
        "
      >
        {{ item.name }}
      </WrapperBox>
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import WrapperBox from '@/elements/wrapper-box.vue'
import { RoutePath } from '@/routes/app-route-path'
import { twJoin } from 'tailwind-merge'

const navigationMenus = [
  {
    to: RoutePath.home.path,
    name: RoutePath.home.navName,
  },
  {
    to: RoutePath.postList.path,
    name: RoutePath.postList.navName,
  },
  {
    to: RoutePath.postHistory.path,
    name: RoutePath.postHistory.navName,
  },
]
</script>

<style scoped></style>
