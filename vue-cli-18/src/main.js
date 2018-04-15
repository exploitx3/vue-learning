import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import {store} from './store/store'

Vue.use(VueRouter)

Vue.filter('addCommasToNumber', function (number, seperator) {
  let result = []
  let numberAsString = String(number).split('').reverse()
  for (let i = 0, numberIndex = 1; i < numberAsString.length; i++, numberIndex++) {
    let number = numberAsString[i]
    result.push(number)
    if (numberIndex % 3 === 0 && numberIndex !== 0 && i !== numberAsString.length - 1) {
      result.push(seperator)
    }
  }

  return result.reverse().join('')
})

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
