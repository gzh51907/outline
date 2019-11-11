// pages/search/search.js
const regeneratorRuntime = require('regenerator-runtime');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword:'', // 关键字
    inputShowed: true, // 是否显示输入框
    datalist: [], //搜索结果呢
  },

  hideInput(){
    this.setData({
      inputShowed:false,
      keyword:''
    })
  },
  showInput(){
    this.setData({
      inputShowed: true
    })
  },
  clearInput(){
    this.setData({
      keyword: ''
    })
  },

// 输入搜索
 inputTyping(e){
  //  事件处理函数不能是async函数
  // 优化请求（节流）
    let keyword = e.detail.value;
    (async ()=>{
      let datalist = await this.getData(keyword);

      this.setData({
        datalist: datalist.song,
      })

    })();
  },
  getData(keyword) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: "http://tingapi.ting.baidu.com/v1/restserver/ting",
        data: {
          method: 'baidu.ting.search.catalogSug',
          query: keyword
        },
        success: ({ data }) => {
          resolve(data)
        },
        fail(err) {
          reject(err)
        }
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let {keyword='逆流成河'} = options;
    console.log(keyword)
    this.setData({
      keyword
    });

    // 进入页面搜索传过来的关键字
    let datalist = await this.getData(keyword);

    this.setData({
      datalist:datalist.song
    })
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

  }
})