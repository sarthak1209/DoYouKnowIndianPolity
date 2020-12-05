var readlineSync = require("readline-sync");
var chalk        = require("chalk");


var score= 0;

var highScores =[
  {
    name: "Sarthak",
    score : 18
  }
]


var user = readlineSync.question("May I know your name? ");

console.log(chalk.bgYellow("Namaste " + user+"!! You're welcome!!"));


console.log("let's see how much you know Indian constitution.");


function play(question, answer){
  var userAnswer = readlineSync.question(chalk.cyan(question +chalk.yellow("\n Write answer here as a / b / c / d -")));
  
  if(userAnswer === answer){
    score = score +3;
    console.log(chalk.green("correct answer!! You are awarded 3 points."));
    

  }else{
    score--;
    console.log(chalk.red("Wrong answer!! Your score will be deducted by 1."));
  }
  console.log("Your current score is:"+ score);
  console.log("======================================")

}

var questionBank = [
{
  
  question:"Under the Constitution of India, which one of the following is not a fundamental duty? \n (a.) To vote in public elections \n (b.) To develop the scientific temper \n (c.) To safeguard public property \n (d.) To abide by me Constitution and respect its ideals ",
  answer:"a"
},
{
   question:"With reference to the Finance Commission of India, which of the following statements is correct?\n (a.) It encourages the inflow of foreign capital for infrastructure development\n (b.) It facilitates the proper distribution of finances among the Public Sector Undertakings \n (c.) It ensures transparency in financial administration\n (d.) None of the statements (a), (b) and (c) given above is correct in this context",
   answer:"d"
},
{
   question:"The Prime Minister of India, at the time of his/her appointment: (2012) \n (a) need not necessarily be a member of one of the Houses of the Parliament but must become a member of one of the” Houses within six months \n (b) need not necessarily be a member of one of the Houses of the Parliament but must become a member of the LokSabha within six months \n (c) must be a member of one of the Houses of the Parliament \n (d) must be a member of the LokSabha",
   answer:"a"
},
{
   question:"According to the Constitution of India, it is the duty of the President of India to cause to be laid before the Parliament which of the following?(2012)\n 1.The Recommendations of the Union Finance Commission \n 2.The Report of the Public Accounts Committee\n 3.The Report of the Comptroller and Auditor General\n 4.The Report of the National Commission for Scheduled Castes\nSelect the correct answer using the codes given below :\n(a) 1 only\n(b) 2 and 4 only\n(c) 1, 3 and 4 only\n(d) 1, 2, 3 and 4",
   answer:"c"
},
{
   question:"The distribution of powers between the Centre and the States in the Indian Constitution is based on the scheme provided in the \n(a) Morley-Minto Reforms, 1909\n(b) Montagu-Chelmsford Act, 1919\n(c) Government of India Act, 1935\n(d) Indian Independence Act, 1947",
   answer:"c"
},
{
   question:"In the Parliament of India, the purpose of an adjournment motion is \n(a) to allow a discussion on a definite matter of urgent public importance\n(b) to let opposition members collect information from the ministers\n(c) to allow a reduction of specific amount in demand for grant\n(d) to postpone the proceedings to check the inappropriate or violent behaviour on the part of some members",
   answer:"a"
},
]


for(var i=0; i<questionBank.length; i++){
  var quesAns = questionBank[i];
  var questionNo= Number(i)+ Number(1);
  console.log("Question No:"+ questionNo);
  play(quesAns.question, quesAns.answer);
}

console.log(chalk.bgGreen("You have scored: " + score));
console.log(highScores[0].score );
if(Number(highScores[0].score) > Number(score)){
  console.log(chalk.magenta("Sarthak has scored highest :18"));
  console.log(chalk.bgMagenta("Keep trying you can beat him"));
}else{
  console.log("Congratulations " + user +"!!! You have scored highest");
  console.log("send us the screen shot we'll update it.")
}