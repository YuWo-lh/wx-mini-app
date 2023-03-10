// 导入构建后的 npm 模块
const computedBehavior = require('miniprogram-computed').behavior

Page ({
  data : {
    firstNmae: "张",
    lastNmae: "三"
  },
  // 应用到页面中
  behaviors: [computedBehavior],
  // 使用计算属性
  computed: {
    fullName(data) {
      return data.firstNmae + data.lastNmae
    }
  }
})