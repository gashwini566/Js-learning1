const employee=`
{
"name":"Aleix Melon",
"id":"E00245",
"role":["Dev","DBA"],
"age": 23,
"doj":"11-12-2019",
" married":false ,
"address": {
   "street": "32, Latham St",
   "city":"Innsbruck",
   "country":"Austria"
},
"referred-by": "E0012"
}`
const result=JSON.parse(employee);
console.log(result);
console.table(result);
console.log('=====step2======');
console.log(employee.role[0]);