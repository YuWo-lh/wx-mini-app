Page({
  data: {
    name: "张三",
  },
  sayHi() {
    console.log("hi~~");
  },

  // getCurrentPages
  // 可以获取页面栈，页面栈中包含的是所有页面的实例，数组中第一个元素为首页，最后一个元素为当前页面。

  onLoad() {
    // 获取页面历史栈（页面历史记录）
    const pageStack = getCurrentPages();
    // 获取当前页面
    const currentPage = pageStack[pageStack.length - 1];
    // console.log(currentPage.data.name);
    currentPage.sayHi();
  },
});
