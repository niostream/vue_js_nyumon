// 疑似的にAPI経由で情報を更新したようにする
// 実際のWebアプリケーションではServerへPOSTリクエストを行う
var postUser = function(params, callback) {
  setTimeout(function() {
    params.id = userDetail.length++;
    userData.push(params)
    callback(null, params)
  }, 1000)
}

// 新規ユーザー作成コンポーネント
var userCreate = {
  template: '#user-create',
  data: function() {
    return {
      sending: false,
      user: this.defaltUser(),
      error: null
    }
  },
  created: function() {

  },
  methods: {
    defaltUser: function() {
      return {
        name: '',
        description: ''
      }
    },
    createUser: function() {
      if (this.user.name.trim() === '') {
        this.error = 'Nameは必須です。'
        return
      }
      if (this.user.description.trim() === '') {
        this.error = 'Descriptionは必須です。'
        return
      }
      postUser(this.user, (function(err, user) {
        this.sending = false
        if (this.err) {
          this.error = err.toString()
        } else {
          this.error = null
          this.user = this.defaltUser()
          alert('新規ユーザーが登録されました。')
          this.$router.push('/users')
        }
      }).bind(this))
    }
  }
}

var userData = [
  {
    id: 1,
    name: 'Takuya Tejima',
    description: '東南アジアで働くエンジニアです。'
  },
  {
    id: 2,
    name: 'Yohei Noda',
    description: 'アウトドア・フットサルが趣味のエンジニアです。'
  },
]

// JSONを返す関数
// この関数を用いて疑似的にWeb API経由で情報を取得したようにする
var getUser = function(userId, callback) {
  setTimeout(function() {
    var filteredUsers = userData.filter(function(user) {
      return user.id === parseInt(userId, 10)
    })
    callback(null, filteredUsers && filteredUsers[0])
  }, 1000)
}

// 詳細ページのコンポーネント
var userDetail = {
  template: '#user-detail',
  data: function() {
    return {
      loading: false,
      user: null,
      error: null
    }
  },
  created: function() {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData: function() {
      this.loading = true
      getUser(this.$route.params.userId, (function(err, user) {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.user = user
        }
      }).bind(this))
    }
  }
}

// JSONを返す関数
// この関数を用いて疑似的にWeb API経由で情報を取得したようにする
var getUsers = function(callback) {
  setTimeout(function() {
    callback(null, [
      {
        id: 1,
        name: 'Takuya Tejima'
      },
      {
        id: 2,
        name: 'Yohei Noda'
      },
    ])
  }, 1000)
}

var userList = {
  template: '#user-list',
  data: function() {
    return {
      loading: true,
      users: function() {
        return []
      },
      error: null
    }
  },
  // 初期化時にデータを取得
  created: function() {
    this.fetchData()
  },
  // $routeの変更をwatchすることでルーティングが変更されたときに再度データを取得
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData: function() {
      this.loading = true
      // 取得したデータの結果をusersに格納する
      // Function.prototype.bindはthisのスコープを渡すために利用
      getUsers((function(err, users) {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.users = users
        }
      }).bind(this))
    }
  }
 }


var router = new VueRouter({
  routes: [
    {
      path: '/top',
      component: {
        template: '<div>トップページです。</div>'
      }
    },
    {
      path: '/users',
      component: userList
    },
    {
      path: '/users/new',
      component: userCreate
    },
    {
      path: '/users/:userId',
      component: userDetail
    }
  ]
})
var app = new Vue({
  router: router
}).$mount('#app')
