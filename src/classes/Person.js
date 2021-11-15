export class Person {
    constructor(firsname, lastname){
        this.firsname = firsname;
        this.lastname = lastname;
    }

    getFullName(){
        console.log(this.firsname + " " + this.lastname);
    }
}