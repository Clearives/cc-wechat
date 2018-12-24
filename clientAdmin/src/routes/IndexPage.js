import React, {Component} from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class IndexPage extends Component{

  handleChange(){
    const { dispatch } = this.props;
    dispatch({
      type: 'save',
      payload: 1,
    });
  }

  render(){
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! </h1>
        <button onClick={this.handleChange.bind(this)}>点击</button>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

function mapStateToProps(state) {
  return { example: state.example };
}

export default connect(mapStateToProps)(IndexPage);
