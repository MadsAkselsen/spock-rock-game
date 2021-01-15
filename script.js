import { agentElements } from './agentElements.js';
const resultText = document.getElementById('resultText');
const resetEl = document.getElementById('reset');

const allGameIcons = document.querySelectorAll('.far');
const playerContainer = document.querySelectorAll('.player');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

const newGameState = {
  player: { choice: '', points: 0 },
  computer: { choice: '', points: 0 },
};

let state = {
  player: { choice: '', points: 0 },
  computer: { choice: '', points: 0 },
};

// Reset all 'selected' icons
function resetSelectedIcons() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
}

// set player and computer choice
function setChoice(agent, choice) {
  agentElements[agent].icons[choice].classList.add('selected');
  agentElements[agent].choiceEl.textContent = ` --- ${choice}'`;
  state[agent].choice = choice;
}

// Random compuer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) {
    setChoice('computer', 'rock');
  } else if (computerChoiceNumber <= 0.4) {
    setChoice('computer', 'paper');
  } else if (computerChoiceNumber <= 0.6) {
    setChoice('computer', 'scissors');
  } else if (computerChoiceNumber <= 0.8) {
    setChoice('computer', 'lizard');
  } else {
    setChoice('computer', 'spock');
  }
}

function playerChoice(e) {
  const playerChoiceIcon = e.target.id;

  //Add 'selected' styling & playerchoice
  switch (playerChoiceIcon) {
    case 'playerRock':
      setChoice('player', 'rock');
      break;
    case 'playerPaper':
      setChoice('player', 'paper');
      break;
    case 'playerScissors':
      setChoice('player', 'scissors');
      break;
    case 'playerLizard':
      setChoice('player', 'lizard');
      break;
    case 'playerSpock':
      setChoice('player', 'spock');
      break;
    default:
      break;
  }
}

// Call functions to process turn
function determineWinner() {
  let defeatedOptions = choices[state.player.choice].defeats;
  if (defeatedOptions.includes(state.computer.choice)) {
    state.player.points++;
    agentElements.player.playerScoreEl.textContent = state.player.points;
    resultText.textContent = 'You Won!';
  } else if (state.player.choice === state.computer.choice) {
    resultText.textContent = 'Draw!';
  } else {
    state.computer.points++;
    agentElements.computer.computerScoreEl.textContent = state.computer.points;
    resultText.textContent = 'Computer Won!';
  }
}

// Passing player selection value and styling our icons
function select(e) {
  // only pick an icon if the clicked element is an icon tag
  if (e.target.tagName === 'I') {
    resetSelectedIcons();
    computerRandomChoice();
    playerChoice(e);
    determineWinner();
  }
}

function reset() {
  resetSelectedIcons();
  state = newGameState;
  agentElements.player.playerScoreEl.textContent = state.player.points;
  agentElements.computer.computerScoreEl.textContent = state.computer.points;
  resultText.textContent = '';
}

player.addEventListener('click', select);
resetEl.addEventListener('click', reset);
