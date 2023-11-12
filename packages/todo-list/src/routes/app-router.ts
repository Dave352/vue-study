import { createRouter, createWebHistory } from 'vue-router'
import AppPage from '@/layout/app-layout/app-layout.vue'

import HomePage from '@/pages/app/post-home.vue'
import PostListPage from '@/pages/app/post-list.vue'
import NewPostPage from '@/pages/app/new-post.vue'
import PostHistoryPage from '@/pages/app/post-history.vue'
import { RoutePath } from './app-route-path'

const routes = [
  {
    path: '/',
    redirect: RoutePath.home.path,
  },

  {
    name: 'app',
    path: RoutePath.home.path,
    component: AppPage,
    children: [
      /**
       * @menu Home
       */
      {
        name: RoutePath.home.routeName,
        path: RoutePath.home.path,
        component: HomePage,
      },

      /**
       * @menu post-list
       */
      {
        name: RoutePath.postList.routeName,
        path: RoutePath.postList.path,
        component: PostListPage,
        children: [
          {
            name: RoutePath.newPost.routeName,
            path: RoutePath.newPost.path,
            component: NewPostPage,
          },
        ],
      },

      /**
       * @menu post-History
       */
      {
        name: RoutePath.postHistory.routeName,
        path: RoutePath.postHistory.path,
        component: PostHistoryPage,
      },
    ],
  },

  /**
   * @menu sign-in
   */
  // {
  //   name: RoutePath.signIn.routeName,
  //   path: RoutePath.signIn.path,
  //   component: SignInPage,
  //   meta: {
  //     requiresAuth: false,
  //   },
  // },
]

const AppRouter = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
})

export default AppRouter
