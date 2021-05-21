const Employee = require("./Employee.js");

// Intern Type Constructor

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
        this.getSchool = function() {
            return this.school;
        }
    }
};


module.exports = Intern;