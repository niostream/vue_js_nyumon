// ミックスインの定義
var sharable = {
  data: function() {
    return {
      _isProcessing: false
    }
  },
  created: function() {
    console.log('sharableのミックスインのフックが呼ばれました。')
  },
  methods: {
    share: function() {
      if (this._isProcessing) {
        return
      }
      if (!window.confirm('シェアしますか?')) {
        return
      }
      this._isProcessing = true
      setTimeout(() => {
        window.alert('シェアしました。')
        this._isProcessing = false
      }, 300)
    }
  }
}

var iconShareButton = {
  mixins: [sharable],
  created: function() {
    console.log('iconShareButtonのフックが呼ばれました。')
  },
  template: `
    <button v-on:click="share">
      <i class="fas fa-share-square"></i>
    </button>
  `,
}

var textShareButton = {
  mixins: [sharable],
  created: function() {
    console.log('textShareButtonのフックが呼ばれました。')
  },
  template: `
    <button v-on:click="share">
      {{ buttonLabel }}
    </button>
  `,
  data: function() {
    return {
      buttonLabel: 'シェアする'
    }
  }
}

var vm = new Vue({
  el: '#app',
  components: {
    iconShareButton: iconShareButton,
    textShareButton: textShareButton
  }
})
