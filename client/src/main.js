import 'babel-polyfill'
import {HashRouter as Router} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

let _App = <Router><App /></Router>
ReactDOM.render(
  _App,
  document.getElementById('root')
)
