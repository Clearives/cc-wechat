const app = getApp()

Page({
  data: {
    userInfo: {}
  },
  onLoad: () => {
    console.log('index onLoad')
  },
  onShow: function() {
    console.log(this)
  }
})