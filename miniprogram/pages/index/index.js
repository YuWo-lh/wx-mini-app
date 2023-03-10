// 导入构建后的 npm 模块
const computedBehavior = require("miniprogram-computed").behavior;

// behavior的引入和使用
import myBehavior from '../../behavior/index'
// Component({
//   behaviors: [myBehavior]
// })

const app = getApp();

Page({
  data: {
    firstNmae: "dragon",
    lastNmae: "tiger",
  },
  // 应用到页面中
  behaviors: [computedBehavior,myBehavior],
  // 使用计算属性
  computed: {
    fullName(data) {
      return data.firstNmae + " and " + data.lastNmae;
    },
  },
  onLoad() {
    console.log(app.token)
  },
});
