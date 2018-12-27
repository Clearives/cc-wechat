import {Button} from 'antd'
import React, {Component} from 'react'
import {connect} from 'dva'
import router from 'umi/router';

@connect(({product}) => ({
  indexList: product
}))

class ProductIndex extends Component {

  state = {};

  handleClick = () => {
    router.push('/product/list')
  }

  render() {
    return (
      <div>
        <h1>Yay! </h1>
        <Button onClick={this.handleClick}>点击跳转</Button>
      </div>
    );
  }
}

ProductIndex.propTypes = {};

export default ProductIndex;

