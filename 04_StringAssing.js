function handsOnString(){
 var sentence ="  Hey you are doing great keep it up  "
console.log(`Step 1 : Given string is: ${sentence}`);
}
handsOnString();

var sentence ="  Hey you are doing great keep it up  "
console.log(`Step 1 : Given string is: ${sentence}`);
var sentenceLength=sentence.length;
console.log(`Step 2: length of ${sentence} is ${sentenceLength}`);

var greet="   Hey! you are doing great keep it up   "
var greetAfterTrim=greet.trim();
var value=greetAfterTrim.length;
console.log(`Step 3: string after trim: ${value}`);
console.log(`Step 4: Total number of extra space is:${sentenceLength-value} `);
console.log(`Step 5: First character after trim is ${greetAfterTrim.charAt(0)} , last character after trim is ${greetAfterTrim.charAt(34)}` );
console.log(`Step 6:Total number of words after trim are ${greetAfterTrim.split(" ").length}`);
console.log(`step 9: strings ends with:${greetAfterTrim.includes("up")}`);
console.log(`step 10: strings Starts with:${greetAfterTrim.includes("Hey")}`);
