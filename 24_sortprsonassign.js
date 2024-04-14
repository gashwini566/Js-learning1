class Employee{
    constructor (emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    
    }
}
const emp_anil = new Employee (22,"Anil","IT", 50000 ,"TCS");  
const emp_radha = new Employee (33,"radha","HR", 74000 ,"Wipro"); 
const emp_rishi = new Employee (55,"rishi","Finance", 47000 ,"TCS"); 
const emp_sonali = new Employee (66,"sonali","Finance", 45000 ,"infy"); 
const emp_monika = new Employee (77,"monika","IT", 40000 ,"wipro"); 
const emp_viny = new Employee (79,"vinayak","IT", 75000 ,"TCS"); 
const emp_mahi = new Employee (80,"mahesh","HR", 85000 ,"infy");  


const arrayEmployee=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`-----------------1.descending sort by emp ID------------------------`);
arrayEmployee.sort((p1,p2)=>{
    return p1.emp_id>=p2.emp_id?-1:1;
})
arrayEmployee.forEach(element=>{
    console.log(`ID: ${element.emp_id}  Name: ${element.emp_name}  Department: ${element.emp_dept}`);
});

console.log(`----------------2.ascending sort by emp Department------------------------`);
arrayEmployee.sort((p1,p2)=>{
    return p1.emp_dept>=p2.emp_dept?1:-1;
})
arrayEmployee.forEach(element=>{
    console.log(`ID: ${element.emp_id}  Department: ${element.emp_dept} Company: ${element.emp_company}`);
});

console.log(`----------------3.descending sort by emp Salary------------------------`);
arrayEmployee.sort((p1,p2)=>{
    return p1.emp_salary>=p2.emp_salary?-1:1;
})
arrayEmployee.forEach(element=>{
    console.log(`Name: ${element.emp_name} Salary: ${element.emp_salary}  Company: ${element.emp_company}`);
});

