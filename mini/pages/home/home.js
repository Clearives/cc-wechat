import Http from '../../utils/http'
Page({
  data: {
    address: ''
  },
  onLoad: function() {
    Http.get('http://api.map.baidu.com/location/ip?ak=F454f8a5efe5e577997931cc01de3974', {}).then(res => {
      this.setData({
        address: res.data.address
      })
    })
  }
})