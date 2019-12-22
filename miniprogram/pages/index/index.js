Page({
  data: {
    color: "black",
  },
  open: function () {
    console.log('操作：开箱')
    wx.request({
      url: 'https://api.heclouds.com/devices/561783366/datapoints',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        "api-key": 'RnIvZs1yVtnj0jU=zyUuYPiYo1g='
      },
      data: {
        "datastreams": [{
          "id": "Determine-_-",
          "datapoints": [{
            "at": "2013-04-22T00:35:43",
            "value": {
              "bool": 1,
            }
          }]
        }]
      },
      success(res) {
      }
    })
  },
  close: function () {
    console.log('操作：关箱')
    wx.request({
      url: 'https://api.heclouds.com/devices/561783366/datapoints',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        "api-key": 'RnIvZs1yVtnj0jU=zyUuYPiYo1g='
      },
      data: {
        "datastreams": [{
          "id": "Determine-_-",
          "datapoints": [{
            "at": "2013-04-22T00:35:43",
            "value": {
              "bool": 0,
            }
          }]
        }]
      },
      success(res) {
      }
    })
  }

})
