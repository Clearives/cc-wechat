import {Table, Pagination, Button} from 'antd'
import React, {Component} from 'react'
import {connect} from 'dva'
import styles from './index.css'

@connect(({product}) => ({
  product: product
}))

class ProductList extends Component {

  state = {};

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'product/query',
      payload: {
        pageSize: 3,
        pageNo: 1
      }
    })
  }

  handleChange() {
    const {dispatch} = this.props;
    dispatch({
      type: 'product/add',
      payload: 2,
    })
  }

  onChange = (pagination) => {
    const {dispatch, product} = this.props
    const {current} = pagination
    dispatch({
      type: 'product/query',
      payload: {
        pageSize: 3,
        pageNo: current
      }
    })
  }

  render() {
    console.log(this.props.product)
    const columns = [{
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      width: 240
    }, {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
      className: styles.desc,
    }, {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
    }];
    const dataSource = this.props.product.productList
    const paginationProps = this.props.product.pagination
    return (
      <div>
        <h1>Yay! </h1>
        <p>{this.props.product.count}</p>
        <Button onClick={this.handleChange.bind(this)}>点击</Button>
        <div className={styles.tableContainer}>
          <Table
            rowKey={record => record._id}
            dataSource={dataSource}
            columns={columns}
            pagination={paginationProps}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {};

export default ProductList;
// const ProductList = ({ onDelete, products }) => {
//   const columns = [{
//     title: 'Name',
//     dataIndex: 'name',
//   }, {
//     title: 'Actions',
//     render: (text, record) => {
//       return (
//         <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
//           <Button>Delete</Button>
//         </Popconfirm>
//       );
//     },
//   }];
//   return (
//     <Table
//       dataSource={products}
//       columns={columns}
//     />
//   );
// };
//
// export default ProductList;
