App({
  onLaunch: function() {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init()
    }
    // wx.cloud.callFunction({
    //   // 云函数名称
    //   name: 'getUser',
    //   // 传给云函数的参数
    //   data: {},
    // }).then(res => {
    //   console.log(res.result)
    // }).catch(console.error)

    const db = wx.cloud.database()
    // db.collection('user').add({
    //   data: {
    //     name: 'clearives'
    //   }
    // }).then(res => {
    //   console.log(res)
    // }).catch(console.error)
    db.collection('user').where({}).get().then(res => {
      console.log(res.data)
    })
  }
})