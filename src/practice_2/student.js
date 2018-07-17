"use strict"
import Person from "../practice_1/person"
class Student extends Person{
    constructor(name, age, classNumber){
        super(name, age);
        this.klass = classNumber;
    }
    introduce(){
        return `I am a Student. I am at Class ${this.klass}.`;
    }
      
}
export default Student;
