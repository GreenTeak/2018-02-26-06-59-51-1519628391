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
       this.leader= stu;
    }
}
export default Class;
