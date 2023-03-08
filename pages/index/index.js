Page({
  data: {
    age: 16,
    flag: true
  },
  add() {
    this.setData({
      age : ++this.data.age
    })
  }
})