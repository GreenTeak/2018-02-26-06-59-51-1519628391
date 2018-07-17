
'use strict'
import Student from "../practice_8/student"
class Class{
    constructor(number){
        this.number = number;
    }
    getDisplayName(){
        return `Class ${this.number}`;
    }
    assignLeader(stu){
        if(this.Students !== undefined && this.Students.contains(stu))
          this.leader= stu;
         else console.log("It is not one of us.")
    }
    appendMember(stu){
           this.Students.push(stu);
    }
}
export default Class;


