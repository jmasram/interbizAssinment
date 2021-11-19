"use strict";

var Employee =
/** @class */
function () {
  function Employee(code, name) {
    this.empCode = code;
    this.name = name;
  }

  Employee.prototype.getSalary = function (empCode) {
    return 20000;
  };

  return Employee;
}();

var emp = new Employee(1, "Steve");