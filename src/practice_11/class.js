'use strict'
import Student from "../practice_8/student"
class Class{

    leader;

    constructor(number){
        this.number = number;
    }
    getDisplayName(){
        return `Class ${this.number}`;
    }
    assignLeader(stu){
        if(stu && stu.klass.number === this.number){
          this.leader = stu;
          if(this.listener) {
              this.listener(stu);
          }
        }
        else console.log("It is not one of us.");
    }
    appendMember(stu){
        stu.klass = this;
        if(this.JoinLister){
            this.JoinLister(stu);
        }
    }
    registerJoinListener(teacher){
        this.JoinLister = (student) => teacher.notifyAppendStudent(student);
    }
    registerAssignLeaderListener(teacher){
        this.listener = (student) => teacher.notifyAssignStudent(student);
    }
}
export default Class;

