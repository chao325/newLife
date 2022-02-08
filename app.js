// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    wx.cloud.init() 

    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.cloud.callContainer({
      "config": {
        "env": "wxapp325-6ghmu9w7a94e0a4c"
      },
      "path": "/api/count",
      "header": {
        "X-WX-SERVICE": "express-eatn"
      },
      "method": "POST",
      "data": {
        "action": "inc"
      }
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
