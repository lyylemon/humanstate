// start.js

Page({

  /**

   * 页面的初始数据

   */

  data: {

    opacity: 1,

    disabled: true,

    threshold: 0,

    rule: 'up',

    items: [

      { name: 'up', value: '有人时报警', checked: 'ture' }
    ]

  },
 

  
getDataFromOneNet: function() {

  //从oneNET请求数据
 

const requestTask = wx.request({

  url: 'https://api.heclouds.com/devices/23877996/datapoints?datastream_id==button&limit=15',

  header: {

    'content-type': 'application/json',

    'api-key': 'ewxxJXyhtJSvq6gHUVJUkGVgOLc=  '

  },

  success: function (res) {

    //console.log(res.data)

    //拿到数据后保存到全局数据

    var app = getApp()
    app.globalData.button = res.data.data.datastreams[0]

    console.log(app.globalData.button)
    //跳转页面绘图
    wx.navigateTo({

      url: '../hongwai/shuju/shuju',

    })
  },
    success: function (res) {/*

      // 利用正则字符串从返回数据中截出数据

      var str = res.data.data.button.date;

      var button1 = str.match(/实时.+/);

      var button2 = button1[0].substring(3, button1[0].length - 2);

      var button = +button2;
      //这段还不知道怎么改*/

      if (button==1){

    wx.showModal({

      content: '家里有陌生人出现。',

      success: function (res) {

        if (res.confirm) {

          console.log('用户点击确定')

        } else if (res.cancel) {

          console.log('用户点击取消')

        }

      }

    })

  }


},

fail: function (res) {

  console.log("fail!!!")

},

complete: function (res) {

  console.log("end")

}

})

},


/**

 * 生命周期函数--监听页面加载

 */

onLoad: function (options) {

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

onReachBottom: function () {

},

/**

 * 用户点击右上角分享

 */

onShareAppMessage: function () {

}

})


