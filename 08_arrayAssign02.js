const arrayNum=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`=====step1=====`);
console.log(`total number of element: ${arrayNum.length}`);
console.log(arrayNum);
console.log(`=====step2=====`);
console.log(`first element of array is: ${arrayNum[0]}`);
console.log(`last element of array is: ${arrayNum[arrayNum.length-1]}`);
console.log(`=====step3=====`);
console.log(`=====step4=====`);
console.log(` even numbers are:`);
for (const element of arrayNum) {
      if (element%2==0) {
      console.log(element);
    }
}
console.log(`=====step5=====`);
console.log(` odd numbers are:`);
for (const element of arrayNum) {
      if (element%2!=0) {
      console.log(element);
    }
}
console.log(`=====step6=====`);
console.log(` even position num`);
for (const index in arrayNum) {
    if (index%2==0){
        console.log(arrayNum[index]);
    }
        
    }
    console.log(`=====step7=====`);
console.log(` odd position num`);
for (const index in arrayNum) {
    if (index%2!=0){
        console.log(arrayNum[index]);
    }
        
    }
    /*console.log(`=====step7=====`);
    console.log(` sum of the numbers`);
    sum=0;
    for (const element of arrayNum) {
        sum=sum+element;
        console.log(`sum of the array is:${element}`);
    }*/
    console.log(`=====step9=====`);
    for (const element of arrayNum) {
        if (element%5==0) {
            console.log(element);
        }
    }
    console.log(`=====step10=====`);
    console.log(`is 115 available in array? : ${arrayNum.includes(115)}`);
    console.log(`is 23 available in array? : ${arrayNum.includes(23)}`);
    console.log(`=====step12=====`);
    console.log(`insert element`);
    arrayNum.splice(3,0,55,66);
    console.log(arrayNum);
    console.log(`=====step13=====`);
    console.log(`delete element`);
    const removelement=arrayNum.splice(4,3);
    console.log(arrayNum);




