import index from './index/index.vue'
import frame from './components/frame.vue'

export default [
  {
    path: '/',
    component: index,
    children: [{
      path: '/menu/:id',
      component: frame
    }]
  }
]

