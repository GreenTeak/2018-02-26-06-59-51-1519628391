"use strict"
class Person{
    constructor(order, name, age){
        this.order = order;
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
}
export default Person;