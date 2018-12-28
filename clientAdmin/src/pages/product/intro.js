import {Button} from 'antd'
import React, {Component} from 'react'
import {connect} from 'dva'
import router from 'umi/router';

@connect(({product}) => ({
  indexList: product
}))

class ProductIntro extends Component {

  state = {};

  handleClick = () => {
    router.push('/product/list')
  }

  render() {
    return (
      <div>
        <h1>Yay! </h1>
        <p>项目介绍</p>
      </div>
    );
  }
}

ProductIntro.propTypes = {};

export default ProductIntro;

