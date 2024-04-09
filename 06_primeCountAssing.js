const arrayNum=[3,9,7,6,19,29,53]
let primeCount=0;
 for (let index = 0; index < array.length; index++) {
    const element = arrayNum[index];
 
         for( var i=2;i<element;i++){
           if(element%i==0){
           primeCount++;
        }
    }
}
console.log(primeCount); 
/* for (let index = ; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    if (element%index==0) {
        primeCount++
        console.log(primeCount);
    }
    
}
*/