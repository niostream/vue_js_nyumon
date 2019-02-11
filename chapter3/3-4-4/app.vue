Vue.component('user-login', {
  template: '#login-template',
  data: function() {
    return {
      userId: '',
      password: ''
    }
  },
  methods: {
    login: function() {
      auth.login(this.userId, this.password)
    }
  }
})
var auth = {
  login: function(id, password) {
    window.alert("userId:" + id + "\n" + "password:" + password)
  }
}

new Vue({
  el: '#login-example'
})
