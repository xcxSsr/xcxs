//index.js
//获取应用实例
const app = getApp()

Page({

  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    circular:true,
    autoplay: true,
    interval: 2000,
    userInfo:'',
    duration: 500,
    dtList:[{
      title:'随机答题',
      id:'test1',
      dtNum:100,
      ctl:100,
      zql:100,
      time:'2020-05-20'
    }, {
        id:'test2',
        title: '随机答题2',
        dtNum: 100,
        ctl: 10,
        zql: 90,
        time: '2020-05-22'
      }]
  },
  onLoad: function (options) {
    console.log(options)
    wx.setNavigationBarTitle({
      title: '首页'
    })
    wx.showShareMenu({
      withShareTicket: true,
      success: function (res) {
        // 分享成功
        console.log(res)
      },
      fail: function (res) {
        // 分享失败
        console.log(res)
      }
    })
  }, 
  onShareAppMessage: function () {
    return {
      title: '这里是小程序',
      path: '/pages/index/index?id=123',
      success: function (res) {
        console.log(res.shareTickets[0])
        wx.getShareInfo({
          shareTicket: res.shareTickets[0],
          success: function (res) { console.log(res) },
          fail: function (res) { console.log(res) },
          complete: function (res) { console.log(res) }
        })
      },
      fail: function (res) {
        // 分享失败
        console.log(res)
      }
    }
  },
  getUserInfoFun: function (event){
    var that = this;
    console.log(this.globalData)
          wx.getUserInfo({
            success: function (res) {
              console.log(res)
              app.globalData.userInfo = res.userInfo
              wx.navigateTo({
                url: '../orderOn/orderOn'
              })
            },
            fail: function (res) {
              console.log(res)
            }
          })
  },
  onReachBottom: function () {
    console.log(1);
    var data = this.data.dtList;
    if(data.length<=5){
      data.push({
        title: '随机答题',
        id: 'test' + (data.length+1),
        dtNum: 100,
        ctl: 100,
        zql: 100,
        time: '2020-05-20'
      })
      this.setData({
        dtList: data
      })
    }
    wx.stopPullDownRefresh()
  }
})
