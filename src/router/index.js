import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
const LazyPage = () => import('@/components/LazyPage')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/lazypage',
      name: 'Lazy Page',
      component: LazyPage
    }
  ]
})
