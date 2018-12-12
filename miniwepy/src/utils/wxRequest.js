import wepy from 'wepy'

const wxRequest = async(params = {}, url) => {
  console.log('『wepy Request Start』', params, url)
  wepy.showToast({
    title: '加载中',
    icon: 'loading'
  })
  let data = params.query || {}
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: params.header || { 'Content-Type': 'application/json' }
  })
  wepy.hideToast()
  console.log('『wepy Request End』', params, url)
  return res
}

module.exports = {
  wxRequest
}
