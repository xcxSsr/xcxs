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
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '首页'
    })
    wx.showShareMenu({
      withShareTicket: true,
      success: (res) => {
        // 分享成功
        console.log(res)
      },
      fail:(res) => {
        // 分享失败
        console.log(res)
      }
    })
  }, 
  onShareAppMessage() {
    return {
      title: 'DKL物流',
      path: '/pages/index/index?id=123',
      success:(res)=>{
        wx.getShareInfo({
          shareTicket: res.shareTickets[0],
          success: (res) => {  console.log(res) },
          fail: (res) => {  console.log(res) },
          complete: (res) => {  console.log(res) }
        })
      },
      fail: (res) => {
        // 分享失败
        console.log(res)
      }
    }
  },
  goOrder(){
    var that = this;
    var globalUserCheck = app.globalData.userInfo && app.globalData.iv;
    if (globalUserCheck) {
      wx.navigateTo({
        url: '../orderOn/orderOn'
      })
    } else if (!app.globalData.userInfo){
      wx.navigateTo({
        url: '../getUserInfo/getUserInfo',
      })
    }else{
      wx.navigateTo({
        url: '../getPhone/getPhone',
      })
    }
  },
  onReachBottom () {
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
