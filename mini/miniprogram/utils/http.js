import request from './request'

const _request = new request()
const _baseUrl = ''
const _defaultHeader = {
  'Content-Type': 'application/json'
}

_request.setErrorHandler((res) => wx.showToast({
  title: res.errMsg,
  icon: 'none',
  duration: 2000
}))

const Http = {
  get: (url, params) => {
    return _request.getRequest(url, params, _defaultHeader)
  },
  post: (url, params) => {
    return _request.postRequest(url, params, _defaultHeader)
  }
}

export default Http