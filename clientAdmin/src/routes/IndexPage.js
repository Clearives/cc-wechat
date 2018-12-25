import React, {Component} from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

@connect(({ example }) => ({
  indexList: example
}))
class IndexPage extends Component{

  state = {
  };

  handleChange(){
    const { dispatch, indexList } = this.props;
    dispatch({
      type: 'example/query',
      payload: {
        limit: 10,
        offset: indexList.offset
      }
    });
    dispatch({
      type: 'example/add',
      payload: 2,
    });
  }

  render(){
    console.log(this.props.indexList)
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! </h1>
        <p>{this.props.indexList.count}</p>
        <button onClick={this.handleChange.bind(this)}>点击</button>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default IndexPage;
