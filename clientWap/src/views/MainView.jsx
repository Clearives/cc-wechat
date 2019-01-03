import React, {Component} from 'react'
import './MainView.css'
import wxShare from '../utils/wxShare'

wxShare({
  title: '一二三四五',
  desc: '上山打老虎',
  link: location.href,
  imgUrl: 'http://pc1g4qy0i.bkt.clouddn.com//upload/QQ20181114-162917@2x.png'
})
export default class MainView extends Component {
  static propTypes = {};

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='main-view'>
        <div className='App-header'>
          <img src={`http://pc1g4qy0i.bkt.clouddn.com//upload/QQ20181114-162917@2x.png`} className='App-logo shake-rotate' alt='logo' />
        </div>
        <h3 className='App-title'>鹏鹏，你试试~~~</h3>
        <a className='href' href='#/app'>app</a>
      </div>
    )
  }
}
