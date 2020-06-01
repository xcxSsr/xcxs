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
  onLoad:function(){
    console.log(this.data)
  },
  goTk: function (event){
    if (event.target.id=='real'){
      wx.navigateTo({
        url: '../realTk/realTk',
      })
    } else {
      wx.navigateTo({
        url: '../fackTk/fackTk',
      })

    }
   
  },
  goPersonal:function(){
    wx.navigateTo({
      url: '../personal/personal',
    })
  },
  checkDt:function(event){
    wx.navigateTo({
      url: '../dtAnswer/dtAnswer?id=' + event.target.id
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
