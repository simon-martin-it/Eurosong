import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')

/*
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

let fullname = person.Sayfullname.bind(person);
person.sayFullName2s();

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



const square = number => number * number;
console.log(square(5));

const person = {
  firstname: "Simon",
  name: "Martin"
}

const { firstname, name} = person;
console.log(firstname, name);

*/

import { Person } from './classes/Person'

class Teacher extends Person {
  constructor(firstname, lastname, degree){
    super(firstname, lastname);
    this.degree = degree;
  }

  Teah(){
    console.log("De leerkracht is aan het lesgeven.");
  }
}

const t1 = new Teacher("Simon", "Martin", "Nothing lol");
t1.Teah();
