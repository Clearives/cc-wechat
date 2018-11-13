import React, {Component} from 'react'
import './MainView.css'

export default class MainView extends Component {
  static propTypes = {

  };
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div className='main-view'>
        <div className='App-header'>
          <img src={require('../assets/logo.jpg')} className='App-logo shake-rotate' alt='logo' />
        </div>
        <h3 className='App-title'>cc-wehcat</h3>
        <a className='href' href='/app'>app</a>
      </div>
    )
  }
}
