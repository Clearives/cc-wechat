import {Table, Pagination, Button} from 'antd'
import React, {Component} from 'react'
import {connect} from 'dva'
import styles from './index.less'

@connect(({product}) => ({
  indexList: product
}))

class ProductList extends Component {

  state = {};

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'product/query',
      payload: {
        limit: 10,
        offset: 0
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
    const {dispatch, indexList} = this.props
    const {current} = pagination
    dispatch({
      type: 'product/query',
      payload: {
        limit: 10,
        offset: (current - 1) * 10
      }
    })
  }

  render() {
    console.log(this.props.indexList)
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
      title: '创建人',
      dataIndex: 'created_by',
      key: 'created_by',
    }];
    const dataSource = this.props.indexList.miniAppList
    const paginationProps = this.props.indexList.meta
    return (
      <div>
        <h1>Yay! </h1>
        <p>{this.props.indexList.count}</p>
        <Button onClick={this.handleChange.bind(this)}>点击</Button>
        <div className={styles.tableContainer}>
          <Table
            rowKey={record => record.id}
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
