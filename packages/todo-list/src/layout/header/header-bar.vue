<template>
  <header class="h-header-bar fixed inset-x-0 top-0 z-50 flex justify-between bg-white shadow-md">
    <!-- Left section -->
    <WrapperBox class="w-navigation-bar flex items-center justify-center">
      <RouterLink to="/" class="h-12">
        <img :src="Logo" class="h-full" />
      </RouterLink>
    </WrapperBox>

    <!-- Right section -->
    <WrapperBox class="flex w-[calc(100%-navigation-bar)] items-center gap-x-4 pr-4">
      <!-- Full screen Icon -->
      <IconWrapperButton>
        <FullScreenExitIcon v-if="isFullScreen"></FullScreenExitIcon>
        <FullScreenIcon v-else></FullScreenIcon>
      </IconWrapperButton>
      <!-- Account Icon -->
      <IconWrapperButton>
        <FillProfileIcon></FillProfileIcon>
      </IconWrapperButton>
    </WrapperBox>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WrapperBox from '@elements/wrapper-box.vue'
import FillProfileIcon from '../icons/fill-profile-icon.vue'
import FullScreenIcon from '../icons/full-screen-icon.vue'
import FullScreenExitIcon from '../icons/full-screen-exit-icon.vue'
import IconWrapperButton from '@/components/button/icon-wrapper-button.vue'
import Logo from '../../../public/logo.png'

const isFullScreen = ref(false)
</script>

<style scoped></style>
