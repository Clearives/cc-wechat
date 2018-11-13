import React from 'react'
import { hot } from 'react-hot-loader'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from 'routes'
import './App.css'

const App = () => (
  <div className='App'>
    <Router>
      {renderRoutes(routes)}
    </Router>
  </div>
)

export default hot(module)(App)
