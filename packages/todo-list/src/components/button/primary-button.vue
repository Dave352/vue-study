<template>
  <BaseButton :class="cn(css({ variant, size }))">
    <slot></slot>
  </BaseButton>
</template>

<script setup lang="ts">
import { cva } from 'class-variance-authority'
import { cn } from '@utils/cn'
import BaseButton from './base-button.vue'

type Variant = 'contained' | 'outlined'
type Size = 'sm' | 'md' | 'lg'

withDefaults(
  defineProps<{
    variant?: Variant
    size?: Size
  }>(),
  {
    variant: 'contained',
    size: 'md',
  },
)

const css = cva('box-border w-full border-2 px-4 py-1 active:translate-y-[2px]', {
  variants: {
    variant: {
      contained: 'border-red-200 bg-red-200 text-white',
      outlined: 'border-red-200 bg-white text-slate-300',
    },
    size: {
      sm: 'rounded-sm text-sm',
      md: 'rounded-md text-lg',
      lg: 'rounded-lg text-xl',
    },
  },
  defaultVariants: {
    variant: 'contained',
    size: 'md',
  },
})
</script>

<style scoped></style>
