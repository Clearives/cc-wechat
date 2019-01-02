import React, {Component} from 'react'
import {connect} from 'dva'
import { Card, Row, Col, Icon, Avatar, Tag, Divider, Spin, Input } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from './index.less'

@connect(({profile}) => ({
  profile: profile
}))

class GithubProfile extends Component {

  state = {
    tags: [
      {
        key: 0,
        label: '前端'
      },
      {
        key: 1,
        label: '交互'
      },
      {
        key: 2,
        label: 'Github'
      }
    ]
  }

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
    const userInfo = profile.userInfo
    const tags = this.state.tags
    return (
      <GridContent className={styles.userCenter}>
        <Row gutter={24}>
          <Col lg={7} md={24}>
            <Card bordered={false} style={{ marginBottom: 24 }}>
                <div>
                  <div className={styles.avatarHolder}>
                    <img alt="" src={userInfo.avatar_url} />
                    <div className={styles.name}>{userInfo.name}</div>
                    <div>{userInfo.bio}</div>
                  </div>
                  <div className={styles.detail}>
                    <p>
                      {userInfo.location}
                    </p>
                    <p>
                      <a href={userInfo.blog}>{userInfo.blog}</a>
                    </p>
                  </div>
                  <Divider dashed />
                  <div className={styles.tags}>
                    <div className={styles.tagsTitle}>标签</div>
                    {tags.map(item => (
                      <Tag key={item.key}>{item.label}</Tag>
                    ))}
                  </div>
                </div>
            </Card>
          </Col>
          <Col lg={17} md={24}>

          </Col>
        </Row>
      </GridContent>
    );
  }
}

GithubProfile.propTypes = {};

export default GithubProfile;

