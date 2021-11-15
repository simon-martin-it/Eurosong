import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

let person = {
  firstname: "Simon",
  name: "Martin",
  SayFullName(){
    console.log('${this.firsntame"} ${this.name}');
  }
}