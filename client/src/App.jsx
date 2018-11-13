import React, {Component} from 'react'
import {hot} from 'react-hot-loader'
import {renderRoutes} from 'react-router-config'
import routes from 'routes'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPath: '',
      initialDone: false
    }
  }

  componentWillMount () {
    this.updateLayout()
  }

  componentWillUpdate () {
    this.updateLayout()
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({initialDone: true})
    }, 200)
  }

  updateLayout () {
    let pathname = window.location.hash.split('#')[1].split('?')[0].toLowerCase()
    let title = document.title
    routes.forEach((item) => {
      if (item.path.toLowerCase() === pathname) {
        if (title !== item.title && this.state.currentPath !== pathname) {
          // 更新页面title
          document.title = item.title
        }
      }
    })
    if (this.state.currentPath !== pathname) {
      this.setState({currentPath: pathname})
      // 页面跳转页面自动滚到到顶部
      document.documentElement.scrollTop = document.body.scrollTop = 0
    }
  }

  render () {
    return (
      <div className='App'>
        {
          this.state.initialDone ? <div>
            { renderRoutes(routes) }
          </div> : <div className='loading'>加载中。。。</div>
        }
      </div>
    )
  }
}

export default hot(module)(App)
