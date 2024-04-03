let person = {

    name: "Gajanan",

    city: "Pune",

    experience: 10

}

 

console.log(person);

//console.table(person);

console.log(`Type of person is: ${typeof person}`);



console.log(`====== Adding properties in an object =========`);

person.isMarried = true;

console.log(person);

 

console.log(`====== Delete properties from an object =========`);

delete person.experience;

console.log(person);




console.log(`====== Creating an empty object =========`);

let address= {

    

}




console.log(`====== Creating method inside an object =========`);
const bankSbi = {

    name: "SBI Bank Wakad",

    city: "Pune",

    totalStaff: 90,

    homeLoanROI: 9.5,

    bankDetail: function(){

        console.log(`Bank Details`);

        console.log(`Name: ${this.name}, City: ${this.city}, total staff: ${this.totalStaff}, Home Loan ROI: ${this.homeLoanROI}`);

    }

}

bankSbi.bankDetail();

