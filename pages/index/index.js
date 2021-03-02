Page({


  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  check() {
    wx.checkSession({
      success () {
        console.log('session_key 未过期，并且在本生命周期一直有效')
      },
      fail () {
        console.log('session_key 已经失效，需要重新执行登录流程')
      }
    })
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
            method: "POST",
            success: response => {
              console.log(response.data)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

  }


})