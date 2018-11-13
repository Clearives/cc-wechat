import MainView from 'views/MainView'
import AppView from 'views/AppView'

export default [
  {
    path: '/',
    exact: true,
    component: MainView,
    title: 'MainView'
  },
  {
    path: '/app',
    component: AppView,
    title: 'AppView'
  }
]
