const bankSbi={
    name: "State Bank Of India",
    branch:'Matunga',
    AccountNo:12345678,
    IFSC:"SBIN0000605",
}
console.log('1.create the object -> bankSBI wih literals.');
const bankLocation={
    street:"MatungaRoad",
    city:"Mumbai",
    pin:400019
}
console.log('2.create the object -> bankLocation wih Properties city, dist,pin.');
const ClonedBankDetails= Object.assign({},bankSbi,bankLocation);
console.log('3.clone 1st and 2nd object using object.assign() method.');
console.table(ClonedBankDetails);

console.log('4.create the object -> rateOfInterest wih Properties homeLoanInterest, personalLoanInterest,dueInterest.');
const rateOfInterest={
    homeLoanInterest:9.15,
    personalLoanInterest:11.5,
    dueInterest:10,
}
const sbiDetails= Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.log('5.merge 1st, 2nd & 4th object ito new sbiDetails object');
console.table(sbiDetails);
