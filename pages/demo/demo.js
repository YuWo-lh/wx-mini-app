Page({
  data: {
    name: '',
    gender: ''
  },
  onLoad(params) {
    console.log(params)
    this.setData({
      name: params.name,
      gender: params.gender
    })
  }
})