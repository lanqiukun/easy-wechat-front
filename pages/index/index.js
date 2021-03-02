Page({


  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },


  bindGetUserInfo (e) {

    wx.login({
      success (res) {
        if (res.code) {
          
          wx.request({
            url: 'https://easy-wechat.gign.xyz/api/login',
            data: {
              code: res.code,
              iv: e.detail.iv,
              encryptedData: e.detail.encryptedData
            },
            method: "POST"
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

  }


})