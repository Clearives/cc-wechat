import * as productService from '../../services/product';

export default {

  namespace: 'product',

  state: {
    count: 0,
    pageSize: 10,
    pageNo: 1,
    productList: [],
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    * query({ payload: { pageSize, pageNo } }, { call, put }) {  // eslint-disable-line
      const res = yield call(productService.query, pageSize, pageNo);
      const { pagination, content } = res.data.data;
      yield put({
        type: 'update',
        payload: {
          pagination,
          content,
        },
      });
    },
  },

  reducers: {
    add(state, action) {
      let newCount = state.count + action.payload;
      state.count = newCount;
      return { ...state };
    },
    update(state, action) {
      let payload = action.payload;
      state.pagination = payload.pagination;
      state.productList = payload.content;
      return { ...state };
    },
  },

};
