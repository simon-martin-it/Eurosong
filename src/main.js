import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')

/*
//ES6
let person = {
  firstname: "Simon",
  name: "Martin",
  Sayfullname: function(){
    console.log(this.firstname + " " + this.name);
  }
};

console.log(person.firstname);
person.Sayfullname();

let fullname = person.Sayfullname.bind(person);
fullname();

//ES5
var person = {
  firstname: "Simon",
  name: "Martin",
  sayFullName2s: function(){
    var self = this;
    setTimeout(function(){
      console.log(self.firstname + " " + self.name);
    }, 2000)
  }
}
*/

person.sayFullName2s();

//ES6
var person = {
  firstname: "Simon",
  name: "Martin",
  sayFullName2s() {
    setTimeout(() => {
      console.log(self.firstname + " " + self.name);
    }, 2000);
  }
}

person.sayFullName2s();