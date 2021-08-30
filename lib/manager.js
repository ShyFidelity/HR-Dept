
const Employee = require('./lib/employee.js');


class Manager extends Employee{
    constructor(name, id, email) {
        super(name, id, email, officeNum);
        this.officeNum = this.officeNum; 
    }
        getOfficeNum() {
            return this.this.officeNum;
        }

        getRole() {
            return 'Manager';
        }

}

module.exports = Manager; 