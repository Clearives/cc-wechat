const app = getApp()

Page({
  data: {
    userInfo: {}
  },
  onLoad: () => {
  },
  onShow: function () {
    console.log(this)
  },
  goPage: function (e) {
    let url = e.currentTarget.dataset.url
    console.log(url)
    wx.navigateTo({
      url: url
    })
  }
})
