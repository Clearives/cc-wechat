import React, {Component} from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

@connect(({ example }) => ({ example }))
class IndexPage extends Component{

  state = {
  };

  handleChange(){
    const { dispatch } = this.props;
    dispatch({
      type: 'example/add',
      payload: 2,
    });
  }

  render(){
    console.log(this.props.example)
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! </h1>
        <p>{this.props.example.count}</p>
        <button onClick={this.handleChange.bind(this)}>点击</button>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default IndexPage;
