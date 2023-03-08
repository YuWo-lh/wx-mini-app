Page ({
  data: {

  },
  setData() {
    wx.setStorageSync('name', '张三')
  },
  getData() {
    console.log(wx.getStorageSync('name'))
  },
  removeData() {
    wx.removeStorageSync('name')
  },
  clearData() {
    wx.clearStorage()
  }
})