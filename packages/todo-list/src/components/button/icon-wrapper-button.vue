<template>
  <BaseButton v-bind="$attrs" :class="cn(css({ paddingOption }))">
    <slot></slot>
  </BaseButton>
</template>

<script setup lang="ts">
import { cn } from '@/utils'
import { cva } from 'class-variance-authority'
import BaseButton from './base-button.vue'

type PaddingOption = 'padding' | 'noPadding'

withDefaults(defineProps<{ paddingOption?: PaddingOption }>(), {
  paddingOption: 'noPadding',
})

const css = cva(
  'inline-flex h-fit w-fit cursor-pointer select-none items-center justify-center rounded-full bg-transparent hover:bg-slate-100',
  {
    variants: {
      paddingOption: {
        noPadding: 'p-0',
        padding: 'p-1',
      },
    },
    defaultVariants: {
      paddingOption: 'noPadding',
    },
  },
)
</script>

<style scoped></style>
