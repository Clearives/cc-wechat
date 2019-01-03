import MainView from 'views/MainView'
import AppView from 'views/AppView'

export default [
  {
    path: '/',
    exact: true,
    component: MainView,
    title: '微信测试（koa2 react）'
  },
  {
    path: '/app',
    component: AppView,
    title: 'APP入口'
  }
]
