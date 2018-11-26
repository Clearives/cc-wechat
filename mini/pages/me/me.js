const app = getApp()
const { _Toast } = require('../../components/base/index');

Page({
  data: {
    userInfo: {}
  },
  onLoad: () => {
    _Toast({
      content: '文本提示'
    });
  },
  onShow: function () {
    console.log(this)
  }
})
