import * as exampleService from '../services/example';

export default {

  namespace: 'example',

  state: {
    count: 0,
    limit: 10,
    offset: 0
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *query({ payload: {limit, offset} }, { call, put }) {  // eslint-disable-line
      yield call(exampleService.query, limit, offset);
    },
  },

  reducers: {
    add(state, action) {
      let newCount = state.count + action.payload
      state.count = newCount
      return {...state};
    },
  },

};
