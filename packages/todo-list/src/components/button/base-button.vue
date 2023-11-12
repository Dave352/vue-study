<template>
  <button
    v-bind="$attrs"
    class="cursor-pointer appearance-none border-none p-0 outline-none active:translate-y-[2px]"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped></style>
