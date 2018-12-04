// miniprogram/pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '我是标题',
    desc: '我是描述',
    files: [],
    maskHidden: false,
    jdConfig: {
      width: 750,
      height: 1334,
      backgroundColor: '#fff',
      debug: false,
      blocks: [
        {
          width: 690,
          height: 808,
          x: 30,
          y: 183,
          borderWidth: 2,
          borderColor: '#f0c2a0',
          borderRadius: 20,
        },
        {
          width: 634,
          height: 74,
          x: 59,
          y: 770,
          backgroundColor: '#93e2ff',
          opacity: 0.5,
          zIndex: 100,
        },
      ],
      texts: [
        {
          x: 113,
          y: 61,
          baseLine: 'middle',
          text: 'Clearives',
          fontSize: 32,
          color: '#8d8d8d',
        },
        {
          x: 30,
          y: 113,
          baseLine: 'top',
          text: '发现一个好物，推荐给你呀',
          fontSize: 38,
          color: '#080808',
        },
        {
          x: 92,
          y: 810,
          fontSize: 38,
          baseLine: 'middle',
          text: '1231313',
          width: 570,
          lineNum: 1,
          color: '#8d8d8d',
          zIndex: 200,
        }
      ],
      images: [
        {
          width: 62,
          height: 62,
          x: 30,
          y: 30,
          borderRadius: 62,
          url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/02bb99132352b5b5dcea.jpg',
        }
      ]

    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  chooseImage: function (e) {
    var that = this
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        })
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id,
      urls: this.data.files
    })
  },
  titleInput: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  descInput: function (e) {
    this.setData({
      desc: e.detail.value
    })
  },
  shareSubmit: function () {
    console.log(this.data)
    if (this.data.files.length == 0) {
      wx.showToast({
        title: '请上传图片',
        icon: 'none',
        duration: 500
      })
      return
    }
    var that = this
    this.setData({
      maskHidden: false
    })
    wx.showToast({
      title: '正在生成...',
      icon: 'loading',
      duration: 1000
    })
    setTimeout(function () {
      wx.hideToast()
      that.drawImg()
      that.setData({
        maskHidden: true
      })
    }, 1000)
  },

  drawImg: function () {
    var that = this
    var context = wx.createCanvasContext('share-canvas')
    context.setFillStyle("#41ABFE")
    context.fillRect(0, 0, 375, 667)
    var path1 = that.data.files[0]
    var name = that.data.title
    context.setFontSize(24)
    context.setFillStyle('#333333')
    context.setTextAlign('center')
    context.fillText(name, 185, 340)
    context.stroke()
    context.setFontSize(14)
    context.setFillStyle('#333333')
    context.setTextAlign('center')
    context.fillText("邀请你一起肩并肩", 185, 370)
    context.stroke()
    context.setFontSize(32)
    context.setFillStyle('#fff')
    context.setTextAlign('center')
    context.fillText(that.data.desc, 185, 435)
    context.stroke()
    context.arc(186, 246, 50, 0, 2 * Math.PI)
    context.strokeStyle = "#ffe200"
    context.clip()
    context.drawImage(path1, 136, 196, 100, 100)
    context.draw()
    setTimeout(function () {
      wx.canvasToTempFilePath({
        canvasId: 'share-canvas',
        success: function (res) {
          var tempFilePath = res.tempFilePath
          that.setData({
            imagePath: tempFilePath,
            canvasHidden: true
          })
        },
        fail: function (res) {
          console.log(res)
        }
      })
    }, 600)
  },
  saveImg: function () {
    var that = this
    wx.saveImageToPhotosAlbum({
      filePath: that.data.imagePath,
      success (res) {
        wx.showModal({
          content: '图片已保存到相册',
          showCancel: false,
          confirmText: '好的',
          confirmColor: '#333',
          success: function (res) {
            if (res.confirm) {
              that.setData({
                maskHidden: false
              })
            }
          }, fail: function (res) {
            console.log(res)
          }
        })
      }
    })
  },
  onPosterSuccess (e) {
    const {detail} = e;
    wx.previewImage({
      current: detail,
      urls: [detail]
    })
  },
  onPosterFail (err) {
    console.error(err);
  },


})
