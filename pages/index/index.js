Page({
  data: {
    list: [],
  },
  onLoad() {
    this.getStudentList();
  },
  getStudentList() {
    // wx.request.get('https://mock.boxuegu.com/mock/3293/students').then(res => console.log(res))
    wx.request({
      url: "https://mock.boxuegu.com/mock/3293/students",
      method: "get",
      success: (res) => {
        console.log(res);
        list: res.data.result;
      },
    });
  },
});
