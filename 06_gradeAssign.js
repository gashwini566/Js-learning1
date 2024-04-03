function gradeCalculation(marks) {
 if (marks==null || marks<=0 || marks>100 || isNaN(+marks)) {
        console.log(`invalid input: ${marks}`);
    }
   else if (marks>=90){
    console.log(`Fantastic marks: ${marks} !!! Your grade is A+`);
   }
   else if(marks>=75 && marks<90) {
    console.log(`Excellent marks: ${marks} !!! Your grade is A`);
   }
   else if(marks>=50 && marks<75){
    console.log(`good marks:${marks} !!! Your grade is B`);
   } 
   else if (marks>=35 && marks<50){
    console.log(`your marks is: ${marks} need improvement`);
   }
   else {
    console.log(`You are failed in exam: ${marks} `);
   }
   
    
   }
    

gradeCalculation(98);
gradeCalculation(80);


gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(29);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation("Eighty");
    




