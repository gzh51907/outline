const regeneratorRuntime = require('regenerator-runtime');
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {},
    bitrate: {},
    player: null,
    paused:true
  },

  handlePlay() {
    let {
      bitrate,
      player,
      paused
    } = this.data;
    if (!player) {
      player = wx.createInnerAudioContext();
      player.src = bitrate.file_link;

      // 监听音乐播放进度
      player.onTimeUpdate(()=>{
        console.log(666)
      })

      player.onPlay(()=>{
        console.log('onPlay')
      })

      player.onPause(() => {
        console.log('onPause')
      })
    }
    console.log('paused', player.paused)
    if (paused) {
      player.play();
    } else {
      player.pause();
    }

    this.setData({
      player,
      paused: !paused
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function({
    id = '670342289'
  }) {
    console.log(id);

    // 获取歌曲id
    let {
      songinfo,
      bitrate
    } = await app.getData({
      method: 'baidu.ting.song.play',
      data: {
        songid: id
      }
    })



    // 获取歌手信息
    // let singer = await app.getData({
    //   method:'baidu.ting.artist.getInfo',
    //   data:{
    //     tinguid: songinfo.ting_uid
    //   }
    // })

    // 歌手歌曲信息
    let {
      artistinfo,
      songlist
    } = await app.getData({
      method: 'baidu.ting.artist.getSongList',
      data: {
        tinguid: songinfo.ting_uid,
        limits: 6,
        use_cluster: 1,
        order: 2
      }
    })


    this.setData({
      info: {
        ...songinfo
      },
      bitrate,
      artistinfo,
      songlist
    })
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

  }
})