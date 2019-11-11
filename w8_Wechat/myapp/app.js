//app.js
App({
  onLaunch: function () {
    console.log('onLaunch')
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow(){
    console.log('onShow')
  },
  onHide(){
    console.log('onHide')
  },
  globalData: {
    // 分类数据，用于首页tab标签切换效果
    types: [{
      type: 1,
      text: '新歌',
      title: '新歌榜'
    }, {
      type: 16,
      text: '流行',
      title: '流行音乐'
    }, {
      type: 21,
      text: '欧美',
      title: '欧美金曲'
    }, {
      type: 25,
      text: '网络',
      title: '网络神曲'
    }, {
      type: 11,
      text: '摇滚',
      title: '摇滚重金属'
    }]
  },
  getData({
    method = 'baidu.ting.billboard.billList',
    data={
      type:1,
      size:10,
      offset:0
    }
  } = {}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: "http://tingapi.ting.baidu.com/v1/restserver/ting",
        data: {
          method,
          ...data
        },
        success: ({ data }) => {
          resolve(data)
        },
        fail(err) {
          reject(err)
        }
      })
    })
  }
})