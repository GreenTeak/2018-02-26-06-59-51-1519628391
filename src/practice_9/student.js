"use strict"
import Person from "../practice_8/person"
import Class from "../practice_8/class"
class Student extends Person{
    constructor(order, name, age, klass){
        super(order, name, age);
        this.klass = klass;
    }
    introduce(){
        console.log(this.klass.leader, this )
        if(this.klass.leader === this ){
            return super.introduce() + ` I am a Student. I am Leader of ${this.klass.getDisplayName()}.`
        }else{
             return super.introduce() +` I am a Student. I am at ${this.klass.getDisplayName()}.`; 
        }
    }
      
}
export default Student;