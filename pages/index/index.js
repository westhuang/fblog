//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    microBlogs: [{
                  "time":"2018-05-06 12:00:23", 
                  "data":"second blog", 
                  "pic":["http://pic1.sc.chinaz.com/files/pic/pic9/201805/wpic790.jpg",
"http://pic1.sc.chinaz.com/files/pic/pic9/201805/wpic791.jpg"]
                  }, 
                  {
                  "time": "2018-05-06 12:00:23",
                  "data": "second blog",
                  "pic": ["http://pic1.sc.chinaz.com/files/pic/pic9/201805/wpic792.jpg",              "http://pic1.sc.chinaz.com/files/pic/pic9/201805/wpic793.jpg",
"http://pic1.sc.chinaz.com/files/pic/pic9/201805/wpic794.jpg"]
                  }
                ]
  },

  //事件处理函数
  onLoad: function () {
  },

  previewImage: function (e) {
    var param = e.target.dataset;
    
    wx.previewImage({
      current: param.src,
      urls: this.data.microBlogs[param.idx].pic
    })
  }
})
