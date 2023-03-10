Component({
  options: {
    // 启用多插槽支持
    multipleSlots: true,
  },
  // 组件的初始数据
  data: {
    isLogin: false,
  },
  // 页面加载完获取本地的token，如果有token就表示已经登陆，吧isLogin设置为true
  lifetimes: {
    attached() {
      // 页面节点挂载完毕
      this.setData({
        isLogin: this.getIsToken(),
      });
    },
  },
  // 组件的方法列表
  methods: {
    getIsToken() {
      const isLogin = !!wx.getStorageSync("token");
      return isLogin;
    },
  },
});
