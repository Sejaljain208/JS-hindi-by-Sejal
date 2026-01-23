// question 1 : write a function getgrade(score) which will return the grade according to the score as per the following criteria
// 90-100 : A
// 75-89  : B
// 60-74  : C
// below 60 : F 

function getGrade(score) {
    if(score >= 90 && score <= 100) {
        return 'A';
    }
    else if(score >=75){
        return 'B';
    }
    else if(score >=60){
        return 'C';
    }
    else  if(score >=0 && score <60){       
        return 'F';
    }
    else {
        return 'Invalid score';
    }   
}

console.log(getGrade(95));  // A
console.log(getGrade(78));  // B 
console.log(getGrade(87));  // B
console.log(getGrade(55));  // C
console.log(getGrade(39));  // F
console.log(getGrade(110)); // Invalid score 

// question 2 : rock , paper , scissors game
// rock vs paper -> paper wins
// rock vs scissors -> rock wins
// paper vs scissors -> scissors wins

function rpsGame(user, computer){
    if(user === computer){
        return "draw";
    }
    else if (user ==="rock" && computer === "scissors" ) return "user";
    else if (user ==="paper" && computer === "rock" ) return "user";
    else if (user ==="scissors" && computer === "paper" ) return "user";
    else return "computer";

}
console.log(rpsGame("rock", "paper"));       // computer
console.log(rpsGame("rock", "scissors"));    // user
console.log(rpsGame("paper", "scissors"));   // computer
console.log(rpsGame("scissors", "scissors")); // draw
