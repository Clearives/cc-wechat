import React, {Component} from 'react'
import './MainView.css'

export default class AppView extends Component {
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
        <h3 className='App-title'>app----------</h3>
      </div>
    )
  }
}
