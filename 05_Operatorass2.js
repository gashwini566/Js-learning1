console.log("=======Step1=======");
function greaterNumber(n1,n2){
    var greaternum=n1>n2?n1:n2;
    console.log(`the greater number between ${n1} and ${n2} is:${greaternum}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log("=======Step2=======");


function isEvenOrOdd(n1){

    var result= n1%2==0?"even":"odd";
    console.log(`given number ${n1} is :${result}`);
    return result;
}
isEvenOrOdd(29);
isEvenOrOdd(44);
isEvenOrOdd(0);
isEvenOrOdd(101);

console.log("=======Ste3=======");


    
function worldLength(n1){
    var result=n1.length;
    var value=result%2==0?"Even":"Odd";
console.log(`Length of "${n1}" is:${value}`);
return value;
}
worldLength("javaScript");
worldLength("developer");
worldLength("google");