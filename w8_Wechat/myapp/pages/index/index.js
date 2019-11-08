//index.js
//获取应用实例
const app = getApp()
console.log('app:',app)
Page({
  data: {
    recommend:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goto(e){
    let {id} = e.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/player/player?song_id='+id,
    })
  },
  onShow(){
    console.log('Index.onShow')
  },
  onHide(){
    console.log('Index.onHide')
  },
  onUnload(){
    console.log('Index.onUnload')
  },
  onReady() {
    console.log('Index.onReady')
  },
  onLoad: function () {console.log('Index.onload')
    wx.request({
      url:"http://tingapi.ting.baidu.com/v1/restserver/ting",
      data:{
        method:'baidu.ting.billboard.billList' ,
         type:1,
         size:10,
         offset:0
      },
      success:({data})=>{
        console.log('res',data)
        this.setData({
          recommend:data.song_list
        })
      }
    })
  },

  onPullDownRefresh(){
    console.log('onPullDownRefresh')
  },

  onReachBottom(){
    console.log('onReachBottom','加载更多数据')
  },

  onShareAppMessage(res){
    console.log(res);

    return {
      title:"分享给xxx",
      path:'/pages/list/list',
      imageUrl:'http://e.hiphotos.baidu.com/image/h%3D300/sign=a9e671b9a551f3dedcb2bf64a4eff0ec/4610b912c8fcc3cef70d70409845d688d53f20f7.jpg'
    }
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
