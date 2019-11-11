//index.js
const regeneratorRuntime = require('regenerator-runtime');

//获取应用实例
const app = getApp()

console.log('app:',app)
Page({
  data: {
    recommend:[],
    keyword:'',
    tabs: app.globalData.types,
    tabData: {},// tab标签切换的数据{1:[],2:[],11:[]},
    tabWidth:0, //tab高亮线条长度
    sliderOffset: 0,// 高亮线条偏移位置
    activeIndex:0,
    classicSong:[],
    loveSong:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goto(url) {
    wx.navigateTo({
      url
    })
  },
  gotoPlayer(e){
    let {songid} = e.currentTarget.dataset
    let path = '/pages/player/player?songid='+songid
    this.goto(path)
  },
  
  gotoSearch(){
    let path = '/pages/search/search?keyword=' + this.data.keyword
    this.goto(path);
  },
  getData(type,size=10){
    return new Promise((resolve,reject)=>{
      wx.request({
        url: "http://tingapi.ting.baidu.com/v1/restserver/ting",
        data: {
          method: 'baidu.ting.billboard.billList',
          type,
          size,
          offset: 0
        },
        success: ({ data }) => {
          resolve(data)
        },
        fail(err){
          reject(err)
        }
      })
    })
    
  },

  handlerTabChange(e){
    let {idx} = e.currentTarget.dataset;
    let {tabWidth,tabs,tabData} = this.data;
    let sliderOffset = idx*tabWidth;
    this.setData({
      sliderOffset,
      activeIndex:idx
    });

    // 已请求过的tabData数据，不再进行请求
    if (tabData[tabs[idx].type] === undefined){
      this.getTabData(idx);
    }

  },
  async getTabData(idx){
    let { tabs, tabData} = this.data;
    // 请求当前Tab数据
    let type = tabs[idx].type;
    let {song_list} = await this.getData(type,5);

    tabData[type] = song_list;

    this.setData({
      tabData
    })
  },
  onLoad: async function () {
    let { tabs, tabData, activeIndex} = this.data;

    // 设置Tab标签切换参数
    const res = wx.getSystemInfoSync();
    // let tabWidth = 750 / this.data.tabs.length; // rpx
    let tabWidth = res.windowWidth / this.data.tabs.length; //px
    let sliderOffset;
    
    // 推荐数据（轮播图）
    let { song_list: recommend} = await this.getData(1);

    // 搜索数据
    let {song_list:hotlist} = await this.getData(2);

    // tab数据
    // {tabData}
    this.getTabData(activeIndex);

    // 情歌对唱
    let { song_list: loveSong } = await this.getData(23);

    // 经典老歌
    let { song_list: classicSong } = await this.getData(22);

    // 按hot排序
    hotlist.sort((a,b)=>b.hot-a.hot);
    console.log(hotlist)
    this.setData({
      recommend,
      keyword: hotlist[0].title,
      tabWidth,
      classicSong,
      loveSong
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
