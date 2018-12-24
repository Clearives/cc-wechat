
export default {

  namespace: 'example',

  state: {
    count: 0
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'add' });
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
