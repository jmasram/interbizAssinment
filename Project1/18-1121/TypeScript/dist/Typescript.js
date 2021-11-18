"use strict";
exports.__esModule = true;
function greeter(person) {
    var first = 12.0; // number   
    var second = 0x37CF; // hexadecimal  
    var third = 255; // octal  
    var fourth = 57; // binary 
    console.log(first); // 123  
    console.log(second); // 14287  
    console.log(third); // 255  
    console.log(fourth); // 57
    return "Hello, " + person;
}
var user = 'JavaTpoint';
console.log(greeter(user));
var Student = /** @class */ (function () {
    function Student(RollNo, Name) {
        this.RollNo = RollNo;
        this.Name = Name;
    }
    Student.prototype.showDetails = function () {
        console.log(this.RollNo + " : " + this.Name);
    };
    return Student;
}());
exports["default"] = Student;
