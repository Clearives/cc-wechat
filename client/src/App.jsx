import React, {Component} from 'react'
import {hot} from 'react-hot-loader'
import {renderRoutes} from 'react-router-config'
import {BrowserRouter as Router} from 'react-router-dom'
import routes from 'routes'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPath: ''
    }
  }

  componentWillMount () {
    this.updateLayout()
  }

  componentWillUpdate () {
    this.updateLayout()
  }

  updateLayout () {
    let pathname = window.location.pathname.toLowerCase()
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
        <Router>
          { renderRoutes(routes) }
        </Router>
      </div>
    )
  }
}

export default hot(module)(App)
