const buttons = document.querySelectorAll('.img-icon');
buttons.forEach(button => button.addEventListener('click', computePlay));

const reset = document.querySelector('.btn-menu');
reset.addEventListener('click', resetScore);

var player = 0;
var computer = 0;
var totalGames = 0;

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
function checkTotalWinner() {
  if (totalGames%5===0) {
    const result = document.querySelector('.p-result');
    if (player > computer) result.textContent = 'Player won best ouf of 5!';
    else result.textContent = 'Computer won: best out of 5!'
    resetScore();
  }
}
function updateWinner(winner) {
  const result = document.querySelector('.p-result');
  if (winner === 'tie') result.textContent = 'Result: tie!';
  else result.textContent = 'Result: ' + winner + ' won!';
}
function computePlay(e) {
  const compSelection = computerSelection();
  const playerSelection = e.target.id;
  winner = computeWinner(playerSelection, compSelection);
  updateWinner(winner);
  if (winner == 'player') player += 1;
  else computer += 1;
  totalGames += 1;
  updateScore();
  checkTotalWinner();
}
