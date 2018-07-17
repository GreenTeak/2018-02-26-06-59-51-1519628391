"use strict"
import Person from "../practice_1/person"
import Class from "../practice_7/class"
class Student extends Person{
    constructor(name, age, classNumber){
        super(name, age);
        this.klass = classNumber;
    }
    introduce(){
        return super.introduce() +` I am a Student. I am at Class ${this.klass.number}.`;
    }
      
}
export default Student;
