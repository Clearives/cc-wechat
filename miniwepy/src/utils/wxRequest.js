import wepy from 'wepy'

const wxRequest = async(params = {}, url) => {
  wepy.showToast({
    title: '加载中',
    icon: 'loading'
  })
  let data = params.query || {}
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: { 'Content-Type': 'application/json' }
  })
  wepy.hideToast()
  return res
}

module.exports = {
  wxRequest
}
