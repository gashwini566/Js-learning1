console.log("========step1=========");
var arrayFruits=["banana","Orange","Apple","Mango","WaterMelon"];
console.log(arrayFruits);
console.log(`first element of array is: ${arrayFruits[0]}`);
console.log(`last element of array is: ${arrayFruits[arrayFruits.length-1]}`);
console.log("========step2=========");
console.log("Add element at First");
arrayFruits.unshift("Papaya");
console.log(`${arrayFruits}`);
console.log("========step3=========");
console.log("Remove element mango from array");
var arrayFruits1=["banana","Orange","Apple","Mango","WaterMelon"];
console.log(`${arrayFruits1}`);
var deletEelement=arrayFruits1.splice(3,1);
console.log(`${arrayFruits1}`);
console.log("========step4=========");
console.log("Add element at last");
var arrayFruits2=["banana","Orange","Apple","Mango","WaterMelon"];
console.log(`${arrayFruits2}`);
arrayFruits2.push("pineapple");
console.log(`${arrayFruits2}`);
console.log("========step5=========");
console.log("Add element at middle");
var arrayFruits3=["banana","Orange","Apple","Mango","WaterMelon"];
console.log(`${arrayFruits3}`);
var insertMiddle=arrayFruits3.splice(4,0,"DRAGON FRUIT");
console.log(`${arrayFruits3}`);
console.log("e========step6=========");
console.log("Replace middle element Orange with kiwi");
var arrayFruits4=["banana","Orange","Apple","Mango","WaterMelon"];
console.log(`${arrayFruits4}`);
var insertMiddle=arrayFruits4.splice(1,1,"KIWI");
console.log(`${arrayFruits4}`);

console.log("e========step7=========");
console.log("dispay index 1to4");
var arrayFruits4=["banana","Orange","Apple","Mango","WaterMelon"];
console.log(`${arrayFruits4}`);
var displayMiddle=arrayFruits4.splice(1,4);
console.log(`${displayMiddle}`);

console.log("e========step8=========");
console.log("Print last 3 element");
var arrayFruits5=["banana","Orange","Apple","Mango","WaterMelon"];
console.log(`${arrayFruits5}`);
var last3=arrayFruits5.splice(arrayFruits5.length-3);
console.log(`${last3}`);





/*var arrayNum=[2,4,1,7,9,8,11,12];
console.log(arrayNum);
var deletelement=arrayNum.splice(2,2);
console.log(arrayNum);
console.log(deletelement);*/