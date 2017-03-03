import index from './index/index.vue'

export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/:topMenuId',
    component: index
  },
  {
    path: '/:topMenuId/:leftMenuId',
    component: index
  }
]

