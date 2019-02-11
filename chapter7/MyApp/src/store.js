import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // タスクの初期ステート
    tasks: [
      {
        id: 1,
        name: '牛乳を買う',
        done: false
      },
      {
        id: 2,
        name: 'Vue.jsの本を買う',
        done: true
      }
    ]
  }
})

/*
// ストアの作成
const store = new Vuex.Store({
  // ステート
  state: {
    count: 10
  },
  // gettersオプションでゲッターを定義する
  getters: {
    // ステートから別の値を計算する
    squared: (state) => state.count * state.count,
    // 他のゲッターの値を使うことも可能
    cubed: (state, getters) => state.count + getters.squared
  },
  // ミューテーション
  mutations: {
    increment(state, payload) {
      state.count + payload.amount
    }
  },
  actions: {
    incrementAction(ctx) {
      // incrementActionミューテーションを実行する
      ctx.commit('increment')
    }
  }
})

// ステートを参照
console.log(store.state.count)

// store.gettersでゲッターを参照する
console.log(store.cubed)

// store.dispatchでアクションを呼び出す
store.dispatch('incrementAction')

// ミューテーションを実行し、ステートを更新
store.commit('increment', { amount: 5 })

// ステートの更新を確認
console.log(store.state.count)
*/

export default store
