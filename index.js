//Actual Assignemt goes here - *save first before running*
const prompt = require("readline-sync");
const wordBank = require("./word-bank.json");


let select = wordBank;
let selected = select[Math.floor(Math.random()*select.length)];
  console.log("\nWelcome! To start type a letter.\nPress ctrl+c to stop\n");

  

let answerArray = [];
for (let i = 0; i<selected.length; i++) {
  answerArray[i] = "_";
}



let remainingLetters = selected.length;


while (remainingLetters > 0) {
  console.log(answerArray.join(" "));

  let guess = prompt.question("Guess a letter:");

  if (guess == null){
    break;
  }else if (guess.length !== 1) {
    console.log("Please only guess a single letter");
  }else {
    for (let j = 0; j < selected.length; j++){
      if (selected[j] === guess){
        answerArray[j] = guess;
        remainingLetters--; break; 
      
      }
    } 
  }
}


console.log(answerArray.join(" "));

console.log("Good job! The answer was " + selected);

 

