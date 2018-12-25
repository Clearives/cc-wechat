import * as productService from '../../services/product';

export default {

  namespace: 'product',

  state: {
    count: 0,
    limit: 10,
    offset: 0,
    miniAppList: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *query({ payload: {limit, offset} }, { call, put }) {  // eslint-disable-line
      const res = yield call(productService.query, limit, offset)
      const {meta, objects} = res.data
      yield put({
        type: 'update',
        payload: {
          meta,
          objects
        }
      });
    },
  },

  reducers: {
    add(state, action) {
      let newCount = state.count + action.payload
      state.count = newCount
      return {...state}
    },
    update(state, action) {
      let payload = action.payload
      console.log(payload)
      state.offset = state.offset + state.limit
      state.miniAppList = state.miniAppList.concat(payload.objects)
      return {...state}
    }
  },

};
