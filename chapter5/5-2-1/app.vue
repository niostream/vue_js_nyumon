var myButton = {
  template: `<button><slot>OK</slot></button>`
}

new Vue({
  el: '#app',
  components: {
    myButton: myButton
  }
})
