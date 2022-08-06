const readlineSync = require("readline-sync");

console.log("Lets play a game ");
console.log("**************************************");

const user = readlineSync.question("What is your name ? ");
console.log("");

const questionsArray = [
  {
    question:"who is ajinkya's favorite actor ?",
    answer:"pankaj tripathi"
  },
  {
    question:"Who is Ajinkya's favorite superhero?",
    answer:"Iron Man"
  },
  {
    question:"What is Ajinkya's favorite travel destination?",
    answer:"Paris"
  },
  {
    question:"What is Ajinkya's favourite food??",
    answer:"Biryani"
  },
  {
    question:"Who is Ajinkya's Mentor?",
    answer:"Tanay pratap"
  },
] 

let score =0;
for(let i = 0 ; i<questionsArray.length;i++){
  const userAns = readlineSync.question(questionsArray[i].question)
  if(userAns.toLowerCase() === questionsArray[i].answer.toLowerCase()){
    console.log("You are right!!");
    console.log("");
    score++;
    
  }else{
    console.log("Sorry ,You are wrong !!!");
    console.log("");
  }
}


console.log("**************************************");
console.log(user +" your score is "+ score);
console.log("**************************************");
console.log("Highest Scorer is ", "Ajinkya")
