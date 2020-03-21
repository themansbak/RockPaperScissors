/*
Every time the player clicks a selection, the compute play will be called
*/
const buttons = document.querySelectorAll('.img-icon');
buttons.forEach(button => button.addEventListener('click', computePlay));

const reset = document.querySelector('.btn-menu');
reset.addEventListener('click', resetScore);

var player = 0;
var computer = 0;

function resetScore() {
  player = 0;
  computer = 0;
  updateScore();
}

function updateScore() {
  const scoreBoard = document.querySelector('#score');
  scoreBoard.textContent = 'Computer: ' + computer + ' || Player: ' + player;
}

function computerSelection() {
  switch(Math.floor(Math.random()*3)) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function computeWinner(pChoice, cChoice) {
  if (pChoice == cChoice) return 'tie';
  else if (pChoice == 'rock') {
    if (cChoice == 'paper') return 'comp';
    else if (cChoice == 'scissors') return 'player';
  }
  else if (pChoice == 'paper') {
    if (cChoice == 'scissors') return 'comp';
    else if (cChoice == 'rock') return 'player';
  }
  else if (pChoice == 'scissors') {
    if (cChoice == 'rock') return 'comp';
    else if (cChoice == 'paper') return 'player';
  }
}

function computePlay(e) {
  const compSelection = computerSelection();
  const playerSelection = e.target.id;
  console.log(compSelection, ' ', playerSelection);
  // alert(e.target.id);
  winner = computeWinner(playerSelection, compSelection);
  if (winner == 'player') player += 1;
  else computer += 1;
  updateScore();
}
