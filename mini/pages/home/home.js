import Http from '../../utils/http'
Page({
  data: {
    category: ''
  },
  onLoad: function() {
    Http.get('http://service.picasso.adesk.com/v1/vertical/category?adult=false&first=1', {}).then(res => {
      this.setData({
        category: res.data.res.category
      })
    })
  },
  goDetail: function(e) {
    var item = e.currentTarget.dataset.item;
    console.log(item)
    wx.navigateTo({
      url: "/pages/gallery/gallery?id=" + item.id + "&title=" + item.name
    })
  }
})