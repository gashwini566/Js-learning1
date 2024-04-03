function squareOfWordLength(value1){
    var wordLength= value1.length;
    console.log(`length of "${value1}"is :${wordLength} and its Square :${wordLength**2}`);


}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart"); 

console.log ("==========Step 2=========");

function xyz(){
    var greet="i am Angular Developer";
    var greetLength=greet.length;
    var TotalWords=greet.split(" ");
    console.log(`length of String is:"${greetLength}" AND Total words in string are "${TotalWords.length}" so Division is:"${greetLength/TotalWords.length}"`);
   // console.log(` ${greetLength/TotalWords.length}`);
    //console.log(` ${greetLength*TotalWords.length}`);
    console.log(`length of String is:"${greetLength}" AND Total words in string are "${TotalWords.length}" so Division is:"${greetLength*TotalWords.length}"`);

}
xyz()