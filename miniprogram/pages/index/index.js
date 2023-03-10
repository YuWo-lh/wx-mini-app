// 导入构建后的 npm 模块
const computedBehavior = require('miniprogram-computed').behavior

Page ({
  data : {
    firstNmae: "dragon",
    lastNmae: "tiger"
  },
  // 应用到页面中
  behaviors: [computedBehavior],
  // 使用计算属性
  computed: {
    fullName(data) {
      return data.firstNmae + ' and ' + data.lastNmae
    }
  }
})