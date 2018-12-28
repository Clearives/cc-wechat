import React, {Component} from 'react'
import {connect} from 'dva'
import router from 'umi/router';

@connect(({profile}) => ({
  profile: profile
}))

class GithubProfile extends Component {

  state = {}

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'profile/queryUserInfo',
      payload: {
        username: 'clearives'
      }
    })
  }

  render() {
    const { profile } = this.props
    console.log(profile)
    return (
      <div>
        <a href={profile.userInfo.html_url}>
          <img src={profile.userInfo.avatar_url} width={230} height={230} alt=""/>
        </a>
      </div>
    );
  }
}

GithubProfile.propTypes = {};

export default GithubProfile;

