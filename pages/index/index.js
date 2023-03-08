Page ({
  data: {
    profile: {
      name: 'tiger',
      avatarUrl: '/static/images/avatar.jpg'
    }
  },
  chooseAvatar(e) {
    this.setData({
      'profile.avatarUrl': e.detail.avatarUrl
    })
  }
})