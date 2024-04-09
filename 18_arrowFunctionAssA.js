let show=()=>console.log("Good Morning Today is a Tuesday");
show();
console.log('--------------------------------------------------------')
 let multiplication=(n1,n2,n3=1)=>{
   console.log(`Multiplication of ${n1}, ${n2}, ${n3} is : ${n1*n2*n3}`);
 }
 multiplication(5,5,2);
 multiplication(10,4);
 console.log('--------------------------------------------------------')
 let add=(n1,n2,n3,n4,n5)=>{
    
       let addition=(n1+n2+n3+n4+n5);
       return addition;
       
 }
 let result=add(100,100,200,349,756);
console.log(`Additiono of 100,100,200,349,756 is: ${result}`);
let result2=add("I am ","learning","ES6","features","in depth");
console.log(`Additiono of i am,learning,ES6,features,in depth is: ${result2}`);
 