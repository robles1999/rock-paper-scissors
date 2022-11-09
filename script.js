function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  let randomNum = Math.floor(Math.random() * options.length);
  return options[randomNum];
}

function getResult(playerChoice, computerChoice) {
  // console.log('player: ' + playerChoice)
  // console.log('computer: ' + computerChoice)
  const strategy = {
    Rock: "Scissors",
    Scissors: "Paper",
    Paper: "Rock",
  };
  if (playerChoice === computerChoice) {
    // console.log('Draw')
    showResult(0, playerChoice, computerChoice);
    return;
  }
  // return the result of score based on if you won, drew, or lost

  if (computerChoice === strategy[playerChoice]) {
    // console.log('Player Won')
    showResult(1, playerChoice, computerChoice);
  } else {
    // console.log('Computer Won')
    showResult(-1, playerChoice, computerChoice);
  }
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
let playerScore = 0;
let computerScore = 0;
let count = 0;
function showResult(score, playerChoice, computerChoice) {
  let result = "";

  count++;
  if (score === 1) {
    playerScore++;
    result = "You WIN!!";
  } else if (score === -1) {
    computerScore++;
    result = "You LOOSE - 8(";
  } else {
    result = "It's a DRAW!";
  }
  const playerDisplay = document.getElementById("player-score");
  playerDisplay.innerHTML = "Player: " + playerScore;

  const computerDisplay = document.getElementById("computer-score");
  computerDisplay.innerHTML = "Computer: " + computerScore;

  const playsDisplay = document.getElementById("total-plays");
  playsDisplay.innerHTML = "Plays: " + count;

  const handsDisplay = document.getElementById("hands");
  handsDisplay.innerHTML = `👱 ${playerChoice} vs 🤖 ${computerChoice}`;

  const resultDisplay = document.getElementById("result");
  resultDisplay.innerHTML = result;

  // console.log('player score: ' + playerScore + '/' + count +
  //   '  computer score: ' + computerScore + '/' + count)
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  getResult(playerChoice, computerChoice);
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsBtns = document.querySelectorAll(".rpsButton");

  rpsBtns.forEach((button) => {
    button.onclick = () => onClickRPS(button.value);
  });
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  // Add a click listener to the end game button that runs the endGame() function on click
  const endGameBtn = document.getElementById("endGameButton");
  endGameBtn.onclick = () => endGame();
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  const resultElements = document.querySelectorAll(".result");

  // rpsBtns.forEach((button) => {
  // button.onclick = () => onClickRPS(button.value)

  resultElements.forEach((element) => {
    element.innerHTML = "";
  });

  playerScore = 0;
  computerScore = 0;
  count = 0;
  // console.log(resultElements)
  // console.log('ending the game')
}

playGame();
