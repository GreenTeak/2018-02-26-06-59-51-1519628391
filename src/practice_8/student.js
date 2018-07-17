"use strict"
import Person from "../practice_8/person"
import Class from "../practice_8/class"
class Student extends Person{
    constructor(order, name, age, classNumber){
        super(order, name, age);
        this.klass = classNumber;
    }
    introduce(){
        if(this.klass.leader ===  this)
          return super.introduce() + ` I am a Student. I am Leader of ${this.klass.getDisplayName()}.`
        return super.introduce() +` I am a Student. I am at ${this.klass.getDisplayName()}.`;
    }
      
}
export default Student;

