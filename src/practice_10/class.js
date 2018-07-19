'use strict'
import Student from "../practice_8/student"

class Class {

    leader;

    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    assignLeader(stu) {
        if (stu && stu.klass.number === this.number)
            this.leader = stu;
        else console.log("It is not one of us.");
    }

    appendMember(stu) {
        stu.klass = this;
    }

    getLeader() {
        return this.leader;
    }
}

export default Class;

