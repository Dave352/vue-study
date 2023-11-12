import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Post {
  id: string
  content: string
}

export const usePostStore = defineStore('post', () => {
  const defaultPosts = Array.from({ length: 4 }, (_, idx) => ({
    id: `${idx + 1}`,
    content: '야! 집가자',
  }))

  const postLists = ref(defaultPosts)

  const addPostLists = (post: Post) => {
    postLists.value.push(post)
  }

  return { postLists, addPostLists }
})
