import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './api/mock_data'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')

// console.log('process.env.VUE_APP_STRING = ', process.env.VUE_APP_STRING)
// console.log('process.env.VUE_APP_STRING 2 = ', process.env.VUE_APP_STRING)

router.beforeEach((to, from, next) => {
  /* 路由发生变化时遍历修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // next()
  if (to.matched.some(res => res.meta.requireAuth)) { // 验证是否需要登陆
    const sessData = JSON.parse(sessionStorage.getItem('data') || '[]')
    console.log('sessData = ', sessData)
    if (sessData === true) {
      // 查询本地存储信息是否已经登陆
      next()
    } else {
      next({
        path: '/Editor', // 未登录则跳转至login页面
        query: { redirect: to.fullPath } // 登陆成功后回到当前页面，这里传值给login页面，to.fullPath为当前点击的页面
      })
    }
  } else {
    next()
  }
})
