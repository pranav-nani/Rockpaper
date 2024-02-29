let userScore = 0;
let compScore = 0;
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
let moves = document.querySelector("#msg");

const values = ["rock", "paper", "scissors"];
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  console.log("this is the user choice", userchoice);
  const x = Math.floor(Math.random() * 3);
  const compchoice = values[x];
  console.log("this is the comp choice", compchoice);
  if (userchoice === compchoice) {
    moves.innerText = "The game is draw";
    moves.style.backgroundColor = "yellow";
    moves.style.color = "black";
  }else {
    let userWin = true;
    if (userchoice === "rock") {
      //scissors, paper
      userWin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      //rock, scissors
      userWin = compchoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compchoice === "rock" ? false : true;
    }
    showWinner(userWin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
