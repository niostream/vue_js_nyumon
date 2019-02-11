var iconShareButton = {
  template: `
    <button v-on:click="share">
      <i class="fas fa-share-square"></i>
    </button>
  `,
  data: function() {
    return {
      _isProcessing: false
    }
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

var textShareButton = {
  template: `
    <button v-on:click="share">
      {{ buttonLabel }}
    </button>
  `,
  data: function() {
    return {
      buttonLabel: 'シェアする',
      _isProcessing: false
    }
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

var vm = new Vue({
  el: '#app',
  components: {
    iconShareButton: iconShareButton,
    textShareButton: textShareButton
  }
})
