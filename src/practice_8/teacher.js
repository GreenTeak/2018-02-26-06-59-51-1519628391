'use strict'
import Person from "../practice_8/person"
class Teacher extends Person{
    constructor(order, name, age, klass){
       super(order, name, age);
       this.klass = klass;
    }
    
    introduce(){
        if(this.klass === undefined) 
           return super.introduce() + ` I am a Teacher. I teach No Class.`
        return super.introduce() + ` I am a Teacher. I teach Class ${this.klass.number}.`
    }
    introduceWith(stu){
        if(stu.klass.number === this.klass.number)
           return super.introduce() + ` I am a Teacher. I teach ${stu.name}.`
        return super.introduce() + ` I am a Teacher. I don't teach ${stu.name}.`;

    }
}
export default Teacher;
