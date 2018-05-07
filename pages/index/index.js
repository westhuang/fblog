//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    microBlogs: [{
                  "time":"2018-05-06 12:00:23", 
                  "data":"second blog", 
                  "pic":"http://pic1.sc.chinaz.com/files/pic/pic9/201805/wpic790.jpg"
                  }, 
                  {
                  "time": "2018-05-06 12:00:23",
                  "data": "second blog",
                  "pic": "http://pic1.sc.chinaz.com/files/pic/pic9/201805/wpic790.jpg"
                  }
                ]
  },

  //事件处理函数
  onLoad: function () {
  }
})
