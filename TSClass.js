var Employee = (function () {
    function Employee(empId, empName, empSalary) {
        this.empId = 0;
        this.empName = '';
        this.empSalary = 0.0;
        this.empId = empId;
        this.empName = empName;
        this.empSalary = empSalary;
    }
    Employee.prototype.getEmployeeDetails = function () {
        return "".concat(this.empId, " ").concat(this.empName).concat(this.empSalary);
    };
    return Employee;
}());
var emp = new Employee(32423424, "Rama Raju", 44242.67);
console.log(emp.getEmployeeDetails());
//# sourceMappingURL=TSClass.js.map