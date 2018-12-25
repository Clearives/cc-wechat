import { Table, Popconfirm, Button } from 'antd'
import React, {Component} from 'react';
import { connect } from 'dva'
import styles from "../../../../clientAdmin/src/pages/IndexPage/IndexPage.css";

@connect(({ product }) => ({
  indexList: product
}))

class ProductList extends Component{

  state = {
  };

  handleChange(){
    const { dispatch, indexList } = this.props;
    dispatch({
      type: 'product/query',
      payload: {
        limit: 10,
        offset: indexList.offset
      }
    })
    dispatch({
      type: 'product/add',
      payload: 2,
    })
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

ProductList.propTypes = {
};

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
