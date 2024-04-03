class Person{
    name
    city
    age
    constructor(Myname,Mycity, Myage ){
    this.name=Myname;
    this.city=Mycity;
    this.age=Myage;
    }
}
const jenny1= new Person("jenny","pune",22);
console.log(jenny1);
const bill= new Person("bill","mumbai",24);
console.log(bill);
  
/*
class Person {

    constructor(name, city, age){

        this.name = name;

        this.city = city;

        this.age = age;

    }

    detail(){

        console.log(`Person Details => Name: ${this.name}, City: ${this.city}, Age: ${this.age}`);

    }

}

const jenny = new Person("Jenny", "Pune", 22);

jenny.detail();

 

const bill = new Person("Bill", "Mumbai", 24);

bill.detail();

 

const elon = new Person("Elon", "LA", 38);

elon.detail();*/