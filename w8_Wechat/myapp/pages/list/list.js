// pages/list/list.js
const regeneratorRuntime = require('regenerator-runtime');

let {getData,globalData} = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[],
    page:1, // 分页
    size:10,//每页请求数据的数量,
    hasMore:true,//是否还有未加载的数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function ({type=1}) {
    let {size,page} = this.data;
    let offset = (page-1)*size
    console.log('type:',type);

    let category = globalData.types.filter(item=>item.type==type)[0];
    // 设置页面标题
    wx.setNavigationBarTitle({
      title:category.title
    })

    wx.showNavigationBarLoading();
    let {song_list:datalist} = await getData({data:{type,offset,size}});
    wx.hideNavigationBarLoading();

    this.setData({
      datalist,
      type,
      hasMore:datalist.length==size
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
  onReachBottom: async function () {
    let { page, size, type, datalist, hasMore} = this.data;

    if(!hasMore) return;

    page++;
    // 计算跳过的数量
    let offset = (page-1)*size;
    let {song_list} = await getData({
      data:{
        type,
        size,
        offset
      }
    });

    if(song_list){
      datalist = datalist.concat(song_list)
      hasMore = song_list.length == size
    }else{
      hasMore = false
    }

    this.setData({
      page,
      datalist, 
      hasMore
    })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})