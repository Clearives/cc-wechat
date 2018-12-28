import * as githubService from '../../../services/github';

export default {

  namespace: 'profile',

  state: {
    userInfo: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *queryUserInfo({ payload: {username} }, { call, put }) {  // eslint-disable-line
      const res = yield call(githubService.queryUserInfo, username)
      const { data } = res
      yield put({
        type: 'save',
        payload: {
          data
        }
      });
    },
  },

  reducers: {
    save(state, action) {
      state.userInfo = action.payload.data
      return {...state}
    },
  },

};
