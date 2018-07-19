'use strict'
import Person from "../practice_8/person"
class Teacher extends Person{
    constructor(order, name, age, classes){
       super(order, name, age);
       this.klasses = classes;
    }
    
    introduce(){
        if(this.klasses === undefined) {
           return super.introduce() + ` I am a Teacher. I teach No Class.`            
        }
        const classItems = this.klasses.map((x) => x.number).join(', '); 
        return  super.introduce() + ` I am a Teacher. I teach Class ${classItems}.`
        
    }
    introduceWith(stu){
        if(stu.klass.number === this.klass.number)
           return super.introduce() + ` I am a Teacher. I teach ${stu.name}.`
        return super.introduce() + ` I am a Teacher. I don't teach ${stu.name}.`;

    }
}
export default Teacher;


