class Employee{
    private empId : number = 0;
    private empName : string ='';
    private empSalary : number = 0.0;
    public empCompany : string = "Simplilearn";
    protected empDepartment : string;

    constructor(empId : number,empName : string,empSalary : number,empDepartment : string){
        this.empId = empId;
        this.empName = empName;
        this.empSalary = empSalary;
        this.empDepartment = empDepartment;
    }

    getEmployeeDetails() : string {
        return `${this.empId} ${this.empName} ${this.empSalary} ${this.empDepartment}`;
    }
}

//create an object for above class
const emp = new Employee(32423424,"Rama Raju",44242.67,"HR");
console.log(emp.getEmployeeDetails());

class FullTimeEmployee extends Employee{    
    
   private numberOfDaysWorking : number = 20;
    getNumberOfDays() : number {
        return this.numberOfDaysWorking;
    }
}

class Company{
    //emp1 = new Employee(2424232,"Raja Raju",74242.67,"Accounts");
    displayCompanyNameOfEmp() : string{
            return emp.empCompany;
    }
}