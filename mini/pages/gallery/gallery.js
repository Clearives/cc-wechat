import Http from '../../utils/http'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    title: '',
    category: [],
    categoryData: [],
    imgUrls: [],
    _height: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    Http.get('http://service.picasso.adesk.com/v1/vertical/category?adult=false&first=1', {}).then(res => {
      this.setData({
        category: res.data.res.category
      })
    })
    console.log(options)
    this.setData({
      id: options.id,
      title: options.title,
      _height: wx.getSystemInfoSync().windowHeight -30
    })
    wx.setNavigationBarTitle({
      title: options.title,
    })
    this.getGalleryDetail(options.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    wx.stopPullDownRefresh()
    this.getGalleryDetail(this.data.id)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  tabGalleryDetail: function(e) {
    var item = e.currentTarget.dataset.item
    this.setData({
      id: item.id,
      title: item.name
    })
    wx.setNavigationBarTitle({
      title: item.name,
    })
    this.getGalleryDetail(item.id)
  },

  getGalleryDetail: function(id) {
    let cid = id || this.data.id
    let url = !cid ? "http://service.picasso.adesk.com/v1/vertical/vertical?limit=30&skip=180&adult=false&first=0&order=hot" :
      "http://service.picasso.adesk.com/v1/vertical/category/" + cid + "/vertical?limit=30&adult=false&first=1&order=new"
    Http.get(url, {}).then(res => {
      this.setData({
        categoryData: res.data.res.vertical,
        imgUrls: this.getUrls(res.data.res.vertical)
      })
    })
  },

  getUrls: function (data) {
    let _arr = []
    data.map((v, k) => {
      _arr.push(v.img)
    })
    return _arr
  },

  previewImage: function (e) {
    var current = e.target.dataset.item
    wx.previewImage({
      current: current.img, 
      urls: this.data.imgUrls  
    })
  }
})