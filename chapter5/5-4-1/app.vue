var myButton = {
  props: [
    'href', 'tag'
  ],
  template: `
    <a v-if="(!tag && href) || tag === 'a'" v-bind:href="href || '#'">
      <slot></slot>
    </a>
    <span v-else-if="tag === 'span'">
      <slot></slot>
    </span>
    <button v-else>
      <slot></slot>
    </button>
  `
}

var vm = new Vue({
  el: '#app',
  components: {
    myButton: myButton
  }
})
