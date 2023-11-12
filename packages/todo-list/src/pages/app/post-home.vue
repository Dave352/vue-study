<template>
  <BaseLayout>
    <WrapperBox class="flex flex-col gap-y-4 p-10">
      <form class="flex w-40 flex-col gap-y-2" @submit="onSubmit">
        <WrapperBox>
          <p class="text-sm">내용</p>
          <input
            :ref="content.ref"
            v-model="content.value"
            class="w-56 rounded-sm px-2 text-sm"
            placeholder="내용 입력하기"
          />
        </WrapperBox>
        <PrimaryButton type="submit" size="sm" class="w-24">ADD</PrimaryButton>
      </form>

      <WrapperBox class="grid grid-cols-3 gap-8">
        <WrapperBox
          v-for="item in postLists"
          :key="item.id"
          class="rounded-lg bg-white p-4 shadow-sm"
        >
          <WrapperBox>{{ `글번호: ${item.id}` }}</WrapperBox>
          <WrapperBox>{{ item.content }}</WrapperBox>
        </WrapperBox>
      </WrapperBox>
    </WrapperBox>
  </BaseLayout>
</template>

<script setup lang="ts">
import PrimaryButton from '@/components/button/primary-button.vue'
import WrapperBox from '@/elements/wrapper-box.vue'
import BaseLayout from '@/layout/base-layout/base-layout.vue'
import { useForm } from 'vue-hooks-form'
import { usePostStore } from '@/stores'
import { toast } from 'vue3-toastify'

interface FormInput {
  content: string
}

const { postLists, addPostLists } = usePostStore()

const { handleSubmit, useField } = useForm<FormInput>({
  defaultValues: {
    content: '',
  },
})

const content = useField('content')

const onSubmit = handleSubmit((data) => {
  const lastPost = postLists.at(-1)

  if (!lastPost || !data.content) {
    toast.warning('아무 내용도 입력하지 않았어욤')
    return
  }

  addPostLists({
    id: `${+lastPost.id + 1}`,
    content: data.content,
  })

  content.value = ''
})
</script>

<style scoped></style>
