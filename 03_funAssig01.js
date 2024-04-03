console.log("====step1====");
function fun1(){
    console.log("Hellow from Ashwini");
}
fun1();
function fun2(){
    console.log("i am enjoying this course ");
}
fun2();
console.log("====step2====");
function personalDetails( firstName,lastName,collageName){
    console.log("My First name is:",firstName); 
    console.log("My last name is:",lastName);
    console.log("My collage name is:",collageName);

}
personalDetails("ashwini","gulve","COEP");

console.log("====step3====");
function swapValue(n1,n2){
      console.log("before swap:",n1,n2);
      var temp=n1;
      n1=n2;
      n2=temp;
      console.log("After swap:",n1,n2);
}
swapValue(1000,2000);
swapValue("Virat","anushka");


console.log("====step4====");
    function addThreeValue(n1,n2,n3){
console.log("Arguments:",n1,n2,n3);
var result=n1+n2+n3;
console.log("Addition is:",result);   
}
addThreeValue(10.23,600,40);
addThreeValue("hello","good","morning");





