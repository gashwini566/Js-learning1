const person = {

    name: "Gajanan",

    city: "Pune",

    experience: 10

}

// Not allowed

// person = { 

//     pin: 12345

// }

console.log(person);

person.city= "Mumbai";

console.log(person);



const address = {

    flatNumber: 1005,

    wing: "B2 Block",

    street: "Wakad"

}

console.log(address);

Object.freeze(address);
 
address.street = "Kharadi";// Won't reflect this change as object address is freezed

console.log(address);



// in operator

const result = "street" in address;

console.log(result);

 

console.log("pin" in address);


// Get the keys from an object

const keys = Object.keys(address);

console.log(keys);

 

// Get the values from an object

const values = Object.values(address);

console.log(values);


const person = {

    name: "Gajanan",

    city: "Pune",

    experience: 10

}

// Cloning an Object using spread Operator

const personClone = {...person}

console.log(person);

 

personClone.name = "Elon";

console.log(personClone);

 

// Cloning an Object using Object.assign()

console.log(`===== Cloning an Object using Object.assign()======`);

const cloneObjet = Object.assign({}, person);

console.log(cloneObjet);

 

// Merging an object

console.log(`======== Merging an object ==========`);

const personGK = {

    name: "Gajanan K",

    city: "Pune",

    experience: 10

}

const address = {

    flatNumber: 1005,

    wing: "B2 Block",

    street: "Wakad"

}

 

const mergedObject = Object.assign({}, personGK, address);

console.log(`====== mergedObject=========`);

console.table(mergedObject);

 

console.log(`====== personGK=========`);

console.table(personGK);