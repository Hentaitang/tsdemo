import Vue from 'vue'
import Hentaitang from './Hentaitang.vue'
import { b } from './test'
console.log(b)
let div = document.createElement('div')
div.id = 'app'
div.textContent = 'congratulation!'

document.body.appendChild(div)

new Vue({
  el: div,
  render: h => h(Hentaitang)
})
